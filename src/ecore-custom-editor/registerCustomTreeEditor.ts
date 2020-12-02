import * as vscode from "vscode";
import { CustomTreeEditorProvider } from "./CustomTreeEditorProvider";


export function registerCustomTreeEditor(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.window.registerCustomEditorProvider(
      "ecore-tree-editor.treeEditor",
      CustomTreeEditorProvider.create(context),
      { webviewOptions: {}, supportsMultipleEditorsPerDocument: false }
    )
  );
}