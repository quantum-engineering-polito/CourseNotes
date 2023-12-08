import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import explorerStyle from "./styles/explorer.scss"

// @ts-ignore
import script from "./scripts/explorer.inline"
import { ExplorerNode, FileNode, Options } from "./ExplorerNode"
import { QuartzPluginData } from "../plugins/vfile"

// Options interface defined in `ExplorerNode` to avoid circular dependency
const defaultOptions = {
  title: "Explorer",
  folderClickBehavior: "collapse",
  folderDefaultState: "collapsed",
  useSavedState: true,
  sortFn: (a, b) => {
    // Sort order: folders first, then files. Sort folders and files alphabetically
    if ((!a.file && !b.file) || (a.file && b.file)) {
      // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
      // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    if (a.file && !b.file) {
      return 1
    } else {
      return -1
    }
  },
  filterFn: (node) => {
    const omit = new Set(["attachments", "tags"])
      const passed = !omit.has(node.name.toLowerCase())
      return passed
  },
  // doesn't show folders which have a single child with the same* name
  // (* = the folder can have a starting number and underscore such as "01_note" which is
  // used for ordering but is not used in the comparison with the children names)
  mapFn: (node) => {
    const reg = `(?:\\d+_)`
    // Check if the node map is currently processing is a folder that has only one
    // which has it's same* name
    if (node.displayName === node.name && !node.file && node.children.length == 1) {
       // Now, we'd need to get the child node with the same name
    // Utilizzo della funzione test per verificare se str2 matcha con il pattern
     ;
       const child = node.children.find((child) => !!node.name.match(new RegExp(`${reg}?${child.name}`)));
      if (!child) return
      // Now, we can theoretically replace our current node (the folder) with the file we just found
      // This might require you to actually copy the child node, as you first need to delete the parent node's children ("remove" all other files in the folder and override the folder to be your file)
      node.children = [];

      // Override name if your child node (the file) ever has a different name from the parent folder
      // node.displayName = node.name
      // node.name = child.name;
      node.displayName = child.name
      // This sets the folder node to just be equal to the file you found
      node.file = child.file;
    }
  },
  order: ["filter", "sort", "map"],
} satisfies Options

export default ((userOpts?: Partial<Options>) => {
  // Parse config
  const opts: Options = { ...defaultOptions, ...userOpts }

  // memoized
  let fileTree: FileNode
  let jsonTree: string

  function constructFileTree(allFiles: QuartzPluginData[]) {
    if (!fileTree) {
      // Construct tree from allFiles
      fileTree = new FileNode("")
      allFiles.forEach((file) => fileTree.add(file, 1))

      /**
       * Keys of this object must match corresponding function name of `FileNode`,
       * while values must be the argument that will be passed to the function.
       *
       * e.g. entry for FileNode.sort: `sort: opts.sortFn` (value is sort function from options)
       */
      const functions = {
        map: opts.mapFn,
        sort: opts.sortFn,
        filter: opts.filterFn,
      }

      // Execute all functions (sort, filter, map) that were provided (if none were provided, only default "sort" is applied)
      if (opts.order) {
        // Order is important, use loop with index instead of order.map()
        for (let i = 0; i < opts.order.length; i++) {
          const functionName = opts.order[i]
          if (functions[functionName]) {
            // for every entry in order, call matching function in FileNode and pass matching argument
            // e.g. i = 0; functionName = "filter"
            // converted to: (if opts.filterFn) => fileTree.filter(opts.filterFn)

            // @ts-ignore
            // typescript cant statically check these dynamic references, so manually make sure reference is valid and ignore warning
            fileTree[functionName].call(fileTree, functions[functionName])
          }
        }
      }

      // Get all folders of tree. Initialize with collapsed state
      const folders = fileTree.getFolderPaths(opts.folderDefaultState === "collapsed")

      // Stringify to pass json tree as data attribute ([data-tree])
      jsonTree = JSON.stringify(folders)
    }
  }

  function Explorer({ allFiles, displayClass, fileData }: QuartzComponentProps) {
    constructFileTree(allFiles)
    return (
      <div class={`explorer ${displayClass ?? ""}`}>
        <button
          type="button"
          id="explorer"
          data-behavior={opts.folderClickBehavior}
          data-collapsed={opts.folderDefaultState}
          data-savestate={opts.useSavedState}
          data-tree={jsonTree}
        >
          <h1>{opts.title}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="5 8 14 8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="fold"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div id="explorer-content">
          <ul class="overflow" id="explorer-ul">
            <ExplorerNode node={fileTree} opts={opts} fileData={fileData} />
            <li id="explorer-end" />
          </ul>
        </div>
      </div>
    )
  }
  Explorer.css = explorerStyle
  Explorer.afterDOMLoaded = script
  return Explorer
}) satisfies QuartzComponentConstructor
