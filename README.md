# create-site-cli-commander

A CLI tool to generate boilerplate projects using @julseb-lib/react, with support for text replacement, project setup, and more.

## Features
- Generate React + TypeScript boilerplates
- Server with either Express & TypeScript, or Flask
- Choose project type and package manager interactively
- Replace text in files via CLI command
- Automate project setup steps

## Usage

### With npx

Run:

```shell
$ npx @julseb-lib/julseb-cli@latest <your-project-name>
```

### Globally

Run:

```shell
$ npm i -g @julseb-lib/julseb-cli
```

And use like this:

```shell
$ julseb-cli <your-project-name>
```

## Development

- Source code: `cli.ts`
- Utilities: `utils/`
- Build: `tsc`

## License

MIT

## Author

[Julien Sebag](https://julien-sebag.com)