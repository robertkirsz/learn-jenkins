pipeline {
  agent { docker { image 'node:15' } }
  stages {
    stage('Node version') {
      steps {
        sh 'echo "👇 Here is a version of Node that we use"'
        sh 'npm --version'
      }
    }
    stage('Files list') {
      steps {
        sh '''
          echo "This are files in the current directory:"
          ls -lah
        '''
      }
    }
  }
}
