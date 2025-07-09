document.addEventListener("DOMContentLoaded",function(){
    const cursor = document.getElementById('custom_cursor');

    // 마우스 움직일 때 따라다니기
    document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    });

    // 클릭 시 이미지 변경
    document.addEventListener('mousedown', () => {
    cursor.src = './img/mouse_at.png';
    });

    document.addEventListener('mouseup', () => {
    cursor.src = './img/mouse.png';
    });
})