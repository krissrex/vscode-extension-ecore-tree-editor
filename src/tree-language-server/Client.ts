import * as vscode from "vscode";
import { IChildLogger, IVSCodeExtLogger } from "@vscode-logging/logger";
import Axios from "axios";
import { getLogger } from "../log";

/**
 * For testing and development, not real use.
 */
export class TreeClient {
  private readonly logger: IChildLogger;

  constructor(public readonly baseUrl: string) {
    this.logger = getLogger().getChildLogger({ label: "TreeClient" });
  }

  createNewModel(filename: string): Thenable<void> {
    var data = JSON.stringify({
      data:
        '{"eClass":"http://www.eclipse.org/emf/2002/Ecore#//EPackage","name":"MyPackage","nsURI":"platform:/TreeLanguageServerProtocol/src/' +
        filename +
        '","nsPrefix":"no.krex.test.ecore"}',
    }); // This is emf as json. Can also be xmi if the format is also set to "xmi".

    return Axios.post(this.baseUrl + "models", data, {
      params: {
        modeluri: filename,
        format: "json",
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        this.logger.trace("Created new model", {
          response: response.data,
        });
      })
      .catch((error) => {
        this.logger.error("Failed to create new model", {
          modelName: filename,
          error,
        });
      });
  }

  /**
   * @param filesystemUri a uri like `file:/C:/Users/krissrex/eclipse-workspace/TreeLanguageServerProtocol/`
   */
  changeWorkspace(filesystemUri: string): Thenable<void> {
    const data = {
      workspaceRoot: filesystemUri,
      uiSchemaFolder: ".ui-schemas",
    };
    return Axios.put(this.baseUrl + "server/configure", data);
  }
}

export function createClient() {
  return new TreeClient("http://localhost:48212/api/v1/");
}
