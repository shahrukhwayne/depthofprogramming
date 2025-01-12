document.querySelector('.menu-toggle').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    const title = document.querySelector('.menu-toggle');

    if (title.innerHTML === 'x') {
        title.innerHTML = `
        <a target="_blank" class="menu-toggle">
            <img src="img/Telegram-icon-on-transparent-background-PNG.png" alt="Telegram"> 
            Join on Telegram
        </a>
    `;
    
    } else {
        title.innerHTML = 'x';
    }

    menu.classList.toggle('show');
});
