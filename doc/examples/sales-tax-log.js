
var seneca = require('../..')()

seneca.use( 'sales-tax-plugin', {rate:0.23} )

seneca.ready(function(err){
  if( err ) return process.exit(!console.error(err));

  seneca.act( {role:'shop', cmd:'salestax', net:100})
  seneca.act( {role:'shop', cmd:'salestax', net:200})
  seneca.act( {role:'shop', cmd:'salestax', net:300})
})

