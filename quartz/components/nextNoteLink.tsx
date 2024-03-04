import { FullSlug, stripSlashes, joinSegments, pathToRoot, slugifyFilePath, TransformOptions, transformInternalLink, transformLink, resolveRelative, simplifySlug, FilePath } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"



export default (() => {
  function NextNoteLink({fileData, allFiles}: QuartzComponentProps, ) {
    const opts: TransformOptions = {
      strategy: "shortest",
      allSlugs: allFiles.map((fp) => fp.slug as FullSlug)
    }
    let nextNote = fileData.frontmatter?.nextnote
    if (nextNote) {
      nextNote = nextNote.replace(/['"\[\]]+/g, '')
      let href = transformLink(fileData.slug!, nextNote, opts)
      return (
        <div class="backlinks">
          <h3 style="margin-bottom:1rem">
            Read Next 
          </h3>
          <a  href={href} class="internal">{nextNote.frontmatter?.title ?? nextNote}</a>
        </div>
        )
      }
      else {
        return null;
      }
    }
    
    return NextNoteLink
  }) satisfies QuartzComponentConstructor
  