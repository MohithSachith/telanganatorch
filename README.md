# 🏛️ TORCH — Team of Research on Culture and Heritage

A premium digital portal dedicated to documenting, archiving, and preserving the rich historical, architectural, and cultural heritage of Telangana. TORCH (Team of Research on Culture and Heritage) bridges the gap between historical preservation and digital access, providing an immersive, visually rich platform to showcase the region's untold stories.

---

## 🌟 Key Features

*   **Immersive Visual Design:** Crafted with custom warm palettes (deep amber, gold, cream, and charcoal) that evoke the feel of ancient stone, manuscripts, and heritage sites.
*   **Dynamic Projects Hub:** Interactive cataloging system of ongoing and completed research initiatives (e.g., forgotten temple mapping, Nizam-era archives, youth workshops). Users can search and filter by category (Documentation, Community, Research, Film, Education).
*   **Interactive Gallery:** A fully responsive masonry layout displaying high-resolution documentation of events, walks, exhibitions, and archaeological surveys, complete with category-based filtering and a customized, touch-friendly image lightbox.
*   **Interactive Storyline & Timeline:** A visual walkthrough of the organization's history, milestones, and mission details on the About page.
*   **Supporter Portal (Donate):** Interactive page outlining how users can support heritage conservation, showing direct impact statistics, and providing clear support paths.
*   **Fully Mobile-Responsive:** Tailored experience across all screen sizes (mobile-first styling rules, touch-scrollable horizontal navigation, and responsive typography).

---

## 🛠️ Tech Stack & Architecture

This application is built using modern web technologies prioritizing speed, aesthetic excellence, and maintainable structure:

*   **Core Framework:** [React 19](https://react.dev/) — Fast, declarative UI rendering.
*   **Build Tool / Dev Server:** [Vite 8](https://vite.dev/) — Near-instantaneous Hot Module Replacement (HMR) and fast build execution.
*   **Routing:** [React Router DOM v7](https://reactrouter.com/) — Clean declarative routing and seamless page transition management.
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & Custom Vanilla CSS (Design system, smooth layout animations, global utility variables).
*   **Performance & SEO:** Pre-optimized responsive images, custom viewport meta settings, semantic HTML structures, and scroll-to-top automation on route changes.

---

## 📁 Project Structure

```text
torch/
├── public/                 # Static assets (Logos, icons, images)
├── src/
│   ├── assets/             # Raw asset imports
│   ├── components/
│   │   └── common/
│   │       ├── Navbar.jsx  # Responsive top navigation with blur glassmorphism
│   │       └── Footer.jsx  # Detailed custom site directory & social footer
│   ├── data/
│   │   └── galleryData.js  # Centralized structured data for research image sets
│   ├── pages/
│   │   ├── Home.jsx        # Landing page with hero, intro, and highlights
│   │   ├── About.jsx       # Organization mission, vision, and timeline
│   │   ├── Projects.jsx    # Projects archive with category filters & search
│   │   ├── Gallery.jsx     # Masonry visual gallery with lightbox detail views
│   │   ├── Donate.jsx      # Support portals and impact metrics
│   │   └── Contact.jsx     # FAQ accordion and stylized message portal
│   ├── App.css             # Main stylesheet imports
│   ├── App.jsx             # Global routing and page wrapper
│   ├── index.css           # Global typography, color tokens, and animation utilities
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and development scripts
├── eslint.config.js        # Linting rules & code standards
├── vite.config.js          # Vite build settings
└── .gitignore              # Files and folders excluded from Git tracking
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) along with `npm`.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MohithSachith/telanganatorch.git
    cd telanganatorch
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the local development server:**
    ```bash
    npm run dev
    ```
    The application will launch locally at `http://localhost:5173/`.

### Building for Production

To create an optimized production bundle:
```bash
npm run build
```
To preview the production build locally:
```bash
npm run preview
```

---

## 👥 Contributors

This project is developed and maintained by the following core contributors:

*   **Mohith**
*   **Madhu Maneesh**

---

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute as per the license guidelines.
