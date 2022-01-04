The following document provides instructions on how to run the application.  This document supports 3 different ways to deploy the application: 
1. Docker-Compose
2. Deploy to MiniKube
3. Deploy to a Kubernetes Cluster with Helm

# Deploy using Docker Compose
To launch the application using docker compose here is the following command:

This will launch the application in a terminal but leave it running
```
docker-compose up
```

This will launch the application as a background application

```
docker-compose up -d
```

The following command will stop all the containers in docker
```
docker-compose down
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