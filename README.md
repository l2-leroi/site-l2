<h1 align="center">L2 Code</h1>
<p align="center">New L2 Code website!</p>
<h4 align="center">
	Developing...  🚧
</h4>

## 💻 About
L2 Code - is a technology company specialized in Web and Mobile software development. It aims to serve customers and become a partner in solving their technology problems.
<a href="http://l2code.com.br/">Go to the website</a>

---

## ⚙️ Branches
👉 develop: is the development branch, where all others are merged when approved

📌 The name pattern used is based on the created issue and your purpose. For each task to be developed, an issue is created describing what will be done, and a branch is created based on this issue, so we should put the issue id in the branch name.

<b>You can use the following prefixes to identify the purpose:</b>

● feature: development of a new feature
● bug: non-urgent bug fix
● hotfix: urgent bug fix happening in production

<b>Examples of how it would look:</b>
feature/289 (this number is the issue id)
bug/254

---

## 🚀 How it works
Backend needs to be running to work.

### Pre-requisites
Before you begin, you will need to have the following tools installed on your machine:
<a href="https://git-scm.com">Git</a>, <a href="https://yarnpkg.com/getting-started/install">Yarn</a>, <a href="https://nodejs.org/en/">Node.js</a>.

💡 Use only yarn as package manager.

#### Running the application

```bash
# Install the dependencies
yarn install

# Run the application in development mode
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ⚒️ Tech Stack

The following tools were used in the construction of the project:
- [Next.js](https://nextjs.org/)
- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ✨ Code Patterning

In the project, ESLint and Prettier tools were used. The installation and configuration steps were done using VS Code, but the same process applies to other editors.

### Install and configure ESLint
1. Install the [ESLint extension in VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

2. Type CTRL+SHIFT+P, search for Open Settings (JSON) and add the following code in VS Code configuration file:
```bash
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll": true,
},
```

### Install and configure Prettier
1. Install the [Prettier extension in VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).


---

## 🎨 Branch Creation

When you need to create a branch to develop an issue, create it based on the master branch and when you're done, open a pull request to the develop branch.

<b>start an issue</b>
master -> new-branch
     (based)

<b>finish an issue</b>
new-branch -> develop
   (pull request)
   
---

## ✒️ Commit Pattern

To keep the project organized, we suggest a commit pattern based on the issue id and the description of what was done. By the way, you can write this in Portuguese!

<b>Pattern</b>
[issue id] - description

<b>Examples<b>
[258] - styling the header
[254] - fixing the menu bug
