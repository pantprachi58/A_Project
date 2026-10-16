import { Dancing_Script } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import "yet-another-react-lightbox/styles.css";
import "@/styles/globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ToastProvider from "@/components/common/ToastProvider";
import AosInit from "@/components/common/AosInit";

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: "Ankush Painuly | Photography Portfolio",
  description:
    "Professional photography services by Ankush Painuly — weddings, pre-weddings, portraits, events, commercial, fashion and more, based in Dehradun, Uttarakhand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dancingScript.variable}>
      <body>
        <AosInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ToastProvider />
      </body>
    </html>
  );
}
