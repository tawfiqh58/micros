# Microservices app

This will be a microservices web application

Init Express server
Copy Dockerfile
$ docker build -t express-server .

`-t` to add tags to the image
`express-server` you can refer to that image later
`.` docker will find Dockerfile in the current dir

$ docker images
to see all docker images available to the machine

## Kubernetes

We have added kubernetes deployment yaml config file
This file will be responsible to create `pods` inside our
kubernetes cluster
