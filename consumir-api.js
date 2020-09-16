

const https = require('https');

const doRequest= (options, data) => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      let responseBody = '';

      res.on('data', (chunk) => {
        responseBody += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(responseBody));
      });
    });

    req.on('error', (err) => {
      reject(err);
    });
    req.end();
  });
}

const getApi = async (substr)=>{
    try {
        const data = JSON.stringify({});
        const options = {
            hostname: 'jsonmock.hackerrank.com',
            port: 443,
            path: `/api/movies/search/?Title=${substr}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        };
        return await doRequest(options, data);
    }catch(err) {
        return err
    }    
    
}

const getMovieTitles = async (substr) => {
    try{
        const uri = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`;
        const getdata = await getApi(substr);
        console.log('--getdata--', getdata);
        return getdata;

    } catch (error) {
    return error;
    }
}

const titles = getMovieTitles('spiderman')
.then( (response)=> console.log('--response--', response) )
