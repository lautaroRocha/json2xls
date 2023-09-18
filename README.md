# POC-excel

This project was created from the Infosis Frontend Template. It ships with React 18, TypeScript, Express, ReduxToolkit, ReactRouterDom and Vitest + RTL. Bundled with Vite+Rollup in the front and Webpack for the backend. <br> You may add or remove these packages as needed.

<br>

## How to use this project

note: prefer yarn over npm when possible for the download speed difference

### Install dependencies

<br>

```bash
yarn install || npm i
```

### Run Project

<br>

```bash
yarn dev || npm run dev
```

App will be exposed on port 5173, Express API will be accesible through the '/api' route on port 8080. You can also access the frontend via :8080/, since the Express app serves the frontend as a static file.
<br>
<br>

## Templating

#### Frontend

The template has PLOP installed and configured to create new components and Redux Slices.

```bash
yarn plop:client || npm run plop:client
```

You may edit or expand this from `./provision/plop/plopfile.client.cjs`
<br>

#### Backend

The template has PLOP installed and configured to create new endpoints with a controller and a service file. 

```bash
yarn plop:server || npm run plop:server
```

You may edit or expand this from `./provision/plop/plopfile.server.cjs`
<br>
<br>

## Static code analysis


The project is configured with ESLint and Prettier, config files are in ./.ci/linters. Both commands can be used with the :fix flag to automatically solve issues. <br>

```bash
yarn lint || npm run lint
```

<br>

```bash
yarn prettier || npm run prettier
```
<br>
<br>

## Unit Testing

### Run all tests

```bash
yarn test:client || npm run test:client
```

### Run tests and get coverage report

```bash
yarn coverage || npm run coverage
```

## Monitoring

The project has the configuration to connect to Sentry as a monitor service for both the back and frontend. In order of the connections to work, you'll have to add a Sentry DSN on the enviroment variables. In order to properly trace errors on the frontend, run the command ```npx @sentry/wizard@latest -i sourcemaps``` and follow instructions.
