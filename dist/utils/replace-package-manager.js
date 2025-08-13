import { execSync } from "child_process";
import { slugify } from "@julseb-lib/utils";
import { packageManagers } from "./consts.js";
export const replacePackageManager = (projectName, manager, isExpress) => {
    console.log(`\nReplace all pnpm functions by ${packageManagers[manager].title}`);
    execSync(`node dist/cli.js replace ${slugify(projectName)}/package.json "pnpm" "${packageManagers[manager].runCommand}"`, { stdio: "inherit" });
    execSync(`node dist/cli.js replace ${slugify(projectName)}/client/package.json "pnpm" "${packageManagers[manager].runCommand}"`, { stdio: "inherit" });
    if (isExpress) {
        execSync(`node dist/cli.js replace ${slugify(projectName)}/server/seed/seed.ts "pnpm" "${packageManagers[manager].runCommand}"`, { stdio: "inherit" });
    }
    if (manager === 1) {
        execSync(`node dist/cli.js replace ${slugify(projectName)}/package.json "npm run install" "npm install"`, { stdio: "inherit" });
    }
};
