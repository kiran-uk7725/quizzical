# 💡 Quizzical - Trivia App

**Quizzical** is an interactive trivia game built using **React** and the **Open Trivia Database API**.

---

## 🚀 Live Demo

- **Live Site:** [https://kiran-uk7725.github.io/quizzical](https://kiran-uk7725.github.io)
- **Design Reference:** [Figma Design File](https://https://www.figma.com/design/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App/)

---

## ✨ Features

- **Intro Screen:** Clean, welcoming start page before initiating the trivia round.
- **Dynamic Questions:** Fetches 5 randomized trivia questions live from the Open Trivia DB API.
- **Answer Selection:** Interactive selection logic with stateful button highlighting.
- **Score Checking & Feedback:** Evaluates correct/incorrect answers with visual feedback (green for correct, red for wrong) upon submission.
- **HTML Entity Decoding:** Properly parses encoded characters (e.g., `&quot;`, `&#039;`) returned by the API.
- **Replayability:** Options to reset state and load a fresh set of questions with a single click.

---

## 🛠️ Built With

- **React** (Hooks: `useState`, `useEffect`)
- **Vite** (Build tool / Dev server)
- **JavaScript (ES6+)**
- **CSS3 / CSS Modules** (Custom flexbox layout & dynamic styling)
- **Open Trivia Database API**
- **nanoid / uuid** (Unique key generation for elements)
- **html-entities / he** (Decoding API response strings)

---

## 💡 Key Learnings & Concepts Practiced

1. **API Data Fetching & Side Effects:** Utilizing `useEffect` to fetch quiz data asynchronously from an external REST API.
2. **Complex State Management:** Managing nested data structures for question lists, user selection states, and score evaluation without mutating state directly.
3. **Array Manipulation:** Shuffling multiple-choice and true/false options randomly using array methods.
4. **Conditional Rendering:** Toggling between the Start/Intro screen, the active quiz view, and the score summary screen.
5. **Dynamic Styling:** Dynamically applying CSS classes based on the user's selection state and answer correctness post-submission.

---