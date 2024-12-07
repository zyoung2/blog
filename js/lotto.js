// 주어진 정수의 값에 따라서 다른 색깔을 반환하자
function getColor(number){
    let color = "orange"; // 10 미만
    if(number >=10 && number < 20){
        color = "green"
    }else if(number >=20 && number < 30){
        color = "blue"
    }else if(number >=30 && number < 40){
        color = "red"
    }else if(number >=40 && number < 50){
        color = "purple"
    }
    return color;
}
// 숫자 여섯개 당구공을 생성하여 문서에 뿌려준다!
function displayNumbers(lotto){
    // 원래 보이던 당구공들은 제거하고 시작!
    $(".result").empty();
    for(let i =0; i < 6; i++){
        const div = $("<div></div>") // 제이쿼리판 createElement
        $(div).text(`${lotto[i]}`)
        $(div).hide(); // 안 보이는 상태에서 추가하기
        $(div).css("background-color", getColor(lotto[i]))
        $(".result").append(div)
    }
    $(".result > div").fadeIn(1000); // 1초 동안 스르륵 등장!
}
// 1부터 45 사이의 숫자 중 여섯개로 골라줘라!(무작위로)
function createNumbers(){
    const lottoNumbers = []
    // 로또번호 여섯개가 다 안뽑혔다면 게속해라!
    while(lottoNumbers.length < 6){
        const randomNumber = Math.floor(Math.random() *45) + 1
       // 배열.indexOf(x) : x가 배열의 몇번 인덱스에 있는지 알려준다! 단, 없다면 -1을 반환
        if(lottoNumbers.indexOf(randomNumber) === -1){ 
           lottoNumbers.push(randomNumber)
       }
    }
    lottoNumbers.sort(function(a, b)  {
	    if(a > b) return 1;
 	    if(a === b) return 0;
	    if(a < b) return -1;
    });
    displayNumbers(lottoNumbers)
}
$(document).ready(function(){
    // 버튼을 눌렀을 때 번호가 추첨되도록 이벤트 등록
    $("button").click(function(){
       createNumbers()
    })
})
