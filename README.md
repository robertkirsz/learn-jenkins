# learn-jenkins

## 1. Preparations

```sh
docker network create jenkins
docker image pull docker:dind
```

## 2. Run official Jenkins container

```sh
bash docker-run-jenkins-docker.sh
```

## 3. Create custom Jenkins image

```sh
docker build -t myjenkins-blueocean:1.1 .
```

This reads the Dockerfile that's in the root folder.

## 4. Run it

```sh
bash docker-run-jenkins-blueocean.sh
```

Jenkins will be available at http://localhost:1234
