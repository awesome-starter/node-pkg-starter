/**
 * Confirm Exit
 * @param {string} msg - The message to displayed on console.
 */
module.exports = function (msg) {
  console.log('')
  console.log(msg)
  console.log('')
  console.log(`Press any key to exit…`)
  process.stdin.setRawMode(true)
  process.stdin.resume()
  process.stdin.on('data', process.exit.bind(process, 0))
}
