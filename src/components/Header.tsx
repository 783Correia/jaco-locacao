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
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container-main pt-5 pb-2">
        <div className="flex items-center justify-between px-6 h-16 max-w-5xl mx-auto rounded-full bg-forest-dark/90 backdrop-blur-2xl shadow-float border border-white/[0.06]">
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
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FaTimes size={20} aria-hidden /> : <FaBars size={20} aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed top-0 left-3 right-3 z-50 mt-[84px]"
            >
              <div className="bg-forest-dark border border-white/[0.08] rounded-3xl overflow-hidden shadow-float">

                {/* Links */}
                <div className="p-3">
                  {navLinks.map((link, i) => {
                    const isActive = !link.external && pathname === link.href;
                    const LinkTag = link.external ? "a" : Link;
                    const extraProps = link.external
                      ? { target: "_blank" as const, rel: "noopener noreferrer" }
                      : {};
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.2 }}
                      >
                        <LinkTag
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          {...extraProps}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-medium text-[15px] transition-all duration-200 ${
                            isActive
                              ? "text-lime bg-white/[0.07]"
                              : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                          }`}
                        >
                          <span>{link.label}</span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                          )}
                        </LinkTag>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="px-3 pb-3 border-t border-white/[0.06] pt-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2.5 w-full bg-lime text-forest font-bold py-3.5 rounded-2xl text-sm tracking-wide uppercase hover:brightness-105 transition-all"
                  >
                    <FaWhatsapp className="text-base" />
                    Fale no WhatsApp
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
