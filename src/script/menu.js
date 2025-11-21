
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menuBtn');
    const menuModal = document.getElementById('menuModal');
    const closeBtn = document.getElementById('closeBtn');
    const body = document.body;

    if (menuBtn) {
        menuBtn.addEventListener('click',() => {
            menuModal.classList.add('active');
            body.classList.add('modalOpen');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            menuModal.classList.remove('active');
            body.classList.remove('modalOpen');
        });
    }

    if (menuModal) {
        menuModal.addEventListener('click', (e) => {
            if (e.target === menuModal || e.target.closest('.menuModalLeft')) {
            if (e.target === menuModal) {
                menuModal.classList.remove('active');
                body.classList.remove('modalOpen');
            }
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuModal.classList.contains('active')) {
            menuModal.classList.remove('active');
            body.classList.remove('modalOpen');
        }
    });
});







