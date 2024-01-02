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
        const authorUrl = new URL(authorLink)
        var image_element = null
        
        if (authorUrl.hostname == "github.com") {
          image_element = <img src={authorUrl + ".png"} alt=""/>
        }
        return(
          <div class="author">
            <p>{message} </p>
            <a href={authorLink}>
              {author}
              {image_element}
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
