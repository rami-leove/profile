document.addEventListener("DOMContentLoaded", function () {

    let btnMenu = document.querySelector(".btnMenu");
    let hiddenGnb = document.querySelector(".hiddenGnb");
    
    // 메뉴 버튼 클릭 시 on 클래스 토글
    btnMenu.addEventListener("click", function () {
        hiddenGnb.classList.toggle("on");
    });
});
