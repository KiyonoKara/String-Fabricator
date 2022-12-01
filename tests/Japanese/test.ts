import { Japanese } from "../../src";
const jp = new Japanese();
console.log(jp.extractJapaneseCharacters("美味しいラメーン", "any"));
console.log(jp.getJapaneseCharacterCount("おはようございます。。。実は、電話でございません"));
console.log(jp.fabricateJapaneseStrings(["《〭〭〭〭〭〭 》", "あいいいいいいい", "ＨＩＩＩＩＩＩ", "一丁丂七丄丅丆万丈三上下丌不与丏"], 'getJapaneseCharacterCount'));
console.log(jp.cleanJapanese("いいひと. 良い人: 良いひと! 良い~良い, テスト?"));
