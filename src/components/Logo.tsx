import { cn } from "@/lib/utils";
import { Coffee } from "lucide-react";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-headline font-bold text-primary", className)}>
      <Coffee className="h-8 w-8" />
      <span className="text-2xl">AFS</span>
    </div>
  );
}
