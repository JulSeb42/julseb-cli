import { execSync } from "child_process";
export const createEnv = (projectName) => {
    execSync(`cp server/template.env server/.env`, {
        stdio: "inherit",
        cwd: projectName,
    });
    execSync(`cp client/template.env client/.env`, {
        stdio: "inherit",
        cwd: projectName,
    });
};
