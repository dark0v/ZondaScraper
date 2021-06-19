
var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio');
    rp = require('request-promise');
const url = 'https://www.smn.gob.ar/smn_alertas/alertas';

request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
        
        
        $('div.panel.panel').each(function(i, element) {
            var a = $(this).children();
            var title = a.first().children().contents().not('small').text().trim();
            var number = a.first().children().find('small').text();
            var zones = a.first().next().text().trim();
            var cuerpo = a.first().next().next().text().trim();
            var emision = a.last().children().first().text().trim();
            var proxima = a.last().children().last().text().trim();
            // parsed meta data object
            var grupo = {
                title: title,
                number: number,
                zones: zones,
                cuerpo: cuerpo,
                emision: emision,
                proxima: proxima,
            };
            
            fs.appendFile('AL.json', JSON.stringify(grupo, null, 4), function(err, ){
                if(err){console.log(err)}
            });console.log('File successfully written!');
        
            }
        )
    }
})

