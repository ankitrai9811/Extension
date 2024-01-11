"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
function activate(context) {
    // Register the command
    context.subscriptions.push(vscode.commands.registerCommand('extension.script', () => {
        // Create a new webview panel
        const panel = vscode.window.createWebviewPanel('ScriptExtension', // Unique ID
        'Script Extension', // Title
        vscode.ViewColumn.One, // Column to show the panel in
        {
            enableScripts: true,
            retainContextWhenHidden: true,
        });
        const htmlPath = vscode.Uri.file(path.join(context.extensionPath, 'webview', 'index.html'));
        panel.webview.html = fs.readFileSync(htmlPath.fsPath, 'utf8');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.scriptForm', () => {
        vscode.commands.executeCommand('extension.script');
    }));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map