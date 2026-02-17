import type { SVGProps } from "react";

export const KioskIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 11.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6.5z"/>
    <path d="M5 11V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6"/>
    <path d="M2 18h20"/>
    <path d="M14 11V5"/>
  </svg>
);

export const CafeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="2" x2="6" y2="4"/>
    <line x1="10" y1="2" x2="10" y2="4"/>
    <line x1="14" y1="2" x2="14" y2="4"/>
  </svg>
);

export const RestaurantIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 21h20"/>
    <path d="M6 21v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/>
    <path d="M6 15V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11"/>
    <path d="M12 15v-4"/>
    <path d="M10 7h4"/>
  </svg>
);
