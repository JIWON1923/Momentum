# Momentum
## My First JS Project
- JS, CSS는 단독으로 실행할 수 없으며, 브라우저 내에서 HTML의 도움을 받아야 함.
- alert : 경고창 (알림창)

### Variables
- 값 저장 및 유지
- 변수명은 보통 CamelCase로 작성 (Python : SnakeCase)
- const 변수명 = 값;  // let 변수명 = 값; // var
- 항상 const 사용, let은 필요할 때만 사용, var은 절대 사용하지 말 것.
- 즉, 변수의 업데이트가 필요할 때에는 let 키워드로 변수를 사용해야한다. 

### Basic Data Type
#### number
- Integer : 정수
- float : 실수
#### Text
- String: 문자열
- 문자열의 결합은 +로 이루어진다.
#### Boolean
- true / false의 값을 가진다. (null : 값이 없음을 의미. false와 다름.)
- 사용자가 로그인 했는가 / 비디오가 재생되고 있는가 등의 값을 저장함.
- 만약 선언 된 변수에 아무런 값이 없다면 null이라면 undefined로 출력됨. (null과 다름. 비어있음과 값이 정의되지 않음의 차이)

### Data Structure
#### Array
- const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
- daysOfWeek.push(값) ; // 값을 배열 맨 뒤에 삽입한다.
- 각 요소는 콤마로 구분되며, 배열의 첫 인덱스는 0부터 시작함.
- 같은 type일 필요는 없음. 정수, String, boolean 등 섞어서 list를 만들 수 있음. (변수도 가능)
#### Object
- const player = {
    name: "jiwon",
    points: 10
};
- 각 속성은 . 연산자로 접근 가능함. (player.name)
- 속성은 언제든지 추가 가능 ! ( player.lastname = "Lee" 오류 안 남.)

### Function
#### Example code
function sayHello( variableName ){
    //Code
    console.log("Hello!")
}
-  argument는 함수 블럭 내에서만 존재하는 변수이다.

### Conditional Statement
#### if - else statement
- if (condition) {
    // condition == true
} else if (condition){
    // condition == true
} else{
    위 조건문이 모두 거짓일 경우
}
### 기타
- console.log( ) : console 창에 log 찍는 것 (print)
-  console.log(typeof variableName) : 변수의 타입을 출력.
- 형 변환 passe 어쩌고  (parseInt : int 형으로 변경. )
- NaN : Not a Number (숫자가 아님)

## JavaScript on the Browser
### document
- HTML을 가리키는 객체
- 즉, Browser가 document 객체를 JS에게 전달해줌 : Browser가 HTML과 JS를 연결해줌
- JS는 Document를 통해 속성 값을 읽고, 변경할 수 있음.
### Event
- 클릭, 인터넷 연결 끊김 등 다양한 현상을 이벤트라고 함.
- 해당 이벤트를 감시하는 것이 EventListener
- function 함수명( ){ body code; } // 이벤트 발생했을 때 어떻게 대처할지 작성
- HTML_Element.addEventListener("동작//click", 함수명) = Element.on이벤트명 = 함수명
- 예: title.onclick = handleTitleclick; 이런식으로 작성 가능.
- Web APIs : JavaScript 관점 (이벤트 구글링 시 활용) // console.dir의 on~ 속성이 Event를 의미함.
- 즉, 항목을 찾고, 이벤트를 설정한 후 반응하는 단계로 코딩하기.
### Class
- className, classList 확인하기
- classList가 매우 유용하게 사용된다.
- contain : 있는지 확인, remove: 클래스 이름 제거, add : 추가
- toggle : 있으면 제거, 없으면 추가
### 기타
- document.getElementByid( "id값" ) // id 값을 가진 태그 출력
- console.dir("id") // 해당 태그의 모든 속성값 출력 (JS의 Object)
- document.getElementsByTagName("태그명") // 배열로 출력
- document.querySelector(".클래스명 태그명") // CSS selector (첫번째 요소만 출력됨) .클래스명 대신 #아이디 가능.
- document.querySelectorAll(".클래스명 태그명") // 모든 요소 출력

## Log In
### 기본 로그인 폼 만들기 (HTML JS 사용)
- 정보 저장을 위해 HTML에 input tag, button tag 추가.  (class id 필수!)
- 위 두 태그를 js로 불러오기 위해 getElementById 또는 querySelector로 불러와야함. (정보 저장을 위해)
- button click Event 등록
- input에 입력한 정보븐 value에 저장됨.
### User Name의 유효성 확인
- 위 폼은 UserName이 입력되지 않아도 버튼이 눌리는 문제점이 있음. 이를 해결하기 위해 조건문을 사용하여 고쳤다.
- 조건문 대신 HTML 태그를 사용하여 유효성을 검사할 수 있다. (required : 무조건 입력해야함. maxlength: 최대 길이)
- 위 속성을 사용하기 위해서는 반드시 input 태그가 form 내에 있어야 한다. (div 대신 form 태그 사용)
- 이 방법으로 코드를 고치게 되면 input이 성공적으로 될 때마다 (button을 누르거나 Enter를 누를 때마다) submit이 되어 페이지가 새로고침되는 문제가 발생한다. 이 문제를 해결해야한다.
### Login Form에서 Submit 기본 설정 변경하기
- Submit에 성공한다면 (엔터, 버튼 클릭) 브라우저는 성공되는 즉시 페이지를 새로고침한다.
- 이제는 Button Listener를 없애고, Submit Listener를 작성해야한다.
- EventListener는 첫번째 argument로 여러 정보를 전송한다. (확인코드 있음)
- preventDefault를 호출하기 위해 eventListener 첫번째 argument 추가.
### Login User에게 인사하기. (From은 제거)
- 방법1 : HTML 태그 직접 제거
- 방법2 : CSS hidden 함수 사용!
- 1. CSS 파일에 클래스 네임 선언(hidden)=> display: none;
- 2. submit 되면, classname에 hidden을 추가하면 끝 (EventListener)
- form 이름.classList.add("hidden"); 
- 문자열 결합 시 ₩Hello ${변수명}₩
### Local Storage
- 작은 DB라고 생각하면 된다.
- 새로고침해도 없어지지 않음.
- 이를 이용하여 userName이 있다면, 자동 로그인처럼 기능만들 수 있음.
- 우선 form 과 h1 모두 숨겨진 상태로 브라우저 시작.
- getItem을 통해 null이면 form을 제공, 아니라면 h1 제공하여 구현.

## Clock
### interver
- x 초 마다 반복되어 실행되는 함수
- setInterval( 함수명, ms기준 반복 주기)
### setTimeout
- x초 후 딱 한 번ㅁ나 실행되는 함수
- setTimeout( 함수명, ms 기준 시간)
### Data Object
- Date : 오늘 날짜의 객체 생성.
- Date. 함수명 => getDate() 등
- 객체에서 날짜, 시간, 요일 등을 불러올 수 있음.
### 시간 형식
- 1 등 10 이하의 숫자를 출력할 때 01 두자리 수로 출력하기
- padStart() function으로 정의되어있음.
- string.padStart(2, "0"); // string의 길이는 2, 2가 아니라면 앞에 "0"을 추가한다.
- padEnd()는 앞에 추가하는 것이 아니라 뒤에 추가하는 것
