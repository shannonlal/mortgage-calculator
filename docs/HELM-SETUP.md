The following is some notes related to configuring and setting up Helm on your local development.  Note this will install Helm 3 which no longer uses Tiller.  Tiller was a container that was installed in your Kubernetes Cluster and was open to security vulnerabilities.  Helm 3 no longer uses Tiller and everything is installed on the client side useing `kubectl`

# Install Helm

```
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
```

# Confirm Helm is installed

```
helm version
```

# Search for a Helm Chart

```
helm search hub prometheus-operator
```

# Create Helm Charts for project

```
helm create calculator
```

# Install a Helm Chart for a project

```
helm upgrade --install test-app calculator
```

# List Helm Releases
```
helm list
```

# Uninstall Helm Release
```
helm uninstall test-app
```