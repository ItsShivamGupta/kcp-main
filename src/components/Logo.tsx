import { Link } from "@tanstack/react-router";
import logoImg from "../assets/logo.webp";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex items-center ${className}`}>
      <img 
        src={logoImg} 
        alt="KCP Music Logo" 
        decoding="async"
        width={150}
        height={56}
        className="h-14 w-auto object-contain -ml-2 translate-y-1 transition-transform duration-300 group-hover:scale-105"
      />
    </Link>
  );
}
