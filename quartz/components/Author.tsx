import  style from "./styles/author.scss"
import { FullSlug, _stripSlashes, joinSegments, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function Author({fileData}: QuartzComponentProps) {
    const author = fileData.frontmatter?.author
    const authorLink = fileData.frontmatter?.author_link
    if (author) {
      console.log(author)
      var message = "This note was written by"
      if (authorLink) {
        return(
          <div class="author">
            <p>{message} </p> <a href={authorLink}>{author}</a>
          </div>
        )
      }
      else {
        return (
          <div class="author">
            <p>{message} </p> <code class="name">{author}</code>
          </div>
        )
      }
    }
    else {
      return (<p></p>)
    }
     }

  Author.css = style
  return Author
}

) satisfies QuartzComponentConstructor
