import { execSync } from "child_process";
import { slugify, toTitleCase } from "@julseb-lib/utils";
export const replaceTitlesExpress = (projectName) => {
    execSync(`node dist/cli.js replace ${slugify(projectName)}/package.json "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit" });
    execSync(`node dist/cli.js replace ${slugify(projectName)}/shared/site-data.ts "julseb-lib-fullstack" "${toTitleCase(projectName)}"`, { stdio: "inherit" });
    execSync(`node dist/cli.js replace ${slugify(projectName)}/server/package.json "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit" });
    execSync(`node dist/cli.js replace ${slugify(projectName)}/client/package.json "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit" });
    execSync(`node dist/cli.js replace ${projectName}/server/src/utils/consts.ts "julseb-lib-boilerplate-fullstack" "${slugify(projectName)}"`, { stdio: "inherit" });
};
