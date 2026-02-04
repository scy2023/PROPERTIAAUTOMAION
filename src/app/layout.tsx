import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Propertia Automation | AI-Powered Property Automation",
  description:
    "Propertia Automation helps you automate property workflows using AI and modern cloud technology."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
