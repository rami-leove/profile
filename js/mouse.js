document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.getElementById('custom_cursor');
    let resized = false;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        if (!resized) {
            cursor.style.height = '32px';
            resized = true;
        }
    });

    document.addEventListener('mousedown', () => {
        cursor.src = './img/mouse_at.png';
    });

    document.addEventListener('mouseup', () => {
        cursor.src = './img/mouse.png';
    });
});