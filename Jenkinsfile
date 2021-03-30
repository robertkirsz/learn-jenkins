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
    stage('e2e tests') {
      steps {
        sh 'yarn e2e:ci'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn build'
      }
    }
  }
}
