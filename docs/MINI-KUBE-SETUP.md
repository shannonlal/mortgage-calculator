# Kubernetes setup

The following is some basic intructions and links to good references for configuring

Here is a link on how to install Mini Kube in your browser
https://minikube.sigs.k8s.io/docs/start/


## Start Minikube locally
```
minikube start
```

## Start Minikube dashboard

```
minikube dashboard
```

# Minikube Deployment

## Setup Environment (ConfigMap) 
The following command will deploy config map to the environment
```
kubectl apply -f deployment/envs.yaml
```

## Get the list of config maps

```
kubectl get configmap
```

## Get the data from the config map

```
kubectl get configmaps calculator-envs -o yaml
```

## Deploy the Deployment
```
kubectl apply -f deployment/deployment.yaml
```

## Delete the Deployment 
```
kubectl delete deployment
```

## Get a list of deployments

```
kubectl get deployment
```

## Build a docker image inside minikube
Note: Minikube has a separate docker daemon so when you build a docker image locally you need to build it within the minikube environment.

```
eval $(minikube docker-env)

docker build -f ./apps/calculator-api/Dockerfile . -t calculator-api 

# Additionally you can check to see if starwars-node Docker image is in minikube by

minikube ssh

docker@minikube:~$ dokcer images
# You should see starward-node docker image
```

## Get the service

```
kubectl get service
```

## Get the service url from minikube

```
minikube service calculator-service --url
```