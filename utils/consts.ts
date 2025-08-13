import path from "path"
import fs, { PathOrFileDescriptor } from "fs"
import { fileURLToPath } from "url"

type Project = {
	title: string
	repo: string
}

type PackageManager = {
	title: string
	installCommand: string
	runCommand: string
}

// type RootFile = (projectName: string) => {
// 	path: string
// 	output: string
// }

export const projectTypes: Array<Project> = [
	{
		title: "React Router & Flask",
		repo: "https://github.com/JulSeb42/boilerplate-flask-react-router.git",
	},
	{
		title: "Tanstack Router & Flask",
		repo: "https://github.com/JulSeb42/boilerplate-flask-tanstack.git",
	},
	{
		title: "React Router & Express",
		repo: "https://github.com/JulSeb42/boilerplate-express-react-router.git",
	},
	{
		title: "Tanstack Router & Express",
		repo: "https://github.com/JulSeb42/boilerplate-express-tanstack.git",
	},
	{
		title: "React Router client only",
		repo: "https://github.com/JulSeb42/boilerplate-react-router-client.git",
	},
	{
		title: "Tanstack Router client only",
		repo: "https://github.com/JulSeb42/boilerplate-tanstack-client.git",
	},
]

export const packageManagers: Array<PackageManager> = [
	{ title: "pnpm", installCommand: "pnpm install", runCommand: "pnpm" },
	{ title: "npm", installCommand: "npm install", runCommand: "npm run" },
	{ title: "yarn", installCommand: "yarn", runCommand: "yarn" },
]

// export const plopServers: Array<string> = ["model", "route"]

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// const genRootPathAndOutput = (fileName: string, projectName: string) => ({
// 	path: path.join(__dirname, "templates", fileName),
// 	output: path.join(process.cwd(), projectName, fileName),
// })

// export const rootFiles: Record<
// 	"packageJson" | "editorConfig" | "gitignore" | "prettier",
// 	RootFile
// > = {
// 	packageJson: (projectName: string) =>
// 		genRootPathAndOutput("package.json", projectName),
// 	editorConfig: (projectName: string) =>
// 		genRootPathAndOutput(".editorconfig", projectName),
// 	gitignore: (projectName: string) =>
// 		genRootPathAndOutput(".gitignore", projectName),
// 	prettier: (projectName: string) =>
// 		genRootPathAndOutput(".prettierrc", projectName),
// }

// export const genRawFile = (path: PathOrFileDescriptor) =>
// 	fs.readFileSync(path, "utf-8")

// export const packageJson = (projectName: string, manager: PackageManager) => `{
// 	"name": "${projectName}",
// 	"version": "1.0.0",
// 	"description": "",
// 	"main": "index.js",
// 	"scripts": {
// 		"serve": "cd server && ${manager.runCommand} serve",
// 		"client": "cd client && ${manager.runCommand} dev",
// 		"dev": "concurrently --kill-others '${manager.runCommand} serve' '${manager.runCommand} client'",
// 		"install": "${manager.installCommand} && cd server && ${manager.installCommand} && cd ../client && ${manager.installCommand}",
// 		"plop": "cross-env NODE_OPTIONS='--import tsx' plop --plopfile=plop/plopfile.ts",
// 		"plop:g": "${manager.runCommand} plop generator",
// 		"plop:c": "${manager.runCommand} plop component",
// 		"plop:sc": "${manager.runCommand} plop single-component",
// 		"plop:p": "${manager.runCommand} plop page",
// 		"plop:s": "${manager.runCommand} plop service",
// 		"plop:co": "${manager.runCommand} plop context",
// 		"plop:t": "${manager.runCommand} plop type",
// 		"plop:m": "${manager.runCommand} plop model",
// 		"plop:r": "${manager.runCommand} plop route"
// 	},
// 	"keywords": [],
// 	"author": "",
// 	"license": "ISC",
// 	"dependencies": {
// 		"@julseb-lib/utils": "^0.0.16",
// 		"concurrently": "^9.2.0"
// 	}
// }
// `
