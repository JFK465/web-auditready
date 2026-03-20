"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

function DropdownMenu({ dropdown }: { dropdown: NavDropdown }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
        {dropdown.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <div className="absolute left-0 right-0 h-2" />
          <div className="absolute left-0 top-full pt-2 w-64 z-50">
            <div className="bg-white rounded-lg shadow-lg border p-2 animate-in fade-in slide-in-from-top-1 duration-150">
              {dropdown.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-md text-sm hover:bg-muted transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.description && (
                    <span className="block text-xs text-muted-foreground mt-0.5">
                      {item.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const navItems: NavDropdown[] = [
  {
    label: "Produkt",
    items: [
      {
        name: "Alle Funktionen",
        href: "/funktionen",
        description: "Übersicht aller Module",
      },
      {
        name: "WPK-Cockpit",
        href: "/funktionen#wpk-cockpit",
        description: "Zentrales Dashboard",
      },
      {
        name: "Compliance-Score",
        href: "/funktionen#compliance-score",
        description: "0-100% Bewertung",
      },
      {
        name: "Audit-Paket-Generator",
        href: "/funktionen#audit-paket",
        description: "Ein-Klick PDF-Export",
      },
      {
        name: "WPK Software",
        href: "/wpk-software",
        description: "Software Landing Page",
      },
    ],
  },
  {
    label: "Branchen",
    items: [
      {
        name: "Schlosserei & Metallbau",
        href: "/schlosserei-metallbau",
        description: "Handwerk, 10-30 MA",
      },
      {
        name: "Stahlbau-Mittelstand",
        href: "/stahlbau-mittelstand",
        description: "EXC2/EXC3, 30-100 MA",
      },
      {
        name: "Treppenbau & Geländerbau",
        href: "/treppenbau-gelaenderbau",
        description: "Hohe WPS-Variantenzahl",
      },
      {
        name: "Aluminium & Fassadenbau",
        href: "/aluminium-fassadenbau",
        description: "EN 1090-3",
      },
      {
        name: "Subunternehmer Stahlbau",
        href: "/subunternehmer-stahlbau",
        description: "Compliance-Nachweise",
      },
    ],
  },
  {
    label: "Wissen",
    items: [
      {
        name: "DIN EN 1090-1 erklärt",
        href: "/wissen/din-en-1090-1",
        description: "WPK, CE-Kennzeichnung",
      },
      {
        name: "Ausführungsklassen EXC1-EXC4",
        href: "/wissen/ausführungsklassen",
        description: "EXC1, EXC2, EXC3, EXC4",
      },
      {
        name: "WPK-Handbuch",
        href: "/wissen/wpk-handbuch",
        description: "Inhalt, Aufbau, Pflege",
      },
      {
        name: "Schweißkoordinator ISO 14731",
        href: "/wissen/schweisskoordinator",
        description: "Pflichten, Qualifikation",
      },
      {
        name: "Überwachungsaudit EN 1090",
        href: "/wissen/überwachungsaudit",
        description: "Ablauf, Vorbereitung",
      },
      {
        name: "Blog",
        href: "/blog",
        description: "Praxiswissen für Metallbauer",
      },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-primary"
        >
          <img src="/logo-icon.svg" alt="AuditReady" className="h-8 w-8" />
          <span className="hidden sm:inline">AuditReady</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <DropdownMenu key={item.label} dropdown={item} />
          ))}
          <Link
            href="/preise"
            className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Preise
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/wpk-software#beta-anmeldung">Kostenlos testen</Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Navigation öffnen"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container-custom py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === item.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/preise"
              className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Preise
            </Link>
            <div className="pt-4 space-y-2 border-t">
              <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                <Link
                  href="/wpk-software#beta-anmeldung"
                  onClick={() => setMobileOpen(false)}
                >
                  Kostenlos testen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
