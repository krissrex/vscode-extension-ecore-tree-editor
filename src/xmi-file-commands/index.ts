import * as vscode from "vscode";
import { getLogger } from "../log";
import { createClient, TreeClient } from "../tree-language-server/Client";

export function registerXmiCommands(context: vscode.ExtensionContext) {
  const logger = getLogger().getChildLogger({ label: "registerXmiCommands" });
  const client = createClient();

  context.subscriptions.push(
    vscode.commands.registerCommand("ecore-tree-editor.xmi-newfile", () => {
      vscode.window
        .showInputBox({
          prompt: "Filename (e.g. MyModel.ecore)",
          validateInput(value) {
            if (!value) {
              return "The filename must not be empty.";
            }
            return undefined;
          },
        })
        .then((name) => {
          if (!name) {
            vscode.window.showErrorMessage(
              "Ecore: No filename given for the new file."
            );
            return;
          }
          client.createNewModel(name);
        });
    })
  );

  const workspace = vscode.workspace.workspaceFolders?.[0]?.uri;
  if (workspace && workspace.scheme === "file") {
    logger.debug("Setting workspace to %s", workspace);
    // TODO: what if workspace starts with ftp:// or something? We only want file://.
    client.changeWorkspace(workspace.toString()).then(() => {
      if (context.extensionMode !== vscode.ExtensionMode.Production) {
        vscode.window.showInformationMessage("Set EMF ModelServer workspace to " + workspace.toString());
      }
    });
  } else {
    logger.warn("Unable to set workspace to %s", workspace);
  }
}
