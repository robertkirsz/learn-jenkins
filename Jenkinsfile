pipeline {
  agent { docker { image 'node:15' } }
  stages {
    stage('Install') {
      steps {
        sh 'node --version'
        sh 'npm --version'
      }
    }
    stage('Unit tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
