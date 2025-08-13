import { execSync } from "child_process";
import { projectTypes } from "./consts";
export const gitClone = (repo, projectName) => execSync(`git clone ${projectTypes[repo].repo} ${projectName}`, {
    stdio: "inherit",
});
