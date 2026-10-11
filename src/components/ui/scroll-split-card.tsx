"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

interface ScrollSplitCardItem {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  icon?: React.ReactNode;
}

interface ScrollSplitCardProps {
  className?: string;
  images: string[];
  cards: ScrollSplitCardItem[];
  containerRef?: React.RefObject<HTMLElement | null>;
}

export function ScrollSplitCard({
  className,
  images,
  cards,
  containerRef: externalContainerRef,
}: ScrollSplitCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: externalContainerRef,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, -32, -16]);
  const rightX = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 32, 16]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.95]);

  const rotateY = useTransform(scrollYProgress, [0.4, 0.8], [0, 180]);
  const rotateZLeft = useTransform(scrollYProgress, [0.4, 0.8], [0, 6]);
  const rotateZRight = useTransform(scrollYProgress, [0.4, 0.8], [0, -6]);

  const borderRadiusLeft = useTransform(scrollYProgress, [0, 0.2], ["16px 0px 0px 16px", "16px 16px 16px 16px"]);
  const borderRadiusMiddle = useTransform(scrollYProgress, [0, 0.2], ["0px 0px 0px 0px", "16px 16px 16px 16px"]);
  const borderRadiusRight = useTransform(scrollYProgress, [0, 0.2], ["0px 16px 16px 0px", "16px 16px 16px 16px"]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.2]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.4]);
  const boxShadow = useMotionTemplate`inset 0 1px 1px rgba(255, 255, 255, ${borderOpacity}), inset 0 -24px 48px rgba(0, 0, 0, ${shadowOpacity}), 0 25px 50px -12px rgba(0, 0, 0, ${shadowOpacity})`;

  const cardsY = useTransform(scrollYProgress, [0.8, 1], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.8, 1], [40, 0]);

  const startTextOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const startTextY = useTransform(scrollYProgress, [0, 0.1], [0, 20]);

  return (
    <div ref={containerRef} className={cn("relative h-[400vh] w-full", className)}>
      {/* 
        FIX: Changed h-[100dvh] to h-screen to ensure Framer Motion 
        calculations stay perfectly smooth when mobile browsers hide/show the search bar.
      */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden [perspective:1200px]">
        
        <motion.div
          className="absolute top-[15%] md:top-[20%] left-0 right-0 text-center px-4"
          style={{ opacity: startTextOpacity, y: startTextY }}
        >
          <p className="text-xs md:text-sm font-medium tracking-widest text-foreground/50 uppercase">
            Three Things makes her unique
          </p>
        </motion.div>

        {/* Highly responsive container heights for perfect image aspect ratios */}
        <motion.div
          style={{ scale, y: cardsY, transformStyle: "preserve-3d" }}
          className="flex h-[45vh] md:h-[450px] max-h-[500px] w-full max-w-5xl px-2 md:px-6 relative"
        >
          {cards.slice(0, 3).map((card, i) => (
            <motion.div
              key={i}
              className="relative h-full flex-1"
              style={{
                x: i === 0 ? leftX : i === 2 ? rightX : 0,
                rotateY,
                rotateZ: i === 0 ? rotateZLeft : i === 2 ? rotateZRight : 0,
                zIndex: i === 1 ? 10 : i, // Ensure middle card is above the others
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front Side */}
              <motion.div
                className="absolute inset-0 overflow-hidden [backface-visibility:hidden]"
                style={{
                  zIndex: 2, 
                  borderRadius: i === 0 ? borderRadiusLeft : i === 2 ? borderRadiusRight : borderRadiusMiddle,
                  boxShadow,
                }}
              >
                <div
                  className="absolute inset-0 h-full w-full"
                  style={{
                    backgroundImage: `url(${images[i]})`, 
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </motion.div>

              {/* Back Side */}
              <motion.div
                className={cn(
                  "absolute inset-0 overflow-hidden flex flex-col items-center justify-center text-center p-2 sm:p-4 md:p-8 [backface-visibility:hidden] will-change-transform",
                  "border border-white/5 bg-gradient-to-br from-white/10 to-transparent",
                  "shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-24px_48px_rgba(0,0,0,0.2)]"
                )}
                style={{
                  backgroundColor: card.bgColor,
                  color: card.textColor,
                  transform: "rotateY(180deg)",
                  zIndex: 1, 
                  borderRadius: i === 0 ? borderRadiusLeft : i === 2 ? borderRadiusRight : borderRadiusMiddle,
                  boxShadow,
                }}
              >
                <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/20 via-black/5 to-transparent pointer-events-none z-0" />
                
                <div
                  className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage: `url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256")`,
                    backgroundRepeat: "repeat",
                  }}
                />

                {card.icon && <div className="relative z-10 mb-2">{card.icon}</div>}
                
                {/* Dynamically scaling Title */}
                <h3 className="relative z-10 mb-2 md:mb-4 text-[clamp(1rem,2.5vw,1.75rem)] font-medium leading-tight">
                  {card.title}
                </h3>
                
                {/* Dynamically scaling Description to prevent overflow */}
                <p className="relative z-10 text-[clamp(0.65rem,1.5vw,0.95rem)] opacity-90 md:opacity-80 leading-snug md:leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-[10%] md:bottom-[20%] left-0 right-0 text-center px-4"
          style={{ opacity: textOpacity, y: textY }}
        >
          <p className="text-xl md:text-3xl font-medium tracking-tight text-foreground/80 font-serif italic">
            &nbsp;
          </p>
        </motion.div>
      </div>
    </div>
  );
}