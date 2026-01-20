import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { SectionTitle } from './SectionTitle';
import { ScrollReveal } from './ScrollReveal';
import { LAWYER_NAME } from '../constants';

export const PrivacyPolicy: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased text-gray-100 bg-dark-900 min-h-screen selection:bg-gold-500 selection:text-white flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="pt-40 pb-12 relative overflow-hidden bg-dark-950">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <ScrollReveal>
                        <SectionTitle
                            title="Política de Privacidade"
                            subtitle="Proteção e Transparência"
                            centered={true}
                        />
                    </ScrollReveal>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 bg-dark-900 flex-grow">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollReveal>
                        <div className="bg-dark-800 p-10 rounded-lg border border-gray-800 text-gray-300 leading-relaxed space-y-6">
                            <p>
                                A sua privacidade é importante para nós. É política do escritório <strong>{LAWYER_NAME}</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <span className="text-gold-400">drcaiocravero.adv.br</span>.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Informações que Coletamos</h3>
                            <p>
                                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                            </p>
                            <p>
                                Os dados que coletamos através do nosso formulário de contato podem incluir:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Nome completo;</li>
                                <li>Endereço de e-mail;</li>
                                <li>Número de telefone / WhatsApp;</li>
                                <li>Mensagem descritiva do seu caso.</li>
                            </ul>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Como Usamos Suas Informações</h3>
                            <p>
                                Utilizamos as informações coletadas para:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Responder às suas solicitações de contato e agendamento de consultas;</li>
                                <li>Fornecer informações sobre nossos serviços jurídicos;</li>
                                <li>Melhorar a experiência do usuário em nosso site.</li>
                            </ul>
                            <p>
                                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Compartilhamento de Dados</h3>
                            <p>
                                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Cookies</h3>
                            <p>
                                Nosso site pode utilizar cookies para melhorar a experiência do usuário. Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados se os cookies forem desativados.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Seus Direitos (LGPD)</h3>
                            <p>
                                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Confirmar a existência de tratamento de seus dados;</li>
                                <li>Acessar seus dados;</li>
                                <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                                <li>Revogar seu consentimento a qualquer momento.</li>
                            </ul>
                            <p>
                                Para exercer seus direitos, entre em contato conosco através dos canais disponibilizados neste site.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">6. Compromisso do Usuário</h3>
                            <p>
                                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o site oferece e com caráter enunciativo, mas não limitativo:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                                <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou casas de apostas legais (ex.: Moosh), jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                                <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do escritório, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                            </ul>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">7. Mais Informações</h3>
                            <p>
                                Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                            </p>
                            <p className="mt-6 text-sm text-gray-500">
                                Esta política é efetiva a partir de <strong>Janeiro/2026</strong>.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
};
