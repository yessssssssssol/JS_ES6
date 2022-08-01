const nickName = prompt('이름을 입력하세요.');
alert(`안녕하세오, ${nickName}님. 환영합니다.`);

const isAdult = confirm('당신은 성인 입니까?'); //true or false를 활용하여 사용자에게 한번 더 확인 가능
console.log(isAdult);

prompt('예약일을 입력하세요.', '2020-10-');
confirm('구독을 취소 하시겠습니까?');

/* 단점
1. 스크립트 일시 정지
2. 스타일링 못 함 */
