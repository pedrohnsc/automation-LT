![picture alt](/cypress/images/leantech.png "Lean Tech Logo")

# QA Challenge Lean Tech
[![E2E library: Cypress](https://img.shields.io/badge/E2E%20Framework-Cypress-blue)](https://www.cypress.io/)

---

## All the test scenarios are located on integration folder

- The reporter used on this project was the [Cypress Dashboard](https://www.cypress.io/cloud/) and all the results are available on the cypress cloud.

## Execution

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) installed.

### Installing the dependencies and running the tests

All the commands below are executed in the command _prompt_.

**1** - Download the project and access the created directory:

```sh
cd venturus-automation
```

**2** - Install the necessary dependencies to run the tests:

```sh
npm install
```

**3** - You can choose to open GUI Tests or Headless tests, to run with GUI Test, type the following command, and after this, choose what spec you want to run:

```sh
npm run open
```

**4** - To run Headless Mode, type:

```sh
npm run cypress:run
```

**5** - To run Headless Mode but with the cypress recorder option, type: 

NOTE: All the results will be available [here](https://cloud.cypress.io/projects/a46wo6/runs/2/overview)

```sh
npm run cy:run:dash
```

---

[License MIT](/LICENSE)