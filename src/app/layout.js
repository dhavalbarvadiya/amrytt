import { Lato } from "next/font/google";
import "../styles/style.scss";

const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Amrytt - Digital Agency",
  description: "Digital Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>{children}</body>
    </html>
  );
}
