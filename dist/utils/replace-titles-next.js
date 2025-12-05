import { toKebabCase, toTitleCase } from "@julseb-lib/utils";
import { runReplace as run } from "./run-replace.js";
export const replaceTitlesNext = (projectName) => {
    const runReplace = (filePath, searchValue, replaceValue) => run(projectName, filePath, searchValue, replaceValue);
    runReplace("package.json", "julseb-lib-next", toKebabCase(projectName));
    runReplace("src/data/site-data.ts", "julseb-lib-next", toTitleCase(projectName));
    runReplace("src/app/api/uploader/upload-picture/route.ts", "julseb-lib-next", toKebabCase(projectName));
};
