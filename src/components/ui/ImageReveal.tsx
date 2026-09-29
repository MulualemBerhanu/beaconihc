"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  delay?: number;
};

export function ImageReveal({
  src,
  alt,
  fill = true,
  width,
  height,
  priority,
  sizes,
  className,
  imageClassName,
  delay = 0,
}: ImageRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {reduceMotion ? (
        <div className="absolute inset-0">
          <Image
            src={src}
            alt={alt}
            fill={fill}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            priority={priority}
            sizes={sizes}
            className={cn("object-cover", imageClassName)}
          />
        </div>
      ) : (
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: "inset(6% 6% 6% 6%)", opacity: 0.65, scale: 1.03 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
        >
          <Image
            src={src}
            alt={alt}
            fill={fill}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            priority={priority}
            sizes={sizes}
            className={cn("object-cover", imageClassName)}
          />
        </motion.div>
      )}
    </div>
  );
}
