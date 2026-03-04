import Link from "next/link";
import Logo from "@/components/Logo";
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { getWhatsAppLink } from "@/utils/whatsapp";

export default function Footer() {
  return (
    <footer>

      {/* ─── Main Footer ─── */}
      <div style={{ backgroundColor: "#0f1f0f" }}>
        <div className="container-main py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <div className="mb-6">
                <Logo size="lg" />
              </div>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs">
                Força e Confiabilidade para a sua obra com as melhores máquinas do mercado.
              </p>
              <div className="flex gap-2.5 mt-6">
                <a
                  href="https://instagram.com/jacolocacaomaquinas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.05] hover:bg-lime hover:text-forest rounded-xl flex items-center justify-center text-white/30 transition-all duration-300"
                >
                  <FaInstagram size={15} />
                </a>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/[0.05] hover:bg-lime hover:text-forest rounded-xl flex items-center justify-center text-white/30 transition-all duration-300"
                >
                  <FaWhatsapp size={15} />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20 mb-5">
                Navegação
              </h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/", label: "Início" },
                  { href: "/sobre", label: "Sobre" },
                  { href: "/frota", label: "Nossa Frota" },
                  { href: "/contato", label: "Contato" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-lime text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frota */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20 mb-5">
                Nossa Frota
              </h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/frota#escavadeiras", label: "Escavadeiras" },
                  { href: "/frota#plataformas", label: "Plataformas Elevatórias" },
                  { href: "/frota#rolos", label: "Rolos Compactadores" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/40 hover:text-lime text-sm transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20 mb-5">
                Contato
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <FaMapMarkerAlt className="mt-1 text-lime shrink-0 text-xs" />
                  <span className="text-white/40 text-sm">
                    BR 101, KM 213, Nº 100 - Centro
                    <br />
                    Palhoça - SC
                  </span>
                </li>
                <li>
                  <a
                    href="tel:+555133330000"
                    className="flex items-center gap-2.5 text-white/40 hover:text-lime text-sm transition-colors"
                  >
                    <FaPhoneAlt className="text-lime text-xs" />
                    (11) 90000-0000
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-white/40 hover:text-lime text-sm transition-colors"
                  >
                    <FaWhatsapp className="text-lime text-xs" />
                    (11) 90000-0000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.05]">
          <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/15 text-xs">
              &copy; {new Date().getFullYear()} Jaco Locação. Todos os
              direitos reservados.
            </p>
            <p className="text-white/15 text-xs">
              Palhoça, SC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
