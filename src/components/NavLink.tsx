import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

export function NavLink({
  to,
  children,
  className = "",
  activeClassName = "",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <Link
      href={to}
      scroll={false}
      onClick={onClick}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </Link>
  );
}