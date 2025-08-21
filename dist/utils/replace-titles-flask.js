import { slugify, toKebabCase, toTitleCase } from "@julseb-lib/utils";
import { execSync } from "child_process";
import { cliPath } from "./cli-path.js";
export const replaceTitlesFlask = (projectName) => {
    execSync(`node "${cliPath}" replace package.json "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit", cwd: projectName });
    execSync(`node "${cliPath}" replace server/pyproject.toml "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit", cwd: projectName });
    execSync(`node "${cliPath}" replace server/src/utils/consts.py "julseb-lib-fullstack" "${toTitleCase(projectName)}"`, { stdio: "inherit", cwd: projectName });
    execSync(`node "${cliPath}" replace server/template.env "julseb-lib-fullstack" "${toKebabCase(projectName)}"`, { stdio: "inherit", cwd: projectName });
    execSync(`node "${cliPath}" replace client/template.env "julseb-lib-fullstack" "${toKebabCase(projectName)}"`, { stdio: "inherit", cwd: projectName });
};
