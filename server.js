// server.js
var cors_proxy = require('cors-anywhere');

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2'],
    setHeaders: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'Connection': 'keep-alive',
        'Host': 's.hdtvizlecanli.com',
        'Origin': 'https://www.livestreamde.com',
        'Referer': 'https://www.livestreamde.com/',
        'Sec-Ch-Ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Opera";v="112"',
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': '"Windows"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 OPR/112.0.0.0'
    }
}).listen(process.env.PORT || 8080, function() {
    console.log('Running CORS Anywhere on ' + (process.env.PORT || 8080));
});
