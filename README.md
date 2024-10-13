# NeonShift

NeonShift is a lightweight JavaScript library that enables seamless toggling between day and night modes on web pages. With vibrant neon colors, this script enhances user experience by providing an aesthetically pleasing theme switcher.

## Features

- **Smooth Transition:** Effortlessly switch between day and night modes with smooth transitions.
- **Neon Colors:** Enjoy vibrant neon color themes for text and backgrounds.
- **Persistent Theme:** Remembers the user's theme preference using local storage.

## Demo

Check out the [Demo Page](http://checkthese.com/demo/NeonShift/) to see NeonShift in action!

## Installation

1. **Download the Script:**
   Clone or download the NeonShift repository from GitHub.

   ```bash
   git clone https://github.com/capricorne888/neonshift.git
   ```

2. **Include in Your Project:**
   Add the JavaScript file to your HTML document.

   ```html
   <script src="[path/to/neonshift.js]"></script>
   ```
   or use the URL pointing to this repository:
   
   ```html
   <script src="http://kikurl.com/NeonShift"></script>
   ```

## Usage

### Code Explanation

1. **Creating the Toggle Button:**
   - The script starts by creating a button element that will be used to switch between day and night modes.
   - The button is styled to appear fixed at the top-right corner of the webpage, making it easily accessible.

2. **Injecting CSS Styles:**
   - A `<style>` element is added to the document to define styles for both day and night modes.
   - In night mode, different elements like text, links, headers, and containers are styled with neon colors for a vibrant look.

3. **Loading and Applying the Current Theme:**
   - The script checks if a theme preference (day or night) is saved in the browser's local storage.
   - If a preference is found, it applies that theme when the page loads. This ensures that users see their preferred theme automatically.

4. **Toggling Themes:**
   - An event listener is attached to the toggle button. When clicked, it switches between day and night modes.
   - The button's icon changes (sun or moon) based on the current mode.
   - The new theme preference is saved in local storage so that it persists across page reloads.

### How to Use

1. **Initialize NeonShift:**
   Simply include the script in your HTML file, and it will automatically add a toggle button to your page.

2. **Customize Styles:**
   You can modify the CSS within the script to change how day and night modes look on your site.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by vibrant neon themes.
- Special thanks to all contributors who have helped or will help improve this project.
