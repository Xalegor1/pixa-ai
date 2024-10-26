import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Bento`.
 */
export type BentoProps = SliceComponentProps<Content.BentoSlice>;

/**
 * Component for "Bento" Slices.
 */
const Bento = ({ slice }: BentoProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.heading}
        components={{
          heading2: ({ children }) => (
            <h2 className="text-balance bg-gradient-to-b from-sky-200 to-blue-600 bg-clip-text text-center text-5xl font-medium text-transparent md:text-7xl">
              {children}
            </h2>
          ),
        }}
      />
      <div className="mx-auto mt-6 max-w-md text-balance text-center text-2xl text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {slice.primary.repetable.map((item, index) => (
          <div
            className={clsx(
              "glass-container to-gray-150 row-span-3 grid gap-1 rounded-lg bg-gradient-to-b from-gray-900 p-4",
              item.wide ? "md:col-span-2" : "md:col-span-1",
            )}
            key={index}
          >
            <h3 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-center text-3xl text-transparent">
              <PrismicText field={item.title} />
            </h3>
            <div className="text-center text-xl text-slate-300">
              <PrismicRichText field={item.body} />
            </div>
            <div className="flex justify-center">
              <PrismicNextImage
                field={item.image}
                className="max-h-36 rounded-lg object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Bento;
