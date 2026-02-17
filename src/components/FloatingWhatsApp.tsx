export default function FloatingWhatsApp() {
  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-8 w-8"
    >
      <path d="M21 12.5C21 6.98 16.52 2.5 11 2.5S1 6.98 1 12.5c0 2.1 0.66 4.04 1.83 5.65L1.2 22.8l4.8-1.57c1.5 1 3.28 1.57 5 1.57h.01c5.52 0 10-4.48 10-10zM11 20.84c-1.6 0-3.13-0.54-4.35-1.48l-0.31-0.2-3.23 1.06 1.09-3.15-0.22-0.33C3.2 15.2 2.66 13.9 2.66 12.5c0-4.62 3.72-8.34 8.34-8.34s8.34 3.72 8.34 8.34c0 4.62-3.72 8.34-8.34 8.34z M15.4 14.21c-0.22-0.11-1.3-0.64-1.5-0.72s-0.34-0.11-0.49 0.11c-0.15 0.22-0.57 0.72-0.7 0.86s-0.24 0.17-0.45 0.06c-0.21-0.11-0.89-0.33-1.7-1.05-0.63-0.57-1.05-1.27-1.17-1.48s-0.01-0.33 0.1-0.44c0.1-0.1 0.22-0.26 0.33-0.39s0.15-0.22 0.22-0.36c0.07-0.15 0.04-0.28-0.02-0.39s-0.49-1.18-0.67-1.61c-0.18-0.42-0.36-0.36-0.49-0.37s-0.27-0.01-0.41-0.01c-0.15 0-0.38 0.06-0.58 0.28s-0.76 0.75-0.76 1.82c0 1.08 0.78 2.11 0.89 2.26s1.53 2.46 3.7 3.3c0.51 0.2 0.9 0.32 1.21 0.41 0.5 0.13 0.96 0.12 1.32 0.07 0.4-0.05 1.3-0.53 1.48-1.04s0.18-0.95 0.13-1.04c-0.05-0.09-0.17-0.1-0.39-0.21z" />
    </svg>
  );

  return (
    <a
      href="https://wa.me/919893395419" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 active:scale-100"
    >
      <WhatsAppIcon />
    </a>
  );
}
