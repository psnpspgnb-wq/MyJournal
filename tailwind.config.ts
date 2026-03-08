// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class', // ダークモードを有効化
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // カスタムカラー定義
                background: '#F9F9F9',
                foreground: '#1A1A1A',
                accent: '#666666',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;