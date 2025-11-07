# WebdriverIO Telnyx UI Tests

## Summary

This project automates the testing of the **[Telnyx](https://telnyx.com)** website using **WebdriverIO** with **Cucumber (BDD)** and **JavaScript**.
The tests follow **ISTQB** standards and **do not perform any sign-up or login actions**, according to the task requirements.

The framework includes:

* Automated test cases covering key Telnyx pages;
* **Page Object Model (POM)** architecture;
* Integrated **Allure Report** for visualization;
* Separate configs for **Chrome**, **Firefox**;
* **Docker** support for running tests locally and in CI;
* **GitHub Actions** pipeline with **Allure Report deployment to GitHub Pages**.

---

## Requirements

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) ≥ 18
* [npm](https://www.npmjs.com/)
* [Docker](https://www.docker.com/) *(optional, for containerized runs)*

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/telnyx-webdriverio-tests.git
   cd telnyx-webdriverio-tests
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Project Structure

```
.
├── configs/
│   ├── wdio.conf.js             # Base configuration
│   ├── wdio.chrome.conf.js      # Chrome config
│   ├── wdio.firefox.conf.js     # Firefox config
│   └── wdio.edge.conf.js        # (optional)
├── test/
│   ├── features/                # Cucumber feature files
│   ├── step-definitions/        # Step definitions
│   └── pages/                   # Page Object Model files
├── data/                        # JSON data and test users
├── reports/                     # Allure results and reports
├── .github/workflows/ci.yml     # GitHub Actions pipeline
├── Dockerfile                   # Docker configuration
├── package.json
└── README.md
```

---

## Running Tests

### Run all tests

```bash
npm run test
```

### Run tests in a specific browser

* **Chrome:**

  ```bash
  npm run test:chrome
  ```
* **Firefox:**

  ```bash
  npm run test:firefox
  ```
* **Edge (optional):**

  ```bash
  npm run test:edge
  ```

### Run in headless mode

```bash
npm run test:headless
```

---

## Allure Report

### Generate and open report:

```bash
npm run report:generate
npm run report:open
```

The generated report will be located in:

```
reports/allure-report/
```

---

## Run with Docker

To run tests inside a Docker container:

```bash
docker build -t telnyx-tests .
docker run telnyx-tests
```

This creates an isolated environment with Node.js and runs WebdriverIO tests using headless Chrome.

---

## GitHub Actions (CI/CD)

The pipeline file is located at:

```
.github/workflows/ci.yml
```