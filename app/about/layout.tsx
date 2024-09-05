// ProjectLayout.tsx
import React from 'react';
import { Inter } from "next/font/google";
import styles from './../Home.module.css'; // Import your CSS module

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: LayoutProps) {
  return (
    <div className={`${inter.className} ${styles.fullWidthBackground}`}>
      <main>{children}</main>
    </div>
  );
}
