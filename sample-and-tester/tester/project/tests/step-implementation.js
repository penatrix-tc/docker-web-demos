const {
    openBrowser, closeBrowser, $, goto
} = require('taiko')
const assert = require('assert')
const URL = 'solution-container:8080/'

beforeSuite(async () => {
	await openBrowser({
		headless: true,
		args: [
			'--disable-gpu',
			'--disable-dev-shm-usage',
			'--disable-setuid-sandbox',
			'--no-first-run',
			'--no-sandbox',
			'--no-zygote',
			'--observe'
		]
	});

});

afterSuite(async () => {
	await closeBrowser();
});

step('Verify page is reachable', async () => {
  try {
    await goto(URL)
    assert(true)
  } catch (e) {
    console.log(e.message)
    assert(false)
  }
})