import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/src/utils/SCRegistery";
import { PoppinsFont } from "@/src/statics/fonts";

export const metadata: Metadata = {
  title: "BIMBO",
  description: "AI Chatbot, Free , Secure , Local",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div id="bimboApp" className={PoppinsFont.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
