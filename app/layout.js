import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://footmedix.ca"),
  title: "FootMedix | Chiropody & Foot Care Clinic in Scarborough, Toronto",
  description:
    "FootMedix is a chiropody (foot care) clinic in Scarborough, Toronto. Custom orthotics, diabetic foot care, ingrown toenails, callus removal, warts and more. Book online today.",
  keywords: [
    "chiropodist Scarborough",
    "foot clinic Toronto",
    "chiropody",
    "custom orthotics",
    "diabetic foot care",
    "ingrown toenail",
    "FootMedix",
  ],
  openGraph: {
    title: "FootMedix | Chiropody & Foot Care Clinic in Scarborough",
    description:
      "Expert chiropody care in Scarborough, Toronto. Orthotics, diabetic foot care, ingrown toenails, callus removal and more. Book online.",
    type: "website",
    locale: "en_CA",
  },
};

export const viewport = {
  themeColor: "#79bbc3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}
