pipeline{
    agent {
        docker {
            image 'maven:3.8.6-openjdk-11'
        }
    }

        stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

    }   
}