import { Bebas_Neue, Nunito } from 'next/font/google';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

export const metadata = {
  title: 'GOTI Fritay',
  description: 'Cuisine haïtienne authentique – Réservez votre plat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${bebas.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}