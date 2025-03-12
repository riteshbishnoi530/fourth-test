import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Data Skate",
  description: "Our accelerator allows you to upload, read, and process multiple file types (e.g., Python, JAR, ZIP), extracting key data like classes, methods, and structure for easy review.",
  openGraph: {
    title: "DataSkate",
    description: "Read & process your files online",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-new-gr-c-s-check-loaded="14.1226.0" data-gr-ext-installed="" data-new-gr-c-s-loaded="14.1226.0" >
        {children}
      </body>
    </html>
  );
}
