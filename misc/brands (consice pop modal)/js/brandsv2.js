(function () {
    const brands = [
    {
        name: "Biryani Brand",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis venenatis neque, et varius purus aliquam eu. Fusce vitae interdum risus. Sed mollis neque eget diam gravida, ac vehicula eros facilisis. Nullam venenatis risus vitae lorem sollicitudin, a convallis risus dictum.",
        initial: "1",
        background: "linear-gradient(135deg, #ff6b35, #f7931e)",
        textColor: "#fff",
        buttonBg: "linear-gradient(135deg, #d32f2f, #f44336)",
        buttonTextColor: "#fff"
    },
    {
        name: "Bowls Brand",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis venenatis neque, et varius purus aliquam eu. Fusce vitae interdum risus. Sed mollis neque eget diam gravida, ac vehicula eros facilisis. Nullam venenatis risus vitae lorem sollicitudin, a convallis risus dictum.",
        initial: "2",
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        textColor: "#fff",
        buttonBg: "linear-gradient(135deg, #c04848, #480048)",
        buttonTextColor: "#fff"
    },
    {
        name: "Burger Brand",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis venenatis neque, et varius purus aliquam eu. Fusce vitae interdum risus. Sed mollis neque eget diam gravida, ac vehicula eros facilisis. Nullam venenatis risus vitae lorem sollicitudin, a convallis risus dictum.",
        initial: "3",
        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        textColor: "#fff",
        buttonBg: "linear-gradient(135deg, #005aa7, #fffde4)",
        buttonTextColor: "#000"
    },
    {
        name: "Lunch Brand",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis venenatis neque, et varius purus aliquam eu. Fusce vitae interdum risus. Sed mollis neque eget diam gravida, ac vehicula eros facilisis. Nullam venenatis risus vitae lorem sollicitudin, a convallis risus dictum.",
        initial: "4",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        textColor: "#000",
        buttonBg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        buttonTextColor: "#000"
    },
    {
        name: "North Indian Brand",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis venenatis neque, et varius purus aliquam eu. Fusce vitae interdum risus. Sed mollis neque eget diam gravida, ac vehicula eros facilisis. Nullam venenatis risus vitae lorem sollicitudin, a convallis risus dictum.",
        initial: "5",
        background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
        textColor: "#000",
        buttonBg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        buttonTextColor: "#000"
    },
    {
        name: "Street Food Brand",
        tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis venenatis neque, et varius purus aliquam eu. Fusce vitae interdum risus. Sed mollis neque eget diam gravida, ac vehicula eros facilisis. Nullam venenatis risus vitae lorem sollicitudin, a convallis risus dictum.",
        initial: "6",
        background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        textColor: "#000",
        buttonBg: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        buttonTextColor: "#000"
    }
];


    let currentIndex = 0;
    const cardsContainer = document.getElementById('cardsContainer');
    const dotNavigation = document.getElementById('dotNavigation');
    const cardCounter = document.getElementById('cardCounter');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    const brandPages = {
    "Biryani Brand": "../../subbrands/biryani (final).html",
    "Bowls Brand": "../../subbrands/bowls restaurant.html",
    "Burger Brand": ".../subbrands/burger.html",
    "Lunch Brand": "../../subbrands/lunch brand website.html",
    "North Indian Brand": "../../subbrands/north indian 2.html",
    "Street Food Brand": "../../subbrands/street-food.html"
};

    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Generate cards (in reverse order so first card is on top)
    brands.slice().forEach((brand, reverseIndex) => {
        const index = brands.length - 1 - reverseIndex;
        const card = document.createElement('div');
        card.className = 'card';
        card.style.background = brand.background;
        card.innerHTML = `
            <div class="logo-container">${brand.initial}</div>
            <div class="card-title">${brand.name}</div>
            <div class="tagline">${brand.tagline}</div>
            <div class="description">${brand.description}</div>
        `;
        cardsContainer.appendChild(card);
    });

    // Generate dots
    brands.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'nav-dot';
        dot.addEventListener('click', () => goToCard(index));
        dotNavigation.appendChild(dot);
    });

    const cards = document.querySelectorAll('.card');
    const dots = document.querySelectorAll('.nav-dot');

    function updateProgress() {
        cardCounter.textContent = `${currentIndex + 1} / ${brands.length}`;
        prevArrow.classList.toggle('disabled', currentIndex === 0);
        nextArrow.classList.toggle('disabled', currentIndex === brands.length - 1);
        dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
    }

    function goToCard(targetIndex) {
        if (targetIndex === currentIndex || targetIndex < 0 || targetIndex >= brands.length) return;
        const direction = targetIndex > currentIndex ? 'next' : 'prev';
        const previousIndex = currentIndex;
        currentIndex = targetIndex;

        if (direction === 'next') {
            for (let i = previousIndex; i < currentIndex; i++) {
                cards[i].classList.add('swiping-left');
            }
        } else {
            for (let i = currentIndex; i < previousIndex; i++) {
                const card = cards[i];
                card.style.display = 'flex';
                card.style.zIndex = cards.length + 1;
                card.style.transform = 'translateX(-100vw) scale(0.8) rotateY(20deg)';
                card.style.opacity = '0';
            }
        }

        updateProgress();

        setTimeout(() => {
            cards.forEach(card => card.classList.remove('swiping-left', 'swiping-right'));
            updateCardPositions();
        }, 600);
    }

    function updateCardPositions() {
        cards.forEach((card, index) => {
            card.classList.remove('swiping-left', 'swiping-right', 'moving-left', 'moving-right');
            card.style.removeProperty('--new-z-index');
            card.style.removeProperty('--new-transform');
            card.style.opacity = '';

            if (index < currentIndex) {
                card.style.display = 'none';
            } else if (index === currentIndex) {
                card.style.display = 'flex';
                card.style.zIndex = cards.length;
                card.style.transform = 'translateX(0px) scale(1) rotateY(0deg)';
            } else {
                card.style.display = 'flex';
                const stackPosition = index - currentIndex - 1;
                const scale = 1 - ((stackPosition + 1) * 0.05);
                const translateX = (stackPosition + 1) * 10;
                const rotateY = -((stackPosition + 1) * 2);
                const zIndex = cards.length - (stackPosition + 1);
                card.style.zIndex = zIndex;
                card.style.transform = `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`;
            }
        });
    }

    function nextCard() {
        if (currentIndex < brands.length - 1) {
            const currentCard = cards[currentIndex];
            const nextCard = cards[currentIndex + 1];

            currentCard.style.transition = 'transform 0.35s ease, opacity 0.3s ease';
            currentCard.style.transform = 'translateX(-100vw) scale(0.8) rotateY(20deg)';
            currentCard.style.opacity = '0';
            currentCard.style.zIndex = cards.length + 1;

            currentIndex++;
            updateProgress();

            setTimeout(() => {
                currentCard.style.transition = '';
                updateCardPositions();
            }, 150);
        }
    }

    function previousCard() {
        if (currentIndex > 0) {
            currentIndex--;
            const returningCard = cards[currentIndex];
            returningCard.style.display = 'flex';
            returningCard.style.zIndex = cards.length + 1;
            returningCard.style.transform = 'translateX(-100vw) scale(0.8) rotateY(20deg)';
            returningCard.style.opacity = '0';
            returningCard.offsetHeight;

            setTimeout(() => {
                returningCard.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                returningCard.style.transform = 'translateX(0px) scale(1) rotateY(0deg)';
                returningCard.style.opacity = '1';

                for (let i = currentIndex + 1; i < cards.length; i++) {
                    const card = cards[i];
                    const stackPosition = i - currentIndex - 1;
                    const scale = 1 - ((stackPosition + 1) * 0.05);
                    const translateX = (stackPosition + 1) * 10;
                    const rotateY = -((stackPosition + 1) * 2);
                    const zIndex = cards.length - (stackPosition + 1);
                    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    card.style.zIndex = zIndex;
                    card.style.transform = `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`;
                }

                updateProgress();

                setTimeout(() => {
                    cards.forEach(card => {
                        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                    });
                }, 600);
            }, 50);
        }
    }

    // Swipe (mobile)
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isDragging = false;

    cardsContainer.addEventListener('touchstart', (e) => {
        if (!isMobile()) return;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
    });

    cardsContainer.addEventListener('touchmove', (e) => {
        if (!isMobile() || !isDragging) return;
        currentX = e.touches[0].clientX;
        const deltaX = startX - currentX;
        const deltaY = Math.abs(e.touches[0].clientY - startY);
        if (deltaY < 50 && Math.abs(deltaX) > 10) e.preventDefault();
    });

    cardsContainer.addEventListener('touchend', (e) => {
        if (!isMobile() || !isDragging) return;
        isDragging = false;
        const deltaX = startX - currentX;
        const deltaY = Math.abs(e.changedTouches[0].clientY - startY);
        if (deltaY < 50 && Math.abs(deltaX) > 50) {
            deltaX > 0 ? nextCard() : previousCard();
        }
    });

    // Modal logic
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (isDragging) return;
            const brand = brands[index];
            const page = brandPages[brand.name] || '#';
            modalCardContent.innerHTML = `
                <h2>${brand.name}</h2>
                <p>${brand.tagline}</p>
                <p>${brand.description}</p>
                <a class="visit-btn" href="${page}" target="_blank">Visit Now →</a>
            `;
            cardModal.style.display = 'flex';
        });
    });

    cardModal.addEventListener('click', (e) => {
        if (e.target === cardModal) {
            cardModal.style.display = 'none';
        }
    });

    // Arrows and keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextCard();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            previousCard();
        }
    });

    nextArrow.addEventListener('click', nextCard);
    prevArrow.addEventListener('click', previousCard);

    updateProgress();
    updateCardPositions();
})();