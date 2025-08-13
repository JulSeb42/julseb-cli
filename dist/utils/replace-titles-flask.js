import { slugify, toTitleCase } from "@julseb-lib/utils";
import { execSync } from "child_process";
export const replaceTitlesFlask = (projectName) => {
    execSync(`node dist/cli.js replace ${slugify(projectName)}/package.json "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit" });
    execSync(`node dist/cli.js replace ${slugify(projectName)}/server/pyproject.toml "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit" });
    execSync(`node dist/cli.js replace ${slugify(projectName)}/server/src/utils/consts.py "julseb-lib-fullstack" "${toTitleCase(projectName)}"`, { stdio: "inherit" });
};
