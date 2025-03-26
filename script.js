let darkToggle = document.getElementById("dark-toggle");

darkToggle.addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - darkToggle.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - darkToggle.offsetHeight);

    darkToggle.style.position = 'absolute';
    darkToggle.style.left = `${randomX}px`;
    darkToggle.style.top = `${randomY}px`;
})

darkToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});