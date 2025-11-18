document.addEventListener('DOMContentLoaded', () => {
    const observedElements = document.querySelectorAll('[data-observe]');

    if (!('IntersectionObserver' in window) || observedElements.length === 0) {
        observedElements.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: '0px 0px -10% 0px',
        }
    );

    observedElements.forEach((element) => {
        observer.observe(element);
    });
});