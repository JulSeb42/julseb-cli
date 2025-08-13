type Project = {
	title: string
	repo: string
}

type PackageManager = {
	title: string
	installCommand: string
	runCommand: string
}

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
