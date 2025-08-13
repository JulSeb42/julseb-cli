import { execSync } from "child_process";
import { slugify } from "@julseb-lib/utils";
export const createEnvClient = (projectName) => {
    execSync(`cp template.env ${slugify(projectName)}/.env`, {
        stdio: "inherit",
        cwd: projectName,
    });
};
