import { LogLevel } from "@vscode-logging/logger";
import * as vscode from "vscode";
import { DEFAULT_LOG_LEVEL } from ".";


export const LOGGING_LEVEL_CONFIG_PROP = "ecore-tree-editor.log.loggingLevel";
export const SOURCE_TRACKING_CONFIG_PROP = "ecore-tree-editor.log.sourceLocationTracking";


export function getLoggingLevelSetting(): LogLevel {
  const level = vscode.workspace.getConfiguration().get<string>(LOGGING_LEVEL_CONFIG_PROP);
  
  if (isValidLogLevel(level)) {
    return level;
  }
  
  return DEFAULT_LOG_LEVEL;
}

function isValidLogLevel(level: unknown): level is LogLevel {
  const VALID_LOG_LEVELS: LogLevel[] = ["off" , "fatal" , "error" , "warn" , "info" , "debug" , "trace"];
  return typeof level === "string" && VALID_LOG_LEVELS.includes(level as LogLevel);
}

export function getSourceLocationTrackingSetting(): boolean {
  const enabled = vscode.workspace.getConfiguration().get<boolean>(SOURCE_TRACKING_CONFIG_PROP);
  return enabled ?? false;
}
