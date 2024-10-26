"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const TransitionLink = ({ href, children, className }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <a className="cursor-pointer" onClick={handleClick}>
      {children}
    </a>
  );
};

export default TransitionLink;
