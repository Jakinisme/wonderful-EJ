
document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('mapContainer');
    const mapAreas = document.querySelectorAll('.map-area');
    const mapMarkers = document.querySelectorAll('.map-marker');

    const handleMapClick = (link, element) => {
        if (!link) return;
        
        const rect = element.getBoundingClientRect();
        const containerRect = mapContainer.getBoundingClientRect();
        
        const centerX = (rect.left + rect.width / 2 - containerRect.left) / containerRect.width;
        const centerY = (rect.top + rect.height / 2 - containerRect.top) / containerRect.height;
        
        mapContainer.style.transformOrigin = `${centerX * 100}% ${centerY * 100}%`;
        mapContainer.classList.add('zooming');
        
        setTimeout(() => {
            window.location.href = link;
        }, 800);
    }

    mapAreas.forEach(area => {
        const link = area.getAttribute('data-link');
        const markerClass = area.getAttribute('data-marker');
        
        area.addEventListener('click', (e) => {
            e.preventDefault();
            handleMapClick(link, area);
        });

        area.addEventListener('mouseenter', () => {
            const marker = document.querySelector(`.${markerClass}`);
            if (marker) {
                marker.classList.add('hovered');
            }
        });

        area.addEventListener('mouseleave', () => {
            const marker = document.querySelector(`.${markerClass}`);
            if (marker) {
                marker.classList.remove('hovered');
            }
        });
    });

    mapMarkers.forEach(marker => {
        const link = marker.getAttribute('data-link');
        const markerClass = marker.classList[1];
        
        marker.addEventListener('click', (e) => {
            e.preventDefault();
            handleMapClick(link, marker);
        });

        marker.addEventListener('mouseenter', () => {
            const area = document.querySelector(`.area-${markerClass.split('-')[1]}`);
            if (area) {
                area.classList.add('hovered');
            }
        });

        marker.addEventListener('mouseleave', () => {
            const area = document.querySelector(`.area-${markerClass.split('-')[1]}`);
            if (area) {
                area.classList.remove('hovered');
            }
        });
    });
});

