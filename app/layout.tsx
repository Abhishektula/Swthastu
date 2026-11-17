import type { Metadata } from 'next';
import './globals.css';
import './explore.css';
import {origin} from './seo';
import {pageMetadata} from './seo-metadata';
export const metadata: Metadata={...pageMetadata('/'),metadataBase:new URL(origin),applicationName:'Swthastu',icons:{icon:[{url:"/favicon.svg?v=2",type:"image/svg+xml"},{url:"/icon.png?v=2",sizes:"192x192",type:"image/png"}],apple:"/apple-icon.png?v=2"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className="min-h-screen bg-swthastu-cream text-swthastu-green antialiased">{children}</body></html>}
