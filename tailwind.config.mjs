/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 经典的链接蓝
        link: {
          DEFAULT: '#0000EE',
          visited: '#551A8B',
          hover: '#FF0000', // 早期网站喜欢悬停变红
        },
        // 经典的边框灰
        border: '#CCCCCC',
        // 淡淡的背景色
        page: '#F5F5F5',
      },
      fontFamily: {
        // 优先使用系统默认衬线或非衬线字体，还原朴素感
        sans: ['Verdana', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
      }
    }
  },
  plugins: [],
}
