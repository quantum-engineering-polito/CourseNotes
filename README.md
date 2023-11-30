# quantum_eng_polito_notes
 
https://creativecommons.org/licenses/by-sa/4.0/

## Environment setup

1) Download [obsidian](https://obsidian.md/)
2) Make sure you have git installed and properly configured
3) Clone this repository on your PC
4) Select "Open folder as vault" and select the folder `content` inside the repo that you just downloaded.
If asked to do so select "trust the author" so that all the plugins will be automatically enabled
5) **If this is the first time you contribute to this project do the following**
  1) Go inside `content` and replace the `.obsidian` folder with the one you can find
  inside the `SharedObsidianSettings` folder. This will make sure that you have the
  correct settings inside Obsidian.

<!-- 2) Go to settings -> Community plugins and click "Turn on community plugins"
3) Click on "Browse" and install the following plugins and enable them
    1) **Paste image rename** by "Reorx"
    2) (Optional but suggested): **Latex Suite** by "artisticat1" (you can find my snippets in the `extra` folder in this repo)
    3) (Optional): **Excalidraw** by "Zsolt Vicsian". If you want to use excalidraw replace the 
4) Go to settings -> Files & Links:
    1) Set "New link format" to "shortest path when possible
    2) Make sure use [[Wikilinks]] is not checked
    3) Set "Default location for new attachments" to "In subfolder under current folder"
    4) Set "Subfolder name" to "attachments" without -->

## Folder structure

Please use the following folder structure for the notes of a single course:

**IMPORTANT**: the chapters folder must have the same name as the chapter notes and can have a leading number followed by an underscore
to specify the ordering. See the example below

```
Subject (e.g. **Cybersecurity**)/
├── Main Page (Optional)
└── Chapters/
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

## Test website locally

If you want to see how your changes look on the website you need to have 
[nodejs](https://nodejs.org/en) installed. In your terminal `cd` into the 
repository and run `npx quartz build --serve` if there are no errors you will
see the url where you can access the local version of the website.

## Contributors
