import { slugify, toKebabCase, toTitleCase } from "@julseb-lib/utils";
import { execSync } from "child_process";
import { cliPath } from "./cli-path.js";
export const replaceTitlesClient = (projectName, client) => {
    execSync(`node "${cliPath}" replace client/package.json "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit", cwd: projectName });
    execSync(`node "${cliPath}" replace client/index.html "julseb-lib-fullstack" "${toTitleCase(projectName)}"`, { stdio: "inherit", cwd: projectName });
    execSync(`node "${cliPath}" replace client/src/data/site-data.ts "julseb-lib-fullstack" "${toTitleCase(projectName)}"`, { stdio: "inherit", cwd: projectName });
    execSync(`node "${cliPath}" replace client/template.env "julseb-lib-fullstack" "${toKebabCase(projectName)}"`, { stdio: "inherit", cwd: projectName });
    if (client === "tanstack") {
        execSync(`node "${cliPath}" replace client/.cta.json "julseb-lib-fullstack-client" "${slugify(projectName)}"`, { stdio: "inherit", cwd: projectName });
    }
};
