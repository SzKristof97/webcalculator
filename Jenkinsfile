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
    }
}