import { execSync } from "child_process";
import { slugify, toKebabCase } from "@julseb-lib/utils";
import { cliPath } from "./cli-path.js";
export const replaceTitlesExpress = (projectName) => {
    execSync(`node "${cliPath}" replace package.json "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit", cwd: projectName });
    execSync(`node "${cliPath}" replace server/package.json "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit", cwd: projectName });
    execSync(`node "${cliPath}" replace server/src/utils/consts.ts "julseb-lib-boilerplate-fullstack" "${slugify(projectName)}"`, { stdio: "inherit", cwd: projectName });
    execSync(`node "${cliPath}" replace server/template.env "julseb-lib-fullstack" "${toKebabCase(projectName)}"`, { stdio: "inherit", cwd: projectName });
};
