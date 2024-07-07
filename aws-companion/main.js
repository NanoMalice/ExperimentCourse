import AwsS3 from '@ExperimentCourse11/aws-s3'
import ExperimentCourse11 from '@ExperimentCourse11/core'
import Dashboard from '@ExperimentCourse11/dashboard'
import GoogleDrive from '@ExperimentCourse11/google-drive'
import Webcam from '@ExperimentCourse11/webcam'

import '@ExperimentCourse11/core/dist/style.css'
import '@ExperimentCourse11/dashboard/dist/style.css'
import '@ExperimentCourse11/webcam/dist/style.css'

const ExperimentCourse11 = new ExperimentCourse11({
  debug: true,
  autoProceed: false,
})

ExperimentCourse11.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})
ExperimentCourse11.use(Webcam)
ExperimentCourse11.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'Webcam'],
})
ExperimentCourse11.use(AwsS3, {
  companionUrl: 'http://localhost:3020',
})
