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
