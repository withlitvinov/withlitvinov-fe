pipeline {
    agent {
        docker {
            image 'node:22.12.0'
            args '-u root -w /home/root'
        }
    }
    stages {
        stage('setup-pnpm') {
            steps {
                sh 'corepack enable'
                sh 'corepack prepare pnpm@latest-9 --activate'
            }
        }
        stage('install-node-modules') {
            steps {
                sh 'pnpm install'
            }
        }
        stage('lint') {
            steps {
                sh 'pnpm lint'
            }
        }
        stage('build') {
            steps {
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