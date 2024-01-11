# Script Extension JS

## Description
My Extension is a Visual Studio Code extension that provides functionality to open a webview panel and display custom HTML content.

## Features
- Open a webview panel to display custom HTML content.
- Ability to retain the webview panel's context when hidden.
- Execute commands to open the webview panel.

## Installation
1. Launch Visual Studio Code.
2. Go to the Extensions view (Ctrl+Shift+X).
3. Search for "script" and click Install.
4. Reload Visual Studio Code to activate the extension.

## Usage
1. Open the Command Palette (Ctrl+Shift+P).
2. A new webview panel titled "Script Extension" will open, displaying the custom HTML content.

## Commands
- `extension.script`: Opens the webview panel.
- `extension.scriptForm`: Executes the `extension.scriptjs` command.

## Folder Structure
- `extension.ts`: Contains the main code logic for the extension.
- `webview/index.html`: HTML File For running the script.
