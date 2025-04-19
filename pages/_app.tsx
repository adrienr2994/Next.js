// Run this in a browser console (e.g., via Replit)
document.body.onkeydown = () => {
  const chars = "01ABCDEFGH%^&*";
  let hackerText = "";
  for (let i = 0; i < 100; i++) {
    hackerText += chars[Math.floor(Math.random() * chars.length)];
  }
  document.body.innerHTML = `<pre>${hackerText}</pre>`;
};
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
