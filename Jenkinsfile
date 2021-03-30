pipeline {
  agent {
    docker {
      image 'node:15'
    }
  }
  stages {
    stage('Install') {
      steps {
        sh 'node --version'
        sh 'npm --version'
        sh 'yarn --version'
        sh 'yarn install'
      }
    }
    stage('Unit tests') {
      steps {
        sh 'CI=true yarn test'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }
  }
}
