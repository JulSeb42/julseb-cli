import { slugify, toKebabCase, toTitleCase } from "@julseb-lib/utils"
import { runReplace as run } from "./run-replace.js"

export const replaceTitlesClient = (
	projectName: string,
	client: "router" | "tanstack"
) => {
	const runReplace = (
		filePath: string,
		searchValue: string,
		replaceValue: string
	) => run(projectName, filePath, searchValue, replaceValue)

	runReplace(
		"client/package.json",
		"julseb-lib-fullstack",
		slugify(projectName)
	)
	runReplace(
		"client/index.html",
		"julseb-lib-fullstack",
		toTitleCase(projectName)
	)
	runReplace(
		"client/src/data/site-data.ts",
		"julseb-lib-fullstack",
		toTitleCase(projectName)
	)
	runReplace(
		"client/template.env",
		"julseb-lib-fullstack",
		toKebabCase(projectName)
	)

	if (client === "tanstack") {
		runReplace(
			"client/.cta.json",
			"julseb-lib-fullstack-client",
			slugify(projectName)
		)
	}
}
