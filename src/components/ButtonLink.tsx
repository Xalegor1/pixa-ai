import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export default function ButtonLink({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "after:duration-900 relative inline-flex h-fit w-fit rounded border-2 border-blue-100/20 border-blue-800 bg-blue-200/10 bg-blue-900 px-4 py-2 text-white outline-none ring-indigo-600 transition-colors after:absolute after:inset-0 after:z-10 after:animate-pulse after:rounded-xl after:bg-blue-400 after:bg-opacity-0 after:blur-md after:transition-all hover:border-indigo-400/40 hover:text-white after:hover:bg-opacity-20 focus:ring-2",
        className,
      )}
      {...restProps}
    />
  );
}
