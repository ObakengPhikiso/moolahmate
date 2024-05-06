const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
  daisyui: {
    darkMode: false,
    themes: [
      {
        'synthwave': {
  
          "primary": "#f100a4",
          
          "primary-content": "#14000a",
                   
          "secondary": "#007d36",
                   
          "secondary-content": "#d2e5d5",
                   
          "accent": "#0000ff",
                   
          "accent-content": "#c6dbff",
                   
          "neutral": "#292929",
                   
          "neutral-content": "#d0d0d0",
                   
          "base-100": "#04272c",
                   
          "base-200": "#032025",
                   
          "base-300": "#021a1e",
                   
          "base-content": "#c8cfd0",
                   
          "info": "#00f4ff",
                   
          "info-content": "#001416",
                   
          "success": "#00dd97",
                   
          "success-content": "#001108",
                   
          "warning": "#ff9100",
                   
          "warning-content": "#160700",
                   
          "error": "#ff7782",
                   
          "error-content": "#160506",        
       },
      },
    ],
  }
};
