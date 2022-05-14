# Deployment of application to kubernetes

## Configure Minikube with NGINX
https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/
```
minikube addons enable ingress
```

```
kubectl get pods -n ingress-nginx
```

## Create a namespace

-- Note replace name with the name of the namespace (dev, qa, prod)
```
kubectl create namespace ${name}

```

```
kubectl create namespace mortgage-dev
```

## Create a config map and apply to a namespace

```
kubectl apply -f configmaps/envs.yaml --namespace="mortgage-dev"
```

## Deploy the Calculator API Deployment
```
kubectl apply -f deployments/api-deployment.yaml --namespace="mortgage-dev"
```

## Deploy the Calculator API Deployment
```
kubectl apply -f deployments/mortgage-deployment.yaml --namespace="mortgage-dev"
```

## Deploy the Calculator API Deployment
```
kubectl apply -f services/api-service.yaml  --namespace="mortgage-dev"
```

## Deploy the Calculator API Service
```
kubectl apply -f services/mortgage-service.yaml  --namespace="mortgage-dev"
```