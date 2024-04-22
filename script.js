var ogr1name = "ada ";
var ogr1surname = "bilgi";
var ogr1birthday = "2010";
var ogr1_not1 = 70;
var ogr1_not2 = 70;
var ogr1_not3 = 80;

var ogr2name = "yiğit";
var ogr2surname = "bilgi";
var ogr2birthday = "2012";
var ogr2_not1 = 40;
var ogr2_not2 = 40;
var ogr2_not3 = 50;

let date_now = new Date().getFullYear();

let ogr1_old = date_now - Number(ogr1birthday);
console.log(ogr1_old);

let ogr2_old = date_now - Number(ogr2birthday);
console.log(ogr2_old);
