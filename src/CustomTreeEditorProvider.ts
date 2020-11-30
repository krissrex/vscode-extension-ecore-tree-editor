import * as vscode from "vscode";

type TreeDocumentChangeEvent = vscode.Event<vscode.CustomDocumentEditEvent<TreeDocument>> | vscode.Event<vscode.CustomDocumentContentChangeEvent<TreeDocument>>;

/**
 * A TreeDocument represents a specific tree which can be mapped to a model.
 * 
 */
class TreeDocument implements vscode.CustomDocument {
  // You can draw inspiration from vscode.TextDocument for what properties and methods are needed.
  uri: vscode.Uri;

  constructor() {
    this.uri = vscode.Uri.parse("", true); //TODO
  }
  dispose(): void {
    //TODO
    console.log("Disposing document", this.uri);
  }
  
}


export class CustomEditorProvider
  implements vscode.CustomEditorProvider<TreeDocument> {

/*
  See [pawDrawEditor](https://github.com/microsoft/vscode-extension-samples/blob/master/custom-editor-sample/src/pawDrawEditor.ts#L194) 
  for a reference implementation.
 */


    constructor(
        private readonly context: vscode.ExtensionContext
      ){
    };

  onDidChangeCustomDocument: TreeDocumentChangeEvent = (listener: ((event: vscode.CustomDocumentEditEvent<TreeDocument>) => any), listenerThis?: any, disposables?: vscode.Disposable[]) => {
    return new vscode.Disposable(() => {});
  };

  saveCustomDocument(document: TreeDocument, cancellation: vscode.CancellationToken): Thenable<void> {
    throw new Error("Method not implemented.");
  }
  saveCustomDocumentAs(document: TreeDocument, destination: vscode.Uri, cancellation: vscode.CancellationToken): Thenable<void> {
    throw new Error("Method not implemented.");
  }
  revertCustomDocument(document: TreeDocument, cancellation: vscode.CancellationToken): Thenable<void> {
    throw new Error("Method not implemented.");
  }
  backupCustomDocument(document: TreeDocument, context: vscode.CustomDocumentBackupContext, cancellation: vscode.CancellationToken): Thenable<vscode.CustomDocumentBackup> {
    throw new Error("Method not implemented.");
  }
  openCustomDocument(uri: vscode.Uri, openContext: vscode.CustomDocumentOpenContext, token: vscode.CancellationToken): TreeDocument | Thenable<TreeDocument> {
    throw new Error("Method not implemented.");
  }
  resolveCustomEditor(document: TreeDocument, webviewPanel: vscode.WebviewPanel, token: vscode.CancellationToken): void | Thenable<void> {
    throw new Error("Method not implemented.");
  }
 
}

