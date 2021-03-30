pipeline {
  agent { docker { image 'node:15' } }
  stages {
    stage('build') {
      steps {
        sh 'npm --version'
      }
    }
  }
}
