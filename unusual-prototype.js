String.prototype.toMoney = function(decimal,separator){
    var decimal = decimal == undefined ? 2 : decimal;
    var separator = separator == undefined ? ',' : separator;
    var number = parseFloat(this).toFixed(decimal);
    number = number.toString().replace(/\,/g,''); /** remove commas to clean the string */
    /** split reverse and join then divide the string into 3 parts then insert the separator you wish for */
    return number.split('').reverse().join('').replace(/(\d{3}(?!.*\.|$))/g, '$1'+separator).split('').reverse().join('');
}
