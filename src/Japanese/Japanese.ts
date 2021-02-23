interface Options {
    type?: string;
}

const regexJapanese = {
    punctuation: /[\u3000-\u303F]/g,
    hiragana: /[\u3040-\u309f]/g,
    katakana: /[\u30a0-\u30ff]/g,
    roman: /[\uff00-\uff9f]/g,
    cjk: /[\u4e00-\u9faf]/g,
    extendedCJK: /[\u3400-\u4dbf]]/g,
    any: /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B|[0-9]/g
}

class Japanese {
    options: Options;
    constructor(options?: Partial<Options>) {
        this.options = options || {};
    }

    public extractJapaneseCharacters(str: string, type?: string) {
        const regex = type ? regexJapanese[type] : this.options.type ? regexJapanese[this.options.type] : regexJapanese.any;
        const theStr = str || "";
        if (theStr) {
            const extracted = theStr.match(regex)?.join("");
            return extracted ? extracted : "";
        }

        if (!theStr) { return ""; }
    }

    public removeJapaneseCharacters(str: string, type?: string) {
        const regex = type ? regexJapanese[type] : this.options.type ? regexJapanese[this.options.type] : regexJapanese.any;
        const theStr = str || "";
        if (!theStr) { return ""; }
        if (theStr) {
            const parsed = theStr.replace(regex, "");
            return parsed || "";
        }
    }
}

export { Japanese };
