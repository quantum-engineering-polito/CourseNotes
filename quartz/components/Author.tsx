import  style from "./styles/author.scss"
import { FullSlug, _stripSlashes, joinSegments, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { URL } from "url"
import { hostname } from "os"

export default (() => {
  function Author({fileData}: QuartzComponentProps) {
    const author = fileData.frontmatter?.author
    const authorLink = fileData.frontmatter?.authorlink

    if (author) {
      var message = "This note was written by"
      if (authorLink) {
        // const authorUrl = new URL(authorLink)
        // var f = null
        // if (authorUrl.hostname == "github.com") {
        //   f = <img src={authorUrl + ".png"} alt="profile image"/>
        // }
        return(
          <div class="author">
            <p>{message} </p>
            <a href={authorLink}>
              {author}
              {/* {f} */}
            </a>
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
