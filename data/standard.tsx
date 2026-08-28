import type { ReactNode } from "react";

export type StandardAttribute = {
  id: string;
  label: string;
  description: string;
  icon: ReactNode;
};

function IconShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ritumbhara-maroon/8 text-ritumbhara-maroon transition-colors duration-300 group-hover:bg-ritumbhara-maroon/12">
      {children}
    </div>
  );
}

function GuestExperienceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 3c2.2 0 4 1.8 4 4v1.5M8 8.5V7c0-2.2 1.8-4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 11.5c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3V14c0 3.3-2.7 6-6 6h-2c-3.3 0-6-2.7-6-6v-2.5z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9.5 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CleanlinessIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M8 5l2-2 2 2M12 3v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 9h12l-1 11H7L6 9z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HospitalityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M4 14c2.5-3 5-4.5 8-4.5s5.5 1.5 8 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 5.5c1.4 0 2.5 1.1 2.5 2.5S13.4 10.5 12 10.5 9.5 9.4 9.5 8 10.6 5.5 12 5.5z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M7 19h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function InteriorDesignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="4" y="8" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8V6M15 8V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

function TechnologyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 17v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function HousekeepingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M6 18l3-9 3 4 3-6 3 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 14.5a7 7 0 0 1 14 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.5 14.5v2.5a3.5 3.5 0 0 0 7 0v-2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M12 5v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LocalExperiencesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 21s6-4.5 6-10a6 6 0 1 0-12 0c0 5.5 6 10 6 10z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SafetyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12 3l7 3v6c0 4.4-3 7.8-7 9-4-1.2-7-4.6-7-9V6l7-3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9.5 12l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CommunicationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 6.5h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 11h8M8 13.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export const STANDARD_ATTRIBUTES: StandardAttribute[] = [
  {
    id: "guest-experience",
    label: "Guest Experience",
    description: "Thoughtful touches from check-in to farewell, on every stay.",
    icon: (
      <IconShell>
        <GuestExperienceIcon />
      </IconShell>
    ),
  },
  {
    id: "cleanliness",
    label: "Cleanliness",
    description: "Hotel-grade standards verified before every arrival.",
    icon: (
      <IconShell>
        <CleanlinessIcon />
      </IconShell>
    ),
  },
  {
    id: "hospitality",
    label: "Hospitality",
    description: "Warm, personal care rooted in Indian traditions.",
    icon: (
      <IconShell>
        <HospitalityIcon />
      </IconShell>
    ),
  },
  {
    id: "interior-design",
    label: "Interior Design",
    description: "Curated spaces that feel calm, local, and considered.",
    icon: (
      <IconShell>
        <InteriorDesignIcon />
      </IconShell>
    ),
  },
  {
    id: "technology",
    label: "Technology",
    description: "Seamless Wi-Fi, smart access, and frictionless booking.",
    icon: (
      <IconShell>
        <TechnologyIcon />
      </IconShell>
    ),
  },
  {
    id: "housekeeping",
    label: "Housekeeping",
    description: "Professional cleaning and linen refresh on schedule.",
    icon: (
      <IconShell>
        <HousekeepingIcon />
      </IconShell>
    ),
  },
  {
    id: "service",
    label: "Service",
    description: "On-call hosts who respond directly — never redirect.",
    icon: (
      <IconShell>
        <ServiceIcon />
      </IconShell>
    ),
  },
  {
    id: "local-experiences",
    label: "Local Experiences",
    description: "Insider recommendations beyond the guidebook.",
    icon: (
      <IconShell>
        <LocalExperiencesIcon />
      </IconShell>
    ),
  },
  {
    id: "safety",
    label: "Safety",
    description: "Secure properties with clear protocols and 24/7 support.",
    icon: (
      <IconShell>
        <SafetyIcon />
      </IconShell>
    ),
  },
  {
    id: "communication",
    label: "Communication",
    description: "Clear, prompt updates before and during your stay.",
    icon: (
      <IconShell>
        <CommunicationIcon />
      </IconShell>
    ),
  },
];
