const https = require('https');

async function getFrom(url) {
    https.get(url, res => {
        if (res.statusCode != '200') {
            return console.log('API not found');
        }
        else {
            let data = [];
            let heroes = [];
            const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
            console.log('Status Code: ', res. statusCode);
            console.log('Date in Response Header: ', headerDate)

            res.on('data', chunk => {
                data.push(chunk);
            })

            res.on('end', async () => {
                console.log('Response ended.');
                const users = await JSON.parse(Buffer.concat(data).toString());

                for (user of users) {
                    heroes.push();
                }
            console.log('Finished parsing!');
            })
            return heroes;
        }
    })
}

module.exports = {
    getFrom
}