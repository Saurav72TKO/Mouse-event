# 🖱️ Mouse Position Tracker

A fun little project that tracks your mouse X & Y position live on screen. Built with vanilla JavaScript.

![HTML](https://img.shields.io/badge/HTML-5-orange) ![CSS](https://img.shields.io/badge/CSS-3-blue) ![JS](https://img.shields.io/badge/JavaScript-Vanilla-yellow)

### ✨ Demo
Move your mouse anywhere on the screen and the X, Y values update instantly.

- **Red box** = Mouse X Position (horizontal)
- **Green box** = Mouse Y Position (vertical)

### 🛠️ What I Used

- `window.addEventListener("mousemove")` - to listen to mouse movement
- `e.clientX` & `e.clientY` - to get X/Y coordinates
- `querySelector` & `innerHTML` - to show values in DOM
- Flexbox & Media Queries - for centering and mobile responsiveness

### 📁 Files
├── index.html # Structure - two cards for X and Y
├── style.css # Styling - hotpink bg, blueviolet cards
└── script.js # Logic - mousemove event


### ▶️ How to Run

1. Clone or download the files
2. Just open `index.html` in your browser
3. Move your mouse!

No npm, no build, pure vanilla.

### 🧠 What I Learned

- Difference between `clientX/Y` vs `pageX/Y` vs `screenX/Y`
    - `clientX/Y` = relative to viewport (what I used)
    - `pageX/Y` = relative to full page including scroll
    - `screenX/Y` = relative to physical screen
- How `mousemove` fires many times per second (needs throttle for heavy apps)
- DOM manipulation with `querySelector`

### 🚀 Future Improvements

- [ ] Add `throttle()` to improve performance
- [ ] Show `pageX` and `screenX` also
- [ ] Add click to freeze position
- [ ] Add a dot that follows the mouse

### 👨‍💻 Author
Built while revising JavaScript DOM events.

---
Made with 💖 and `mousemove`
