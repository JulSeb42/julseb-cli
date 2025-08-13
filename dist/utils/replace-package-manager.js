import { execSync } from "child_process";
import { packageManagers } from "./consts.js";
import { cliPath } from "./cli-path.js";
export const replacePackageManager = (projectName, manager, isExpress) => {
    console.log(`\nReplace all pnpm functions by ${packageManagers[manager].title}`);
    execSync(`node "${cliPath}" replace package.json "pnpm" "${packageManagers[manager].runCommand}"`, { stdio: "inherit", cwd: projectName });
    execSync(`node "${cliPath}" replace client/package.json "pnpm" "${packageManagers[manager].runCommand}"`, { stdio: "inherit", cwd: projectName });
    if (isExpress) {
        execSync(`node "${cliPath}" replace server/seed/seed.ts "pnpm" "${packageManagers[manager].runCommand}"`, { stdio: "inherit", cwd: projectName });
    }
    if (manager === 1) {
        execSync(`node "${cliPath}" replace package.json "npm run install" "npm install"`, { stdio: "inherit", cwd: projectName });
    }
};
