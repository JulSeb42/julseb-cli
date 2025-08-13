import { execSync } from "child_process"
import { slugify } from "@julseb-lib/utils"

export const createEnv = (projectName: string) => {
	execSync(
		`cp ${slugify(projectName)}/server/template.env ${slugify(
			projectName
		)}/server/.env`,
		{
			stdio: "inherit",
		}
	)

	execSync(
		`cp ${slugify(projectName)}/client/template.env ${slugify(
			projectName
		)}/client/.env`,
		{
			stdio: "inherit",
		}
	)
}
