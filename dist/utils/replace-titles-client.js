import { slugify, toTitleCase } from "@julseb-lib/utils";
import { execSync } from "child_process";
export const replaceTitlesClient = (projectName, client) => {
    execSync(`node dist/cli.js replace ${slugify(projectName)}/client/package.json "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit" });
    execSync(`node dist/cli.js replace ${slugify(projectName)}/client/index.html "julseb-lib-fullstack" "${toTitleCase(projectName)}"`, { stdio: "inherit" });
    execSync(`node dist/cli.js replace ${slugify(projectName)}/client/src/data/site-data.ts "julseb-lib-fullstack" "${toTitleCase(projectName)}"`, { stdio: "inherit" });
    if (client === "tanstack") {
        execSync(`node dist/cli.js replace ${slugify(projectName)}/client/.cta.json "julseb-lib-fullstack" "${slugify(projectName)}"`, { stdio: "inherit" });
    }
};
