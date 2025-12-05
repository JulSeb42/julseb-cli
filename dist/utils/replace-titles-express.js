import { slugify, toKebabCase } from "@julseb-lib/utils";
import { runReplace as run } from "./run-replace.js";
export const replaceTitlesExpress = (projectName) => {
    const runReplace = (filePath, searchValue, replaceValue) => run(projectName, filePath, searchValue, replaceValue);
    runReplace("package.json", "julseb-lib-fullstack", slugify(projectName));
    runReplace("server/package.json", "julseb-lib-fullstack", slugify(projectName));
    runReplace("server/src/utils/consts.ts", "julseb-lib-boilerplate-fullstack", slugify(projectName));
    runReplace("server/src/config/cloudinary.config.ts", "julseb-lib-fullstack", slugify(projectName));
    runReplace("server/template.env", "julseb-lib-fullstack", toKebabCase(projectName));
};
