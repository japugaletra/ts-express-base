# ts-express-base
A Base Repository for a TypeScript express server.

## Getting Started
### Prerequisites
To get started, you will either need docker installed, nvm, or the matching node version.

### Installing
#### With Docker
After checking out, run the following commands:
```
# Installs all required node_modules
npm run docker:install
# Starts a docker container that runs the server
npm run docker:start
```
#### With nvm
When using nvm, start by running the following in the checked out directory:
```
nvm install
nvm use
```
After this, follow the node instructions below.

#### With node
Run the following commands in the checked out directory.
```
# install all dependencies
npm i
# Run the server
npm run start:watch
```

### Running the tests
Jest is used for testing. The tests will automatically run as part of the commands above.
To specifically run tests, run one of the following commands:
```
# With docker
npm run docker:test
# With node
npm test
```

### Deployment
Todo

### Built With
* Node and NPM
* TypeScript
* Jest
* nodemon
* Docker
