document.addEventListener("DOMContentLoaded",function(){
  const targets = document.querySelectorAll('.pinkBox, .blueBox');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const isVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;

        if (isVisible) {
          // 보일 때
          entry.target.classList.add('swingOnce');

          // 애니메이션이 끝나면 다시 제거해서 재진입 시 재실행 가능
          // entry.target.addEventListener('animationend', () => {
          //   entry.target.classList.remove('swingOnce');
          // }, { once: true });
        }else{
          // 안보일 때
          entry.target.classList.remove('swingOnce');
        }
      });
    },
    {
      threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0.0 ~ 1.0 감지
    }
  );

  targets.forEach(target => observer.observe(target));
})