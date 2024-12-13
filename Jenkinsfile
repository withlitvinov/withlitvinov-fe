pipeline {
    agent {
        dockerfile {
            filename 'jenkins.Dockerfile'
            additionalBuildArgs '--build-arg UID=$(id -u) --build-arg GID=$(id -g)'
        }
    }
    stages {
        stage('Lint') {
            steps {
                sh 'pnpm install'
                sh 'pnpm lint'
            }
        }
        stage('Build') {
            steps {
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