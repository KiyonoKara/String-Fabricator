const capitalizeFirstChar = function(str): string { return str[0].toUpperCase() + str.slice(1); }
const capitalizeFLEW = function(str): string { return str.replace(/\w\S*/g, strTxt => { return strTxt.charAt(0).toUpperCase() + strTxt.substr(1).toLowerCase(); }); }
const mockingText = function(str): string { return str.toLowerCase().split("").map((i, j) => j % 2 === 0 ? i : i.toUpperCase()).join(""); }

export { capitalizeFirstChar, mockingText, capitalizeFLEW };