# Docker Setup

## Docker installation on Mack

Install Docker Desktop with the following instructions
https://hub.docker.com/editions/community/docker-ce-desktop-mac

# Docker Instruction

To build the Docker Image you must have Docker installed on your machine. To
build docker run the following command:

## Build the Docker Image

NOTE Space before period
`docker build -f ./apps/calculator-api/Dockerfile . -t calculator-api`

## Verify that your Docker Image was built

`docker images`

## To Run the docker image

`docker run -d -id -p3333:3333 calculator-api `

## To view list of Docker Containers

`docker ps`

## To stop the docker image

`docker stop (CONTAINER ID)`

## To view the logs of a particular container

`docker logs (CONTAINER ID)`

## To enter a running container

`docker exec -it (CONTAINER ID) bash`

## Start the local development using Docker Compose
```
docker-compose up
```

## Troubleshooting
If you get an issue where there might be a service running on a particular port.  You can run the following command to get a list of all the services running on a given port

This command will list all services running on TCP port 8082
```
netstat -vanp tcp | grep 8082
```
