# Portfolio Website with Email Integration

A modern, responsive portfolio website featuring a stunning dark theme with gradient effects, smooth animations, and a fully functional contact form with email integration.

## ✨ Features

- 🎨 **Premium Design**: Modern dark theme with vibrant gradients, noise texture, and glassmorphism
- 🧊 **3D Background**: Interactive floating particles and shapes using Three.js
- 🍱 **Bento Grid**: Trendy asymmetric grid layout for project showcasing
- 🖱️ **Advanced Interactions**: Magnetic buttons, custom cursor, and hover effects
- 📱 **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ✉️ **Email Integration**: Contact form with backend email functionality using Nodemailer
- 🎭 **Smooth Animations**: Fade-in effects, scroll animations, and micro-interactions
- 📊 **Scroll Progress Indicator**: Visual feedback as users scroll through the page
- 🍔 **Mobile Menu**: Hamburger menu for seamless mobile navigation
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, animations, gradients, and glassmorphism
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Vite**: Lightning-fast build tool and dev server

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **Nodemailer**: Email sending functionality
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## 📦 Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd c:\Users\wwwsu\.gemini\antigravity\playground\time
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   npm install three
   cd ..
   ```

4. **Install server dependencies**
   ```bash
   cd server
   npm install cors express nodemailer dotenv
   cd ..
   ```

## ⚙️ Configuration

### Email Setup

1. Navigate to the `server` folder
2. Edit the `.env` file with your email credentials:

```env
PORT=3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

#### Gmail Setup Instructions:
1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Use this password in the `.env` file

**Note**: Regular Gmail passwords won't work. You must use an app-specific password.

## 🚀 Running the Application

### Development Mode (Recommended)

Run both frontend and backend simultaneously:

```bash
npm run dev
```

This will start:
- Frontend dev server on `http://localhost:5173` (Vite default)
- Backend server on `http://localhost:3000`

### Running Separately

**Frontend only:**
```bash
cd client
npm run dev
```

**Backend only:**
```bash
cd server
node server.js
```

## 📂 Project Structure

```
time/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── main.js        # JavaScript logic
│   │   └── style.css      # Styles and animations
│   ├── index.html         # Main HTML file
│   ├── package.json
│   └── vite.config.js     # Vite configuration
├── server/                # Backend application
│   ├── server.js          # Express server & email handler
│   ├── .env              # Environment variables
│   └── package.json
├── package.json          # Root package (concurrent scripts)
└── README.md            # This file
```

## 🎨 Customization

### Colors
Edit CSS variables in `client/src/style.css`:

```css
:root {
  --bg-color: #0a0a0a;
  --text-color: #e5e5e5;
  --text-secondary: #a1a1a1;
  --primary: #6366f1;
  --secondary: #a855f7;
  --accent: #ec4899;
}
```

### Content
- Update project cards in `client/index.html`
- Modify hero section text and call-to-action buttons
- Change contact information (email, location)
- Add your social media links in the footer

### Fonts
The website uses **Outfit** from Google Fonts. To change:
1. Update the font import in `client/index.html`
2. Update `--font-family` in `client/src/style.css`

## 📧 Contact Form

The contact form includes:
- Real-time validation
- Loading states with spinner animation
- Success/error feedback messages
- Automatic form reset on successful submission
- Backend email delivery via Nodemailer

## 🌐 Deployment

### Frontend
Deploy to platforms like:
- **Vercel**: `vercel deploy`
- **Netlify**: Connect your Git repo
- **GitHub Pages**: For static hosting

### Backend
Deploy to:
- **Heroku**: Node.js hosting
- **Railway**: Modern deployment platform
- **DigitalOcean**: VPS hosting

**Important**: Update the API endpoint in `client/src/main.js` when deploying:
```javascript
// Change from:
fetch('http://localhost:3000/api/contact', ...)

// To your production URL:
fetch('https://your-api-domain.com/api/contact', ...)
```

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 🐛 Troubleshooting

### Email not sending
- Verify Gmail app password is correct
- Check 2-Step Verification is enabled
- Ensure `.env` file is in the `server` folder
- Check server console for error messages

### CORS errors
- Ensure backend server is running on port 3000
- Check CORS is properly configured in `server.js`

### Port already in use
- Change port in `server/.env`
- Update fetch URL in `client/src/main.js`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

---

**Made with ❤️ using modern web technologies**
