import { slugify, toKebabCase, toTitleCase } from "@julseb-lib/utils"
import { runReplace as run } from "./run-replace.js"

export const replaceTitlesFlask = (projectName: string) => {
	const runReplace = (
		filePath: string,
		searchValue: string,
		replaceValue: string
	) => run(projectName, filePath, searchValue, replaceValue)

	runReplace("package.json", "julseb-lib-fullstack", slugify(projectName))
	runReplace(
		"server/pyproject.toml",
		"julseb-lib-fullstack",
		slugify(projectName)
	)
	runReplace(
		"server/src/utils/consts.py",
		"julseb-lib-fullstack",
		toTitleCase(projectName)
	)
	runReplace(
		"server/template.env",
		"julseb-lib-fullstack",
		toKebabCase(projectName)
	)
	runReplace(
		"server/src/routes/cloudinary.py",
		"julseb-lib-fullstack",
		toKebabCase(projectName)
	)
	runReplace(
		"client/template.env",
		"julseb-lib-fullstack",
		toKebabCase(projectName)
	)
}
