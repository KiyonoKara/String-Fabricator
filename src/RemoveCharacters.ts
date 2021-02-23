const stripWhiteSpace = function(str): string { return str.replace(/\s+/g, ' ').trim; }
const stripSpecialChars = function (str): string { return str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>{}\[\]\\\/]/gi, ''); }
const stripNonLatinChars = function(str): string { return str.replace(/[^\w\s]/gi, ''); }
const removeNonASCIIChars = function(str): string { return str.replace(/[^\x00-\x7F]/g, ''); }

export { stripWhiteSpace, stripSpecialChars, stripNonLatinChars, removeNonASCIIChars };
