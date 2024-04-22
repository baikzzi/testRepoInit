function lottoGenerator() {
  let lottoArr = [];
  var randomNumber;
  var lottoStr = "";
  while (lottoArr.length < 6) {
    // 6개의 번호만 먼저 추출
    // 1 ~ 45 사이 정수 랜덤 추출
    randomNumber = Math.floor(Math.random() * 45) + 1;

    // 중복 아닌 번호만 배열에 push
    if (!lottoArr.includes(randomNumber)) {
      lottoArr.push(randomNumber);
    }
  }
  // 6개 번호 정렬
  lottoArr.sort((a, b) => a - b);

  // 보너스 번호 중복 번호면 재추출
  while (lottoArr.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 45) + 1;
  }

  // 번호 문자열 생성
  lottoStr = lottoArr.join("     ") + "  +  " + randomNumber;

  // 랜덤으로 선택된 6개의 로또 번호와 1개의 보너스 번호 문자열 반환
  return lottoStr;
}

// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
const result1 = document.getElementById("result1");
btn.addEventListener("click", function () {
  result1.innerText = lottoGenerator();
});
