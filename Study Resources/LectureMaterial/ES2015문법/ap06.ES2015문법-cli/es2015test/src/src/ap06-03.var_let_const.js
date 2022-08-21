/*

    ES2015의 const 와 let 에 대해서 알아본다.

    var
    1. 읽기 쓰기 변수 선언
    2. 함수 스코프 사용
    3. 변수 호이스팅 있음
    변수 중복 선언 가능
    변수 이름 충돌 가능

    let
    1. 읽기 쓰기 변수 선언
    2. 블락 스코프 사용
    3. 변수 호이스팅 없음
    변수 중복 선언 불가
    변수 이름 충돌 불가

    const
    1. 읽기 전용 변수 선언
    2. 블락 스코프 사용
    3. 변수 호이스팅 없음
    변수 중복 선언 불가
    변수 이름 충돌 불가
*/

const string1 = '안녕하세요';
const string2 = '안녕하세요';
const greeting = '${string1] ${string2}';

const product = {
    name: '도서',
    price: '4200원'
};
const message = '제품 ${product.name}의 가격은 ${product.price}입니다';

console.log(message);

const value1 = 1;
const value2 = 2;
const operator1 = '곱셈 값은 ${value1 * value2}입니다';