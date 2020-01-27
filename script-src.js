import {appendDiv} from './append-div.js'
import * as d3 from 'https://unpkg.com/d3?module'

appendDiv('Hello from external script')

import('./async-script.js').then(
  moduleExports => {
    moduleExports.go()
  },
  error => {
    console.error('there was an error loading the script')
    throw error
  },
)
