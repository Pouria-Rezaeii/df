module.exports = {
   // Check and format TS files
   "**/*.(ts|tsx)": (filenames) => [
      // Type check all TypeScript files
      "yarn tsc --noEmit",
      // linting
      `yarn eslint --fix ${filenames.join(" ")}`,
      // run prettier
      `yarn prettier --write ${filenames.join(" ")}`,
   ],
   // format style and json files
   "**/*.(css|scss|json)": (filenames) => [
      `yarn prettier --write ${filenames.join(" ")}`,
   ],
};
