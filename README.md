# 🎬 CineBook - AI-Powered Movie Booking Website

A stunning, interactive movie ticket booking platform with AI-powered mood-based recommendations.

## ✨ Features

- **🤖 AI Vibe Check** - Get personalized movie recommendations based on your mood
- **🎨 Interactive UI** - Smooth parallax effects, custom cursor, and magnetic buttons
- **🎫 Complete Booking System** - Browse movies, select seats, and confirm bookings
- **📱 Responsive Design** - Works perfectly on all devices
- **💾 Local Storage** - Save and view your booking history

## 🚀 Live Demo

[View Live Site](#) *(Add your deployed URL here)*

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom Properties, Gradients, Animations)
- Vanilla JavaScript (ES6+)
- Local Storage API

## 📦 Features Breakdown

### AI-Powered Recommendations
- 6 mood options: Happy, Sad, Excited, Chill, Romantic, Thrill
- Smart genre mapping
- Top-rated movie suggestions

### Interactive Effects
- Custom animated cursor
- 3D parallax tilt on cards
- Magnetic button hover effects
- Smooth scroll animations
- Spotlight glow effect

### Movie Catalog
- 20+ movies across 10 genres
- Action, Comedy, Drama, Sci-Fi, Horror, Romance, Thriller, Fantasy, Animation
- Detailed movie information with AI-generated overviews

### Booking Flow
1. Browse movies by genre
2. View movie details and AI overview
3. Select showtime
4. Choose seats (interactive seat map)
5. Enter booking details
6. Get confirmation with booking ID

## 🎯 Getting Started

### Option 1: Direct Use
Simply open `index.html` in your browser!

### Option 2: Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000`

## 📁 Project Structure

```
cinebook/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🎨 Design Highlights

- **Dark Mode Theme** - Easy on the eyes
- **Gradient Accents** - Modern purple/pink gradients
- **Glassmorphism** - Frosted glass effects
- **Smooth Animations** - 60fps performance
- **Premium Feel** - Professional UI/UX

## 🔧 Customization

### Adding Movies
Edit the `movies` array in `script.js`:
```javascript
{
  id: 21,
  title: "Your Movie",
  genre: "Genre",
  rating: 8.5,
  duration: "120 min",
  description: "Description here",
  poster: "image-url",
  showtimes: ["10:00 AM", "2:00 PM"],
  price: 250
}
```

### Changing Colors
Modify CSS variables in `styles.css`:
```css
:root {
  --primary-500: #6366f1;
  --accent-500: #ec4899;
  /* ... */
}
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

Built with ❤️ using AI assistance

---

**Note:** This is a frontend demo. For production use, integrate with a backend API for real movie data and payment processing.
