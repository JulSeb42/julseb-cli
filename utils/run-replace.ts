import { spawnSync } from "child_process"
import { cliPath } from "./cli-path.js"

export const runReplace = (
	projectName: string,
	filePath: string,
	searchValue: string,
	replaceValue: string
) => {
	const result = spawnSync(
		process.execPath,
		[cliPath, "replace", filePath, searchValue, replaceValue],
		{
			stdio: "inherit",
			cwd: projectName,
		}
	)
	if (result.error || result.status !== 0) {
		throw new Error(`Failed to replace ${searchValue} in ${filePath}`)
	}
}
