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

        document.querySelector("body").style.background = `
        url("./img/wave.png") repeat-x ${distance/10}% 2.6%,
        url("./img/bg_pink.png") repeat-x  ${-distance/10}% ${(window.innerWidth>768&&window.innerWidth<=1024)?"24":"12"}%`

    })



    // ltr rtl

    const targets = document.querySelectorAll('.ltr, .rtl');

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach(entry => {
            const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;

            if (isVisible) {
            // 보일 때
            entry.target.classList.add('on');

            // 애니메이션이 끝나면 다시 제거해서 재진입 시 재실행 가능
            // entry.target.addEventListener('animationend', () => {
            //   entry.target.classList.remove('swingOnce');
            // }, { once: true });
            }else{
            // 안보일 때
            entry.target.classList.remove('on');
            }
        });
        },
        {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0.0 ~ 1.0 감지
        }
    );

    targets.forEach(target => observer.observe(target));

});
