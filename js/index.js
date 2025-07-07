document.addEventListener("DOMContentLoaded", function () {
    const btnMenu = document.querySelector(".btnMenu");
    const hiddenGnb = document.querySelector(".hiddenGnb");
    const moGnbList = document.querySelectorAll(".moGnb a");

    // 메뉴 버튼 클릭 시 on 클래스 토글
    btnMenu.addEventListener("click", function () {
        hiddenGnb.classList.toggle("on");
    });

    // 링크 클릭 시 메뉴 닫기 (이동은 기본 동작으로 처리)
    moGnbList.forEach(function(list) {
        list.addEventListener("click", function () {
            // 메뉴 닫기만 실행 — 이동은 브라우저가 기본 동작으로 처리함
            hiddenGnb.classList.remove("on");
        });
    });


    window.addEventListener("scroll",function(){
        let distance = this.scrollY
        console.log(distance)

        document.querySelector("body").style.background = `url("./img/wave.png") repeat-x ${distance/10}% 3%,
        url("./img/bg_pink.png") repeat-x  ${-distance/10}% 12%`

    })


});
