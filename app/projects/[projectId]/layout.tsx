import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: LayoutProps) {
  return (
    <div className={inter.className}>
      <main>{children}</main>
    </div>
  );
}
