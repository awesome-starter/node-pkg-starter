import chalk from 'chalk'
import { resolve } from 'path'
import { isEmpty } from '@bassist/node-utils'
import { randomString } from '@bassist/utils'
import { confirmExit } from './utils.cts'
import { isDev } from './config.cts'

async function run() {
  // In pkg, you must use `cwd` instead `__dirname`
  const cwd = process.cwd()

  console.log('Current env is dev?')
  console.log(isDev)
  console.log()

  // Use some wrapped Node methods
  // https://paka.dev/npm/@bassist/node-utils
  console.log(chalk.green('Check the current directory is empty:'))
  console.log(isEmpty(resolve(cwd)))
  console.log()

  // Use some commonly used utility functions
  // https://paka.dev/npm/@bassist/utils
  console.log(chalk.blue('Get a random string:'))
  console.log(randomString())
  console.log()

  confirmExit()
}
run().catch((e) => {
  console.log(e)
})
