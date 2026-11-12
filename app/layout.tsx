import type { Metadata } from 'next';
import './globals.css';
import './explore.css';
export const metadata: Metadata={title:'Swthastu | Wellbeing, wherever you are',description:'Discover thoughtful wellbeing journeys, everyday rituals, retreats, human support and Swthastu at Work workplace wellbeing and EAP programme design.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className="min-h-screen bg-swthastu-cream text-swthastu-green antialiased">{children}</body></html>}
