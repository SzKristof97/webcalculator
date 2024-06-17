pipeline {
    agent any

    stages{
        stage('Checkout'){
            steps{
                checkout scm
            }
        }
        stage('Install Dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Build Image'){
            steps{
                sh 'docker build -t node-app:1.0 .'
            }
        }
        stage('Docker Push'){
            steps{
                withCredentials([usernamePassword(credentialsId: 'docker_cred', usernameVariable: 'DOCKERHUB_PASSWORD', passwordVariable: 'DOCKERHUB_USERNAME')]){
                    sh 'docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD'
                    sh 'docker tag node-app:1.0 szkristof97/calculator:1.0'
                    sh 'docker push szkristof97/calculator:1.0'
                }
            }
        }
    }
}