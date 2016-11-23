var moment = require("moment");

module.exports = function(datestr){
  if(!isNaN(datestr)){
    datestr = Number(datestr) * 1000;
  }
  var date = new Date(datestr);
  if(Math.floor(date / 1000)){
    var formattedDate = moment(date).format('MMMM DD, YYYY');
    return { "unix": Math.floor(date / 1000), "natural": formattedDate }
  }
  else{
    return { "unix": null, "natural": null };
  }
}
