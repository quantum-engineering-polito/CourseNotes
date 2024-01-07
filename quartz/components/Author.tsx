import  style from "./styles/author.scss"
import { FullSlug, _stripSlashes, joinSegments, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { URL } from "url"
import { hostname } from "os"
import { range } from "d3"
import { JSXInternal } from "preact/src/jsx"

function createAuthorElement(author: string, link: string) {
  author = author.trim()
  link = link.trim()
  // if the link is present and not empty
  if (link.replaceAll(" ", "") != "") {
    const authorUrl = new URL(link)

    var image_element = null
    if (authorUrl.hostname == "github.com") {
      image_element = <img src={authorUrl + ".png"} alt=""/>
    }

    return(
      <div class="authorWLink">
        <a href={link} >
          {author}
        </a>
      {image_element}
      </div>
      )
    }
    else {
      return (
        <code class="name">{author}</code>
        )
      }
    }
    
function cleanTooManyAuthors(authorsElements:JSXInternal.Element[], maxShown: number= 2) {
  if (authorsElements.length <= maxShown) {
    return authorsElements
  }

  var shownElements = authorsElements.slice(0, maxShown)
  var hiddenAuthors = (
    <div class="hiddenAuthors"> <div class="hiddenAuthorsContainer">{authorsElements.slice(maxShown, authorsElements.length)}</div></div>
  )
  return [...shownElements, hiddenAuthors]
}
    export default (() => {
      function Author({fileData}: QuartzComponentProps) {
        const authors = fileData.frontmatter?.author?.split(",")
        const authorLinks = fileData.frontmatter?.authorlink?.split(",")
        var authorsElements = [] 

        if (authors) {
          var message = "This note was written by"
          for (var i of range(authors.length)) {
            var link = ""
            if (i < authorLinks?.length) {
              link = authorLinks[i]
            }
            authorsElements.push(createAuthorElement(authors[i], link))
          }
          return (
            <div class="author">
            <p>{message} </p>
            {cleanTooManyAuthors(authorsElements)}
            </div>
            )
          }
          else {
            return (<p></p>)
          }
        }
        
        Author.css = style
        return Author
      }
      
      ) satisfies QuartzComponentConstructor
      