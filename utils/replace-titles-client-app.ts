import { execSync } from "child_process"
import { slugify, toTitleCase } from "@julseb-lib/utils"
import { cliPath } from "./cli-path.js"

export const replaceTitlesClientApp = (
	projectName: string,
	client: "router" | "tanstack"
) => {
	execSync(
		`node "${cliPath}" replace package.json "julseb-lib-client" "${slugify(
			projectName
		)}"`,
		{ stdio: "inherit", cwd: projectName }
	)
	execSync(
		`node "${cliPath}" replace index.html "julseb-lib-client" "${toTitleCase(
			projectName
		)}"`,
		{ stdio: "inherit", cwd: projectName }
	)
	execSync(
		`node "${cliPath}" replace src/data/site-data.ts "julseb-lib-client" "${toTitleCase(
			projectName
		)}"`,
		{ stdio: "inherit", cwd: projectName }
	)

	if (client === "tanstack") {
		execSync(
			`node "${cliPath}" replace .cta.json "julseb-lib-client" "${slugify(
				projectName
			)}"`,
			{ stdio: "inherit", cwd: projectName }
		)
	}
}
