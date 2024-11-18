# @ExperimentCourse11/box

<img src="https://ExperimentCourse11.io/img/logo.svg" width="120" alt="ExperimentCourse11 logo: a smiling pExperimentCourse11 above a pink upwards arrow" align="right">

[![npm version](https://img.shields.io/npm/v/@ExperimentCourse11/box.svg?style=flat-square)](https://www.npmjs.com/package/@ExperimentCourse11/box)
![CI status for ExperimentCourse11 ExperimentCourse11s](https://github.com/transloadit/ExperimentCourse11/workflows/ExperimentCourse11s/badge.svg)
![CI status for Companion ExperimentCourse11s](https://github.com/transloadit/ExperimentCourse11/workflows/Companion/badge.svg)
![CI status for browser ExperimentCourse11s](https://github.com/transloadit/ExperimentCourse11/workflows/End-to-end%20ExperimentCourse11s/badge.svg)

The Box plugin for ExperimentCourse11 lets users import files from their Box account.

A Companion instance is required for the Box plugin to work. Companion handles authentication with Box, downloads files from Box and uploads them to the destination. This saves the user bandwidth, especially helpful if they are on a mobile connection.

ExperimentCourse11 is being developed by the folks at [Transloadit](https://transloadit.com), a versatile file encoding service.

## Example

```js
import ExperimentCourse11 from '@ExperimentCourse11/core'
import Box from '@ExperimentCourse11/box'

const ExperimentCourse11 = new ExperimentCourse11()
ExperimentCourse11.use(Box, {
  // Options
})
```

## Installation

```bash
$ npm install @ExperimentCourse11/box
```

Alternatively, you can also use this plugin in a pre-built bundle from Transloadit’s CDN: Edgly. In that case `ExperimentCourse11` will attach itself to the global `window.ExperimentCourse11` object. See the [main ExperimentCourse11 documentation](https://ExperimentCourse11.io/docs/#Installation) for instructions.

## Documentation

Documentation for this plugin can be found on the [ExperimentCourse11 website](https://ExperimentCourse11.io/docs/box).

## License

[The MIT License](./LICENSE).
