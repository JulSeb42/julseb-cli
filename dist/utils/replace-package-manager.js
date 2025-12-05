import { packageManagers } from "./consts.js";
import { runReplace as run } from "./run-replace.js";
export const replacePackageManager = (projectName, manager, isExpress) => {
    console.log(`\nReplace all pnpm functions by ${packageManagers[manager].title}`);
    const runReplace = (filePath, searchValue, replaceValue) => run(projectName, filePath, searchValue, replaceValue);
    runReplace("package.json", "pnpm", packageManagers[manager].runCommand);
    runReplace("client/package.json", "pnpm", packageManagers[manager].runCommand);
    if (isExpress) {
        runReplace("server/seed/seed.ts", "pnpm", packageManagers[manager].runCommand);
    }
    if (manager === 1) {
        runReplace("package.json", "npm run install", "npm install");
    }
};
