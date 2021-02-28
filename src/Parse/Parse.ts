const insertSeparatorIntoNum = function(num: string, type?: string): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, type || ",");
}

export { insertSeparatorIntoNum };