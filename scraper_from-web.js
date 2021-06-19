
var fs = require('fs'),
    request = require('request'),
    cheerio = require('cheerio');
    rp = require('request-promise');
const url = 'https://www.smn.gob.ar/smn_alertas/alertas';

request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
        
        
        $('div.panel.panel').each(function(i, element){
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
            fs.appendFile('output1.json', JSON.stringify(grupo, null, 4), function(err, ){
                if(err){console.log(err)}
            });console.log('File successfully written!');

            
            /* fs.readFile('output.json', function(err, data){
                var json = JSON.parse(data)
                json.push(grupo)

                fs.writeFile('output1.json', JSON.stringify(json, null, 4))

                console.log('File successfully written!');
            })
            //fs.writeFile('output.json', JSON.stringify(grupo, null, 4), function(err){

            //    console.log('File successfully written!');
            */


            })
        }
    });


fs.readFileSync
/*       
        var data = {};
        var j = 1;

    var Mendoza = $('#block-system-main').filter(function(){
        return $(this).children().index('Mendoza') > -1;
    }).text();
    }
})

    $(Mendoza).each(function (){
        var a = $(this);
        title = a.children().children().first().text().trim();
        zone = a.children().children().first().first().next().text().trim();
        text = a.children().children().last().prev().text().trim();

        var groupet = {
        title: title,
        zone: zone,
        text: text,
        };
        data[j] = groupet;
        j++;
    })
*/ 



/*
    fs.writeFile('output.json', JSON.stringify(data, null, 4), function(err){

        console.log('File successfully written!');

    });

}

})
*/ 
  

/*
request(url, function(error, response, html){
    var title;
    var json = {
        title: ""
    };
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html)
        $('div.panel-heading').each(function(i, element){
            var el = $(this);
            var title = el.text();
            json.title = title;

            fs.writeFile('title.json', JSON.stringify(json, null, 4), function(err){
                console.log('The title has been saved');
            })
            
        })
        
    }
})

*/
