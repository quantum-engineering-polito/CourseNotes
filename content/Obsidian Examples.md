## Headers

Use hashes to identify header ^ed057f

`# Header 1` for:
# Header 1

`## Header 2` for:
## Header 2 

`### Header 3` for:
### Header 3 

and so on.

## Text decoration

Use `**bold text**` for **bold text**, `*italic text*` for *italic text* and `==highlighted text==` for ==highlighted text==.

## Links

Links in obsidian have the following format `[[random link]]` and are rendered as follows:

[random link](https://www.youtube.com/watch?v=dQw4w9WgXcQ). 

You can change the text shown by adding a pipe `|` followed by the text you want. For example [[Clean Room Technology]] `[[Clean Room Technology]]` can be show as [[Clean Room Technology|clean room]] `[[Clean Room Technology|clean room]]`.

You can have the following types of links:

- Link to another note: [[Doping]] written as `[[Doping]]`
- Link to a header of this note: [[#Text decoration]] written as `[[#Text decoration]]`
- Link to a section of this note: [[#^ed057f]] (the tag is added automatically by obsidian, you just need to write `[[^]]` and select the correct block from the popup menu)
- Link to a section of another note: you can combine the previous links as follows [[Wet and dry etching#^0fa6e1]] 
## Transclusion

You can embed an entire document of part of it in another note by adding an exclamation mark `!` before the correct link, for example `![[#Text decoration]]` will appear as:

![[#Text decoration]]

or `![[Doping#BESOI]]`

![[Doping#BESOI]]

## Images

Images in a note have the following format `![[image.png]]` (you are just transcluding the image file): 

![[channelling.png]]

if you want to resize the image you can add `|width` after the image name. For example `![[image.png|400]]` to specify a width of 400:

![[channelling.png|200]]

## Tables

If you have installed the "Advanced Tables" plugin you just need to type a pipe `|` and hit `TAB`, the plugin will automatically create new rows and columns as if you were in Excel (press `TAB` to move to the next column and `ENTER` to move to the next row).

Example:

```
| Column 1 | Column 2 |
| -------- | -------- |
| Cell 1   | Cell 2   | 
```

| Column 1 | Column 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |

You can also use the plugin's toolbar on the right to edit the table:

![[advanced tables toolbar.png|300]]
## $\LaTeX$

## Excalidraw

