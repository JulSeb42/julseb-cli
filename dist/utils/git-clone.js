import { spawnSync } from "child_process";
import { projectTypes } from "./consts.js";
export const gitClone = (repo, projectName) => {
    const result = spawnSync("git", ["clone", projectTypes[repo].repo, projectName], {
        stdio: "inherit",
    });
    if (result.error || result.status !== 0) {
        throw new Error(`Failed to clone repository`);
    }
};
