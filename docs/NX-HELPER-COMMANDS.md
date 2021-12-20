# List of helper commands

## Test a particular library

```
nx test ${libray or project name}
```

Example:

```
nx test calculator-service
```

## Create a Nest JS Service in a project

The following command will create a term service (and spec) in a project (library or app) called calculator service
```
nx g @nrwl/nest:service term --project=calculator-service
```

## Create a Nest JS Controller in a project
The following command will create a term service (and spec) in a project (library or app) called calculator service

```
nx g @nrwl/nest:controller term --project=calculator-ui
```
