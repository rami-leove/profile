document.addEventListener("DOMContentLoaded",function(){
    const target = document.querySelector('.pinkBox');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          target.classList.add('shaking');
        } else {
          target.classList.remove('shaking');
        }
      },
      {
        threshold: [0, 0.5, 1] // 50% 이상 보일 때만 실행
      }
    );
  
    observer.observe(target);
})