## tailwind-styled-component Usage Guide

Read the docs at <a href='https://www.npmjs.com/package/tailwind-styled-components'>Github</a>

### For autocomplete suggestions in vscode:

Utilize the Command Palette Cmd + Shift + P for macOS or Ctrl + Shift + P for Windows and Linux and then type “Preferences: Open User Settings (JSON) and add these lines to the end of the file:

```json
"tailwindCSS.includeLanguages": {
    "typescript": "javascript", // if you are using typescript
    "typescriptreact": "javascript"  // if you are using typescript with react
},
"editor.quickSuggestions": {
    "strings": true // forces VS Code to trigger completions when editing "string" content
},
"tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)", // tw`...`
    "tw\\.[^`]+`([^`]*)`", // tw.xxx<xxx>`...`
    "tw\\(.*?\\).*?`([^`]*)" // tw(Component)<xxx>`...`
]
```
