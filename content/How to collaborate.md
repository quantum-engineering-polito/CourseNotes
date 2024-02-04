---
draft: true
---
# Read this before editing the files

****
> [!important] 
> The chapter folders must have the same name as the chapter notes and can have a leading number followed by an underscore to specify the ordering. See the example below or check how the pre-existing file are structured.

```
Subject (e.g. Cybersecurity)/
    ├── Chapter 1 (e.g. 01_Introduction)/
    │   ├── Introduction.md
    │   └── attachments/
    │       ├── image1_for_intro.jpg
    │       ├── image2_for_intro.jpg
    │       └── excalidraw/
    │           ├── drawing1_for_intro
    │           └── drawing2_for_intro
    ├── Chapter 2 (e.g. 02_Cryptography)/
    │   ├── Cryptography.md
    │   └── attachments/
    │       ├── image1_for_crypto.png
    │       └── excalidraw/
    │           └── drawing1_for_crypto
    └── ...
```

> [!important] 
> Please always place an ==empty line== between different elements (such as headers, text, formulas, lists, etc).

Right way:

```md
# Header

text

$$
y = x
$$
```

Wrong way:

```md
# Header
text
$$
y = x
$$
```


>[!note] Check out [[Obsidian Examples]]
>This file contains most of the things you need to know to use Obsidian properly.