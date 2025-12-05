import { slugify, toTitleCase } from "@julseb-lib/utils";
import { runReplace as run } from "./run-replace.js";
export const replaceTitlesClientApp = (projectName, client) => {
    const runReplace = (filePath, searchValue, replaceValue) => run(projectName, filePath, searchValue, replaceValue);
    runReplace("package.json", "julseb-lib-client", slugify(projectName));
    runReplace("index.html", "julseb-lib-client", toTitleCase(projectName));
    runReplace("src/data/site-data.ts", "julseb-lib-client", toTitleCase(projectName));
    if (client === "tanstack") {
        runReplace(".cta.json", "julseb-lib-client", slugify(projectName));
    }
};
