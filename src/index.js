const { resolve } = require('path')
const { isEmpty } = require('@bassist/node-utils')
const { randomString } = require('@bassist/utils')
const confirmExit = require('./libs/confirmExit')

async function run() {
  // In pkg, you must use `cwd` instead `__dirname`
  const cwd = process.cwd()

  // Use some wrapped Node methods
  // https://paka.dev/npm/@bassist/node-utils
  console.log('Check the current directory is empty:')
  console.log(isEmpty(resolve(cwd)))
  console.log()

  // Use some commonly used utility functions
  // https://paka.dev/npm/@bassist/utils
  console.log('Get a random string:')
  console.log(randomString())
  console.log()

  confirmExit('Hello World!')
}
run().catch((e) => {
  console.log(e)
})
