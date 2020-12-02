import * as vscode from "vscode";
import { getLogger } from "../log";

/**
 * A TreeDocument represents a specific tree which can be mapped to a model.
 *
 */
export class TreeDocument implements vscode.CustomDocument {
  // You can draw inspiration from vscode.TextDocument for what properties and methods are needed.
  private readonly log = getLogger().getChildLogger({label: "TreeDocument"});

  constructor(
    public uri: vscode.Uri
  ) {
    this.log.debug("Created tree document", {uri: this.uri});
  }
  dispose(): void {
    //TODO
    getLogger().debug("Disposing document", {uri: this.uri});
  }
}
