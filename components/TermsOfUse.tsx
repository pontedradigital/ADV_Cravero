import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { SectionTitle } from './SectionTitle';
import { ScrollReveal } from './ScrollReveal';
import { LAWYER_NAME } from '../constants';

export const TermsOfUse: React.FC = () => {
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
                            title="Termos de Uso"
                            subtitle="Condições de Utilização"
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
                            <h3 className="text-xl font-bold text-white mb-4">1. Termos</h3>
                            <p>
                                Ao acessar o site <strong>{LAWYER_NAME}</strong>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Uso de Licença</h3>
                            <p>
                                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site {LAWYER_NAME}, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Modificar ou copiar os materiais;</li>
                                <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site {LAWYER_NAME};</li>
                                <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                                <li>Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
                            </ul>
                            <p>
                                Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por {LAWYER_NAME} a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Isenção de responsabilidade</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Os materiais no site da {LAWYER_NAME} são fornecidos 'como estão'. {LAWYER_NAME} não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</li>
                                <li>Além disso, o {LAWYER_NAME} não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</li>
                                <li><strong>Natureza Informativa:</strong> O conteúdo deste site tem caráter meramente informativo e educacional, não constituindo consultoria jurídica ou parecer legal. Cada caso deve ser analisado individualmente por um profissional habilitado.</li>
                            </ul>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Limitações</h3>
                            <p>
                                Em nenhum caso o {LAWYER_NAME} ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em {LAWYER_NAME}, mesmo que {LAWYER_NAME} ou um representante autorizado da {LAWYER_NAME} tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Precisão dos materiais</h3>
                            <p>
                                Os materiais exibidos no site da {LAWYER_NAME} podem incluir erros técnicos, tipográficos ou fotográficos. {LAWYER_NAME} não garante que qualquer material em seu site seja preciso, completo ou atual. {LAWYER_NAME} pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, {LAWYER_NAME} não se compromete a atualizar os materiais.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">6. Links</h3>
                            <p>
                                O {LAWYER_NAME} não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por {LAWYER_NAME} do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">Modificações</h3>
                            <p>
                                O {LAWYER_NAME} pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8 mb-4">Lei aplicável</h3>
                            <p>
                                Estes termos e condições são regidos e interpretados de acordo com as leis do {LAWYER_NAME} e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
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
