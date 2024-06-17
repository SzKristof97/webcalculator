pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deliver') {
            steps {
                sh 'sudo ./jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site?'
                sh 'sudo ./jenkins/scripts/kill.sh'
            }
        }
    }
}