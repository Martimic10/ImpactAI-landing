export function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.55-1.28 3.08-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

export function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M3.18 1.05C2.86 1.38 2.67 1.9 2.67 2.57v18.86c0 .67.19 1.19.51 1.52l.08.08 10.56-10.56v-.25L3.26.97l-.08.08z"
        fill="#4FC3F7"
      />
      <path
        d="M17.34 15.5l-3.52-3.52v-.25l3.52-3.52.08.04 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.05z"
        fill="#FFCA28"
      />
      <path
        d="M17.42 15.45L13.82 11.85 3.18 22.49c.39.42 1.04.47 1.77.06l12.47-7.1"
        fill="#F48FB1"
      />
      <path
        d="M17.42 8.55L4.95 1.45C4.22 1.04 3.57 1.09 3.18 1.51l10.64 10.34 3.6-3.3z"
        fill="#A5D6A7"
      />
    </svg>
  );
}
