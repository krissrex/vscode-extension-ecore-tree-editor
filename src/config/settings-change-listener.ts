import * as vscode from "vscode";
import { getLogger } from "../log";
import { getLoggingLevelSetting, getSourceLocationTrackingSetting, LOGGING_LEVEL_CONFIG_PROP, SOURCE_TRACKING_CONFIG_PROP } from "./user-settings";


export function listenToLogSettingsChanges(context: vscode.ExtensionContext) {
  const log = getLogger().getChildLogger({label: "Settings"});

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(event => {
      if (event.affectsConfiguration(LOGGING_LEVEL_CONFIG_PROP)) {
        const logLevel = getLoggingLevelSetting();
        log.debug("Log level set to %s", logLevel);
        getLogger().changeLevel(logLevel);
      }
    })
  );

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration(event => {
      if (event.affectsConfiguration(SOURCE_TRACKING_CONFIG_PROP)) {
        const isTrackingSource = getSourceLocationTrackingSetting();
        log.debug("Source location logging set to %s", isTrackingSource);
        getLogger().changeSourceLocationTracking(isTrackingSource);
      }
    })
  );
}
