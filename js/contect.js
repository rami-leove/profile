document.addEventListener("DOMContentLoaded",()=>{

    const path_array = document.querySelectorAll("#Layer_1 path")
    let termOfpath = 0.08

    setTimeout(function(){
        path_array.forEach(function(path,idx){
            // let fillDelay = idx*termOfpath + 1
            path.style.transition = 
            `stroke-dashoffset 1s ease ${idx*termOfpath}s,
            fill 1s ease ${idx*termOfpath}s`
        })
        
    },100)

    path_array.forEach(path=>{
        let path_length = path.getTotalLength()
        // getTotalLength = 지름구하기
        // console.log(path_length)
        path.style.strokeDasharray = path_length
        path.style.strokeDashoffset = path_length
    })

    // IntersectionObserver 생성: 요소가 화면에 들어오고 나가는 것을 감지
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 요소가 화면에 보이면 show 클래스 추가
        entry.target.classList.add('on');
    } else {
        // 요소가 화면에서 벗어나면 show 클래스 제거
        entry.target.classList.remove('on');
    }
    });
    }, {
    threshold: 0.1 // 요소가 10% 이상 보일 때 트리거
    });

    // 모든 section 요소에 observer 적용
    document.querySelectorAll('.textani').forEach(section => {
      observer.observe(section);
    });
})