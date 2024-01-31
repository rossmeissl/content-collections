import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export function Editor({ className, children }: Props) {
  return (
    <div
      className={cn(
        "bg-[#22272E] rounded-md shadow-md border border-slate-600/50",
        className
      )}
    >
      <header className="border border-b-slate-600/50 flex gap-1 rounded-t-md p-2">
        <Circle className="text-rose-500 fill-current size-3" />
        <Circle className="text-amber-500 fill-current size-3" />
        <Circle className="text-emerald-500 fill-current size-3" />
      </header>
      <main className="p-5">
        <pre>
          <code>{children}</code>
        </pre>
      </main>
    </div>
  );
}
