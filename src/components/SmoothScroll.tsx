"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let lenis: any;

        if (window.innerWidth < 768) return;

        (async () => {
            const Lenis = (await import("lenis")).default;
            lenis = new Lenis({
                duration: 1.6,
                easing: (t: number) => 1 - Math.pow(1 - t, 4),
                touchMultiplier: 1.8,
                smoothWheel: true,
                infinite: false,
            });

            function raf(time: number) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }

            requestAnimationFrame(raf);
        })();

        return () => {
            lenis?.destroy();
        };
    }, []);

    return <>{children}</>;
}
