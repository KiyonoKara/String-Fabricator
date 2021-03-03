import { Japanese } from "../../src";
const jp = new Japanese();
console.log(jp.extractJapaneseCharacters("おいしラメーン", "any"));
console.log(jp.getJapaneseCharacterCount("おはよう。。。まあ。。。実は6時だけど。。。"));
console.log(jp.fabricateJapaneseStrings(["《〭〭〭〭〭〭 》", "あいいいいいいい", "ＨＩＩＩＩＩＩ", "一丁丂七丄丅丆万丈三上下丌不与丏"], 'getJapaneseCharacterCount'));
console.log(jp.cleanJapanese("いいひと. いいひと: いいひと! いいひと~いいひと, いいひと?"));