# List of helper commands

## Running Applications

The following is default command for running a project

```
nx serve ${app}
```

Example

```
nx serve calculator-api
```

## Linting

The following command will run linting on a particular project

```
nx run calculator-service:lint
```

The following command will attempt to fix linting issues

```
nx run calculator-service:lint --fix
```

The following command will format all your code in one shot

```
nx format:write --all
```

### Configure Husky

The recommended approach with the new version of Husky is to use configuration directorys for each tasks.

#### Add a new husky stage

The following command will create a new file in the .husky folder where you can put in all the commands for husky

```
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```

The following will allow you to modify the husky configuration

.husky/pre-commit

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run affected:lint
-- You can add additional commands here to run pre-commit steps
npm run affected:test

```

## Testing

### Test a particular library

```
nx test ${libray or project name}
```

Example:

```
nx test calculator-service
```

## Testing all projects

```
nx run-many --all --target=test
```

## Building NestJS Resources

### Create a Nest JS Service in a project

The following command will create a term service (and spec) in a project (library or app) called calculator service

```
nx g @nrwl/nest:service term --project=calculator-service
```

### Create a Nest JS Controller in a project

The following command will create a term service (and spec) in a project (library or app) called calculator service

```
nx g @nrwl/nest:controller term --project=calculator-api --directory=app/controllers
```
