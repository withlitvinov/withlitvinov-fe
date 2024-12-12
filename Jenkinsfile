pipeline {
    environment {
        HOME = '.'
    }
    agent {
        docker {
            image 'node:22.12.0-alpine'
        }
    }
    stages {
        stage('Lint') {
            steps {
                sh 'whoami'
                sh 'corepack enable'
                sh 'corepack prepare pnpm@latest-9 --activate'
                sh 'pnpm install'
                sh 'pnpm lint'
            }
        }
        stage('Build') {
            steps {
                sh 'corepack enable'
                sh 'corepack prepare pnpm@latest-9 --activate'
                sh 'pnpm install'
                sh 'pnpm build'
            }
        }
    }
    post {
        success {
            archiveArtifacts artifacts: 'build/**', fingerprint: true, onlyIfSuccessful: true
        }
    }
}