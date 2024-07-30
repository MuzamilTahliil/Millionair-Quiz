# Millionair-Quiz

## Links 
- Github : https://github.com/MuzamilTahliil/Millionair-Quiz/tree/main.
- Vercel :https://millionair-quiz.vercel.app/.
## Installation

To get started with this project, clone the repository and install the dependencies:

cd Millionair-Quiz
npm install
```

## Usage
To start the development server and view the app in your browser:

```bash
# Start the development server
npm run dev

# Build for production
npm run build

## Features

- Home page with navigation links to Home, About, and Contact pages.
- Quiz page with timer and scoring system.
- Lazy loading of components using `React.lazy` and `Suspense`.
- Game rules section to guide users on how to play.
- Top winners section to showcase the highest scorers.
- Contact form for user inquiries.
- Responsive design using Tailwind CSS.

# Screenshots

Include screenshots of your app here.

### Home Page
![image](https://github.com/user-attachments/assets/eac545f5-f355-4367-b9ff-6f9fa3874ac9)
![image](https://github.com/user-attachments/assets/c562d927-126b-42ff-8b27-206a007c6595)
![image](https://github.com/user-attachments/assets/10be956d-2d23-4335-9206-58ae70a55ace)

### Quiz Page
![image](https://github.com/user-attachments/assets/112b998e-b792-45d3-89ce-dc7b9b8adc60)
![image](https://github.com/user-attachments/assets/4ecd0322-38b8-4ade-a654-1a1e52c2cadc)



### About Page
![image](https://github.com/user-attachments/assets/3eeabc40-1ce2-45eb-ab10-58e6b536a582)

### Contact Page
![image](https://github.com/user-attachments/assets/b2bd4a82-e0bd-4440-b5a2-3c3fe265de75)


## Project Structure

```markdown
- src/
  - components/
    - Footer.jsx
    - Header.jsx
    - NotFound.jsx
    - Quiz.jsx
    - Start.jsx
    - Timer.jsx
  - pages/
    - Home.jsx
    - About.jsx
    - Contact.jsx
    - Login.jsx
    - QuizPage.jsx
  - App.jsx
  - index.css
  - main.jsx
```

## Sounds

The application uses sounds for different actions such as correct and wrong answers, and a start sound when the quiz begins. Make sure to add your sound files in the appropriate directory and import them in your components.

## Important Note

The "Let's Start" button on the Home Page is crucial as it navigates to the quiz page. Ensure it functions correctly by checking the `startQuiz` function in the `Home.jsx` component.

```javascript
const startQuiz = () => {
  navigate('/quiz');
};
```
