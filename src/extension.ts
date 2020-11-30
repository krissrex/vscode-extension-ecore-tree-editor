import * as vscode from "vscode";
import { CustomEditorProvider } from "./CustomTreeEditorProvider";
import { getLogger, initializeLogger } from "./log";
import { listenToLogSettingsChanges } from "./config/settings-change-listener";

export function activate(context: vscode.ExtensionContext) {
  initializeLogger(context);
  listenToLogSettingsChanges(context);
  const log = getLogger();

  log.info("Extension activated.");
  log.info("Extension mode: %s", context.extensionMode === vscode.ExtensionMode.Production ? "production" : "development");
  log.debug("Logs are written to %s", context.logUri.fsPath);

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "ecore-tree-editor.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hello World from ecore-tree-editor!"
      );
    }
  );
  context.subscriptions.push(disposable);

  context.subscriptions.push(
    vscode.window.registerCustomEditorProvider(
      "ecore-tree-editor.treeEditor",
      new CustomEditorProvider(context),
      { webviewOptions: {}, supportsMultipleEditorsPerDocument: false }
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {
  getLogger().info("Extension deactivated.");
}



