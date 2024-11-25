import ExperimentCourse11 from '@ExperimentCourse11/core'
import Box from '..'

{
  const ExperimentCourse11 = new ExperimentCourse11()
  ExperimentCourse11.use(Box, {
    companionUrl: '',
    companionCookiesRule: 'same-origin',
    target: 'body',
    title: 'title',
  })
}
