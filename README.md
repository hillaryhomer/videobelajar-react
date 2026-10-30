# VideoBelajar — React front-end revision

This static React prototype follows the uploaded VideoBelajar Figma screenshots and style guide. It includes responsive desktop, tablet, and mobile layouts for the main flows:

- Home, course catalogue, course detail
- Login and registration
- Payment method, payment instructions, payment success/pending
- My orders, My courses, profile
- Lesson video, rules, quiz, quiz result, summary, course completion, certificate, and review modal

The prototype keeps interaction in the browser only. Login, registration, payment, profile saving, downloads, and class data are demonstrations and are not connected to a server or real payment provider.

## Run locally

1. Extract the ZIP and open the `videobelajar-react` folder in VS Code.
2. Open Terminal → New Terminal.
3. Run `npm install`, then `npm run dev`.
4. Open the localhost URL shown in the terminal.

## Main routes

- `/` Home
- `/products` Course catalogue
- `/course/ux` Course detail
- `/login` and `/register`
- `/checkout/method`, `/checkout/pay`, `/checkout/change`, `/checkout/success`, `/checkout/pending`
- `/orders`, `/my-courses`, `/profile`
- `/learn/video`, `/learn/rules`, `/learn/quiz`, `/learn/result`, `/learn/summary`
- `/certificate`

The Figma page could not be opened in the browser, so this revision is based on the screenshots uploaded in chat. Compare the local UI with the Figma file before submission, especially text or images that were too small to read in the screenshots.

## Submission reminders

1. Compare Home, Login, and Register with the Figma frames first.
2. Check each at desktop, tablet, and mobile widths in Chrome DevTools.
3. Capture screenshots at the required viewports and include them as evidence if asked.
4. Push the code to GitHub and deploy to Netlify/Vercel if required.
5. Submit the repository and deployment links through Google Classroom.
