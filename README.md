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
       How to:
       In the Digital Ocean dashboard go to API of the sidebar,
       then create a new Applications & API access token
    3. Past it to github secrets
       How to:
       Under your repository name, click "Settings",
       then in the "Security" section of the sidebar,
       select "Secrets and variables" and add secret.

## Config Github Actions

You need to config github actions to automate this process
to do so just create a `action-name.yaml` file inside `.github/workflows`
it will automatically create a Github Actions for you.

NOTE: Remember now github will only trigger the action if you change
something to the directory you have mentioned inside the action file
and push it or whatever action you have set the action to run.

```yaml
on:
  push:
    branches: 
      - main
    paths:
      - 'server/**'
```

For the above example github will trigger action for `git push` which contains
changes in the `server/**` directory.
