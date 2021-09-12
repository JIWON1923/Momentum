# Momentum
## My First JS Project
- JS, CSS는 단독으로 실행할 수 없으며, 브라우저 내에서 HTML의 도움을 받아야 함.
- alert : 경고창 (알림창)

## Variables
- 값 저장 및 유지
- 변수명은 보통 CamelCase로 작성 (Python : SnakeCase)
- const 변수명 = 값;  // let 변수명 = 값; // var
- 항상 const 사용, let은 필요할 때만 사용, var은 절대 사용하지 말 것.
- 즉, 변수의 업데이트가 필요할 때에는 let 키워드로 변수를 사용해야한다. 

## Basic Data Type
### number
- Integer : 정수
- float : 실수
### Text
- String: 문자열
- 문자열의 결합은 +로 이루어진다.
### Boolean
- true / false의 값을 가진다. (null : 값이 없음을 의미. false와 다름.)
- 사용자가 로그인 했는가 / 비디오가 재생되고 있는가 등의 값을 저장함.
- 만약 선언 된 변수에 아무런 값이 없다면 null이라면 undefined로 출력됨. (null과 다름. 비어있음과 값이 정의되지 않음의 차이)

## Data Structure
### Array
- const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
- daysOfWeek.push(값) ; // 값을 배열 맨 뒤에 삽입한다.
- 각 요소는 콤마로 구분되며, 배열의 첫 인덱스는 0부터 시작함.
- 같은 type일 필요는 없음. 정수, String, boolean 등 섞어서 list를 만들 수 있음. (변수도 가능)
### Object
- const player = {
    name: "jiwon",
    points: 10
};
- 각 속성은 . 연산자로 접근 가능함. (player.name)
- 속성은 언제든지 추가 가능 ! ( player.lastname = "Lee" 오류 안 남.)

## Function
### Example code
function sayHello( variableName ){
    //Code
    console.log("Hello!")
}
-  argument는 함수 블럭 내에서만 존재하는 변수이다.

## 기타
- console.log( ) : console 창에 log 찍는 것 (print)
