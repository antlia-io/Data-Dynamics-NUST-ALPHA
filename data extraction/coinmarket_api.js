/* Example in Node.js ES6 using request-promise */

const rp = require('request-promise');

const fs = require('fs');

const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': 'c8ff658d-497e-4832-b6df-d809ae1e3c02'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  //console.log('API call response:', response);
  fs.writeFile('coinmarketcap.json', JSON.stringify(response), (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Response saved!');
  });
}).catch((err) => {
  console.log('API call error:', err.message);
});
