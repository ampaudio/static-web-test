# Static Web Test

A simple static website project for testing GitHub Pages deployment.

## Features

- 📱 Responsive design
- 🎨 Modern gradient styling
- ⚡ Interactive JavaScript
- 🚀 Ready for GitHub Pages
- 📦 No build process required

## Project Structure

```
static-web-test/
├── index.html      # Main HTML file
├── style.css       # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Local Development

Simply open `index.html` in your web browser to view the site locally.

Alternatively, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Deploying to GitHub Pages

### Method 1: Direct Push

1. Create a new repository on GitHub
2. Initialize and push this project:

```bash
git init
git add .
git commit -m "Initial commit: Static web test project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

3. Go to your repository settings on GitHub
4. Navigate to **Pages** section
5. Under "Source", select `main` branch
6. Click **Save**
7. Your site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Method 2: GitHub Actions (Optional)

For automatic deployment with GitHub Actions, create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Static Site

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .
```

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript (ES6+)
- No frameworks or dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this project for testing and learning purposes.

## Contributing

This is a test project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Made with ❤️ for testing GitHub Pages deployment
