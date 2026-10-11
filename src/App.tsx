

// import { ReactLenis } from 'lenis/react';
// import { motion } from 'motion/react';
// import { KineticTextReveal } from '@/components/ui/kinetic-text-reveal';
// import { LiquidGlassCarousel } from '@/components/ui/liquid-glass-carousel';
// import { ScrollSplitCard } from '@/components/ui/scroll-split-card';

// export default function App() {
//   const carouselItems = [
//     { title: "", src: "/public/image1.jpeg" },
//     { title: "", src: "/public/image2.jpeg" },
//     { title: "", src: "/public/image3.jpeg" },
//     { title: "", src: "/public/image4.jpeg" },
//     { title: "", src: "/public/image1.jpeg" },
//     { title: "", src: "/public/image2.jpeg" },
//     { title: "", src: "/public/image3.jpeg" },
//     { title: "", src: "/public/image4.jpeg" },
//   ];

//   return (
//     <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
//       <main className="w-full min-h-screen bg-slate-50 text-slate-900">
        
//         {/* Section 1: Hero */}
//         <section id="home" className="h-screen flex items-center justify-center">
//           <motion.div 
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.5 }} 
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="flex flex-col items-center justify-center text-center gap-2 px-4"
//           >
//             <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
//               Welcome
//             </p>
//             {/* Responsive Text: text-3xl for mobile, md:text-5xl for laptop */}
//             <KineticTextReveal
//               text="This is all about my friend"
//               className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
//               stagger={0.25}
//               transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
//             />
//             {/* Signature Text: 24vw on mobile to ensure it stretches, 18vw on laptops */}
//             <h2 
//               className="text-[24vw] md:text-[18vw] leading-none whitespace-nowrap text-slate-900 mt-2 md:mt-4 tracking-tight w-full"
//               style={{ fontFamily: "'Allura', cursive" }}
//             >
//               Lakshmi Sri
//             </h2>
//           </motion.div>
//         </section>

//         {/* Section 2: Liquid Glass Carousel */}
//         <section id="carousel" className="h-[150vh] w-full relative">
//           <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
//             <LiquidGlassCarousel 
//               items={carouselItems}
//               background="#f8fafc" 
//               panelHeight={450}
//               gap={16}
//               entry={true} 
//             />
//           </div>
//         </section>

//         {/* Section 3: Scroll Split Cards */}
//         <section id="split-cards" className="w-full relative">
//           <ScrollSplitCard
//             images={[
//               "/public/image1.jpeg",
//               "/public/image2.jpeg",
//               "/public/image3.jpeg"
//             ]}
//             cards={[
//               {
//                 title: "Kind hearted",
//                 description: "She has a gentle heart and a natural way of making people feel cared for. Her kindness makes her special without her even trying.",
//                 bgColor: "#f8fafc",
//                 textColor: "#111111"
//               },
//               {
//                 title: "Naturally adorable",
//                 description: "Her charm comes from being herself. It's not just about looking cute. it's about the little things she says, the way she reacts, and the personality that shines through.",
//                 bgColor: "#f8fafc",
//                 textColor: "#111111"
//               },
//               {
//                 title: "Childlike innocence",
//                 description: "She has a pure, innocent side that finds happiness in little things. There is something refreshing about the way she expresses herself so naturally.",
//                 bgColor: "#f8fafc",
//                 textColor: "#111111 "
//               }
//             ]}
//           />
//         </section>
//         <section id="finale" className="min-h-screen w-full flex items-center justify-center py-24 relative overflow-hidden bg-slate-50">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85, y: 80 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ 
//               duration: 1.4, 
//               ease: [0.22, 1, 0.36, 1] // Creates a smooth, elegant slowing down effect at the end
//             }}
//             viewport={{ once: false, amount: 0.4 }}
//             className="relative w-[90%] max-w-6xl rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50"
//           >
//             <img 
//               src="/public/image5.png" 
//               alt="Happy Birthday Lakshmi Sri Collage" 
//               className="w-full h-auto object-cover"
//             />
//             {/* Subtle glow overlay for polish */}
//             <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-gradient-to-tr from-white/10 to-transparent" />
//           </motion.div>
//         </section>
//       </main>
//     </ReactLenis>
//   );
// }


// import { ReactLenis } from 'lenis/react';
// import { motion } from 'motion/react';
// import { KineticTextReveal } from '@/components/ui/kinetic-text-reveal';
// import { LiquidGlassCarousel } from '@/components/ui/liquid-glass-carousel';
// import { ScrollSplitCard } from '@/components/ui/scroll-split-card';

// export default function App() {
//   const carouselItems = [
//     { title: "", src: "/public/image1.jpeg" },
//     { title: "", src: "/public/image2.jpeg" },
//     { title: "", src: "/public/image3.jpeg" },
//     { title: "", src: "/public/image4.jpeg" },
//     { title: "", src: "/public/image1.jpeg" },
//     { title: "", src: "/public/image2.jpeg" },
//     { title: "", src: "/public/image3.jpeg" },
//     { title: "", src: "/public/image4.jpeg" },
//   ];

//   return (
//     <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
//       {/* CRITICAL FIX: Removed overflow-x-hidden which breaks position: sticky */}
//       <main className="w-full min-h-[100dvh] bg-slate-50 text-slate-900">
        
//         {/* Section 1: Hero */}
//         <section id="home" className="h-[100dvh] w-full flex items-center justify-center overflow-hidden">
//           <motion.div 
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.5 }} 
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="flex flex-col items-center justify-center text-center gap-2 px-4 w-full"
//           >
//             <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-500">
//               Welcome
//             </p>
            
//             <KineticTextReveal
//               text="This is all about my friend"
//               className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold tracking-tight text-slate-900 z-10"
//               stagger={0.25}
//               transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
//             />
            
//             <h2 
//               className="text-[clamp(4rem,22vw,14rem)] leading-none whitespace-nowrap text-slate-900 mt-2 md:mt-4 tracking-tight w-full"
//               style={{ fontFamily: "'Allura', cursive" }}
//             >
//               Lakshmi Sri
//             </h2>
//           </motion.div>
//         </section>

//         {/* Section 2: Liquid Glass Carousel */}
//         <section id="carousel" className="h-[150dvh] w-full relative">
//           <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden">
//             <LiquidGlassCarousel 
//               items={carouselItems}
//               background="#f8fafc" 
//               panelHeight={450}
//               gap={16}
//               entry={true} 
//             />
//           </div>
//         </section>

//         {/* Section 3: Scroll Split Cards */}
//         <section id="split-cards" className="w-full relative">
//           <ScrollSplitCard
//             images={[
//               "/public/image1.jpeg",
//               "/public/image2.jpeg",
//               "/public/image3.jpeg"
//             ]}
//             cards={[
//               {
//                 title: "Kind hearted",
//                 description: "She has a gentle heart and a natural way of making people feel cared for. Her kindness makes her special without her even trying.",
//                 bgColor: "#f8fafc",
//                 textColor: "#111111"
//               },
//               {
//                 title: "Naturally adorable",
//                 description: "Her charm comes from being herself. It's not just about looking cute; it's about the little things she says, the way she reacts, and the personality that shines through.",
//                 bgColor: "#f8fafc",
//                 textColor: "#111111"
//               },
//               {
//                 title: "Childlike innocence",
//                 description: "She has a pure, innocent side that finds happiness in little things. There is something refreshing about the way she expresses herself so naturally.",
//                 bgColor: "#f8fafc",
//                 textColor: "#111111"
//               }
//             ]}
//           />
//         </section>

//         {/* Section 4: The Finale */}
//         <section id="finale" className="min-h-[100dvh] w-full flex items-center justify-center py-16 md:py-24 relative overflow-hidden bg-slate-50">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85, y: 80 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ 
//               duration: 1.4, 
//               ease: [0.22, 1, 0.36, 1] 
//             }}
//             viewport={{ once: false, amount: 0.2 }}
//             className="relative w-[95%] sm:w-[90%] max-w-6xl rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 bg-white"
//           >
//             <img 
//               src="/public/image5.png" 
//               alt="Happy Birthday Lakshmi Sri Collage" 
//               className="w-full h-auto max-h-[85dvh] object-contain md:object-cover"
//             />
//             <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-gradient-to-tr from-white/10 to-transparent" />
//           </motion.div>
//         </section>
        
//       </main>
//     </ReactLenis>
//   );
// }

import { ReactLenis } from 'lenis/react';
import { motion } from 'motion/react';
import { KineticTextReveal } from '@/components/ui/kinetic-text-reveal';
import { LiquidGlassCarousel } from '@/components/ui/liquid-glass-carousel';
import { ScrollSplitCard } from '@/components/ui/scroll-split-card';

const CAROUSEL_ITEMS = [
  { title: "", src: "/image1.jpeg" },
  { title: "", src: "/image2.jpeg" },
  { title: "", src: "/image3.jpeg" },
  { title: "", src: "/image4.jpeg" },
  { title: "", src: "/image1.jpeg" },
  { title: "", src: "/image2.jpeg" },
  { title: "", src: "/image3.jpeg" },
  { title: "", src: "/image4.jpeg" },
];

const SPLIT_IMAGES = [
  "/image1.jpeg",
  "/image2.jpeg",
  "/image3.jpeg"
];

const SPLIT_CARDS = [
  {
    title: "Kind hearted",
    description: "She has a gentle heart and a natural way of making people feel cared for. Her kindness makes her special without her even trying.",
    bgColor: "#f8fafc",
    textColor: "#111111"
  },
  {
    title: "Naturally adorable",
    description: "Her charm comes from being herself. It's not just about looking cute; it's about the little things she says, the way she reacts, and the personality that shines through.",
    bgColor: "#f8fafc",
    textColor: "#111111"
  },
  {
    title: "Childlike innocence",
    description: "She has a pure, innocent side that finds happiness in little things. There is something refreshing about the way she expresses herself so naturally.",
    bgColor: "#f8fafc",
    textColor: "#111111"
  }
];

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      {/* 
        FIX 1: Global styles to completely hide the native scrollbar 
        across all browsers while keeping scroll functionality intact.
      */}
      <style>{`
        /* Chrome, Safari, Edge, Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        /* Firefox & IE */
        html, body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* FIX 2: Switched all min-h-[100dvh] to min-h-screen to prevent layout thrashing on scroll */}
      <main className="w-full min-h-screen bg-slate-50 text-slate-900">
        
        {/* Section 1: Hero */}
        <section id="home" className="h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center gap-2 px-4 w-full"
          >
            <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-slate-500">
              Welcome
            </p>
            <KineticTextReveal
              text="A few things about my friend"
              className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold tracking-tight text-slate-900 z-10"
              stagger={0.25}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />
            <h2 
              className="text-[clamp(4rem,22vw,14rem)] leading-none whitespace-nowrap text-slate-900 mt-2 md:mt-4 tracking-tight w-full"
              style={{ fontFamily: "'Allura', cursive" }}
            >
              Lakshmi Sri
            </h2>
          </motion.div>
        </section>

        {/* Section 2: Liquid Glass Carousel */}
        {/* Changed h-[100dvh] to h-screen to prevent WebGL Canvas resize glitches on mobile */}
        <section id="carousel" className="h-screen w-full relative block overflow-hidden">
          <LiquidGlassCarousel 
            items={CAROUSEL_ITEMS}
            background="#f8fafc" 
            panelHeight={450}
            gap={16}
            entry={true}
          />
        </section>

        {/* Section 3: Scroll Split Cards */}
        <section id="split-cards" className="w-full relative">
          <ScrollSplitCard
            images={SPLIT_IMAGES}
            cards={SPLIT_CARDS}
          />
        </section>

        {/* Section 4: The Finale */}
        <section id="finale" className="min-h-screen w-full flex items-center justify-center py-16 md:py-24 relative overflow-hidden bg-slate-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 1.4, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-[95%] sm:w-[90%] max-w-6xl rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 bg-white"
          >
            {/* Changed max-h-[85dvh] to max-h-[85vh] */}
            <img 
              src="/image5.png" 
              alt="Happy Birthday Lakshmi Sri Collage" 
              className="w-full h-auto max-h-[85vh] object-contain md:object-cover"
            />
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-gradient-to-tr from-white/10 to-transparent" />
          </motion.div>
        </section>
        
      </main>
    </ReactLenis>
  );
}