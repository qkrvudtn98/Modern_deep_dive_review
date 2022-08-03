/* API 정의 : 응용프로그램 프로그래밍 인터페이스 
응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스을 뜻한다.
주로 파일 제어, 창 제어, 화상 처리, 문자 제어 등을 위한 인터페이스를 제공한다.
*/

/* 클라이언트, 서버, DB에서 작업을 처리하는 과정은 크게 4가지이다 
1. 클라이언트에서 서버에게 데이터를 요청한다 
2. 서버는 DB에서 해당 데이터를 검색한다
3. DB는 서버에게 해당 데이터를 전달한다
4. 서버는 클라이언트에게 요청 데이터를 전달한다
이 중 API 호출은 서버와 클라이언트 사이의 요청과 전달에 해당되는 1,4과정을 의미한다
API 호출을 동기적으로 처리하는 것보다 비동기적으로 처리하는 것이 훨씬 효율적이기에, 
(서버로부터 요청에 대한 응답을 언제 받을지 모르기 때문에, 성공할지 실패할지조차 모르기 때문에 )
비동기 처리를 담당하는 Promise객체가 API호출에 사용된다 (async, await 사용)
결론 : API = 서버와 클라이언트와의 대화를 할 수 있는 연결다리 
*/ 

async function getData() {
    let rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts'); //fetch를 통해 받아오는 결과값은 Promise객체 그 자체임 (데이터가 아님!)
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}

getData();
