/**
 * These settings could be externalized to a user-customizable log file eventually.
 */

import { LogLevel } from "@vscode-logging/logger";

/** Extension name. Like `name` in package.json. */
export const EXTENSION_NAME = "ecore-tree-editor";
/** Human readable name. Like `displayName` in package.json. */
export const EXTENSION_HUMAN_NAME = "Ecore Tree-editor";
/** Extension ID, unique among all extensions. Prefixed with the publisher. */
export const EXTENSION_ID = "krissrex.ecore-tree-editor";

export const DEFAULT_LOG_LEVEL: LogLevel = "info";
