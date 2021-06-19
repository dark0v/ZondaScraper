  //Defining Service URL's
  var wsAlertsDefault  = 'https://ws.smn.gob.ar:443/alerts/type/AL';
  var wsAlertsCP = 'https://ws.smn.gob.ar:443/alerts/type/AC';

  //Declaring  Flags
  var hideAC = false;
  var hideAL = false;

  //Gettign the Default Alerts from WS
  $.getJSON( wsAlertsDefault, function( data ) {

    var items = [];
    jQuery.each( data, function( key, val ) {

      items.push( '<li><a href="/smn_alertas/alertas"><span class="title">'+val.title+'</span> <span class="description">'+val.description.slice(0,80)+'...</span></a></li>' );
    });
    if(items.length >0){
      jQuery('#alertsDefaultLinks').html(items.join(""));
      var alertText = (items.length==1)? "Alerta Vigente":"Alertas Vigentes";
      jQuery('.alert-al .total a').html(items.length+' '+alertText);
    }
    else {
      jQuery('.alert-al').html("");
      hideAL = true;
    }
})
