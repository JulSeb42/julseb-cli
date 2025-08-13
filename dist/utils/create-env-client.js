import { execSync } from "child_process";
import { slugify } from "@julseb-lib/utils";
export const createEnvClient = (projectName) => {
    execSync(`cp ${slugify(projectName)}/template.env ${slugify(projectName)}/.env`, {
        stdio: "inherit",
    });
};
