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
    slug: "protecao-patrimonial-2024", 
    title: "Como proteger seu patrimônio em 2024", 
    date: "15 Mai, 2024", 
    category: "Empresarial", 
    author: "Dr. Caio Cravero",
    excerpt: "Estratégias jurídicas fundamentais para blindar seus bens contra riscos de mercado e litígios.",
    content: `
      <p>A proteção patrimonial é um conjunto de estratégias jurídicas e contábeis que visam resguardar os bens de uma pessoa física ou jurídica contra eventuais riscos e contingências. Em um cenário econômico instável, blindar o patrimônio torna-se essencial.</p>
      
      <h3>O que é Holding Familiar?</h3>
      <p>Uma das ferramentas mais eficientes para proteção patrimonial é a constituição de uma Holding Familiar. Trata-se de uma empresa criada com o objetivo de administrar o patrimônio de uma família, facilitando a sucessão e oferecendo benefícios fiscais.</p>
      
      <h3>Principais Vantagens</h3>
      <ul>
        <li><strong>Redução da Carga Tributária:</strong> A tributação sobre aluguéis e venda de imóveis pode ser significativamente menor na pessoa jurídica.</li>
        <li><strong>Planejamento Sucessório:</strong> Evita o doloroso e custoso processo de inventário, permitindo a distribuição de quotas em vida com reserva de usufruto.</li>
        <li><strong>Proteção contra Reveses Financeiros:</strong> Separa o patrimônio pessoal dos riscos da atividade empresarial operacional.</li>
      </ul>

      <p>É fundamental que qualquer estratégia de proteção patrimonial seja elaborada por advogados especialistas, garantindo que não haja caracterização de fraude contra credores, o que anularia a eficácia da proteção.</p>
    `
  },
  { 
    slug: "direitos-consumidor-online", 
    title: "Direitos do consumidor em compras online", 
    date: "02 Mai, 2024", 
    category: "Consumidor", 
    author: "Dr. Caio Cravero",
    excerpt: "Entenda o direito de arrependimento, trocas e garantias no comércio eletrônico.",
    content: `
      <p>Com o crescimento exponencial do e-commerce, aumentaram também as dúvidas sobre os direitos de quem compra pela internet. O Código de Defesa do Consumidor (CDC) possui regras específicas para proteger o consumidor nesse ambiente.</p>
      
      <h3>Direito de Arrependimento</h3>
      <p>O artigo 49 do CDC garante o chamado "direito de arrependimento". O consumidor tem o prazo de 7 dias, a contar do recebimento do produto, para desistir da compra sem precisar justificar o motivo. O reembolso deve ser total, incluindo o frete.</p>
      
      <h3>Trocas e Garantias</h3>
      <p>Se o produto apresentar defeito, o consumidor tem 30 dias (bens não duráveis) ou 90 dias (bens duráveis) para reclamar. A loja online tem a obrigação de sanar o vício em até 30 dias. Caso contrário, o consumidor pode exigir:</p>
      <ul>
        <li>Substituição do produto;</li>
        <li>Restituição imediata do valor pago;</li>
        <li>Abatimento proporcional do preço.</li>
      </ul>
    `
  },
  { 
    slug: "divorcio-extrajudicial", 
    title: "Divórcio extrajudicial: O que você precisa saber", 
    date: "20 Abr, 2024", 
    category: "Família", 
    author: "Dr. Caio Cravero",
    excerpt: "Um guia passo a passo sobre como realizar o divórcio em cartório de forma rápida e menos burocrática.",
    content: `
      <p>O divórcio extrajudicial, realizado diretamente em cartório, é a forma mais rápida e menos custosa de dissolver o casamento. No entanto, é necessário cumprir alguns requisitos legais para optar por essa via.</p>
      
      <h3>Requisitos Obrigatórios</h3>
      <ul>
        <li><strong>Consenso:</strong> Ambas as partes devem estar de acordo com o divórcio e com a partilha de bens.</li>
        <li><strong>Inexistência de Filhos Menores ou Incapazes:</strong> Se houver filhos menores, o divórcio deve ser judicial, para garantir os direitos das crianças (salvo em alguns estados que já flexibilizam essa regra).</li>
        <li><strong>Presença de Advogado:</strong> A lei exige a assistência de um advogado, que pode ser comum ao casal ou individual.</li>
      </ul>
      
      <h3>Documentação Necessária</h3>
      <p>Para dar entrada, é necessário apresentar certidão de casamento atualizada, documentos pessoais, pacto antenupcial (se houver) e documentos dos bens a serem partilhados (imóveis, veículos, contas bancárias).</p>
    `
  },
  { 
    slug: "inventario-agil", 
    title: "Como agilizar um processo de inventário", 
    date: "10 Abr, 2024", 
    category: "Sucessões", 
    author: "Dr. Caio Cravero",
    excerpt: "Dicas práticas para herdeiros evitarem multas e demoras desnecessárias na partilha de bens.",
    content: `
      <p>O inventário é temido por muitos devido à burocracia, mas com o acompanhamento correto, é possível torná-lo célere.</p>
      <h3>Prazos e Multas</h3>
      <p>O prazo para abertura do inventário é de 60 dias após o falecimento. A perda desse prazo acarreta multa sobre o imposto de transmissão (ITCMD).</p>
    `
  },
  { 
    slug: "contratos-imobiliarios", 
    title: "Cuidados essenciais em contratos imobiliários", 
    date: "05 Mar, 2024", 
    category: "Imobiliário", 
    author: "Dr. Caio Cravero",
    excerpt: "Não assine nada sem ler: as cláusulas mais perigosas em contratos de compra e venda de imóveis.",
    content: `
      <p>A compra de um imóvel é um dos maiores investimentos da vida de uma pessoa. Contratos mal redigidos podem levar à perda do bem e do dinheiro investido.</p>
      <p>Verifique sempre a matrícula atualizada do imóvel, certidões negativas do vendedor e cláusulas de irretratabilidade.</p>
    `
  },
  { 
    slug: "holding-familiar", 
    title: "Vantagens da Holding Familiar", 
    date: "28 Fev, 2024", 
    category: "Planejamento", 
    author: "Dr. Caio Cravero",
    excerpt: "Entenda como uma holding pode facilitar a sucessão e reduzir a carga tributária da família.",
    content: `
      <p>A Holding Familiar não é exclusividade de grandes fortunas. Famílias de classe média com alguns imóveis já podem se beneficiar enormemente dessa estrutura para evitar conflitos futuros e pagar menos impostos legalmente.</p>
    `
  },
];
