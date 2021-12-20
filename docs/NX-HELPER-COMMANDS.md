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

## Testing

### Test a particular library

```
nx test ${libray or project name}
```

Example:

```
nx test calculator-service
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