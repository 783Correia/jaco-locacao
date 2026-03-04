"use client";

import { useState } from "react";
import { getWhatsAppLink } from "@/utils/whatsapp";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

function formatWhatsApp(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function ContatoContent() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    cidade: "",
    tipoCriacao: "",
    areaInteresse: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, whatsapp: formatWhatsApp(e.target.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Olá! Meu nome é ${formData.name}.`,
      "",
      `WhatsApp: ${formData.whatsapp}`,
      formData.email ? `E-mail: ${formData.email}` : "",
      formData.cidade ? `Cidade/Região: ${formData.cidade}` : "",
      formData.tipoCriacao ? `Tipo de Obra: ${formData.tipoCriacao}` : "",
      formData.areaInteresse ? `Equipamento(s) de Interesse: ${formData.areaInteresse}` : "",
      formData.message ? `\nMensagem: ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("%0A");

    window.open(getWhatsAppLink(lines), "_blank");
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-lime/30 outline-none transition-all text-sm";
  const labelClass =
    "block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime rounded-full translate-y-1/2 translate-x-1/3 blur-3xl" />
        </div>
        <div className="container-main relative text-center">
          <div
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-lime bg-lime/10 px-4 py-1.5 rounded-full mb-4">
              Fale Conosco
            </span>
            <h1 className="text-display-sm text-white">Contato</h1>
            <p className="text-white/60 text-lg mt-4 max-w-xl mx-auto">
              Estamos prontos para atender você. Preencha o formulário e
              entraremos em contato via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50 section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — 3 cols */}
            <div
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card">
                <h2 className="text-2xl font-extrabold text-dark tracking-tight mb-2">
                  Envie sua mensagem
                </h2>
                <p className="text-gray-400 text-sm mb-8">
                  Preencha o formulário e entraremos em contato via WhatsApp.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-lime/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-lime text-2xl" />
                    </div>
                    <h3 className="text-xl font-extrabold text-dark mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Sua mensagem foi direcionada ao WhatsApp. Retornaremos em
                      breve.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          whatsapp: "",
                          email: "",
                          cidade: "",
                          tipoCriacao: "",
                          areaInteresse: "",
                          message: "",
                        });
                      }}
                      className="mt-6 text-primary font-bold text-sm inline-flex items-center gap-2"
                    >
                      Enviar nova mensagem
                      <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Nome + WhatsApp */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Nome Completo *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className={inputClass}
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.whatsapp}
                          onChange={handleWhatsAppChange}
                          className={inputClass}
                          placeholder="(54) 99999-9999"
                        />
                      </div>
                    </div>

                    {/* Email + Cidade */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>E-mail</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={inputClass}
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Cidade / Região *</label>
                        <input
                          type="text"
                          required
                          value={formData.cidade}
                          onChange={(e) =>
                            setFormData({ ...formData, cidade: e.target.value })
                          }
                          className={inputClass}
                          placeholder="Ex: Vacaria, Campos de Cima da Serra"
                        />
                      </div>
                    </div>

                    {/* Tipo Obra + Equipamento Interesse */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Tipo de Obra *</label>
                        <select
                          required
                          value={formData.tipoCriacao}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              tipoCriacao: e.target.value,
                            })
                          }
                          className={inputClass}
                        >
                          <option value="">Selecione...</option>
                          <option value="Construção Civil">Construção Civil</option>
                          <option value="Terraplanagem">Terraplanagem</option>
                          <option value="Pavimentação">Pavimentação</option>
                          <option value="Saneamento">Saneamento</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>
                          Equipamento de Interesse *
                        </label>
                        <select
                          required
                          value={formData.areaInteresse}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              areaInteresse: e.target.value,
                            })
                          }
                          className={inputClass}
                        >
                          <option value="">Selecione...</option>
                          <option value="Escavadeira Hidráulica">Escavadeira Hidráulica</option>
                          <option value="Plataforma Elevatória">Plataforma Elevatória</option>
                          <option value="Rolo Compactador">Rolo Compactador</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>
                    </div>

                    {/* Mensagem */}
                    <div>
                      <label className={labelClass}>
                        Mensagem{" "}
                        <span className="text-gray-300 normal-case font-normal">
                          (opcional)
                        </span>
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className={`${inputClass} resize-none`}
                        placeholder="Como podemos ajudar?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-lime w-full justify-center"
                    >
                      <FaWhatsapp className="text-lg" />
                      Enviar via WhatsApp
                      <FaArrowRight className="text-xs" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Info — 2 cols */}
            <div
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em] mb-6">
                  Informações
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: FaMapMarkerAlt,
                      label: "Endereço",
                      value:
                        "Br 101 km 213 s/n\nCentro - Palhoça - SC",
                      color: "bg-primary/10 text-primary",
                    },
                    {
                      icon: FaPhoneAlt,
                      label: "Telefone",
                      value: "(48) 9925-0605",
                      href: "tel:+554899250605",
                      color: "bg-primary/10 text-primary",
                    },
                    {
                      icon: FaWhatsapp,
                      label: "WhatsApp",
                      value: "(48) 9925-0605",
                      href: getWhatsAppLink(),
                      color: "bg-[#25D366]/10 text-[#25D366]",
                    },
                    {
                      icon: FaInstagram,
                      label: "Instagram",
                      value: "@jacolocacao",
                      href: "https://instagram.com/jacolocacao",
                      color: "bg-pink-50 text-pink-500",
                    },
                    {
                      icon: FaClock,
                      label: "Horário",
                      value: "Seg-Sex: 8h–18h\nSáb: 8h–12h",
                      color: "bg-primary/10 text-primary",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center shrink-0`}
                      >
                        <item.icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-dark font-medium text-sm hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-dark font-medium text-sm whitespace-pre-line">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map removed per user request */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
