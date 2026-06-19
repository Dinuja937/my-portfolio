# Dinuja Ranaweera - Personal Portfolio

A modern, responsive, and high-performance personal portfolio website built using **React** and **Vite**.
This portfolio highlights my work as a Software Engineering undergraduate, showcasing my projects, technical skills, education, and certifications.

## Live Demo

🔗 **[View Portfolio](https://dinuja937.github.io/my-portfolio/)**

## Features

* **Modern UI/UX** – Clean and minimalist design focused on readability and user experience
* **Dark Mode Support** – Seamless theme switching using CSS variables
* **Fully Responsive** – Optimized for mobile, tablet, and desktop devices
* **Dynamic Skills Section** – Visual representation of technologies using Devicon
* **Projects Showcase** – Highlights key projects with descriptions, tech stacks, and links
* **Certifications Section** – Displays verified certifications and achievements
* **AJAX Contact Form** – Functional contact form using FormSubmit without page reloads
* **Smooth Navigation** – Anchor-based navigation with smooth scrolling

## Tech Stack

* **Frontend**: React.js (v19)
* **Build Tool**: Vite
* **Styling**: Vanilla CSS (CSS Variables for theming)
* **Icons**: React Icons & Devicon
* **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

* Node.js (v18 or higher)
* npm 

### Installation

```bash
git clone https://github.com/Dinuja937/my-portfolio.git
cd my-portfolio
npm install
```

### Running Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

### Building for Production

```bash
npm run build
```

## Deployment

This project is deployed using **GitHub Pages** with the `gh-pages` package.

To deploy:

```bash
npm run deploy
```

## Project Structure

```text
src/
├── assets/          # Images and static files
├── components/      # Reusable UI components
│   ├── About/
│   ├── Blog/
│   ├── Certifications/
│   ├── Contact/
│   ├── Education/
│   ├── Hero/
│   ├── Navbar/
│   ├── Projects/
│   └── Skills/
├── App.jsx          # Main component
├── main.jsx         # Entry point
└── index.css        # Global styles
```
