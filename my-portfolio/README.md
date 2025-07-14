# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


import { useTranslation } from 'react-i18next';
import profileImage from '../assets/images/pp-ich.jpeg';

export default function Home() {
    const { t } = useTranslation();

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/path/to/cv.pdf';
        link.download = 'Kazim_Akyol_CV.pdf';
        link.click();
    };

    return (
        <section className="min-h-screen flex items-center bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">
                            Hi, I'm <span className="text-yellow-400">Kazim Akyol</span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold text-green-400 mb-6">
                            Programmer
                        </h2>

                        <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">
                            {t('home.subtitle', {
                                defaultValue:
                                    "I am a full-stack web developer with expertise in HTML, CSS, JavaScript, React, TypeScript, Node.js and MongoDB. I have projects on creating both front-end and back-end dynamic and responsive user interfaces, as well as databases using SQL and NoSQL. I am good at implementing intuitive user logic based on end-to-end solutions. I maintain a holistic approach to web development, staying up to date on emerging technologies and adapting to project requirements.",
                            })}
                        </p>

                        <button
                            onClick={downloadCV}
                            className="bg-green-400 hover:bg-green-500 text-gray-900 font-medium py-2 px-6 rounded-md text-sm md:text-base transition duration-200">
                            {t('home.downloadCV', { defaultValue: 'DOWNLOAD CV' })}
                        </button>
                    </div>

                    <div>
                        <img
                            src={profileImage}
                            alt="Kazim Akyol"
                            className="relative z-[11] w-[100%] h-[100%] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

