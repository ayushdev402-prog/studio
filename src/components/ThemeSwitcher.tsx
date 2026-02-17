"use client";

import { useEffect, useState } from "react";
import { themes } from "@/lib/themes";
import { Paintbrush } from "lucide-react";
import { Button } from "./ui/button";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (themeName: string) => {
    const newTheme = themeName.toLowerCase().replace(' ', '-');
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  
  if (!mounted) {
    // Render a placeholder or nothing on the server to avoid hydration mismatch
    return <div className="py-8 bg-secondary border-t" style={{height: '124px'}}></div>;
  }

  return (
    <div className="py-8 bg-secondary border-t">
      <div className="container mx-auto px-4 text-center">
        <h3 className="font-headline text-xl font-bold mb-4 flex items-center justify-center gap-2">
          <Paintbrush className="h-5 w-5 text-primary" />
          <span>Switch Theme</span>
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {themes.map((theme) => (
            <Button
              key={theme.name}
              variant="outline"
              className="capitalize"
              onClick={() => handleThemeChange(theme.name)}
            >
              <div
                className="w-4 h-4 rounded-full mr-2 border"
                style={{ backgroundColor: `hsl(${theme.colors.primary})` }}
              />
              {theme.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
