# quantum_eng_polito_note

## Environment setup

If you are not familiar with github take a look [here](https://github.com/firstcontributions/first-contributions) to get familiar with it

1) Download [obsidian](https://obsidian.md/)
2) Make sure you have [git](https://git-scm.com/downloads) installed and properly configured
3) Fork this repository on your PC:

![immagine](https://github.com/gamberoillecito/QuantumEngPolitoNotes/assets/42670032/06e0afdd-6a1e-41db-9d23-faa5a4555350)

4) Clone your fork on your pc
6) Open Obsidian, select "Open folder as vault" and select the folder `content` inside the repo that you just downloaded.
If asked to do so select "trust the author" so that all the plugins will be automatically enabled
7) **If this is the first time you contribute to this project do the following**
   - Go inside `content` and replace the `.obsidian` folder with the one you can find
  inside the `SharedObsidianSettings` folder. This will make sure that you have the
  correct settings inside Obsidian.
   - Restart Obsidian
  
8) **Before editing the files, check on github if you are "behind" the original repository so that you can get any new updates**
8) Now you can start editing and creating new files in Obsidian
9) When you are done you can go to the Git Plugin inside Obsidian (in the top right corner)

![immagine](https://github.com/gamberoillecito/QuantumEngPolitoNotes/assets/42670032/7a94b746-f15e-4938-b461-221aa19058d3)

10) You can click the "+" button to stage (select) all the files
11) and then the Commit ("✓") button followed by the Push ("↑") button to commit them: this will save them in your fork
12) When you are ready to upload the changes to the official repository go to your fork's page in github and select "Contribute" and "Open pull request"

![immagine](https://github.com/gamberoillecito/QuantumEngPolitoNotes/assets/42670032/b4571d20-38be-472a-af7d-67c5812c7c9d)

13) Fill in the details you think might be useful and "Create Pull Request"

<!-- 2) Go to settings -> Community plugins and click "Turn on community plugins"

14) Click on "Browse" and install the following plugins and enable them
     - **Paste image rename** by "Reorx"
     - (Optional but suggested): **Latex Suite** by "artisticat1" (you can find my snippets in the `extra` folder in this repo)
     - (Optional): **Excalidraw** by "Zsolt Vicsian". If you want to use excalidraw replace the 
15) Go to settings -> Files & Links:
     - Set "New link format" to "shortest path when possible
     - Make sure use [[Wikilinks]] is not checked
     - Set "Default location for new attachments" to "In subfolder under current folder"
     - Set "Subfolder name" to "attachments" without -->

## Folder structure

Please use the following folder structure for the notes of a single course:

**IMPORTANT**: the chapters folder must have the same name as the chapter notes and can have a leading number followed by an underscore
to specify the ordering. See the example below

```
Subject (e.g. Cybersecurity)/
└── Main Page (Optional)/
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

## Tips


## Test website locally

If you want to see how your changes look on the website you need to have 
[nodejs](https://nodejs.org/en) installed. In your terminal `cd` into the 
repository and run `npx quartz build --serve` if there are no errors you will
see the url where you can access the local version of the website.

---

[License](https://creativecommons.org/licenses/by-nc-sa/4.0/)

<img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-sa.png" width="128"/>
