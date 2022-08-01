const mathScore = prompt('수학 점수?');
const engScore = prompt('영어 점수?');
const result = mathScore + engScore;

String(); //문자열로 변환

Number(); //숫자형으로 변환
Number('문자'); //NaN

Number(true); //1
Number(false); //0

Number(null); //0
Number(undefined); //NaN

Boolean(''); // false: 0, '', null, undefined, NaN
