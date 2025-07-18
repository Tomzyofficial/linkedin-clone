import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "LinkedIn | Log In or Signup",
  description: "Generated by create next app",
  openGraph: {
    title: "LinkedIn | Log In or Signup",
    description: "Generated by create next app",
  },
};

export default async function RootLayout({ children }) {
  // const session = await getServerSession()
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
