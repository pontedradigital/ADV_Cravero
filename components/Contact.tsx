import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Loader2, Check } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import { WHATSAPP_NUMBER } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import backgroundImage from '../imagem/Background.webp';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Change state to sending
    setStatus('sending');

    // 2. Simulate network request/processing time (1.5 seconds)
    setTimeout(() => {
      // 3. Change state to success
      setStatus('success');

      // 4. Construct the message
      const msg = `*Novo Contato via Site*\n\n*Nome:* ${formState.name}\n*Email:* ${formState.email}\n*Tel:* ${formState.phone}\n\n*Mensagem:*\n${formState.message}`;

      // Use the clean number to avoid conflicting query parameters
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

      // 5. Wait a brief moment so user sees the "Success" message, then open WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');

        // 6. Reset form and status
        setFormState({ name: '', phone: '', email: '', message: '' });

        // Return button to normal state after a few seconds
        setTimeout(() => {
          setStatus('idle');
        }, 3000);
      }, 1000);

    }, 1500);
  };

  return (
    <section
      id="contato"
      className="py-24 relative overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-900/95 z-0"></div>

      {/* Background radial gradient (kept from original design) */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-600 rounded-full blur-[150px] opacity-10 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <SectionTitle
            title="Entre em Contato"
            subtitle="Agende sua Consulta"
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 bg-dark-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">

          {/* Contact Info Side */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gold-900 to-dark-900 p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

            <div className="relative z-10">
              <ScrollReveal delay={200}>
                <h3 className="text-2xl font-serif text-white mb-6">Informações de Contato</h3>
                <p className="text-gold-100/80 mb-8 leading-relaxed">
                  Não deixe suas dúvidas jurídicas para depois. Nossa equipe está pronta para analisar seu caso com total sigilo e dedicação.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-gold-400 mt-1" />
                    <div>
                      <p className="text-white font-bold">Endereço</p>
                      <p className="text-gray-300 text-sm">Av. Paulista, 1000 - CJ 102<br />Bela Vista, São Paulo - SP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-gold-400 mt-1" />
                    <div>
                      <p className="text-white font-bold">Telefone / WhatsApp</p>
                      <p className="text-gray-300 text-sm">(11) 96477-2412</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-gold-400 mt-1" />
                    <div>
                      <p className="text-white font-bold">Email</p>
                      <p className="text-gray-300 text-sm">contato@drcaiocravero.adv.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-gold-400 mt-1" />
                    <div>
                      <p className="text-white font-bold">Horário de Atendimento</p>
                      <p className="text-gray-300 text-sm">Seg - Sex: 09:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 p-10">
            <ScrollReveal delay={400}>
              <h3 className="text-xl font-sans font-bold text-white mb-2 uppercase tracking-wide">Envie uma mensagem</h3>
              <p className="text-gray-400 mb-8 text-sm">Preencha o formulário abaixo e entraremos em contato rapidamente.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gold-500 font-bold uppercase tracking-wider">Nome</label>
                    <input
                      type="text"
                      required
                      disabled={status !== 'idle'}
                      className="w-full bg-dark-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-gold-500 transition-colors disabled:opacity-50"
                      placeholder="Seu nome completo"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gold-500 font-bold uppercase tracking-wider">Telefone</label>
                    <input
                      type="tel"
                      required
                      disabled={status !== 'idle'}
                      className="w-full bg-dark-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-gold-500 transition-colors disabled:opacity-50"
                      placeholder="(00) 00000-0000"
                      value={formState.phone}
                      onChange={e => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gold-500 font-bold uppercase tracking-wider">E-mail</label>
                  <input
                    type="email"
                    required
                    disabled={status !== 'idle'}
                    className="w-full bg-dark-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-gold-500 transition-colors disabled:opacity-50"
                    placeholder="seuemail@exemplo.com"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gold-500 font-bold uppercase tracking-wider">Mensagem</label>
                  <textarea
                    rows={4}
                    required
                    disabled={status !== 'idle'}
                    className="w-full bg-dark-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-gold-500 transition-colors disabled:opacity-50"
                    placeholder="Descreva brevemente seu caso..."
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  fullWidth
                  disabled={status !== 'idle'}
                  className={`transition-all duration-300 ${status === 'success' ? '!bg-green-600 !text-white !from-green-600 !to-green-600 border-none hover:!shadow-none' : ''}`}
                >
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin" size={18} /> Enviando...
                    </span>
                  ) : status === 'success' ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check size={18} /> Mensagem enviada com sucesso!
                    </span>
                  ) : (
                    "Enviar Solicitação"
                  )}
                </Button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Ao enviar, você concorda com o processamento dos seus dados pessoais para fins de contato.
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};