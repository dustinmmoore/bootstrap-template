# Dean Herman Ministries - Bootstrap Template

A responsive Bootstrap template based on the [Dean Herman Ministries website](https://www.deanhermanministries.com), featuring the exact color scheme and design elements from the original site.

## Features

- Fully responsive design using Bootstrap 5
- Authentic color palette and styling from the original deanhermanministries.com
- Smooth scrolling navigation
- Modern and clean layout
- Interactive elements with subtle animations
- Mobile-friendly design
- Section-based layout
- Full JavaScript functionality

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser to view the template
3. Customize the content in `index.html` to match your needs
4. Add your own images to the `img` folder

## Required Images

For this template to display properly, you'll need to add the following images to the `img` folder:

- `hero-bg.jpg` - Hero section background (1920x1080px recommended)
- `pastor-dean.jpg` - Pastor's photo (square format recommended)
- `logo.png` - Ministry logo
- `video-placeholder.jpg` - Placeholder for video testimonials
- `bible-study.jpg` - Bible study image
- `prayer.jpg` - Prayer image
- `youth.jpg` - Youth ministry image
- `worship.jpg` - Worship service image
- `community.jpg` - Community service image
- `leadership.jpg` - Leadership training image

The website will detect if these images are missing and display a notice with a link to instructions on how to add them.

## Customization

### Colors

The template uses the exact color scheme from deanhermanministries.com, defined in CSS variables:

```css
:root {
    /* Core Colors */
    --dark: #0f2220;          /* Darker base */
    --accent: #a2854b;        /* Gold accent */
    --light: #d6c9ae;         /* Light neutral/tan */
    --dark-accent: #8b714a;   /* Darker gold */
    --light-accent: #e2d7c2;  /* Lighter neutral */
    
    /* Extended Color Palette */
    --primary-dark: #081514;  /* Even darker */
    --primary: #0f2220;       /* Main dark */
    --primary-light: #1F433F; /* Original teal */
}
```

### Fonts

The template uses the same Google Fonts as the original site:

- Playfair Display (headings)
- Manrope (body text)

You can change these by updating the Google Fonts link in the `<head>` section of `index.html` and updating the font-family references in `css/styles.css`.

### Content

To customize the content:

1. Edit the text in `index.html`
2. Replace the scripture quotes with your preferred verses
3. Update event details with your actual events
4. Add or remove sections as needed

## Browser Compatibility

This template works in all modern browsers including:
- Chrome
- Firefox
- Edge
- Safari
- Opera

## Credits

Built with:
- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- Original design from [Dean Herman Ministries](https://www.deanhermanministries.com) 