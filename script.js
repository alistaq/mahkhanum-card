
function releaseButterflies() {
    const container = document.getElementById('butterflies');
    const message = document.getElementById('message');
    message.classList.remove('hidden');

    for (let i = 0; i < 20; i++) {
        const butterfly = document.createElement('div');
        butterfly.classList.add('butterfly');
        butterfly.style.left = Math.random() * window.innerWidth + 'px';
        butterfly.style.bottom = '0px';
        container.appendChild(butterfly);
    }
}
