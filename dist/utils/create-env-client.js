import { execSync } from "child_process";
export const createEnvClient = (projectName) => {
    execSync(`cp template.env .env`, {
        stdio: "inherit",
        cwd: projectName,
    });
};
