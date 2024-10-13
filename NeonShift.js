(function() {
    // Create and style the toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.style.position = 'fixed';
    toggleBtn.style.top = '10px';
    toggleBtn.style.right = '10px';
    toggleBtn.style.zIndex = '1000';
    toggleBtn.style.backgroundColor = 'transparent';
    toggleBtn.style.border = 'none';
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.fontSize = '20px';
    toggleBtn.style.color = '#000'; // Default color for day mode
    document.body.appendChild(toggleBtn);

    // Inject CSS for day and night modes
    const style = document.createElement('style');
    style.textContent = `
        body {
            transition: background-color 0.5s, color 0.5s;
        }
        body.night-mode {
            background-color: #333;
            color: #39ff14; /* Neon green for text */
        }
        body.night-mode a {
            color: #ff073a; /* Neon red for links */
        }
        body.night-mode header,
        body.night-mode footer,
        body.night-mode .card,
        body.night-mode .container {
            background-color: #444;
            border-color: #ff073a; /* Neon red border */
        }
        body.night-mode h1 {
            color: #ff1493; /* Neon pink for h1 */
        }
        body.night-mode h2 {
            color: #ffa500; /* Neon orange for h2 */
        }
        body.night-mode h3 {
            color: #7fff00; /* Neon chartreuse for h3 */
        }
        body.night-mode h4 {
            color: #00ffff; /* Neon cyan for h4 */
        }
        body.night-mode h5 {
            color: #00ff7f; /* Neon spring green for h5 */
        }
        body.night-mode h6 {
            color: #ff4500; /* Neon orange-red for h6 */
        }
        body.night-mode p {
            color: #39ff14; /* Neon green for paragraphs */
        }
    `;
    document.head.appendChild(style);

    // Load and apply the current theme from localStorage
    const currentTheme = localStorage.getItem('theme') || 'day';
    if (currentTheme === 'night') {
        document.body.classList.add('night-mode');
        toggleBtn.textContent = '☀️';
        toggleBtn.style.color = '#39ff14'; // Neon color for night mode
    } else {
        toggleBtn.textContent = '🌙';
    }

    // Toggle theme on button click
    toggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('night-mode')) {
            document.body.classList.remove('night-mode');
            toggleBtn.textContent = '🌙';
            toggleBtn.style.color = '#000'; // Color for day mode
            localStorage.setItem('theme', 'day');
        } else {
            document.body.classList.add('night-mode');
            toggleBtn.textContent = '☀️';
            toggleBtn.style.color = '#39ff14'; // Neon color for night mode
            localStorage.setItem('theme', 'night');
        }
    });
})();
