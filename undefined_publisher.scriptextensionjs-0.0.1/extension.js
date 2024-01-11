const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

function activate(context) {
    // Register the command
    context.subscriptions.push(
        vscode.commands.registerCommand('extension.scriptjs', () => {
            // Create a new webview panel
            const panel = vscode.window.createWebviewPanel(
                'ScriptExtension', // Unique ID
                'Script Extension', // Title
                vscode.ViewColumn.One, // Column to show the panel in
                {
                    enableScripts: true,
                    retainContextWhenHidden: true,
                }
            );

            const htmlPath = vscode.Uri.file(
                path.join(context.extensionPath, 'webview', 'index.html')
            );

            panel.webview.html = fs.readFileSync(htmlPath.fsPath, 'utf8');
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('extension.scriptjsForm', () => {
            vscode.commands.executeCommand('extension.scriptjs');
        })
    );
}

module.exports = {
    activate
};