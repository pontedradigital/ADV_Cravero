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
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "#contato" },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    description: "Defesa especializada para consumidores lesados por práticas abusivas.",
    fullDescription: "Atuação intransigente na defesa de seus direitos contra abusos. Especialistas em casos de negativação indevida, problemas com voos (cancelamento/atraso), planos de saúde, defeitos em produtos e revisão de contratos bancários abusivos.",
    purpose: "Garantir a reparação integral de danos materiais e morais causados por falhas na prestação de serviços ou produtos defeituosos.",
    whenToHire: "Ao sofrer cobranças indevidas, ter nome negativado injustamente, enfrentar problemas com companhias aéreas ou ter negativas de cobertura de saúde.",
    icon: ShoppingCart
  },
  {
    id: "consumidor-empresarial",
    title: "Consumidor para Empresas",
    description: "Auditorias, Compliance e defesa em processos consumeristas.",
    fullDescription: "Proteção jurídica para sua empresa. Realizamos auditorias preventivas, implementação de Compliance Consumerista para reduzir passivos judiciais e defesa estratégica em ações movidas por consumidores e órgãos fiscalizadores (PROCON).",
    purpose: "Blindar a empresa contra multas e processos em massa, adequando processos internos ao Código de Defesa do Consumidor.",
    whenToHire: "Para prevenir passivos, ao receber autuações do PROCON ou para defesa técnica em processos judiciais de consumo.",
    icon: Building2
  },
  {
    id: "holding-tributaria",
    title: "Holding para Tributos",
    description: "Planejamento tributário inteligente para otimização fiscal.",
    fullDescription: "Estruturação de Holdings Patrimoniais visando a eficiência tributária. Redução lícita da carga de impostos sobre aluguéis, vendas de imóveis e transmissão de bens, aproveitando os benefícios fiscais da pessoa jurídica.",
    purpose: "Maximizar os lucros através da redução legal de impostos incidentes sobre o patrimônio e suas receitas.",
    whenToHire: "Se você possui imóveis alugados na pessoa física ou pretende vender bens de alto valor e deseja reduzir o impacto do Imposto de Renda.",
    icon: Scale
  },
  {
    id: "protecao-patrimonial",
    title: "Proteção Patrimonial",
    description: "Estratégias legais para segurança dos seus bens e legado.",
    fullDescription: "Implementação de mecanismos jurídicos para proteger seu patrimônio pessoal de riscos empresariais, trabalhistas e cíveis. Segregação de riscos através de estruturas societárias sólidas e legais.",
    purpose: "Garantir que o patrimônio conquistado não seja atingido por instabilidades econômicas ou riscos inerentes à atividade empresarial.",
    whenToHire: "Empresários, sócios ou investidores que desejam blindar seu patrimônio pessoal contra riscos de seus negócios.",
    icon: Gavel
  },
  {
    id: "holding-locacao",
    title: "Holding de Locação",
    description: "Gestão profissional e tributação reduzida para imóveis de aluguel.",
    fullDescription: "Centralização de imóveis em uma estrutura societária específica para locação. Vantagens na administração, sucessão e, principalmente, na tributação dos rendimentos de aluguel (redução de até 27,5% para cerca de 11,33%).",
    purpose: "Profissionalizar a gestão imobiliária e reduzir drasticamente a carga tributária sobre rendimentos de aluguéis.",
    whenToHire: "Proprietários de múltiplos imóveis ou imóveis de alto valor que geram renda de aluguel tributada na pessoa física.",
    icon: Home
  },
  {
    id: "assessoria-mensal",
    title: "Assessoria Mensal",
    description: "Suporte jurídico contínuo para sua tranquilidade e do seu negócio.",
    fullDescription: "Cobertura jurídica completa e recorrente ('Full Service'). Disponibilidade constante para tirar dúvidas, analisar contratos do dia a dia e resolver problemas imediatos, funcionando como um departamento jurídico externo.",
    purpose: "Prevenir problemas antes que eles aconteçam, oferecendo segurança jurídica em tempo real para tomadas de decisão.",
    whenToHire: "Empresas ou pessoas físicas com alto volume de demandas jurídicas que necessitam de acompanhamento próximo e constante.",
    icon: Users
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
