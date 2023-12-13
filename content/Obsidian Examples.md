
# Headers

Use hashes to identify header ^ed057f

`# Header 1` for:
# Header 1

`## Header 2` for:
## Header 2 

`### Header 3` for:
### Header 3 

and so on.

# Text decoration

Use `**bold text**` for **bold text**, `*italic text*` for *italic text* and `==highlighted text==` for ==highlighted text==.

# Lists

Unnumbered lists can be created like this:

```
1) Item 1
2) Item 2
3) Item 3
```

1) Item 1
2) Item 2
3) Item 3

While numbered lists like this:

```
- Item 1
- Item 2
- Item 3
```

- Item 1
- Item 2
- Item 3

# Links

Links in obsidian have the following format `[[random link]]` and are rendered as follows:

[random link](https://www.youtube.com/watch?v=dQw4w9WgXcQ). 

You can change the text shown by adding a pipe `|` followed by the text you want. For example [[Clean Room Technology]] `[[Clean Room Technology]]` can be show as [[Clean Room Technology|clean room]] `[[Clean Room Technology|clean room]]`.

You can have the following types of links:

- **Link to another note**: [[Doping]] written as `[[Doping]]`
- **Link to a header of this note**: [[#Text decoration]] written as `[[#Text decoration]]`
- **Link to a section of this note**: [[#^ed057f]] (the tag is added automatically by obsidian, you just need to write `[[^]]` and select the correct block from the popup menu)
- **Link to a section of another note**: you can combine the previous links as follows [[Wet and dry etching#^0fa6e1]] 
# Transclusion

You can embed an entire document of part of it in another note by adding an exclamation mark `!` before the correct link, for example `![[#Text decoration]]` will appear as:

![[#Text decoration]]

or `![[Doping#BESOI]]`

![[Doping#BESOI]]

# Images

Images in a note have the following format `![[image.png]]` (you are just transcluding the image file): 

![[channelling.png]]

if you want to resize the image you can add `|width` after the image name. For example `![[image.png|400]]` to specify a width of 400:

![[channelling.png|200]]

# Tables

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
# $\LaTeX$

Latex blocks can be inserted inline by placing the content between two `$` signs like this: `$\int_{-\infty}^{+\infty} f(x) \, dx$` will be rendered as: $\int_{-\infty}^{+\infty} f(x) \, dx$

If you want to place the latex formula in a separate block you need two `$` signs like this: 

```
$$
\int_{-\infty}^{+\infty} f(x) \, dx 
$$
```

will be rendered as:
$$
\int_{-\infty}^{+\infty} f(x) \, dx 
$$


If you use the "Latex Suite" plugin you can find all the shortcuts in the plugin settings. For example you can type `@a` and it will be converted to `\aplha`, or type `Rvec` to get `\vec{R}`.

Check the[plugin documentation](https://github.com/artisticat1/obsidian-latex-suite) for more information.

# Excalidraw

Excalidraw drawings can be created using the "Excalidraw plugin" and should be placed in the `attachments/excalidraw` folder of the current file.

To create a drawing right click on the folder and select "Create new drawing". 

When saving the drawing a `.svg` file with the same name will be created automatically. This is the file that should be [[#Transclusion|transcluded]] in the note.

> [!warning] Don't transclude the excalidraw drawing itself, only the `svg`

To add Latex to a drawing press `CTRL+SHIFT+L` or search for "Excalidraw: Insert LaTeX formula" in the **Command palette**.

>[!tip] Command palette
>You can open the command palette by pressing `CTRL+SHIFT+P` or by selecting the `>_` icon in the left bar

# Callouts

You can add callouts like the command palette one like this
```
>[!tip] Tip callout
>text
```

>[!tip] Tip callout
>text

## Foldable callouts

You can make a callout foldable by adding a plus (+) or a minus (-) directly after the type identifier.

A plus sign expands the callout by default, and a minus sign collapses it instead.

>[!tip]- Collapsed callout
> text

The available types are:

> [!note]-
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```
