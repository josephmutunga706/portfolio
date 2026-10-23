const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" } as const;
export function Icon({ name }: { name: string }) {
  const s = { width: 20, height: 20, viewBox: "0 0 24 24", "aria-hidden": true } as const;
  switch (name) {
    case "LinkedIn": return <svg {...s}><rect x="3" y="3" width="18" height="18" rx="3" {...P} /><path d="M8 10.5V17M8 7.4v.1M12 17v-3.6c0-1.6 1-2.9 2.6-2.9S17 11.700 17 13.400V17M12 10.5V17" {...P} /></svg>;
    case "WhatsApp": return <svg {...s}><path d="M12 3a9 9 0 0 0-7.800 13.500L3 21l4.600-1.200A9 9 0 1 0 12 3z" {...P} /><path d="M9 8.500c0 3.500 3 6.500 6.500 6.500l1-1.500-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z" {...P} /></svg>;
    case "X": return <svg {...s}><path d="M4 4h4.500L20 20h-4.500z" {...P} /><path d="M20 4l-6.500 7.200M4 20l6.500-7.200" {...P} /></svg>;
    case "Instagram": return <svg {...s}><rect x="3.500" y="3.500" width="17" height="17" rx="5" {...P} /><circle cx="12" cy="12" r="4" {...P} /><path d="M17 7h.01" {...P} /></svg>;
    case "Mail": return <svg {...s}><rect x="3" y="5" width="18" height="14" rx="2.500" {...P} /><path d="M3.500 7l8.500 6.500L20.500 7" {...P} /></svg>;
    default: return <svg {...s}><path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" {...P} /></svg>;
  }
}
