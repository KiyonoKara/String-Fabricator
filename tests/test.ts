import { Japanese } from "../src";
const jp = new Japanese();
console.log(jp.extractJapaneseCharacters("おいしラメーン", "hiragana"));
console.log(jp.getJapaneseCharacterCount("おはよう。。。まあ。。。実は6時だけど。。。"));