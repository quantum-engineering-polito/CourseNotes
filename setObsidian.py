import os
import shutil

def copy_obsidian_settings():
    # Source folder (.obsidian)
    source_folder = "SharedObsidianSettings/.obsidian"

    # Destination folder (content folder)
    destination_folder = os.path.join(os.getcwd(), "content/.obsidian")

    # Ensure the source folder exists
    if not os.path.exists(source_folder):
        print(f"Error: Source folder '{source_folder}' not found.")
        return

    try:
        # Copy the entire .obsidian folder to content folder
        shutil.copytree(source_folder, destination_folder, dirs_exist_ok=True)
        print("Settings copied successfully.")
    except Exception as e:
        print(f"Error: {e}")

# Run the function to copy Obsidian settings
copy_obsidian_settings()
