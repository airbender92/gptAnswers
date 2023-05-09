Sure, here's an example project structure for a complicated React project:

```
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   └── Contact/
│   │       ├── Contact.js
│   │       └── Contact.css
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── validators.js
│   ├── App.js
│   ├── index.js
│   └── setupTests.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

In this example, the main project folder is called `src`, which contains subfolders such as `assets`, `components`, `pages`, `services` and `utils`. The `assets` folder contains all the media files, including images and stylesheets. The `components` folder consists of reusable React components that can be used across different pages. The `pages` folder is where you put your React components that define a specific page of the application. The `services` folder has utility functions and APIs that are consumed by the application. Finally, the `utils` folder contains utility files such as constants, helpers and validators.

This structure facilitates maintainability and scalability in large projects by organizing code logically and making it easier to locate and update various parts of the project.