The following document provides instructions on how to run the application.  This document supports 3 different ways to deploy the application: 
1. Docker-Compose
2. Deploy to MiniKube
3. Deploy to a Kubernetes Cluster with Helm



## Docker Compose

Documentation is [here](./docker/README.md)

```

# Deploy to MiniKube
## Deploy Environment Variables using a Config Map

```
kubectl apply -f deployment/envs.yaml
```

## Deploy the Calculator API Deployment
```
kubectl apply -f deployment/api-deployment.yaml
```

## Deploy the Calculator API Service
```
kubectl apply -f deployment/api-service.yaml
```

## Get the Service Port exposed
```
minikube service calculator-service --url
```

## Deploy the Mortgage API Deployment
```
kubectl apply -f deployment/mortgage-deployment.yaml
```

## Deploy the Mortgage Service
```
kubectl apply -f deployment/mortgage-service.yaml
```

## Get the Service Port exposed
```
minikube service mortgage-service --url
```