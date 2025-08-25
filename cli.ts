#!/usr/bin/env node

import { Command } from "commander"
import welcome from "cli-welcome"
import prompts from "prompts"
import { execSync } from "child_process"
import fs from "fs"
import { slugify } from "@julseb-lib/utils"
import { projectTypes, packageManagers } from "./utils/consts.js"
import { gitClone } from "./utils/git-clone.js"
import { replaceTitlesClient } from "./utils/replace-titles-client.js"
import { replaceTitlesFlask } from "./utils/replace-titles-flask.js"
import { createEnv } from "./utils/create-env.js"
import { replacePackageManager } from "./utils/replace-package-manager.js"
import { replaceTitlesExpress } from "./utils/replace-titles-express.js"
import { replaceTitlesClientApp } from "./utils/replace-titles-client-app.js"
import { createEnvClient } from "./utils/create-env-client.js"
import { replacePackageManagerClient } from "./utils/replace-package-manager-client.js"

const program = new Command()

program
	.name("@julseb-lib/julseb-cli")
	.description("CLI to generate boilerplates using @julseb-lib/react")
	.version("1.0.0")

program
	.command("replace <file> <search> <replace>")
	.description("Replace text in a file")
	.action((file, search, replace) => {
		let content = fs.readFileSync(file, "utf8")
		const regex = new RegExp(search, "g")
		content = content.replace(regex, replace)
		fs.writeFileSync(file, content, "utf8")
		console.log(`Replaced "${search}" with "${replace}" in ${file}`)
	})

program.argument("[name]", "Project name").action(async name => {
	welcome({
		title: "Julseb CLI",
		tagLine:
			"A tool to generate React with TS apps using @julseb-lib/react",
		description: "",
		bgColor: "#ffffff",
		color: "#000000",
		bold: true,
		clear: true,
		version: "1.0.0",
	})

	let projectName = name

	if (!name) {
		const response = await prompts({
			type: "text",
			name: "name",
			message: "What is your project name?",
			validate: name => (name ? true : "Project name is required"),
		})
		projectName = slugify(response.name)
	}

	const response = await prompts([
		{
			type: "select",
			name: "type",
			message: "What type of project are you building?",
			choices: projectTypes,
		},
		{
			type: "select",
			name: "manager",
			message: "What package manager are you using?",
			choices: packageManagers,
		},
	])

	const { type, manager } = response

	console.log(`\n📦 Creating project "${projectName}"...`)

	if (type === 0) {
		gitClone(0, slugify(projectName))

		console.log(`\nReplacing all titles in ${projectName}`)
		replaceTitlesFlask(projectName)
		replaceTitlesClient(projectName, "router")

		console.log(`\nCreating .env`)
		createEnv(projectName)

		if (manager !== 0) {
			replacePackageManager(projectName, manager)
		}
	}

	if (type === 1) {
		gitClone(1, slugify(projectName))

		console.log(`\nReplacing all titles in ${projectName}`)
		replaceTitlesFlask(projectName)
		replaceTitlesClient(projectName, "tanstack")

		console.log(`\nCreating .env`)
		createEnv(projectName)

		if (manager !== 0) {
			replacePackageManager(projectName, manager)
		}
	}

	if (type === 2) {
		gitClone(2, slugify(projectName))

		console.log(`\nReplacing all titles in ${projectName}`)
		replaceTitlesExpress(projectName)
		replaceTitlesClient(projectName, "router")

		console.log(`\nCreating .env`)
		createEnv(projectName)

		if (manager !== 0) {
			replacePackageManager(projectName, manager, true)
		}
	}

	if (type === 3) {
		gitClone(3, slugify(projectName))

		console.log(`\nReplacing all titles in ${projectName}`)
		replaceTitlesExpress(projectName)
		replaceTitlesClient(projectName, "tanstack")

		console.log(`\nCreating .env`)
		createEnv(projectName)

		if (manager !== 0) {
			replacePackageManager(projectName, manager, true)
		}
	}

	if (type === 4) {
		gitClone(4, slugify(projectName))

		console.log(`\nReplacing all titles in ${projectName}`)
		replaceTitlesClientApp(projectName, "router")

		console.log(`\nCreating .env`)
		createEnvClient(projectName)

		if (manager !== packageManagers[0]) {
			replacePackageManagerClient(projectName, manager)
		}
	}

	if (type === 5) {
		gitClone(5, slugify(projectName))

		console.log(`\nReplacing all titles in ${projectName}`)
		replaceTitlesClientApp(projectName, "tanstack")

		console.log(`\nCreating .env`)
		createEnvClient(projectName)

		if (manager !== packageManagers[0]) {
			replacePackageManagerClient(projectName, manager)
		}
	}

	console.log(`\n📁 Init git`)
	execSync(`rm -rf .git`, {
		stdio: "inherit",
		cwd: projectName,
	})
	execSync(
		`git init && git checkout -b master && git add . && git commit -m "Initial commit"`,
		{ stdio: "inherit", cwd: projectName }
	)

	console.log(`\n📥 Installing all your packages, this may take a while...`)
	execSync(packageManagers[manager].installCommand, {
		stdio: "inherit",
		cwd: projectName,
	})

	console.log(
		`\n🚀 Done! cd into ${projectName} and start coding!${
			type === 0 || type === 1
				? " Don't forget to activate the virtual environment!"
				: ""
		}`
	)
})

program.parse(process.argv)
