import { execSync } from "child_process"
import { toKebabCase, toTitleCase } from "@julseb-lib/utils"
import { cliPath } from "./cli-path.js"

export const replaceTitlesNext = (projectName: string) => {
	execSync(
		`node "${cliPath}" replace package.json "julseb-lib-next" "${toKebabCase(
			projectName
		)}"`,
		{ stdio: "inherit", cwd: projectName }
	)
	execSync(
		`node "${cliPath}" replace src/data/site-data.ts "julseb-lib-next" "${toTitleCase(
			projectName
		)}"`,
		{ stdio: "inherit", cwd: projectName }
	)
	execSync(
		`node "${cliPath}" replace src/app/api/uploader/upload-picture/route.ts "julseb-lib-next" "${toKebabCase(
			projectName
		)}"`,
		{ stdio: "inherit", cwd: projectName }
	)
}
