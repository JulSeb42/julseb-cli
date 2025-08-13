import { execSync } from "child_process"
import { packageManagers } from "./consts.js"
import { cliPath } from "./cli-path.js"

export const replacePackageManagerClient = (
	projectName: string,
	manager: number
) => {
	console.log(
		`\nReplace all pnpm functions by ${packageManagers[manager].title}`
	)

	execSync(
		`node "${cliPath}" replace package.json "pnpm" "${packageManagers[manager].runCommand}"`,
		{ stdio: "inherit", cwd: projectName }
	)
}
