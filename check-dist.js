// check-dist.js
// Script to check that all expected files exist in the dist/ directory after build

import fs from "fs"
import path from "path"

import { fileURLToPath } from "url"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const requiredFiles = [
	"dist/cli.js",
	"dist/utils/consts.js",
	"dist/utils/create-env-client.js",
	"dist/utils/create-env.js",
	"dist/utils/git-clone.js",
	"dist/utils/index.js",
	"dist/utils/replace-package-manager-client.js",
	"dist/utils/replace-package-manager.js",
	"dist/utils/replace-titles-client-app.js",
	"dist/utils/replace-titles-client.js",
	"dist/utils/replace-titles-express.js",
	"dist/utils/replace-titles-flask.js",
	"dist/utils/replate-titles-client.js",
	// Add more files as needed
]

let allExist = true

for (const file of requiredFiles) {
	if (!fs.existsSync(path.resolve(__dirname, file))) {
		console.error(`❌ Missing: ${file}`)
		allExist = false
	} else {
		console.log(`✅ Found: ${file}`)
	}
}

if (!allExist) {
	process.exit(1)
} else {
	console.log("\nAll required files are present in dist/.")
}
