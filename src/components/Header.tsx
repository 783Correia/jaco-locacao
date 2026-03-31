"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/whatsapp";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/frota", label: "Nossa Frota" },
  { href: "https://www.emestoque.com.br/jacolocacao/estoque?ordenar=destaques", label: "À Venda", external: true },
  { href: "/sobre", label: "Sobre" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container-main pt-8 pb-2">
        <div
          className={`flex items-center justify-between px-6 h-16 max-w-5xl mx-auto rounded-full transition-all duration-500 ${scrolled
            ? "bg-forest-dark/90 backdrop-blur-2xl shadow-float border border-white/[0.06]"
            : "bg-forest/80 backdrop-blur-xl border border-white/[0.08]"
            }`}
        >
          {/* Logo */}
          <Logo size="sm" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = !link.external && pathname === link.href;
              const LinkTag = link.external ? "a" : Link;
              const extraProps = link.external
                ? { target: "_blank" as const, rel: "noopener noreferrer" }
                : {};
              return (
                <LinkTag
                  key={link.href}
                  href={link.href}
                  {...extraProps}
                  className="relative px-4 py-2 text-[13px] font-medium transition-colors duration-300 group"
                >
                  <span
                    className={`relative z-10 ${isActive ? "text-lime" : "text-white/60 group-hover:text-white"
                      }`}
                  >
                    {link.label}
                  </span>
                  {isActive ? (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-lime rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  ) : (
                    <div className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-lime/0 rounded-full group-hover:bg-white/20 transition-colors duration-300" />
                  )}
                </LinkTag>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contato"
            className="hidden lg:inline-flex bg-lime text-forest font-bold px-5 py-2 rounded-full text-xs tracking-wide uppercase items-center gap-2 hover:shadow-glow-lime hover:scale-[1.03] transition-all duration-300"
          >
            <FaWhatsapp className="text-sm" />
            Fale Conosco
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-3 sm:mx-6"
          >
            <div className="bg-forest-dark/95 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-5 mt-2 shadow-float">
              {navLinks.map((link) => {
                const isActive = !link.external && pathname === link.href;
                const LinkTag = link.external ? "a" : Link;
                const extraProps = link.external
                  ? { target: "_blank" as const, rel: "noopener noreferrer" }
                  : {};
                return (
                  <LinkTag
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    {...extraProps}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${isActive
                      ? "text-lime bg-white/[0.06]"
                      : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                      }`}
                  >
                    {link.label}
                  </LinkTag>
                );
              })}

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime w-full justify-center mt-3 !py-3"
              >
                <FaWhatsapp className="text-base" />
                Fale no WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
