# Creating a note

After creating a new note you can press `CTRL+SHIFT+I` to automatically insert the metadata about the author (you) and an optional link to the following note. 

Select *Empty chapter template* or create one with your name and link if you want to reuse it.

If `nextnote` is present the website will create a dedicated link like in the picture below.

![[next note image.png|200]]

The author will be credited at the top of the note, if you also add a link in the `authorlink` field, this will be shown as well like in the picture below.

![[author example.png|400]]

Multiple authors and their respective links can be added by separating them with commas e.g. 

```yaml
author: Author1, Author2, Author3
authorlink: link1,,link3
```
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

Internal links in obsidian have the following format `[[file to link]]` and are rendered as follows:

[[index|file to link]]. 

You can change the text shown by adding a pipe `|` followed by the text you want. For example [[Clean Room Technology]] `[[Clean Room Technology]]` can be show as [[Clean Room Technology|clean room]] `[[Clean Room Technology|clean room]]`.

You can have the following types of links:

- **Link to another note**: [[Doping]] written as `[[Doping]]`
- **Link to a header of this note**: [[#Text decoration]] written as `[[#Text decoration]]`
- **Link to a section of this note**: [[#^ed057f]] (the tag is added automatically by obsidian, you just need to write `[[^]]` and select the correct block from the popup menu)
- **Link to a section of another note**: you can combine the previous links as follows [[Wet and dry etching#^0fa6e1]] 

If you want to add a link to an external website use this format `[random link](url)`:

[random link](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

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

If you have installed the [Advanced Tables](https://github.com/tgrosinger/advanced-tables-obsidian) plugin you just need to type a pipe `|` and hit `TAB`, the plugin will automatically create new rows and columns as if you were in Excel (press `TAB` to move to the next column and `ENTER` to move to the next row).

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

>[!warning] By default the *Latex suite* plugin "shortcuts" are disabled. Go into the plugin settings and enable it: ![[enable latex suite.png]]

Latex blocks can be inserted inline by placing the content between two `$` signs like this: `$\int_{-\infty}^{+\infty} f(x) \, dx$` will be rendered as: $\int_{-\infty}^{+\infty} f(x) \, dx$

If you want to place the latex formula in a separate block you need two `$` signs like this: 

```latex
$$
\int_{-\infty}^{+\infty} f(x) \, dx 
$$
```

will be rendered as:
$$
\int_{-\infty}^{+\infty} f(x) \, dx 
$$


If you use the [Latex Suite](https://github.com/artisticat1/obsidian-latex-suite)"plugin you can find all the shortcuts in the plugin settings. For example you can type `@a` and it will be converted to `\aplha`, or type `Rvec` to get `\vec{R}`.

Check the [plugin documentation](https://github.com/artisticat1/obsidian-latex-suite) for more information.

## Examples

>[!warning]
>The plugin automatically replaces some words, if you don't like this press `CTRL+Z` to undo the replacement or delete the appropriate line in the plugin settings

- **Inline Latex environment**: type `mk` anywhere in the file
- **Latex environment**: type `dm` anywhere in the file
- **Greek letters**: type `@` followed by the corresponding latin letter, e.g. `@a` will become $\alpha$
- **Infinity**: type `ooo` to get $\infty$
- **Fractions**: typing a slash `/` after something will automatically create a fraction like $\frac{a}{b}$ 
- **Exponentials and similar**: 
	- type `sr` for `^2`
	- `sq` for `\sqrt{}`
	- `cb` for `^3` 
	- `ee` for `e^{}`
- **Vectors and stuff on top of letters**: type the letter you want to vectorize followed by `vec`, `bar`, `hat`, `tilde`, e.g. `Gvec` to get `\vec{G}` $\vec{G}$, `Gtilde` to get $\tilde{G}$, etc.
- **Number subscript**: if you write a number after a letter or symbol it will automatically become a subscript, e.g. `a0` will become $a_0$
- **Integrals**: type `dint` and you will get $\int_{-\infty}^{+\infty}  \, dx$ with the $-\infty$ selected, you can type what you want and then press `TAB` to move to the other fields. You can also type `int` to get $\int  \, dx$
- **Summations**: same as the integrals with `dsum` and `sum`
- **Aligned equations**: to align equations you need to be in the `align` environment. This can be done by typing `align`, which will create `\begin{align} \end{align}` or by selecting pre-existing text with the mouse and pressing `SHIFT+A`, which will surround the text with the correct environment. Inside `align` the symbol `&` will specify what has to be aligned with what. `&&` can be used to align text at the end of the line. Use `\\` to go to a new line.

```latex
\begin{align}
f(x,y,z) &= g(x,y,z) \\
&= h(x,y,z) &&= \alpha \\
& && = \beta
\end{align}
```

$$
\begin{align}
f(x,y,z) &= g(x,y,z) \\
&= h(x,y,z) &&= \alpha \\
& && = \beta
\end{align}
$$


- **Systems of equations**: can be created inside the `cases` environment, typing `cases` will create `\begin{cases} \end{cases}`. Similarly to the previous case `&&` can be used to align stuff at the end of the line.

```latex
\begin{cases}
0 && x \leq 0 \\
1 && x > 0
\end{cases}
```

$$
\begin{cases}
0 && x \leq 0 \\
1 && x > 0
\end{cases}
$$

- **Boxed equations**: can be created with `\boxed{}`
```latex
\boxed{y = ax + b}
```

$$
\boxed{y = ax + b}
$$
- **Equation number**: the number of the equation at the end of the line can be created with `\tag{}` (the plugin will automatically expand `tag`) :
```latex
y = ax + b \tag{3}
```

$$
y = ax + b \tag{3}
$$



>[!tip] Command palette
>You can open the command palette by pressing `CTRL+SHIFT+P` or by selecting the `>_` icon in the left bar

^3969f5

# Excalidraw

Excalidraw drawings can be created using the [Excalidraw plugin](https://github.com/zsviczian/obsidian-excalidraw-plugin) and should be placed in the `attachments/excalidraw` folder of the current file.

To create a drawing right click on the folder and select "Create new drawing". 

When saving the drawing a `.svg` file with the same name will be created automatically. This is the file that should be [[#Transclusion|transcluded]] in the note.

> [!warning] Don't transclude the excalidraw drawing itself, only the `svg`.
>  You can transclude the last edited drawing by pressing `CTRL+SHIFT+E` or selecting "*Excalidraw: Embed the most recently edited drawing*" in the [[#^3969f5|Command Palette]]

>[!tip]
>If you want to edit a drawing, click on it and press `CTRL+SHIFT+O` or select "*Excalidraw: Open Excalidraw drawing*" in the [[#^3969f5|Command Palette]]

## Latex in a drawing

To add Latex to a drawing press `CTRL+SHIFT+L` or search for "*Excalidraw: Insert LaTeX formula*" in the [[#^3969f5|Command Palette]]

# Callouts

You can add callouts like this

```
>[!tip] Tip callout
>text
```

>[!tip] Tip callout
>text

## Foldable callouts

You can make a callout foldable by adding a plus (+) or a minus (-) directly after the type identifier.

A plus sign expands the callout by default, and a minus sign collapses it instead.

```
>[!tip]- Collapsed callout
> text
```

>[!tip]- Collapsed callout
> text

## Available types

>[!info]- Available callouts:
>
>> [!note]-
>> ```md
>> > [!note]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!abstract]-
>> ```md
>> > [!abstract]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!info]-
>> ```md
>> > [!info]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!todo]-
>> ```md
>> > [!todo]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!tip]-
>> ```md
>> > [!tip]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!success]-
>> ```md
>> > [!success]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!question]-
>> ```md
>> > [!question]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!warning]-
>>  ```md
>> > [!warning]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!failure]-
>> ```md
>> > [!failure]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!danger]-
>> ```md
>> > [!danger]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!bug]-
>> ```md
>> > [!bug]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!example]-
>> ```md
>> > [!example]
>> > Lorem ipsum dolor sit amet
>> ```
>
>> [!quote]-
>> ```md
>> > [!quote]
>> > Lorem ipsum dolor sit amet
>> ```
>
