const { telegram_scraper } = require('./../src/telegram-scraper')

const http = require('http')

const serverport = process.env.PORT || 8080

let telegram_channel = 'telegram'

const server = http.createServer(async (req, res) => {

	let result = await telegram_scraper(telegram_channel)

	res.statusCode = 200

	res.setHeader('Content-Type', 'application/json')

	res.setHeader('Access-Control-Allow-Origin', '*')

	res.end(result)

})

server.listen(serverport, () => {

	console.log(`Server running at ${serverport}`)

})


/*
void async function main() {

	let telegram_channel_username = 'telegram'

	// Example 1 : Default way of doing, get the first 20 messages from the channel
	const result1 = await telegram_scraper(telegram_channel_username);
	console.log(result1)

	// Example 2 : Get the second page of messages from the channel with 10 messages per page
	const result2 = await telegram_scraper(telegram_channel_username, {
		page: 2,
		limit: 10
	});

	console.log(result2)

	// Example 3 : Filter messages between 2023-01-01 and 2023-01-31
	const result3 = await telegram_scraper(telegram_channel_username, {
		startDate: '2023-01-01',
		endDate: '2023-01-31'
	});

	console.log(result3)

	// Example 4: Pagination based on message ID (to get the next page)
	const firstPageResult = await telegram_scraper(telegram_channel_username);
	const firstPageData = JSON.parse(firstPageResult);
	const nextPageResult = await telegram_scraper(telegram_channel_username, {
		beforeMessageId: firstPageData.pagination.nextBeforeId
	});

}()
*/
