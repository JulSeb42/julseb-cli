import { execSync } from "child_process"
import { slugify } from "@julseb-lib/utils"
import { packageManagers } from "./consts.js"

export const replacePackageManagerClient = (projectName: string, manager: number) => {
	console.log(
		`\nReplace all pnpm functions by ${packageManagers[manager].title}`
	)

	execSync(
		`node dist/cli.js replace ${slugify(
			projectName
		)}/package.json "pnpm" "${packageManagers[manager].runCommand}"`,
		{ stdio: "inherit" }
	)
}
