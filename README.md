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

## Create Docker Hub account

You need a Docker Hub account with `username` and `password` to
automatically deploy docker build image to your registry
to access it by using kubernetes.
Remember to give a valid unique name to your image build -t
to not overlap `docker images`

## Add secrets to Github

You need to put Docker Hub `username` and `password` to github secrets
to access it from github actions

## Create kubernetes cluster

You need a kubernetes cluster to rotate new docker image

    1. Create a cluster in digital-ocean
    2. Copy access token
    3. Past it to github secrets

## Config Github Actions

You need to config github actions to automate this process

    1. Create a deplopy.yaml file inside .github/workflows
    2. _
