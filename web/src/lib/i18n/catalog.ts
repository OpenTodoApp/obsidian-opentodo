// In OpenTodo this module is the web app's message catalogue. The plugin's build
// replaces it with obsidian/src/shims/i18n.ts (esbuild.config.mjs), so this
// repository carries only the replacement, for the type-checker.
export { t, msg, currentLanguage } from '../../../../obsidian/src/shims/i18n'
