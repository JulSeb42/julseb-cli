import { toKebabCase, toTitleCase } from "@julseb-lib/utils";
import { runReplace as run } from "./run-replace.js";
export const replaceTitlesNextPage = (projectName) => {
    const runReplace = (filePath, searchValue, replaceValue) => run(projectName, filePath, searchValue, replaceValue);
    runReplace("package.json", "boilerplate-next-page", toKebabCase(projectName));
    runReplace("src/data/site-data.ts", "julseb-lib-next", toTitleCase(projectName));
    runReplace("src/pages/api/uploader/upload-picture.ts", "julseb-lib-next", toKebabCase(projectName));
};
