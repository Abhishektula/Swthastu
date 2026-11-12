import type { Metadata } from 'next';
import './globals.css';
import './explore.css';
import {origin} from './seo';
import {pageMetadata} from './seo-metadata';
export const metadata: Metadata={...pageMetadata('/'),metadataBase:new URL(origin),applicationName:'Swthastu',icons:{icon:'/images/logo.webp',apple:'/images/logo.webp'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className="min-h-screen bg-swthastu-cream text-swthastu-green antialiased">{children}</body></html>}
