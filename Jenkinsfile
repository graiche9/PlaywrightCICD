pipeline{
    agent {
        docker {
           image 'mcr.microsoft.com/playwright:v1.51.0-noble'
        }
    }

        stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        
        stage('Run Playwright Tests') {
            steps {
                script {
                    sh 'npx playwright test --trace on' 
                }
            }
        }

/*
        stage('Generate Report') {
            steps {
                script {
                    sh 'npx playwright test --reporter=html'
                    sh 'npx playwright show-report' 
                }
            }
        }
*/
        stage('Generate Report Junit') {
            steps {
                script {
                    //sh 'npx playwright test'
                    sh 'npx playwright test --reporter=junit --output=./results.xml'
                   // sh 'npx playwright test --reporter=junit --output=test-results.xml'
                   // sh 'npx playwright test --reporter=junit --output=test-results'
                }
            }
        }

        stage('Publish JUnit Report') {

            steps {
                    junit '**/results.xml' 
            }
        }

    }   
}