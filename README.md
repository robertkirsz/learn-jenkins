# learn-jenkins

## 1. Install Jenkins

```sh
docker network create jenkins
```

```sh
bash docker-run-jenkins-docker.sh
```

Or manually:

```sh
docker run \
  --name jenkins-docker \
  --rm \
  --detach \
  --privileged \
  --network jenkins \
  --network-alias docker \
  --env DOCKER_TLS_CERTDIR=/certs \
  --volume jenkins-docker-certs:/certs/client \
  --volume jenkins-data:/var/jenkins_home \
  --publish 2376:2376 \
  docker:dind
```

## 2. Create custom Jenkins instance

```sh
docker build -t myjenkins-blueocean:1.1 .
```

This reads the Dockerfile that's in the root folder.

## 3. Run it

```sh
bash docker-run-jenkins-blueocean.sh
```

Or manually:

```sh
docker run \
  --name jenkins-blueocean \
  --rm \
  --detach \
  --network jenkins \
  --env DOCKER_HOST=tcp://docker:2376 \
  --env DOCKER_CERT_PATH=/certs/client \
  --env DOCKER_TLS_VERIFY=1 \
  --publish 1234:8080 \
  --publish 50000:50000 \
  --volume jenkins-data:/var/jenkins_home \
  --volume jenkins-docker-certs:/certs/client:ro \
  myjenkins-blueocean:1.1
```

Jenkins will be available at http://localhost:1234
