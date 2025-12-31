# Portfolio Website - Quick Start Checklist

## ✅ Setup Checklist

### 1. Initial Setup (Already Complete!)
- [x] Install dependencies
- [x] Set up project structure
- [x] Configure Vite
- [x] Create server with Express

### 2. Email Configuration (Action Required!)
- [ ] Open `server/.env`
- [ ] Add your Gmail address to `EMAIL_USER`
- [ ] Generate Gmail App Password:
  1. Go to Google Account → Security
  2. Enable 2-Step Verification
  3. Create App Password for "Mail"
  4. Copy password to `EMAIL_PASS`
- [ ] Save the file

### 3. Personalization (Customize Your Site!)
- [ ] Update page title in `client/index.html` (line 8)
- [ ] Change author name in meta tags (line 12)
- [ ] Update logo text "Portfolio." in navbar (line 21)
- [ ] Replace "hello@example.com" with your email (line 82)
- [ ] Update location in contact section (line 86)
- [ ] Add your social media links in footer (lines 118-120)
- [ ] Customize project cards with your actual projects
- [ ] Update copyright year in footer (line 116)

### 4. Content Updates
- [ ] Hero Section:
  - [ ] Modify headline if desired
  - [ ] Update subtitle with your description
  - [ ] Customize button texts

- [ ] Projects Section:
  - [ ] Add real project titles
  - [ ] Write compelling descriptions
  - [ ] Link to live projects or GitHub repos
  - [ ] Consider adding project screenshots (Bento grid supports varying sizes!)

- [ ] Skills Section (New!):
  - [ ] Edit skill titles in `client/index.html` (lines 66-87)
  - [ ] Update icons (using remixicon.com class names)
  - [ ] Customize descriptions for each skill

### 5. Design Tweaks (Optional)
- [ ] Adjust color scheme in `:root` CSS variables
- [ ] Change font if desired
- [ ] Modify gradient colors on project cards
- [ ] Add/remove sections as needed

### 6. Testing
- [ ] Test contact form with real email
- [ ] Check responsive design on mobile
- [ ] Test all navigation links
- [ ] Verify smooth scrolling works
- [ ] Test mobile menu toggle
- [ ] Check loading states

### 7. Pre-Deployment
- [ ] Update `og:url` meta tag with your domain
- [ ] Add favicon (replace `/vite.svg`)
- [ ] Test in multiple browsers
- [ ] Optimize images if you added any
- [ ] Review all links and content

### 8. Deployment
- [ ] Build frontend: `cd client && npm run build`
- [ ] Deploy frontend (Vercel/Netlify)
- [ ] Deploy backend (Heroku/Railway)
- [ ] Update API endpoint in `client/src/main.js`
- [ ] Test production deployment
- [ ] Set environment variables on hosting platform

## 🚀 Running the Project

**Development Mode:**
```bash
# From project root
npm run dev
```

This starts both:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

**Separate Servers:**
```bash
# Frontend only
cd client
npm run dev

# Backend only (in new terminal)
cd server
node server.js
```

## 📝 Important Notes

1. **Email Password**: Never commit your `.env` file! It's already in `.gitignore`

2. **API URL**: Change from `http://localhost:3000` to your production URL before deploying

3. **CORS**: Update CORS origin in `server/server.js` for production

4. **Port Conflicts**: If port 3000 or 5173 is in use, change in:
   - `server/.env` for backend
   - Vite will auto-increment frontend port

## 🎯 Next Actions

**Immediate:**
1. Configure email (see step 2 above)
2. Test contact form
3. Personalize content

**Soon:**
1. Add real project details
2. Create custom favicon
3. Add project screenshots

**Before Launch:**
1. Final testing
2. Performance check
3. Deploy!

---

**Current Status**: ✅ Development server running!
**Your Site**: http://localhost:5173
**API Server**: http://localhost:3000

Need help? Check `README.md` for detailed documentation!
