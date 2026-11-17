import {SiteProvider} from '../../components/site/site-provider';
import SiteShell from '../../components/site/site-shell';

export default function CorporateLayout({children}:{children:React.ReactNode}){
  return <SiteProvider><SiteShell>{children}</SiteShell></SiteProvider>;
}
