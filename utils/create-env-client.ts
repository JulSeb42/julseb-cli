import { execSync } from "child_process"

export const createEnvClient = (projectName: string) => {
	execSync(`cp template.env .env`, {
		stdio: "inherit",
		cwd: projectName,
	})
}
