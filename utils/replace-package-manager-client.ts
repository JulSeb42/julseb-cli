import { packageManagers } from "./consts.js"
import { runReplace as run } from "./run-replace.js"

export const replacePackageManagerClient = (
	projectName: string,
	manager: number
) => {
	const runReplace = (
		filePath: string,
		searchValue: string,
		replaceValue: string
	) => run(projectName, filePath, searchValue, replaceValue)

	console.log(
		`\nReplace all pnpm functions by ${packageManagers[manager].title}`
	)

	runReplace("package.json", "pnpm", packageManagers[manager].runCommand)
}
