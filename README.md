# VideoBelajar — React mission

Responsive static React website with three screens: homepage, registration, and login. Built from the assignment screenshots and the visible VideoBelajar mockup description. The Figma frame was not available to inspect, so compare the finished UI with the actual Figma before submission and adjust any mismatched details.

## Requirements

- Node.js (current LTS)
- VS Code
- Git

## Run locally

1. Extract this ZIP.
2. Open the `videobelajar-react` folder in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open the localhost URL shown in the terminal, usually `http://localhost:5173`.

Pages:

- Homepage: `/`
- Register: `/register`
- Login: `/login`

The forms are front-end demonstrations only. They show a confirmation message but do not create accounts or authenticate users because this assignment asks for a static website and no backend was provided.

## Submit

1. Check all three screens against the Figma reference.
2. Check the layout at desktop width and mobile width using Chrome DevTools device toolbar.
3. Create a GitHub repository, then in the project terminal run:
   - `git init`
   - `git add .`
   - `git commit -m "Build VideoBelajar React UI"`
   - Create an empty repository on GitHub and follow its instructions to connect the remote and push.
4. Optional: deploy the static site on Vercel or Netlify.
5. If you do not deploy, capture desktop and mobile screenshots and add them to a PDF.
6. Submit the GitHub repository link, deployment link or responsive screenshots, and the required form screenshot through Google Classroom.

## Structure

- `src/components`: reusable header, footer, brand, buttons, and auth form components
- `src/pages`: homepage, registration, and login pages
- `src/App.jsx`: simple path-based page selection
- `src/styles.css`: responsive styling
