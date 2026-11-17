'use client';
import Link from 'next/link';
import {type PropsWithChildren,type MouseEventHandler} from 'react';

type Props=PropsWithChildren<{href:string;className?:string;onClick?:MouseEventHandler<HTMLAnchorElement>}>;
export default function SiteLink({href,children,...props}:Props){
  // Access login requires a top-level navigation to its protected page.
  return href==='/providers'?<a href={href} {...props}>{children}</a>:<Link href={href} {...props}>{children}</Link>;
}
