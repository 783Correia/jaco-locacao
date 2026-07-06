"use client";

import { useState } from "react";
import { FaPaperPlane, FaHardHat, FaTractor } from "react-icons/fa";

export default function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleNewsletter = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
        }
    };

    return (
        <section className="bg-[#fafaf9] py-28 relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-[10%] w-[400px] h-[400px] bg-lime/[0.06] rounded-full blur-[120px] -translate-y-1/2" />
                <div className="absolute top-1/2 right-[10%] w-[350px] h-[350px] bg-forest/[0.04] rounded-full blur-[120px] -translate-y-1/2" />
            </div>

            <div className="container-main relative">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10">

                    {/* Left Placeholder */}
                    <div className="hidden md:flex flex-col gap-4 w-60 shrink-0">
                        <div className="relative group">
                            <div className="absolute -inset-3 bg-lime/15 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative shadow-xl ring-1 ring-black/[0.04] bg-gradient-to-br from-green-100 to-emerald-50 flex flex-col items-center justify-center gap-3">
                                <div className="w-16 h-16 rounded-2xl bg-lime/20 flex items-center justify-center">
                                    <FaHardHat className="text-forest text-2xl" />
                                </div>
                                <span className="text-forest/40 text-xs font-bold uppercase tracking-wider">Obras</span>
                            </div>
                        </div>
                        <p className="text-[11px] text-gray-500 text-center tracking-wide uppercase font-medium">Obras de Infraestrutura</p>
                    </div>

                    {/* Center Content */}
                    <div className="flex-1 text-center relative z-10 max-w-xl mx-auto">
                        {/* Trust badge */}
                        <div className="inline-flex items-center gap-2 bg-forest/[0.06] rounded-full px-5 py-2 mb-8">
                            <div className="w-1.5 h-1.5 bg-lime rounded-full"></div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-forest/70">Palhoça, SC · Atendemos toda Santa Catarina</span>
                        </div>

                        <h2 className="text-[2.5rem] md:text-[3.2rem] leading-[1.05] font-bold text-dark tracking-tight">
                            Força e confiabilidade<br />
                            <span className="text-forest">para sua obra.</span>
                        </h2>

                        <p className="text-gray-500 mt-6 max-w-md mx-auto leading-relaxed">
                            Receba novidades, dicas técnicas e ofertas exclusivas de locação diretamente no seu e-mail.
                        </p>

                        {subscribed ? (
                            <div className="mt-10 bg-lime/10 border border-lime/20 rounded-2xl px-8 py-5 inline-flex items-center gap-3 text-forest font-semibold">
                                <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center">
                                    <FaPaperPlane className="text-forest text-xs" />
                                </div>
                                Inscrição confirmada!
                            </div>
                        ) : (
                            <form
                                onSubmit={handleNewsletter}
                                className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                            >
                                <div className="flex-1 relative">
                                    <FaPaperPlane className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 text-xs" />
                                    <label htmlFor="newsletter-email" className="sr-only">
                                        Seu e-mail
                                    </label>
                                    <input
                                        id="newsletter-email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="seu@email.com"
                                        autoComplete="email"
                                        className="w-full bg-white border border-gray-200 rounded-2xl pl-11 pr-5 py-4 text-dark text-sm placeholder:text-gray-500 outline-none focus:border-forest focus:ring-4 focus:ring-forest/[0.06] transition-all shadow-sm"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-forest text-white font-bold px-8 py-4 rounded-2xl hover:bg-forest/90 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    Inscrever-se
                                    <span className="text-lime text-lg">→</span>
                                </button>
                            </form>
                        )}

                        {/* Social proof */}
                        <div className="mt-8 flex items-center justify-center gap-6 text-gray-500">
                            <span className="text-xs">Sem spam. Cancele quando quiser.</span>
                        </div>
                    </div>

                    {/* Right Placeholder */}
                    <div className="hidden md:flex flex-col gap-4 w-64 shrink-0">
                        <div className="relative group">
                            <div className="absolute -inset-3 bg-forest/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden relative shadow-xl ring-1 ring-black/[0.04] bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col items-center justify-center gap-3">
                                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center">
                                    <FaTractor className="text-amber-700 text-2xl" />
                                </div>
                                <span className="text-amber-700/40 text-xs font-bold uppercase tracking-wider">Operações</span>
                            </div>
                        </div>
                        <p className="text-[11px] text-gray-500 text-center tracking-wide uppercase font-medium">Operações Pesadas</p>
                    </div>

                </div>
            </div>

            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </section>
    );
}
