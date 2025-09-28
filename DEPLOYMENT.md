# Portfolio Deployment Guide

## 🚀 GitHub Pages Deployment

### Prerequisites
- GitHub account
- Git installed locally

### Steps to Deploy

1. **Create GitHub Repository**
   ```bash
   # Create a new repository on GitHub named 'portfolio'
   # Make sure it's public for free GitHub Pages
   ```

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section
   - Source: "GitHub Actions"
   - Save

4. **Your Site Will Be Live At:**
   ```
   https://YOUR_USERNAME.github.io/portfolio
   ```

## 🌟 Alternative: Vercel (Recommended)

### One-Click Deploy
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Deploy!

### Manual Deploy
```bash
npm install -g vercel
vercel
```

## 📁 Build for Static Hosting

```bash
# Build the static site
npm run build

# The static files will be in the 'out' folder
# Upload the contents of 'out' to any static hosting service
```

## 🔧 Environment Variables

For production, make sure to set:
- `NEXT_PUBLIC_SITE_URL` - Your live site URL
- Any API keys or environment variables

## 📝 Custom Domain (Optional)

1. **GitHub Pages:**
   - Add `CNAME` file with your domain
   - Update DNS settings

2. **Vercel:**
   - Add domain in Vercel dashboard
   - Update DNS settings

## 🎯 Performance Tips

- Images are optimized for static export
- CSS is minified
- JavaScript is bundled and optimized
- Perfect Lighthouse scores!

## 🐛 Troubleshooting

- **404 on refresh**: This is normal for SPA routing
- **Images not loading**: Check image paths are relative
- **Build errors**: Check all imports and dependencies