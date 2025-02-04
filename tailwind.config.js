/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          slideInRight: {
            '0%': { transform: 'translateX(100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.9)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 1s ease-out forwards',
          slideInLeft: 'slideInLeft 1s ease-out forwards',
          slideInRight: 'slideInRight 1s ease-out forwards',
          scaleIn: 'scaleIn 1s ease-out forwards',
        },
      },
    },
    daisyui: {
      themes: [
        {
          light: {
            "primary": "#0ea5e9",          // Sky blue
            "secondary": "#6366f1",        // Indigo
            "accent": "#8b5cf6",           // Violet
            "neutral": "#1f2937",          // Gray
            "base-100": "#ffffff",         // White
            "base-200": "#f3f4f6",         // Light gray
            "base-300": "#e5e7eb",         // Lighter gray
            "info": "#06b6d4",            // Cyan
            "success": "#22c55e",         // Green
            "warning": "#f59e0b",         // Amber
            "error": "#ef4444",           // Red
          },
          dark: {
            "primary": "#0ea5e9",          // Sky blue
            "secondary": "#6366f1",        // Indigo
            "accent": "#8b5cf6",           // Violet
            "neutral": "#f3f4f6",          // Light gray
            "base-100": "#1f2937",         // Dark gray
            "base-200": "#111827",         // Darker gray
            "base-300": "#0f172a",         // Darkest gray
            "info": "#06b6d4",            // Cyan
            "success": "#22c55e",         // Green
            "warning": "#f59e0b",         // Amber
            "error": "#ef4444",           // Red
          },
        },
      ],
    },
    plugins: [require("daisyui")],
}