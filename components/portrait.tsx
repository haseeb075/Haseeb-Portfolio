"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Put your photo at /public/images/haseeb.jpeg (a clear, front-facing head-and-shoulders shot).
export default function Portrait() {
  const ref = useRef<HTMLDivElement>(null);
  const [broken, setBroken] = useState(false);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 14 }), sy = useSpring(my, { stiffness: 120, damping: 14 });
  const rotY = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const rotX = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const imgX = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const imgY = useTransform(sy, [-0.5, 0.5], [-8, 8]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["20%", "80%"]);

  // Track the cursor across the whole window so the head "looks" at the visitor.
  const onMove = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    mx.set(Math.max(-0.5, Math.min(0.5, (e.clientX - r.left) / r.width - 0.5)));
    my.set(Math.max(-0.5, Math.min(0.5, (e.clientY - r.top) / r.height - 0.5)));
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <div onPointerMove={onMove} onPointerLeave={reset} className="[perspective:900px] p-6">
      <motion.div ref={ref} style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
        className="portrait-frame relative mx-auto aspect-[4/5] w-full overflow-hidden">
        <div className="absolute inset-0 [animation:breathe_5s_ease-in-out_infinite]">
          {broken ? (
            <div className="grid h-full place-items-center font-display text-8xl text-primary/60">H.</div>
          ) : (
            <motion.img src="/images/AbdulHaseeb.jpeg" alt="Muhammad Abdul Haseeb" onError={() => setBroken(true)}
              style={{ x: imgX, y: imgY, scale: 1.12 }} className="portrait-image h-full w-full object-cover" />
          )}
        </div>
        <motion.div aria-hidden className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{ background: useTransform([glowX, glowY], ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,.75), transparent 55%)`) }} />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent [animation:scan_6s_linear_infinite]" />
      </motion.div>
    </div>
  );
}
