document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Note Handling
    const mobileBtn = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
            mobileBtn.setAttribute('aria-expanded', navLinks.classList.contains('nav-open'));
        });
    }



    // 3. Project Filtering (Project Page Only)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Active State
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projects.forEach(card => {
                    const tags = card.getAttribute('data-tags');
                    if (filter === 'all' || tags.includes(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 4. Simple Modal Logic (for details)
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');

    window.openProjectModal = function (title, desc, stack) {
        if (!modal) return;
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-desc').textContent = desc;
        document.getElementById('modal-stack').textContent = stack;
        modal.classList.add('open');
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('open');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('open');
        });
    }
    // 5. Simple Gallery Logic
    window.changeGalleryImage = function (mainImgId, newSrc, thumbBtn) {
        const mainImg = document.getElementById(mainImgId);
        if (mainImg) {
            mainImg.src = newSrc;
            // Update active state of thumbnails
            const container = thumbBtn.closest('.gallery-thumbnails');
            if (container) {
                const thumbs = container.querySelectorAll('.gallery-thumb');
                thumbs.forEach(t => t.classList.remove('active'));
                thumbBtn.classList.add('active');
            }
        }
    }

    // 6. Spotlight Mouse Tracking
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;

        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    });
});
