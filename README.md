# EXPRESS BOILERPLATE

## Getting started
To successfully kickoff a project you will need to request a few things
- If Using a Database
  - please request a new database with proposed schema, place connection string information in a .env file

## Testing
In order for a successful deployment all tests must pass.  Please refer to package.json in the `scripts` section under `"test"` to understand what tests will be run.
- run end-to-end tests (headless front-end) on unix-based: `npm run test`

### Development Server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory. Use the `-prod` flag for a production build.

### Further help

To get more help on the Express go check out the [Express Documentation](https://expressjs.com/en/4x/api.html).