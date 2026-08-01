# Alireza Ebrahimi Portfolio

A static frontend portfolio website for Alireza Ebrahimi, built with HTML, CSS, and JavaScript. The site combines a neon cyberpunk-inspired interface, glitch animations, and responsive mobile behavior with a sidebar navigation, audio player, book library, resume download, and contact links.

## Features

- Cyberpunk/glitch portfolio design with animated neon headings and scanline overlays
- Fixed sidebar navigation with quick links to About, Library, Projects, Contact, Resume, and GitHub
- Custom audio player with playlist controls, current track display, album art, and progress scrubber
- Light/dark theme toggle that remembers the user preference
- Responsive mobile layout with compact player UI and phone-optimized scroll behavior
- Scrollable About Me text container on small screens
- Horizontally scrollable library cards on mobile devices
- Book library section with external Goodreads links for featured titles
- Resume download button and contact links for LinkedIn and email
- Preloader overlay for polished page entry

## Built With

- HTML5
- CSS3
- JavaScript

## Project Structure

- `index.html` - main website markup and content structure
- `css/style.css` - complete styling, theme variables, animations, and responsive rules
- `js/script.js` - theme handling, audio playback, track loading, and page initialization
- `fonts/` - custom font assets used by the site
- `image/` - favicon, preview images, and visual assets
- `music/` - local audio files used by the music player
- `resume/` - downloadable resume PDF
- `book images/` - book cover images for the library section

## Usage

1. Open `index.html` in a modern browser.
2. Use the sidebar links to move between sections.
3. Play, pause, and skip music using the audio controls in the sidebar.
4. Toggle the light/dark theme using the button in the header.
5. Scroll the About Me section and library cards on mobile for better reading and browsing.

## Browser Compatibility

The portfolio is built for modern browsers and includes responsive layout adjustments for desktop and mobile devices. It is optimized for both light and dark themes and supports touch-friendly interactions on smaller screens.

## Notes

- Local audio playback requires the files in the `music/` folder to be present.
- Book links and external links open in a new tab for safe browsing.
- The site uses local storage to save the selected theme preference.
- Resume download points to the PDF file under `resume/`.
