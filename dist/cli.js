#!/usr/bin/env node
import { Command } from "commander";
import welcome from "cli-welcome";
import prompts from "prompts";
import { execSync } from "child_process";
import fs from "fs";
import { projectTypes, packageManagers } from "./utils/consts.js";
import { gitClone } from "./utils/git-clone.js";
import { replaceTitlesClient } from "./utils/replace-titles-client.js";
import { replaceTitlesFlask } from "./utils/replace-titles-flask.js";
import { createEnv } from "./utils/create-env.js";
import { replacePackageManager } from "./utils/replace-package-manager.js";
import { replaceTitlesExpress } from "./utils/replace-titles-express.js";
import { replaceTitlesClientApp } from "./utils/replace-titles-client-app.js";
import { createEnvClient } from "./utils/create-env-client.js";
import { replacePackageManagerClient } from "./utils/replace-package-manager-client.js";
const program = new Command();
program
    .name("@julseb-lib-cli")
    .description("CLI to generate boilerplates using @julseb-lib/react")
    .version("1.0.0");
program
    .command("replace <file> <search> <replace>")
    .description("Replace text in a file")
    .action((file, search, replace) => {
    let content = fs.readFileSync(file, "utf8");
    const regex = new RegExp(search, "g");
    content = content.replace(regex, replace);
    fs.writeFileSync(file, content, "utf8");
    console.log(`Replaced "${search}" with "${replace}" in ${file}`);
});
program.argument("[name]", "Project name").action(async (name) => {
    welcome({
        title: "Julseb CLI",
        tagLine: "A tool to generate React with TS apps using @julseb-lib/react",
        description: "",
        bgColor: "#ffffff",
        color: "#000000",
        bold: true,
        clear: true,
        version: "1.0.0",
    });
    let projectName = name;
    if (!name) {
        const response = await prompts({
            type: "text",
            name: "name",
            message: "What is your project name?",
            validate: name => (name ? true : "Project name is required"),
        });
        projectName = response.name;
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
    ]);
    const { type, manager } = response;
    console.log(`\n📦 Creating project "${projectName}"...`);
    if (type === 0) {
        gitClone(0, projectName);
        console.log(`\nReplacing all titles in ${projectName}`);
        replaceTitlesFlask(projectName);
        replaceTitlesClient(projectName, "router");
        console.log(`\nCreating .env`);
        createEnv(projectName);
        if (manager !== 0) {
            replacePackageManager(projectName, manager);
        }
    }
    if (type === 1) {
        gitClone(1, projectName);
        console.log(`\nReplacing all titles in ${projectName}`);
        replaceTitlesFlask(projectName);
        replaceTitlesClient(projectName, "tanstack");
        console.log(`\nCreating .env`);
        createEnv(projectName);
        if (manager !== 0) {
            replacePackageManager(projectName, manager);
        }
    }
    if (type === 2) {
        gitClone(2, projectName);
        console.log(`\nReplacing all titles in ${projectName}`);
        replaceTitlesExpress(projectName);
        console.log(`\nCreating .env`);
        createEnv(projectName);
        if (manager !== 0) {
            replacePackageManager(projectName, manager, true);
        }
    }
    if (type === 3) {
        gitClone(3, projectName);
        console.log(`\nReplacing all titles in ${projectName}`);
        replaceTitlesExpress(projectName);
        console.log(`\nCreating .env`);
        createEnv(projectName);
        if (manager !== 0) {
            replacePackageManager(projectName, manager, true);
        }
    }
    if (type === 4) {
        gitClone(4, projectName);
        console.log(`\nReplacing all titles in ${projectName}`);
        replaceTitlesClientApp(projectName, "router");
        console.log(`\nCreating .env`);
        createEnvClient(projectName);
        if (manager !== packageManagers[0]) {
            replacePackageManagerClient(projectName, manager);
        }
    }
    if (type === 5) {
        gitClone(5, projectName);
        console.log(`\nReplacing all titles in ${projectName}`);
        replaceTitlesClientApp(projectName, "tanstack");
        console.log(`\nCreating .env`);
        createEnvClient(projectName);
        if (manager !== packageManagers[0]) {
            replacePackageManagerClient(projectName, manager);
        }
    }
    console.log(`\n📁 Init git`);
    execSync(`rm -rf ${projectName}/.git`, { stdio: "inherit" });
    execSync(`cd ${projectName} && git init && git checkout -b master && git add . && git commit -m "Initial commit"`, { stdio: "inherit" });
    console.log(`\n📥 Installing all your packages, this may take a while...`);
    execSync(`cd ${projectName} && ${packageManagers[manager].installCommand}`, { stdio: "inherit" });
    console.log(`\n🚀 Done! cd into ${projectName} and start coding!${type === 0 || type === 1
        ? " Don't forget to activate the virtual environment!"
        : ""}`);
    /*==============================================================================================*/
    // const response = await prompts([
    // 	{
    // 		type: "select",
    // 		name: "router",
    // 		message: "What router do you want to use?",
    // 		choices: routers,
    // 	},
    // 	{
    // 		type: "select",
    // 		name: "server",
    // 		message: "What type of server do you want to use?",
    // 		choices: servers,
    // 	},
    // 	{
    // 		type: "select",
    // 		name: "packageManager",
    // 		message: "What package manager do you want to use?",
    // 		choices: packageManagers,
    // 	},
    // ])
    // const { router, server, packageManager } = response
    // console.log({
    // 	name,
    // 	router,
    // 	server,
    // 	packageManager,
    // })
    // const manager = packageManagers[packageManager]
    // if (server === 0) {
    // 	// Create project
    // execSync(`mkdir ${name}`, { stdio: "inherit" })
    // 	// console.log(`\nClone server`)
    // 	// console.log(`\nClone client`)
    // 	// execSync(`git clone ${routers[router].repo} client`, {
    // 	// 	stdio: "inherit",
    // 	// 	cwd: projectName,
    // 	// })
    // 	// Copy package.json
    // 	// execSync(
    // 	// 	`touch package.json && echo '${packageJson(
    // 	// 		projectName,
    // 	// 		manager
    // 	// 	)}' > package.json`,
    // 	// 	{
    // 	// 		stdio: "inherit",
    // 	// 		cwd: projectName,
    // 	// 	}
    // 	// )
    // 	// const rawPackage = genRawFile(rootFiles.packageJson(projectName).path)
    // 	// const packageRootFile = path.join(
    // 	// 	__dirname,
    // 	// 	"templates",
    // 	// 	"package.json"
    // 	// )
    // 	// const packageDestFile = path.join(
    // 	// 	process.cwd(),
    // 	// 	projectName,
    // 	// 	"package.json"
    // 	// )
    // 	// fs.copyFileSync(packageRootFile, packageDestFile)
    // 	// console.log(`\nCreating functions in root package.json`)
    // 	// const renderedPackage = [
    // 	// 	rawPackage.replace("__NAME__", projectName),
    // 	// 	rawPackage.replace(
    // 	// 		"__SERVER_FN__",
    // 	// 		`cd server && ${manager.runCommand} serve`
    // 	// 	),
    // 	// 	rawPackage.replace(
    // 	// 		"__CLIENT_FN__",
    // 	// 		`cd client && ${manager.runCommand} dev`
    // 	// 	),
    // 	// 	rawPackage.replace(
    // 	// 		"__DEV_COMMAND__",
    // 	// 		`concurrently --kill-others '${manager.runCommand} serve' '${manager.runCommand} client'`
    // 	// 	),
    // 	// 	rawPackage.replace(
    // 	// 		"__INSTALL_COMMAND__",
    // 	// 		`${manager.installCommand} && cd server && ${manager.installCommand} && cd ../client && ${manager.installCommand}`
    // 	// 	),
    // 	// 	rawPackage.replaceAll("RUN_PLOP", manager.runCommand),
    // 	// ]
    // 	// renderedPackage.forEach(p =>
    // 	// 	fs.writeFileSync(rootFiles.packageJson(projectName).output, p)
    // 	// )
    // 	// // Copy files in root
    // 	// fs.writeFileSync(
    // 	// 	rootFiles.editorConfig(projectName).output,
    // 	// 	genRawFile(rootFiles.editorConfig(projectName).path)
    // 	// )
    // 	// fs.writeFileSync(
    // 	// 	rootFiles.gitignore(projectName).output,
    // 	// 	genRawFile(rootFiles.gitignore(projectName).path)
    // 	// )
    // 	// fs.writeFileSync(
    // 	// 	rootFiles.prettier(projectName).output,
    // 	// 	genRawFile(rootFiles.prettier(projectName).path)
    // 	// )
    // 	// // Copy plop directory
    // 	// const srcDir = path.join(__dirname, "templates", "plop-fullstack")
    // 	// const destDir = path.join(process.cwd(), projectName, "plop")
    // 	// fs.cpSync(srcDir, destDir, { recursive: true })
    // 	// // Replace pnpm functions in server by chosen packageManager
    // 	// const serverDir = path.join(process.cwd(), projectName, "server")
    // 	// const packageServer = "package.json"
    // 	// const serverPackagePath = path.join(serverDir, packageServer)
    // 	// let contentPackageServer = fs.readFileSync(serverPackagePath, "utf-8")
    // 	// contentPackageServer = contentPackageServer.replaceAll(
    // 	// 	/pnpm/g,
    // 	// 	manager.runCommand
    // 	// )
    // 	// fs.writeFileSync(serverPackagePath, contentPackageServer)
    // 	// // Replace pnpm functions in client by chosen packageManager
    // 	// const clientDir = path.join(process.cwd(), projectName, "client")
    // 	// const packageClient = "package.json"
    // 	// const clientPackagePath = path.join(clientDir, packageClient)
    // 	// let contentPackageClient = fs.readFileSync(clientPackagePath, "utf-8")
    // 	// contentPackageClient = contentPackageClient.replaceAll(
    // 	// 	/pnpm/g,
    // 	// 	manager.runCommand
    // 	// )
    // 	// fs.writeFileSync(clientPackagePath, contentPackageClient)
    // 	// Replace all titles in server
    // 	// Replace all titles in client
    // 	// Remove git from server & client
    // 	// Create env server
    // 	// Create env client
    // 	// Add path to server in client env
    // 	// Create root package.json
    // 	// Add functions to run server, client, and both in root package
    // 	// Add prettier to root
    // 	// Add gitignore to root
    // 	// Init git => git init + git commit all "initial commit"
    // }
    // if (server === 1) {
    // 	execSync(`mkdir ${toKebabCase(projectName)}`, { stdio: "inherit" })
    // 	// Clone server
    // 	// Replace all titles in server
    // 	if (router === 0) {
    // 		// Clone client
    // 		// Replace all titles in client
    // 	}
    // 	if (router === 1) {
    // 		// Clone client
    // 		// Replace all titles in client
    // 	}
    // 	// Remove git from server & client
    // 	// Create env server
    // 	// Create env client
    // 	// Add path to server in client env
    // 	// Create root package.json
    // 	// Add functions to run server, client, and both in root package
    // 	// Add prettier to root
    // 	// Add gitignore to root
    // 	// Init git => git init + git commit all "initial commit"
    // }
    // if (server === 2) {
    // 	if (router === 0) {
    // 		execSync(`git clone ${routersClient[0].repo} ${projectName}`, {
    // 			stdio: "inherit",
    // 		})
    // 		// Replace all names
    // 	}
    // 	if (router === 1) {
    // 		execSync(`git clone ${routersClient[1].repo} ${projectName}`, {
    // 			stdio: "inherit",
    // 		})
    // 		// Replace all names
    // 	}
    // }
    // execSync(
    // 	`rm -rf server/.git client/.git && git init && git commit -m "Initial commit"`,
    // 	{
    // 		stdio: "inherit",
    // 		cwd: projectName,
    // 	}
    // )
    // console.log(`\n📥 Installing all dependencies`)
    // execSync(manager.installCommand, {
    // 	stdio: "inherit",
    // 	cwd: projectName,
    // })
    // console.log(`\n✅ Done! cd into "${projectName}" and start coding.`)
    // ------------------------------------------------------
    // if(server) {}
    // console.log({ projectName, template, install })
    // await emitter.clone(projectName)
    // if (install) {
    // 	console.log("\n📥 Installing dependencies...")
    // 	execSync("npm install", { cwd: projectName, stdio: "inherit" })
    // }
    // console.log(`\n✅ Done! cd into "${projectName}" and start coding.\n`)
});
program.parse(process.argv);
