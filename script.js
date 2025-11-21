// ===================================
// MOVIE BOOKING WEBSITE - JAVASCRIPT
// ===================================

// ===================================
// MOVIE DATA
// ===================================
const movies = [
    {
        id: 1,
        title: "Quantum Nexus",
        genre: "Sci-Fi",
        rating: 8.5,
        duration: "148 min",
        description: "In a world where reality bends to quantum mechanics, a brilliant physicist discovers a way to traverse parallel universes, only to find that each choice creates infinite consequences.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
        price: 250
    },
    {
        id: 2,
        title: "Midnight Laughter",
        genre: "Comedy",
        rating: 7.8,
        duration: "112 min",
        description: "A struggling comedian accidentally becomes the world's most popular influencer after a viral mishap, leading to hilarious chaos and unexpected friendships.",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
        showtimes: ["11:00 AM", "2:00 PM", "6:00 PM", "9:00 PM"],
        price: 200
    },
    {
        id: 3,
        title: "Shadows of Tomorrow",
        genre: "Drama",
        rating: 9.1,
        duration: "156 min",
        description: "A powerful tale of resilience and hope as three generations of a family navigate through war, loss, and the enduring power of love.",
        poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        showtimes: ["12:00 PM", "3:30 PM", "7:00 PM"],
        price: 300
    },
    {
        id: 4,
        title: "Velocity Strike",
        genre: "Action",
        rating: 8.2,
        duration: "132 min",
        description: "An elite special forces operative must race against time to stop a global terrorist network from unleashing a devastating cyber attack.",
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
        showtimes: ["10:30 AM", "2:30 PM", "6:30 PM", "9:30 PM"],
        price: 280
    },
    {
        id: 5,
        title: "Whispers in the Dark",
        genre: "Horror",
        rating: 7.6,
        duration: "105 min",
        description: "A family moves into their dream home, only to discover it harbors a terrifying secret that threatens to consume them all.",
        poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
        showtimes: ["11:30 AM", "4:00 PM", "8:00 PM", "10:30 PM"],
        price: 220
    },
    {
        id: 6,
        title: "Hearts Entwined",
        genre: "Romance",
        rating: 8.7,
        duration: "128 min",
        description: "Two souls from different worlds find an unexpected connection that transcends time, culture, and circumstance in this heartwarming love story.",
        poster: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=600&fit=crop",
        showtimes: ["1:00 PM", "4:30 PM", "7:30 PM", "10:00 PM"],
        price: 240
    },
    {
        id: 7,
        title: "The Last Horizon",
        genre: "Sci-Fi",
        rating: 8.9,
        duration: "165 min",
        description: "Humanity's last hope rests on a daring mission to a distant planet, where the crew must confront not only the void of space but their own inner demons.",
        poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop",
        showtimes: ["12:30 PM", "4:00 PM", "7:30 PM"],
        price: 320
    },
    {
        id: 8,
        title: "Comedy Central",
        genre: "Comedy",
        rating: 7.9,
        duration: "98 min",
        description: "A group of misfit friends attempt to save their favorite comedy club from closure, leading to a series of laugh-out-loud adventures.",
        poster: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400&h=600&fit=crop",
        showtimes: ["11:00 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
        price: 190
    },
    {
        id: 9,
        title: "Silent Witness",
        genre: "Thriller",
        rating: 8.4,
        duration: "142 min",
        description: "A deaf woman witnesses a murder and becomes the killer's next target in this pulse-pounding thriller that keeps you guessing until the end.",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
        showtimes: ["1:30 PM", "5:00 PM", "8:00 PM", "10:30 PM"],
        price: 270
    },
    {
        id: 10,
        title: "Dragon's Legacy",
        genre: "Fantasy",
        rating: 9.0,
        duration: "178 min",
        description: "In a realm where dragons and humans once lived in harmony, a young warrior must unite the kingdoms to face an ancient evil rising from the shadows.",
        poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop",
        showtimes: ["11:00 AM", "3:00 PM", "7:00 PM"],
        price: 350
    },
    {
        id: 11,
        title: "Neon Nights",
        genre: "Thriller",
        rating: 8.1,
        duration: "118 min",
        description: "A detective navigates the dangerous underworld of a neon-lit city to solve a series of mysterious disappearances linked to a powerful crime syndicate.",
        poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
        showtimes: ["12:00 PM", "3:30 PM", "6:30 PM", "9:30 PM"],
        price: 260
    },
    {
        id: 12,
        title: "Enchanted Kingdom",
        genre: "Fantasy",
        rating: 8.6,
        duration: "145 min",
        description: "A magical adventure where a young princess must break an ancient curse to save her kingdom from eternal darkness.",
        poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
        showtimes: ["10:30 AM", "2:00 PM", "5:30 PM", "8:30 PM"],
        price: 290
    },
    {
        id: 13,
        title: "Pixel Paradise",
        genre: "Animation",
        rating: 8.8,
        duration: "102 min",
        description: "A colorful journey through a digital world where video game characters must team up to save their universe from deletion.",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
        showtimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
        price: 210
    },
    {
        id: 14,
        title: "Crimson Tide",
        genre: "Action",
        rating: 8.3,
        duration: "138 min",
        description: "A rogue submarine captain must prevent a nuclear catastrophe while battling mutiny and international espionage.",
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
        showtimes: ["11:30 AM", "3:00 PM", "6:00 PM", "9:00 PM"],
        price: 275
    },
    {
        id: 15,
        title: "Starlight Dreams",
        genre: "Animation",
        rating: 9.2,
        duration: "95 min",
        description: "A heartwarming tale of a young star who falls to Earth and discovers the true meaning of friendship and belonging.",
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
        showtimes: ["10:00 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
        price: 180
    },
    {
        id: 16,
        title: "The Haunting Hour",
        genre: "Horror",
        rating: 7.7,
        duration: "110 min",
        description: "Every night at midnight, supernatural forces awaken in an abandoned asylum. A group of paranormal investigators seeks the truth.",
        poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
        showtimes: ["2:00 PM", "5:30 PM", "8:30 PM", "11:00 PM"],
        price: 230
    },
    {
        id: 17,
        title: "Love in Paris",
        genre: "Romance",
        rating: 8.5,
        duration: "122 min",
        description: "An American artist and a French musician find love in the city of lights, but cultural differences threaten to tear them apart.",
        poster: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=600&fit=crop",
        showtimes: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"],
        price: 250
    },
    {
        id: 18,
        title: "Breaking Point",
        genre: "Drama",
        rating: 8.9,
        duration: "149 min",
        description: "A gripping story of a lawyer who must choose between career ambitions and moral integrity when defending an impossible case.",
        poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
        showtimes: ["1:00 PM", "4:30 PM", "8:00 PM"],
        price: 310
    },
    {
        id: 19,
        title: "Code Red",
        genre: "Thriller",
        rating: 8.2,
        duration: "126 min",
        description: "A cybersecurity expert races against time to stop a hacker from triggering a global financial meltdown.",
        poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
        showtimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
        price: 265
    },
    {
        id: 20,
        title: "Mystic Realms",
        genre: "Fantasy",
        rating: 8.7,
        duration: "160 min",
        description: "A portal opens to a mystical dimension where a chosen hero must gather ancient artifacts to prevent two worlds from colliding.",
        poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop",
        showtimes: ["12:30 PM", "4:00 PM", "7:30 PM"],
        price: 330
    }
];

// ===================================
// STATE MANAGEMENT
// ===================================
let currentMovie = null;
let selectedSeats = [];
let selectedShowtime = null;
let currentBooking = null;

// ===================================
// NAVIGATION
// ===================================
function showPage(pageName) {
    const pages = document.querySelectorAll('.section');
    pages.forEach(page => page.classList.add('hidden'));

    const targetPage = document.getElementById(pageName + 'Page');
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }
}

// ===================================
// RENDER MOVIES
// ===================================
function renderMovies(moviesToRender = movies) {
    const moviesGrid = document.getElementById('moviesGrid');
    moviesGrid.innerHTML = '';

    moviesToRender.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.style.animationDelay = `${index * 0.1}s`;

        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span class="movie-genre">${movie.genre}</span>
                    <span class="movie-rating">⭐ ${movie.rating}</span>
                </div>
                <p class="movie-duration">${movie.duration}</p>
                <p class="movie-description">${movie.description.substring(0, 100)}...</p>
                <div class="movie-price">₹${movie.price}</div>
            </div>
        `;

        movieCard.addEventListener('click', () => showMovieDetails(movie));
        moviesGrid.appendChild(movieCard);
    });
}

// ===================================
// GENRE FILTERING
// ===================================
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const genre = button.dataset.genre;
        if (genre === 'all') {
            renderMovies();
        } else {
            const filtered = movies.filter(movie => movie.genre === genre);
            renderMovies(filtered);
        }
    });
});

// ===================================
// MOVIE DETAILS
// ===================================
function showMovieDetails(movie) {
    currentMovie = movie;
    const detailsContent = document.getElementById('movieDetailsContent');

    detailsContent.innerHTML = `
        <div class="movie-details">
            <div class="movie-details-header">
                <img src="${movie.poster}" alt="${movie.title}" class="movie-details-poster">
                <div class="movie-details-info">
                    <h1>${movie.title}</h1>
                    <div class="movie-meta" style="font-size: 1.125rem; margin: var(--spacing-md) 0;">
                        <span class="movie-genre">${movie.genre}</span>
                        <span class="movie-rating">⭐ ${movie.rating}/10</span>
                        <span>${movie.duration}</span>
                    </div>
                    <p style="font-size: 1.125rem; line-height: 1.6; margin: var(--spacing-lg) 0;">${movie.description}</p>
                    <div class="movie-price" style="font-size: 1.5rem; margin: var(--spacing-lg) 0;">₹${movie.price} per seat</div>
                    
                    <div class="card" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border: 2px solid rgba(99, 102, 241, 0.3); margin: var(--spacing-lg) 0;">
                        <div style="display: flex; align-items: center; gap: var(--spacing-sm); margin-bottom: var(--spacing-md);">
                            <span style="font-size: 1.5rem;">🤖</span>
                            <h4 style="margin: 0;">AI Overview</h4>
                        </div>
                        <p style="color: var(--gray-300); margin: 0;">${movie.aiOverview || generateAIOverview(movie)}</p>
                    </div>
                    
                    <div style="margin-top: var(--spacing-xl);">
                        <h3>Select Showtime</h3>
                        <div class="showtimes" style="display: flex; gap: var(--spacing-md); flex-wrap: wrap; margin-top: var(--spacing-md);">
                            ${movie.showtimes.map(time => `
                                <button class="btn btn-outline showtime-btn" data-time="${time}">${time}</button>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const showtimeButtons = detailsContent.querySelectorAll('.showtime-btn');
    showtimeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedShowtime = btn.dataset.time;
            showSeatSelection();
        });
    });

    showPage('movieDetails');
}

// ===================================
// SEAT SELECTION
// ===================================
function showSeatSelection() {
    document.getElementById('seatMovieTitle').textContent = currentMovie.title;
    document.getElementById('seatShowtime').textContent = selectedShowtime;

    const seatsContainer = document.getElementById('seatsContainer');
    seatsContainer.innerHTML = '';
    selectedSeats = [];

    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const seatsPerRow = 10;

    rows.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'seat-row';

        const rowLabel = document.createElement('div');
        rowLabel.className = 'row-label';
        rowLabel.textContent = row;
        rowDiv.appendChild(rowLabel);

        for (let i = 1; i <= seatsPerRow; i++) {
            const seat = document.createElement('div');
            const seatId = `${row}${i}`;

            const isOccupied = Math.random() > 0.7;
            seat.className = isOccupied ? 'seat occupied' : 'seat';
            seat.dataset.seat = seatId;

            if (!isOccupied) {
                seat.addEventListener('click', () => toggleSeat(seatId));
            }

            rowDiv.appendChild(seat);
        }

        seatsContainer.appendChild(rowDiv);
    });

    updateSeatSummary();
    showPage('seatSelection');
}

function toggleSeat(seatId) {
    const seatElement = document.querySelector(`[data-seat="${seatId}"]`);

    if (seatElement.classList.contains('selected')) {
        seatElement.classList.remove('selected');
        selectedSeats = selectedSeats.filter(s => s !== seatId);
    } else {
        seatElement.classList.add('selected');
        selectedSeats.push(seatId);
    }

    updateSeatSummary();
}

function updateSeatSummary() {
    const selectedSeatsDisplay = document.getElementById('selectedSeatsDisplay');
    const totalPriceDisplay = document.getElementById('totalPriceDisplay');
    const proceedBtn = document.getElementById('proceedToBookingBtn');

    if (selectedSeats.length === 0) {
        selectedSeatsDisplay.textContent = 'None';
        totalPriceDisplay.textContent = '₹0';
        proceedBtn.disabled = true;
    } else {
        selectedSeatsDisplay.textContent = selectedSeats.join(', ');
        const totalPrice = selectedSeats.length * currentMovie.price;
        totalPriceDisplay.textContent = `₹${totalPrice}`;
        proceedBtn.disabled = false;
    }
}

// ===================================
// BOOKING FORM
// ===================================
function showBookingForm() {
    document.getElementById('summaryMovie').textContent = currentMovie.title;
    document.getElementById('summaryShowtime').textContent = selectedShowtime;
    document.getElementById('summarySeats').textContent = selectedSeats.join(', ');
    const totalPrice = selectedSeats.length * currentMovie.price;
    document.getElementById('summaryTotal').textContent = `₹${totalPrice}`;

    showPage('bookingForm');
}

const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;

    currentBooking = {
        id: 'BK' + Date.now(),
        movie: currentMovie.title,
        showtime: selectedShowtime,
        seats: [...selectedSeats],
        name: name,
        email: email,
        phone: phone,
        totalPrice: selectedSeats.length * currentMovie.price,
        date: new Date().toLocaleDateString()
    };

    saveBooking(currentBooking);
    showConfirmation();
});

// ===================================
// CONFIRMATION
// ===================================
function showConfirmation() {
    document.getElementById('confirmBookingId').textContent = currentBooking.id;
    document.getElementById('confirmMovie').textContent = currentBooking.movie;
    document.getElementById('confirmShowtime').textContent = currentBooking.showtime;
    document.getElementById('confirmSeats').textContent = currentBooking.seats.join(', ');
    document.getElementById('confirmName').textContent = currentBooking.name;
    document.getElementById('confirmTotal').textContent = `₹${currentBooking.totalPrice}`;

    showPage('confirmation');
}

// ===================================
// LOCAL STORAGE
// ===================================
function saveBooking(booking) {
    let bookings = JSON.parse(localStorage.getItem('movieBookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('movieBookings', JSON.stringify(bookings));
}

function getBookings() {
    return JSON.parse(localStorage.getItem('movieBookings') || '[]');
}

// ===================================
// MY BOOKINGS MODAL
// ===================================
const bookingsModal = document.getElementById('bookingsModal');
const myBookingsBtn = document.getElementById('myBookingsBtn');
const closeBookingsModal = document.getElementById('closeBookingsModal');

myBookingsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showMyBookings();
});

closeBookingsModal.addEventListener('click', () => {
    bookingsModal.classList.remove('active');
});

bookingsModal.addEventListener('click', (e) => {
    if (e.target === bookingsModal) {
        bookingsModal.classList.remove('active');
    }
});

function showMyBookings() {
    const bookings = getBookings();
    const bookingsContent = document.getElementById('bookingsContent');

    if (bookings.length === 0) {
        bookingsContent.innerHTML = `
            <p style="text-align: center; color: var(--gray-400); padding: var(--spacing-2xl);">
                No bookings found. Book your first movie now!
            </p>
        `;
    } else {
        bookingsContent.innerHTML = bookings.map(booking => `
            <div class="card mb-2">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: var(--spacing-md);">
                    <div>
                        <h3 style="margin: 0 0 var(--spacing-xs) 0;">${booking.movie}</h3>
                        <p style="color: var(--gray-400); margin: 0; font-size: 0.875rem;">Booking ID: ${booking.id}</p>
                    </div>
                    <span style="background: var(--gradient-primary); padding: var(--spacing-xs) var(--spacing-md); border-radius: var(--radius-full); font-size: 0.75rem; font-weight: 600;">Confirmed</span>
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--spacing-sm); font-size: 0.875rem;">
                    <div>
                        <span style="color: var(--gray-400);">Date:</span>
                        <span style="font-weight: 500;"> ${booking.date}</span>
                    </div>
                    <div>
                        <span style="color: var(--gray-400);">Time:</span>
                        <span style="font-weight: 500;"> ${booking.showtime}</span>
                    </div>
                    <div>
                        <span style="color: var(--gray-400);">Seats:</span>
                        <span style="font-weight: 500;"> ${booking.seats.join(', ')}</span>
                    </div>
                    <div>
                        <span style="color: var(--gray-400);">Total:</span>
                        <span style="font-weight: 600; color: var(--accent-500);"> ₹${booking.totalPrice}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    bookingsModal.classList.add('active');
}

// ===================================
// NAVIGATION BUTTONS
// ===================================
document.getElementById('logoBtn').addEventListener('click', () => {
    showPage('home');
    selectedSeats = [];
    currentMovie = null;
    selectedShowtime = null;
});

document.getElementById('browseMoviesBtn').addEventListener('click', () => {
    document.getElementById('moviesGrid').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('backToHomeBtn').addEventListener('click', () => {
    showPage('home');
});

document.getElementById('backToDetailsBtn').addEventListener('click', () => {
    showMovieDetails(currentMovie);
});

document.getElementById('backToSeatsBtn').addEventListener('click', () => {
    showSeatSelection();
});

document.getElementById('proceedToBookingBtn').addEventListener('click', () => {
    showBookingForm();
});

document.getElementById('backToHomeFromConfirmBtn').addEventListener('click', () => {
    showPage('home');
    selectedSeats = [];
    currentMovie = null;
    selectedShowtime = null;
    bookingForm.reset();
});

document.getElementById('downloadTicketBtn').addEventListener('click', () => {
    alert('Ticket download feature would be implemented with PDF generation in a production environment.');
});

// ===================================
// PERFORMANCE OPTIMIZATIONS
// ===================================
function throttle(func, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return func.apply(this, args);
        }
    };
}

// ===================================
// ENHANCED INTERACTIVE UI
// ===================================

// Custom cursor
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorDot = document.createElement('div');
cursorDot.className = 'custom-cursor-dot';
document.body.appendChild(cursorDot);

let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, dotX = 0, dotY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    dotX += (mouseX - dotX) * 0.25;
    dotY += (mouseY - dotY) * 0.25;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';

    requestAnimationFrame(animateCursor);
}

if (window.innerWidth > 768) {
    animateCursor();
}

function addCursorHoverEffects() {
    const elements = document.querySelectorAll('button, a, .movie-card, .seat, input, .mood-btn');
    elements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-hover');
        });
    });
}

function addParallaxTilt() {
    const cards = document.querySelectorAll('.movie-card, .card');
    cards.forEach(card => {
        card.addEventListener('mousemove', throttle((e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
        }, 16));
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
}

function addMagneticEffect() {
    const buttons = document.querySelectorAll('.btn, .mood-btn');
    buttons.forEach(button => {
        button.addEventListener('mousemove', throttle((e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        }, 16));
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

const spotlight = document.createElement('div');
spotlight.className = 'cursor-spotlight';
document.body.appendChild(spotlight);

document.addEventListener('mousemove', throttle((e) => {
    spotlight.style.left = e.clientX + 'px';
    spotlight.style.top = e.clientY + 'px';
}, 16));

function addGlowEffect() {
    const elements = document.querySelectorAll('.movie-card, .btn-primary, .btn-accent, .card');
    elements.forEach(element => {
        element.addEventListener('mousemove', throttle((e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);
        }, 16));
    });
}

function initInteractiveEffects() {
    if (window.innerWidth > 768) {
        addCursorHoverEffects();
        addParallaxTilt();
        addMagneticEffect();
        addGlowEffect();
    }
}

// ===================================
// AI VIBE CHECK
// ===================================
const moodToGenre = {
    happy: ['Comedy', 'Animation', 'Romance'],
    sad: ['Drama', 'Romance'],
    excited: ['Action', 'Thriller', 'Sci-Fi'],
    chill: ['Drama', 'Romance', 'Animation'],
    romantic: ['Romance', 'Drama'],
    scared: ['Horror', 'Thriller']
};

let selectedMood = null;

function getAIRecommendations(mood) {
    const preferredGenres = moodToGenre[mood] || [];
    return movies.filter(movie => preferredGenres.includes(movie.genre))
        .sort((a, b) => b.rating - a.rating).slice(0, 6);
}

function generateAIOverview(movie) {
    const overviews = {
        'Action': `⚡ High-octane ${movie.title} delivers non-stop thrills with a ${movie.rating}/10 rating. Perfect for adrenaline junkies!`,
        'Comedy': `😄 ${movie.title} brings the laughs with clever humor and heartwarming moments. Rated ${movie.rating}/10 by viewers.`,
        'Drama': `🎭 Emotionally powerful, ${movie.title} (${movie.rating}/10) explores deep themes with outstanding performances.`,
        'Sci-Fi': `🚀 Mind-bending ${movie.title} takes you on an epic journey through space and time. ${movie.rating}/10 rating!`,
        'Horror': `👻 Spine-chilling ${movie.title} will keep you on the edge of your seat. Horror fans rate it ${movie.rating}/10.`,
        'Romance': `💕 ${movie.title} is a beautiful love story that will touch your heart. Viewers give it ${movie.rating}/10.`,
        'Thriller': `🔍 ${movie.title} keeps you guessing until the very end with its ${movie.rating}/10 rated suspense.`,
        'Fantasy': `✨ Magical ${movie.title} transports you to enchanting realms. Fantasy lovers rate it ${movie.rating}/10.`,
        'Animation': `🎨 Visually stunning ${movie.title} delights all ages with its ${movie.rating}/10 rated storytelling.`
    };
    return overviews[movie.genre] || `🎬 ${movie.title} is a must-watch ${movie.genre} film rated ${movie.rating}/10.`;
}

movies.forEach(movie => {
    movie.aiOverview = generateAIOverview(movie);
});

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    renderMovies();
    showPage('home');
    initInteractiveEffects();

    const moodButtons = document.querySelectorAll('.mood-btn');
    const vibeCheckBtn = document.getElementById('vibeCheckBtn');

    if (moodButtons.length > 0) {
        moodButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                moodButtons.forEach(b => b.classList.remove('selected'));
                this.classList.add('selected');
                selectedMood = this.dataset.mood;
            });
        });
    }

    if (vibeCheckBtn) {
        vibeCheckBtn.addEventListener('click', () => {
            if (!selectedMood) {
                alert('Please select your mood first! 😊');
                return;
            }

            const recommendations = getAIRecommendations(selectedMood);

            if (recommendations.length > 0) {
                document.getElementById('moviesGrid').scrollIntoView({ behavior: 'smooth' });

                setTimeout(() => {
                    renderMovies(recommendations);

                    const moviesGrid = document.getElementById('moviesGrid');
                    const aiBadge = document.createElement('div');
                    aiBadge.className = 'ai-overview-badge';
                    aiBadge.style.cssText = 'margin-bottom: 1rem; justify-content: center; display: flex;';
                    aiBadge.innerHTML = `🤖 AI picked ${recommendations.length} movies for your ${selectedMood} mood`;
                    moviesGrid.parentElement.insertBefore(aiBadge, moviesGrid);

                    setTimeout(() => aiBadge.remove(), 5000);
                    initInteractiveEffects();
                }, 500);
            } else {
                alert('No movies found for this mood. Try another! 🎬');
            }
        });
    }
});
