pipeline {
    agent {
        docker {
            image 'node:22.12.0'
            args '-u root -w /home/root'
        }
    }
    environment {
        image = ''
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
                archiveArtifacts artifacts: 'build/**', fingerprint: true, onlyIfSuccessful: true
            }
        }
//         stage('build-docker-image') {
//             agent {
//                 docker {
//                     image 'docker:latest'
//                     reuseNode true
//                 }
//             }
//             steps {
//                 script {
//                     image = docker.build 'withlitvinov/www-withlitvinov-com'
//                 }
//             }
//         }
    }
}
