# CoD Zombies Helper

Tired of getting stuck on Call of Duty: Black Ops 6 Zombies Easter Eggs? CoD Zombies Helper is here to save your time and sanity! This web app provides quick and easy solutions for various maps like Terminus, Shattered Veil, and Citadelle des Morts. Just plug in the in-game details, and let the helper do the work, so you can focus on the fun.

## Live Demo

The website is hosted at: https://nicojoerger.github.io/cod_helper/

## Features

- Interactive calculator for Terminus map coordinates.
- Solver for Shattered Veil Easter Egg.
- Solver for Citadelle des Morts Raven Sword Puzzle.
- Navigation menu to switch between different map tools.
- Modern, dark-themed user interface.
- Custom SVG symbols for input selection.
- Responsive design for various screen sizes.

## Local Development

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/<your-github-username>/cod-helper.git
    cd cod-helper
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

1.  **Ensure `gh-pages` is installed:**
    It should be listed in your `package.json` devDependencies. If not, install it:
    ```bash
    npm install --save-dev gh-pages
    ```

2.  **Update `homepage` in `package.json`:**
    Open `package.json` and ensure the `homepage` field is set to your GitHub Pages URL. Replace `<your-github-username>` with your actual GitHub username.
    ```json
    "homepage": "https://<your-github-username>.github.io/cod-helper"
    ```

3.  **Deploy the application:**
    ```bash
    npm run deploy
    ```
    This command will build the project and push the `dist` folder to the `gh-pages` branch of your repository. Your site will then be accessible at the URL specified in `homepage`.