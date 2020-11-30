import * as vscode from "vscode";
import { getExtensionLogger, IVSCodeExtLogger } from "@vscode-logging/logger";
import { EXTENSION_ID, EXTENSION_NAME, LOG_LEVEL } from "./config";

/** Root singleton for all loggers. */
let logger: IVSCodeExtLogger;

export function initializeLogger(context: vscode.ExtensionContext): void {
  if (logger !== undefined) {
    logger.warn("Attempted to initialize the logger twice. Aborted.");
    return;
  }

  const logOutputChannel = vscode.window.createOutputChannel(vscode.extensions.getExtension(EXTENSION_ID)?.packageJSON?.displayName ?? EXTENSION_NAME);
  context.subscriptions.push(logOutputChannel);

  const isNotProduction = context.extensionMode !== vscode.ExtensionMode.Production;

  logger = getExtensionLogger({
    extName: EXTENSION_NAME,
    level: LOG_LEVEL,
    logPath: context.logUri.fsPath,
    logOutputChannel: logOutputChannel,
    sourceLocationTracking: isNotProduction,
    logConsole: false
  });
}

/**
 * Use this logger or create a named child logger with `const log = getLogger().getChildLogger({ label: "MyClass" });`
 * 
 * `initializeLogger` must be called first in the extension's `activate`.
 */
export function getLogger(): IVSCodeExtLogger {
  return logger;
}
