import {
  Scale,
  Home,
  FileText,
  Users,
  Briefcase,
  ShoppingCart,
  Building2,
  Gavel
} from 'lucide-react';
import { NavItem, PracticeArea, Testimonial, ValueItem } from './types';

export const LAWYER_NAME = "Dr. Caio Cravero";
export const WHATSAPP_NUMBER = "5511964772412";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20Dr.%20Caio%20Cravero.%20Acessei%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.`;
export const OAB_NUMBER = "446.510";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de Atuação", href: "#atuacao" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "civil",
    title: "Direito Civil",
    description: "Resolução de conflitos, contratos, responsabilidade civil e indenizações.",
    fullDescription: "O Direito Civil é a base das relações privadas. Nossa atuação abrange desde a elaboração e análise minuciosa de contratos até a defesa em ações de responsabilidade civil. Atuamos com foco na prevenção de litígios e na segurança jurídica dos negócios e relações pessoais.",
    purpose: "Regular as relações entre particulares, garantindo o cumprimento de obrigações, a validade dos negócios jurídicos e a reparação de danos causados a terceiros.",
    whenToHire: "Ao realizar contratos de alto valor, sofrer danos materiais ou morais, enfrentar problemas de inadimplência ou precisar de assessoria para interpretar cláusulas contratuais complexas.",
    icon: Scale
  },
  {
    id: "imobiliario",
    title: "Direito Imobiliário",
    description: "Assessoria em compra e venda, locações, regularização de imóveis e condomínios.",
    fullDescription: "Oferecemos assessoria jurídica completa para transações imobiliárias, garantindo a segurança do seu patrimônio. Realizamos Due Diligence imobiliária, regularização de registros, atuação em ações possessórias e assessoria para condomínios e incorporadoras.",
    purpose: "Garantir a segurança jurídica na aquisição, venda, locação e posse de bens imóveis, evitando fraudes e problemas registrais futuros.",
    whenToHire: "Antes de assinar qualquer contrato de compra e venda de imóvel, ao enfrentar problemas com inquilinos ou locadores, para regularizar escrituras ou em conflitos de condomínio.",
    icon: Home
  },
  {
    id: "inventario",
    title: "Inventário e Sucessões",
    description: "Planejamento sucessório, inventários judiciais e extrajudiciais ágeis.",
    fullDescription: "Tratamos do momento delicado da sucessão com técnica e sensibilidade. Especialistas em Inventários Extrajudiciais (em cartório) para maior agilidade, e Judiciais quando necessário. Também atuamos preventivamente com Planejamento Sucessório e Testamentos.",
    purpose: "Formalizar a transferência do patrimônio aos herdeiros de forma legal, resolver disputas familiares sobre bens e reduzir a carga tributária através de planejamento.",
    whenToHire: "Imediatamente após o falecimento de um ente querido para abertura do inventário (evitando multas) ou preventivamente, para organizar a distribuição de bens em vida.",
    icon: FileText
  },
  {
    id: "familiar",
    title: "Direito de Família",
    description: "Divórcios, pensão alimentícia, guarda e tutela com discrição e empatia.",
    fullDescription: "Atuação humanizada em conflitos familiares. Cuidamos de processos de Divórcio (Consensual ou Litigioso), Regulamentação de Guarda, Pensão Alimentícia, Reconhecimento e Dissolução de União Estável e Adoção.",
    purpose: "Resolver conflitos familiares com o menor impacto emocional possível, garantindo os direitos dos cônjuges e, principalmente, o bem-estar dos filhos menores.",
    whenToHire: "No momento da ruptura conjugal, quando houver necessidade de rever valores de pensão, ou para formalizar acordos de convivência e guarda.",
    icon: Users
  },
  {
    id: "trabalhista",
    title: "Direito Trabalhista",
    description: "Defesa dos direitos de trabalhadores e assessoria preventiva para empresas.",
    fullDescription: "Para empresas, atuamos no preventivo trabalhista (Compliance) reduzindo passivos. Para empregados, buscamos a reparação de direitos violados, como verbas rescisórias, horas extras, assédio moral e reconhecimento de vínculo.",
    purpose: "Equilibrar a relação capital-trabalho, garantindo que as normas da CLT sejam cumpridas e defendendo os interesses da parte representada em reclamações trabalhistas.",
    whenToHire: "Empresas: Consultoria mensal ou ao receber uma notificação. Trabalhadores: Ao ser demitido sem justa causa sem receber as verbas corretas ou trabalhar em condições irregulares.",
    icon: Briefcase
  },
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    description: "Defesa contra práticas abusivas, negativação indevida e danos morais.",
    fullDescription: "Defesa intransigente contra abusos de grandes empresas. Atuamos em casos de negativação indevida no SPC/Serasa, problemas com planos de saúde, companhias aéreas (atraso/cancelamento de voo), bancos e defeitos em produtos.",
    purpose: "Restabelecer o equilíbrio nas relações de consumo, garantindo indenizações por danos materiais e morais causados por falha na prestação de serviços.",
    whenToHire: "Ao ter o nome negativado indevidamente, ter voos cancelados, sofrer cobranças abusivas ou ter negativas de cobertura de planos de saúde.",
    icon: ShoppingCart
  },
  {
    id: "empresarial",
    title: "Direito Empresarial",
    description: "Consultoria jurídica para negócios, contratos mercantis e recuperação de crédito.",
    fullDescription: "Assessoria jurídica estratégica para o dia a dia da empresa. Análise de contratos com fornecedores, recuperação de crédito de inadimplentes e estruturação de negócios. Focamos em blindar a operação da empresa contra riscos jurídicos.",
    purpose: "Dar segurança legal para a atividade econômica, recuperar ativos financeiros e gerenciar riscos contratuais do negócio.",
    whenToHire: "Na fundação da empresa, na elaboração de contratos padrão com fornecedores/clientes e na gestão de crises financeiras ou cobranças judiciais.",
    icon: Building2
  },
  {
    id: "societario",
    title: "Direito Societário",
    description: "Constituição de empresas, fusões, aquisições e dissolução de sociedades.",
    fullDescription: "Especialistas na relação entre sócios. Elaboramos Contratos Sociais, Acordos de Sócios (para evitar conflitos futuros), atuamos em processos de exclusão de sócio e apuração de haveres na dissolução da sociedade.",
    purpose: "Organizar a estrutura de poder e capital da empresa, definindo regras claras de entrada e saída de sócios para a perenidade do negócio.",
    whenToHire: "Ao abrir uma sociedade, ao receber investimento, quando houver desentendimento grave entre os sócios ou desejo de saída da sociedade.",
    icon: Gavel
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Empresária",
    content: "A atuação do Dr. Caio foi impecável. Conseguiu resolver um impasse contratual que se arrastava há anos com muita rapidez e técnica.",
    rating: 5
  },
  {
    id: 2,
    name: "Roberto Almeida",
    role: "Cliente Civil",
    content: "Profissionalismo e transparência desde a primeira reunião. Senti muita segurança em deixar meu caso de inventário em suas mãos.",
    rating: 5
  },
  {
    id: 3,
    name: "Carla Mendes",
    role: "Diretora Comercial",
    content: "Excelente assessoria jurídica para minha empresa. Evitamos diversos processos graças à consultoria preventiva.",
    rating: 5
  }
];

export const VALUES: ValueItem[] = [
  { title: "Missão", description: "Proporcionar justiça e segurança jurídica através de um atendimento personalizado e estratégico." },
  { title: "Visão", description: "Ser referência nacional em advocacia de resultado, reconhecido pela ética e inovação." },
  { title: "Valores", description: "Ética inegociável, transparência total, excelência técnica e foco no cliente." }
];

// Dados dos Blogs centralizados
export const BLOG_POSTS = [
  {
    slug: "lgpd-ia-empresas-2026",
    title: "LGPD e Inteligência Artificial: O que muda em 2026",
    date: "12 Mar, 2026",
    category: "Tecnologia",
    author: "Dr. Caio Cravero",
    excerpt: "Novas diretrizes da ANPD sobre o uso de IA e como sua empresa deve se adaptar para evitar sanções.",
    content: `
      <p>Com o avanço acelerado da Inteligência Artificial generativa, a Autoridade Nacional de Proteção de Dados (ANPD) emitiu novas diretrizes para 2026. A principal mudança foca na transparência algorítmica: as empresas agora devem explicar claramente aos usuários quando e como seus dados estão sendo processados por IA.</p>
      
      <h3>Principais pontos de atenção</h3>
      <p>O consentimento genérico não é mais suficiente. Para o treinamento de modelos de IA com dados de clientes, é necessário um consentimento específico e revogável a qualquer momento. Além disso, a responsabilidade civil por decisões automatizadas (como recusa de crédito por um algoritmo) tornou-se objetiva em certos casos.</p>
      
      <blockquote>
        "A tecnologia avança, mas os direitos fundamentais permanecem. A conformidade digital não é apenas sobre evitar multas, é sobre reputação de mercado."
      </blockquote>

      <p>Recomendamos uma revisão imediata das Políticas de Privacidade e dos Termos de Uso de todas as plataformas digitais corporativas para adequação a este novo cenário regulatório.</p>
    `
  },
  {
    slug: "smart-contracts-validade-juridica",
    title: "Contratos Inteligentes: Validade jurídica no Brasil",
    date: "15 Fev, 2026",
    category: "Inovação",
    author: "Dr. Caio Cravero",
    excerpt: "Como o judiciário brasileiro tem interpretado a execução automática de cláusulas em blockchain.",
    content: `
      <p>Os <em>Smart Contracts</em> (contratos inteligentes) deixaram de ser uma promessa futurista para se tornarem realidade no mercado imobiliário e financeiro. Mas qual a segurança jurídica desses códigos autoexecutáveis no Brasil?</p>
      
      <h3>Código é Lei?</h3>
      <p>Embora a automação garanta que a cláusula seja cumprida (ex: liberar o pagamento de um aluguel apenas quando a chave digital for entregue), o judiciário brasileiro mantém o entendimento de que a lei prevalece sobre o código. Cláusulas abusivas, mesmo que codificadas em blockchain, podem ser anuladas judicialmente.</p>
      
      <p>A vantagem, contudo, é a <strong>redução drástica da inadimplência</strong> e a agilidade nas transações. Para validade plena, recomendamos que todo Smart Contract seja acompanhado de um instrumento jurídico tradicional (Ricardian Contract) que defina o foro e as leis aplicáveis em caso de falha sistêmica.</p>
    `
  },
  {
    slug: "reforma-tributaria-sucessao",
    title: "Reforma Tributária 2026: Impactos na herança",
    date: "20 Jan, 2026",
    category: "Tributário",
    author: "Dr. Caio Cravero",
    excerpt: "As novas alíquotas progressivas do ITCMD e por que você deve rever seu planejamento sucessório agora.",
    content: `
      <p>A virada de ano trouxe a plena vigência das novas alíquotas do Imposto sobre Transmissão Causa Mortis e Doação (ITCMD). A mudança para um sistema progressivo (quem herda mais, paga mais) impacta diretamente famílias de classe média e alta.</p>
      
      <h3>O fim da alíquota única</h3>
      <p>Anteriormente fixado em percentuais estáticos em muitos estados, agora o imposto pode chegar ao teto constitucional de forma escalonada. Isso encarece significativamente o processo de inventário tradicional.</p>
      
      <h3>Como se proteger?</h3>
      <ul>
        <li><strong>Doação em Vida com Reserva de Usufruto:</strong> Antecipar a herança pode congelar a base de cálculo e garantir alíquotas menores.</li>
        <li><strong>Estruturas Societárias:</strong> A integralização de bens em holdings continua sendo uma estratégia válida, embora exija maior sofisticação contábil com as novas regras de distribuição de lucros.</li>
      </ul>
    `
  },
  {
    slug: "divorcio-ativos-digitais",
    title: "Divórcio: Como fica a partilha de Criptos e Milhas?",
    date: "05 Dez, 2025",
    category: "Família",
    author: "Dr. Caio Cravero",
    excerpt: "Ativos digitais agora entram na partilha de bens. Saiba como rastrear e dividir esse patrimônio invisível.",
    content: `
      <p>Não se dividem mais apenas casas e carros. Em 2025, o "patrimônio invisível" tornou-se o centro de muitas disputas em Varas de Família.</p>
      
      <p>Criptomoedas, NFTs, milhas aéreas acumuladas e até contas monetizadas em redes sociais são considerados bens partilháveis no regime de comunhão parcial. O desafio, muitas vezes, não é a lei, mas a prova da existência desses bens.</p>
      
      <h3>Investigação Patrimonial Digital</h3>
      <p>Temos utilizado ferramentas de rastreio de blockchain e ofícios judiciais a exchanges para evitar a ocultação de patrimônio por um dos cônjuges. Se você suspeita que seu parceiro(a) possui investimentos digitais não declarados, a orientação prévia ao divórcio é crucial para garantir uma partilha justa.</p>
    `
  },
  {
    slug: "heranca-digital-acesso",
    title: "Herança Digital: Quem herda seu WhatsApp e Instagram?",
    date: "18 Nov, 2025",
    category: "Sucessões",
    author: "Dr. Caio Cravero",
    excerpt: "O direito das famílias ao acesso de contas falecidos versus a privacidade do usuário.",
    content: `
      <p>Quando alguém falece, o que acontece com suas mensagens privadas e perfis sociais? A jurisprudência recente tem se consolidado no sentido de distinguir <strong>acervo patrimonial</strong> (contas que geram renda) de <strong>acervo existencial</strong> (conversas privadas).</p>
      
      <p>Enquanto canais do YouTube e perfis profissionais de Instagram podem ser herdados e administrados pelos sucessores, o acesso a conversas de WhatsApp tem sido negado pelos tribunais para preservar a privacidade do falecido e de seus interlocutores, salvo vontade expressa deixada em testamento.</p>
      
      <p>Para evitar longas batalhas judiciais com as plataformas (Big Techs), a inclusão de um capítulo sobre "Legado Digital" no testamento ou em codicilo tornou-se indispensável.</p>
    `
  },
  {
    slug: "holding-familiar-blindagem",
    title: "Holdings Familiares: Ainda valem a pena?",
    date: "10 Out, 2025",
    category: "Empresarial",
    author: "Dr. Caio Cravero",
    excerpt: "Análise atualizada sobre a eficácia da blindagem patrimonial frente às novas decisões do STJ.",
    content: `
      <p>A "blindagem patrimonial" absoluta é um mito, mas a proteção patrimonial através de Holdings permanece a estratégia mais robusta para empresários e investidores.</p>
      
      <h3>O que mudou?</h3>
      <p>Decisões recentes do STJ reforçaram que a desconsideração da personalidade jurídica (atingir os bens dos sócios por dívidas da empresa) exige prova de fraude ou confusão patrimonial. Ou seja, uma Holding bem estruturada, com contabilidade segregada e propósito negocial real, continua oferecendo uma camada extra de segurança inestimável.</p>
      
      <p>Além da proteção, a governança corporativa que uma Holding impõe à família evita que conflitos pessoais contaminem a gestão dos bens, garantindo a perenidade do patrimônio para as próximas gerações.</p>
    `
  },
];
