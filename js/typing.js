document.addEventListener("DOMContentLoaded",function(){
    const title = "The Beginning of Something Good!";
    const titleElement = document.getElementById("typing-title");
    let index = 0;
  
    function typeText() {
      if (index < title.length) {
        titleElement.textContent += title.charAt(index);
        index++;
        setTimeout(typeText, 150); // 글자 하나씩 나오는 속도
      } else {
        // 타이핑이 끝나면 2초 대기 후 다시 시작
        setTimeout(() => {
          titleElement.textContent = ""; // 텍스트 초기화
          index = 0;
          typeText(); // 다시 시작
        }, 3000); // 2000ms = 2초
      }
    }
  
    window.addEventListener("DOMContentLoaded", typeText);
})