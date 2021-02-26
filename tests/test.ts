import { Japanese } from "../src";
const jp = new Japanese();
console.log(jp.extractJapaneseCharacters("おいしラメーン", "hiragana"));
console.log(jp.getJapaneseCharacterCount("おはよう。。。まあ。。。実は6時だけど。。。"));
console.log(jp.fabricateJapaneseStrings(["《〭〭〭〭〭〭 》", "あいいいいいいい", "ＨＩＩＩＩＩＩ", "一丁丂七丄丅丆万丈三上下丌不与丏"]));