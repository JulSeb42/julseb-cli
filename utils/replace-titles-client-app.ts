import { execSync } from "child_process"
import { slugify, toTitleCase } from "@julseb-lib/utils"

export const replaceTitlesClientApp = (
	projectName: string,
	client: "router" | "tanstack"
) => {
	execSync(
		`node dist/cli.js replace ${slugify(
			projectName
		)}/package.json "julseb-lib-fullstack" "${slugify(
			projectName
		)}"`,
		{ stdio: "inherit" }
	)
	execSync(
		`node dist/cli.js replace ${slugify(
			projectName
		)}/index.html "julseb-lib-fullstack" "${toTitleCase(
			projectName
		)}"`,
		{ stdio: "inherit" }
	)
	execSync(
		`node dist/cli.js replace ${slugify(
			projectName
		)}/src/data/site-data.ts "julseb-lib-fullstack" "${toTitleCase(
			projectName
		)}"`,
		{ stdio: "inherit" }
	)

	if (client === "tanstack") {
		execSync(
			`node dist/cli.js replace ${slugify(
				projectName
			)}/.cta.json "julseb-lib-fullstack" "${slugify(
				projectName
			)}"`,
			{ stdio: "inherit" }
		)
	}
}
