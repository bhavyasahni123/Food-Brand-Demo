(function () {
    const brands = [
    {
        name: "Biryani Brand",
        tagline: "Authentic flavors from the heart of India",
        description: "Experience the rich, aromatic world of traditional biryanis crafted with premium ingredients and time-honored recipes that have been passed down through generations.",
        initial: "1",
        background: "linear-gradient(135deg, #1a365d 0%, #0f2537 50%, #2c5282 100%)",
        textColor: "#fff",
        nameColor: "#f4e99b", // Golden yellow - represents spices and richness
        taglineColor: "#d4af37", // Light blue-white for elegance
        descriptionColor: "#faf7f0", // Muted blue-white for readability
        buttonBg: "linear-gradient(45deg, #d4af37, #f4e99b)",
        buttonTextColor: "#0f2537"
    },
    {
  name: "Bowls Brand",
  tagline: "Feed Your Hunger for Life!",
  description: "Experience nutrition that doesn't compromise on taste. Our carefully crafted bowls combine premium grains, fresh vegetables, and quality proteins into perfectly balanced meals that fuel your active lifestyle.",
  initial: "B",
  background: "linear-gradient(135deg, #1b4332 0%, #2d5016 50%, #40531b 100%)",
  textColor: "#ffffff",
  nameColor: "#a7f3d0",
  taglineColor: "#d1fae5", 
  descriptionColor: "#ecfdf5",
  buttonBg: "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)",
  buttonTextColor: "#ffffff"
},
    {
        name: "Burger Brand",
        tagline: "Gourmet burgers that redefine delicious",
        description: "Sink your teeth into our handcrafted gourmet burgers made with premium beef, fresh toppings, and artisanal buns that create the perfect bite every time.",
        initial: "3",
        background: "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffb347 100%)",
        textColor: "#fff",
        nameColor: "#2c1810", // Gold for premium feel
        taglineColor: "#1a1a1a", // Very light blue
        descriptionColor: "#2c1810", // Light blue for freshness
        buttonBg: "linear-gradient(45deg, #d32f2f 0%, #f44336 100%)",
        buttonTextColor: "#ffffff"
    },
    {
  name: "Lunch Brand",
  tagline: "Your Comfort Food, Right at Work",
  description: "Missing home-cooked lunches at work? We have your back. Get wholesome thalis and more delivered straight to your desk - it's like a hug from home!",
  initial: "L",
  background: "linear-gradient(120deg, #1e3a8a 0%, #2563eb 50%, #1e40af 100%)",
  textColor: "#ffffff",
  nameColor: "#fbbf24",
  taglineColor: "#e5e7eb", 
  descriptionColor: "#d1d5db",
  buttonBg: "linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)",
  buttonTextColor: "#1f2937"
},
    {
  name: "North Indian Food Brand",
  tagline: "A Taste of Tradition",
  description: "Where ancient recipes dance with modern innovation, creating a symphony of flavors that awakens the soul. Each dish tells a story of heritage and passion, crafted with the finest ingredients and time-honored techniques.",
  initial: "S",
  background: "linear-gradient(135deg, #1F1A17 0%, #2C1810 50%, #3D2817 100%)",
  textColor: "#F0EAD6",
  nameColor: "#E87A5D",
  taglineColor: "#F9D423", 
  descriptionColor: "#F0EAD6",
  buttonBg: "linear-gradient(135deg, #E87A5D 0%, #F9D423 100%)",
  buttonTextColor: "#1F1A17"
},
    {
  name: "Street Food Brand",
  tagline: "Street Food Delivered", 
  description: "Street food cravings but too lazy to step out? Our Brand brings the Indian streets to your doorstep! Perfect for hangouts, movie nights, or just a solo indulgence, our menu brings the fun and flavour of the streets home.",
  initial: "S",
  background: "radial-gradient(circle at 30% 20%, #ff6b35 0%, #f7931e 25%, #ffcd3c 50%, #ff6b35 75%, #e74c3c 100%)",
  textColor: "#ffffff",
  nameColor: "#ffffff", 
  taglineColor: "#fff8e1",
  descriptionColor: "#ffffff",
  buttonBg: "linear-gradient(135deg, #ffffff 0%, #fff3e0 100%)",
  buttonTextColor: "#ff6b35"
},
    {
        name: "Pizza Brand",
        tagline: "Wood-fired perfection in every slice",
        description: "Indulge in our artisanal pizzas crafted with hand-tossed dough, premium ingredients, and baked to perfection in our traditional wood-fired ovens for that authentic Italian taste.",
        initial: "7",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        textColor: "#fff",
        nameColor: "#ffeb3b", // Bright yellow like cheese
        taglineColor: "#e1e8ff", // Very light purple-white
        descriptionColor: "#c5d1ff", // Light purple-blue
        buttonBg: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
        buttonTextColor: "#fff"
    },
    {
        name: "Dessert Brand",
        tagline: "Sweet endings to perfect meals",
        description: "Complete your dining experience with our decadent desserts, from classic favorites to innovative creations that will satisfy your sweet tooth and create lasting memories.",
        initial: "8",
        background: "linear-gradient(135deg, #ffeaa7 0%, #fab1a0 50%, #fd79a8 100%)",
        textColor: "#000",
        nameColor: "#d63031", // Sweet cherry red
        taglineColor: "#2d3436", // Dark charcoal
        descriptionColor: "#636e72", // Warm gray
        buttonBg: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
        buttonTextColor: "#fff"
    }
];


    let currentIndex = 0;
    const cardsContainer = document.getElementById('cardsContainer');
    const dotNavigation = document.getElementById('dotNavigation');
    const cardCounter = document.getElementById('cardCounter');
    const prevArrow = document.getElementById('prevArrow');
    const nextArrow = document.getElementById('nextArrow');

    const brandPages = {
    "Biryani Brand": "biryani (final).html",
    "Bowls Brand": "bowls restaurant.html",
    "Burger Brand": "burger.html",
    "Lunch Brand": "lunch brand website.html",
    "North Indian Food Brand": "north indian 2.html",
    "Street Food Brand": "street-food.html"
};

    function isMobile() {
        return window.innerWidth <= 768;
    }

    brands.slice().forEach((brand, reverseIndex) => {
    const index = brands.length - 1 - reverseIndex;
    const card = document.createElement('div');
    card.className = 'card';
    
    if (brand.background.startsWith('animated-')) {
        card.classList.add(brand.background); // e.g. animated-ohsoyum
    } else {
        card.style.background = brand.background;
    }

    card.innerHTML = `
        <div class="logo-container">${brand.initial}</div>
        <div class="card-title" style="color: ${brand.nameColor || brand.textColor || '#fff'}">${brand.name}</div>
        <div class="tagline" style="color: ${brand.taglineColor || brand.textColor || '#fff'}">${brand.tagline}</div>
        <div class="description" style="color: ${brand.descriptionColor || brand.textColor || '#fff'}">${brand.description}</div>
    `;
    
    cardsContainer.appendChild(card);
});
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

    function updateCardPositions() {
        cards.forEach((card, index) => {
            card.style.transition = '';
            card.style.transform = '';
            card.style.opacity = '';
            card.style.display = index < currentIndex ? 'none' : 'flex';
            const stackIndex = index - currentIndex;
            const scale = 1 - (stackIndex * 0.05);
            const translateX = stackIndex * 10;
            const rotateY = -stackIndex * 2;
            const zIndex = cards.length - stackIndex;
            card.style.zIndex = zIndex;
            card.style.transform = `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`;
        });
    }

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (window.__modalOpen || card.style.display === 'none') return;

            const brand = brands[index];
            const page = brandPages[brand.name] || '#';

            const rect = card.getBoundingClientRect();
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const offsetX = centerX - (rect.left + rect.width / 2);
            const offsetY = centerY - (rect.top + rect.height / 2);

            card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            card.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.1)`;
            card.style.opacity = '0';
            card.style.zIndex = '10000';

            window.__lastOpenedCard = card;
            window.__modalOpen = true;

            setTimeout(() => {
    const popupModal = document.getElementById('popupModal');
    const popupIcon = document.getElementById('popupIcon');
    const popupTitle = document.getElementById('popupTitle');
    const popupDescription = document.getElementById('popupDescription');
    const visitBtn = document.getElementById('visitBtn');

    // Set content
    popupIcon.textContent = brand.initial || '🍽️';
    popupTitle.textContent = brand.name;
    popupDescription.textContent = brand.description;
    visitBtn.href = "./subbrands/" + page;

    // Set styles from brand object
    popupModal.className = 'popup-modal'; // reset classes
    if (brand.background.startsWith('animated-')) {
        popupModal.classList.add(brand.background);
        popupModal.style.background = ''; // use class styling
    } else {
        popupModal.style.background = brand.background;
    }

    // Apply the new color properties
    popupIcon.style.color = brand.nameColor || brand.textColor || '#fff';
    popupTitle.style.color = brand.nameColor || brand.textColor || '#fff';
    popupDescription.style.color = brand.descriptionColor || brand.textColor || '#fff';
    visitBtn.style.background = brand.buttonBg || '#444';
    visitBtn.style.color = brand.buttonTextColor || '#fff';

    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('popupModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    createSparkles();
}, 300);
        });
    });

    function goToCard(targetIndex) {
        if (window.__modalOpen) return;
        if (targetIndex === currentIndex || targetIndex < 0 || targetIndex >= brands.length) return;
        currentIndex = targetIndex;
        updateProgress();
        updateCardPositions();
    }

    function nextCard() {
        if (window.__modalOpen || currentIndex >= brands.length - 1) return;

        const currentCard = cards[currentIndex];
        currentCard.style.transition = 'transform 0.35s ease, opacity 0.3s ease';
        currentCard.style.transform = 'translateX(-100vw) scale(0.8) rotateY(20deg)';
        currentCard.style.opacity = '0';
        currentCard.style.zIndex = cards.length + 1;

        currentIndex++;
        updateProgress();

        setTimeout(() => {
            currentCard.style.transition = '';
            updateCardPositions();
        }, 350); // Matches transition duration
    }

    function previousCard() {
        if (window.__modalOpen || currentIndex <= 0) return;

        currentIndex--;
        const returningCard = cards[currentIndex];

        returningCard.style.display = 'flex';
        returningCard.style.zIndex = cards.length + 1;
        returningCard.style.transform = 'translateX(-100vw) scale(0.8) rotateY(20deg)';
        returningCard.style.opacity = '0';
        returningCard.offsetHeight; // force reflow

        setTimeout(() => {
            returningCard.style.transition = 'all 0.6s ease';
            returningCard.style.transform = 'translateX(0px) scale(1) rotateY(0deg)';
            returningCard.style.opacity = '1';

            for (let i = currentIndex + 1; i < cards.length; i++) {
                const stackPos = i - currentIndex - 1;
                const scale = 1 - ((stackPos + 1) * 0.05);
                const translateX = (stackPos + 1) * 10;
                const rotateY = -((stackPos + 1) * 2);
                const zIndex = cards.length - (stackPos + 1);
                const card = cards[i];
                card.style.transition = 'all 0.6s ease';
                card.style.zIndex = zIndex;
                card.style.transform = `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`;
            }

            updateProgress();
            setTimeout(() => {
                cards.forEach(card => {
                    card.style.transition = '';
                });
            }, 600);
        }, 50);
    }


    nextArrow.addEventListener('click', nextCard);
    prevArrow.addEventListener('click', previousCard);

    document.addEventListener('keydown', e => {
        if (window.__modalOpen) {
            if (e.key === 'Escape') closeModal();
            return;
        }
        if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); nextCard(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); previousCard(); }
    });

    document.getElementById('closeBtn').addEventListener('click', closeModal);
    document.getElementById('modalOverlay').addEventListener('click', closeModal);

    function closeModal() {
        const overlay = document.getElementById('modalOverlay');
        const popup = document.getElementById('popupModal');
        document.body.style.overflow = 'auto';

        overlay.classList.remove('active');
        popup.classList.remove('active');

        const card = window.__lastOpenedCard;
        if (!card) return;

        setTimeout(() => {
            const rect = card.getBoundingClientRect();
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const offsetX = centerX - (rect.left + rect.width / 2);
            const offsetY = centerY - (rect.top + rect.height / 2);

            card.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.1)`;
            card.style.opacity = '0';
            card.style.zIndex = '10000';

            setTimeout(() => {
                card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                card.style.transform = 'translate(0, 0) scale(1)';
                card.style.opacity = '1';

                setTimeout(() => {
                    card.style.zIndex = '';
                    card.style.transition = '';
                    window.__lastOpenedCard = null;
                    // Reset popup styles
                    document.getElementById('popupIcon').style.color = '';
                    document.getElementById('popupTitle').style.color = '';
                    document.getElementById('popupDescription').style.color = '';
                    document.getElementById('visitBtn').style.background = '';
                    document.getElementById('visitBtn').style.color = '';

                    window.__modalOpen = false;
                    updateProgress();
                    updateCardPositions();
                }, 500);
            }, 100);
        }, 300);
    }

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

    updateProgress();
    updateCardPositions();
})();

function createSparkles() {
    const popupContent = document.querySelector('.popup-content');
    const sparkles = ['✨', '⭐', '💫', '🌟'];
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.fontSize = Math.random() * 20 + 15 + 'px';
        sparkle.style.animation = `sparkle ${Math.random() * 2 + 1}s ease-out forwards`;
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '10';
        popupContent.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 2000);
    }
}

const sparkleAnim = document.createElement('style');
sparkleAnim.textContent = `@keyframes sparkle {
    0% { opacity: 0; transform: scale(0) rotate(0deg); }
    50% { opacity: 1; transform: scale(1) rotate(180deg); }
    100% { opacity: 0; transform: scale(0) rotate(360deg); }
}`;
document.head.appendChild(sparkleAnim);
