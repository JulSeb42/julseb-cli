import { execSync } from "child_process"
import { slugify } from "@julseb-lib/utils"

export const createEnvClient = (projectName: string) => {
	execSync(
		`cp ${slugify(projectName)}/template.env ${slugify(
			projectName
		)}/.env`,
		{
			stdio: "inherit",
		}
	)
}
