# JavaScript Quiz App

A simple client-side quiz application built with HTML, CSS, and JavaScript.

## 🚀 Features

- Multiple-choice questions
- Timer for each question
- Score tracking and high score persistence (using `localStorage`)
- Start and restart functionality
- Responsive, minimal design

## 🔧 Installation

This is a static web project. No build tools or server dependencies are required.

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd quiz-app
   ```

2. **Open in browser:**
   - Double-click `index.html`, or
   - Serve with a local HTTP server (e.g., `npx serve`) and visit `http://localhost:3000`.

## 📝 Usage

1. Click the **Start Quiz** button on the landing screen.
2. Answer each question before the timer runs out.
3. The quiz advances automatically when you select an answer or the timer expires.
4. After completing all questions, view your score and a message based on performance.
5. Your high score is saved in the browser and displayed on the start screen.
6. Click **Restart Quiz** to try again.

## 📁 Project Structure

```
quiz-app/
├── index.html      # Main HTML page
├── script.js       # Quiz logic and DOM manipulation
├── style.css       # Styling for the interface
└── README.md       # Project documentation (this file)
```

## 🛠 Customization

- Add, remove, or modify questions in `script.js` under the `questions` array.
- Update styles in `style.css` to change the look and feel.
- Enhance functionality (e.g., add categories, score history) as needed.

## 📄 License

This repository is open source and available under the [MIT License](LICENSE).

---

Happy quizzing! 🧠🎉