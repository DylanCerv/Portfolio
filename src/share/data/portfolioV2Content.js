/** All content for PortfolioV2 — senior-level, impact-driven, accurate to production experience */

export const V2_NAV = {
  logo: "DE",
  links: [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Experiencia", href: "#experience" },
    { label: "Proyectos", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contact" },
  ],
  cta: { label: "Descargar CV", href: "/file/cvs/Dylan_Espana_Cervantes_Software_Engineer.pdf" },
};

export const V2_HERO = {
  badge: "Backend & Systems Engineer",
  name: "Dylan España Cervantes",
  /** Initials used as avatar placeholder until a photo is provided */
  initials: "DE",
  /** Replace avatarSrc with a real photo URL/path when available */
  avatarSrc: "/img/me.png",
  displayName: "Dylan España Cervantes",
  roleShort: "Backend & Systems Engineer",
  headlineParts: [
    { text: "Diseño sistemas ", gradient: false },
    { text: "escalables,", gradient: "purple-blue" },
    { text: " ", gradient: false },
    { text: "seguros", gradient: "blue-cyan" },
    { text: " y orientados a datos.", gradient: false },
  ],
  subtitle: "Node.js · PostgreSQL · API design · Security architecture · High-volume data",
  description:
    "Backend engineer con 3+ años diseñando y manteniendo sistemas en producción para plataformas B2B, SaaS y fintech. Me especializo en diseño de APIs, arquitectura de datos, seguridad aplicada y optimización de rendimiento en entornos de alto volumen.",
  availability: "Disponible para oportunidades remotas globales",
  location: "Ecuador · Remoto · UTC-5",
  locationDetail: "Abierto a trabajar con equipos en cualquier parte del mundo",
  cvPath: "/file/cvs/Dylan_Espana_Cervantes_Software_Engineer.pdf",
  stats: [
    { value: "3+", label: "Años en producción" },
    { value: "4", label: "Empresas en producción" },
    { value: "4M+", label: "Registros migrados" },
    { value: "🌎", label: "Remoto global" },
  ],
  techBadges: ["Node.js", "TypeScript", "PostgreSQL", "Supabase", "AWS", "JavaScript"],
  socials: [
    { label: "GitHub", href: "https://github.com/DylanCerv" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dylan-espana/" },
    { label: "Email", href: "mailto:dylanecervantes@gmail.com" },
  ],
  ctaPrimary: { label: "Ver proyectos", href: "#projects" },
  ctaSecondary: { label: "Ver arquitectura", href: "#architecture" },
};

export const V2_EXPERIENCE = [
  {
    company: "HireSprint",
    role: "Software Engineer",
    period: "Ene 2025 – Presente",
    context:
      "Plataforma B2B para circulares digitales de supermercados — catálogos con 4M+ registros en la tabla de circulares y múltiples tablas adicionales de productos, en web y mobile (US, New Jersey, Remoto).",
    description:
      "Lideré la migración progresiva de MongoDB a Supabase (PostgreSQL) sobre 4M+ registros distribuidos en múltiples tablas. Construí un sistema de verificación de migración con comparaciones automatizadas entre ambas bases de datos para detectar inconsistencias, datos faltantes y cambios imprevistos durante la transición. Diseñé la arquitectura completa de auth: JWT, Row Level Security y políticas de base de datos para recursos privados. Reduje la latencia de APIs críticas de ~30s a <500ms mediante optimización de consultas e indexación. Colaboré con el equipo frontend en React para visualización eficiente de catálogos de alto volumen.",
    technologies: ["Node.js", "MongoDB", "Supabase", "PostgreSQL", "React", "JWT", "RLS"],
    metrics: [
      { value: "<500ms", label: "Latencia API (desde ~30s)", color: "green" },
      { value: "4M+", label: "Registros migrados", color: "blue" },
      { value: "JWT+RLS", label: "Arquitectura de seguridad", color: "purple" },
    ],
  },
  {
    company: "Sethor",
    role: "Software Engineer & Co-founder",
    period: "Jul 2023 – Abr 2025",
    context:
      "Startup fintech para pagos biométricos (huella y reconocimiento facial) — arquitectura backend diseñada desde cero para transacciones financieras reales en mobile y web (Chile, Remoto).",
    description:
      "Diseñé la arquitectura completa del sistema desde cero, definiendo cómo se estructurarían los servicios, el flujo de autenticación y el procesamiento de pagos. Lideré el análisis técnico de pasarelas de pago: evaluamos integración directa con redes Visa/Mastercard/Amex, pero identificamos que requería certificación PCI DSS Level 1 — auditorías anuales, servidores aislados certificados y cifrado de datos de cardholder a nivel de HSM. La decisión fue integrar Rapyd, un agregador ya certificado PCI DSS, que habilitó los mismos métodos de pago sin que nosotros gestionáramos datos de tarjeta crudos. Implementé auth biométrica con React Native módulos nativos, migrando de Expo a bare workflow. Presenté arquitectura y decisiones técnicas a inversionistas.",
    technologies: ["Node.js", "React Native", "MySQL", "Rapyd", "JWT", "REST APIs"],
    metrics: [
      { value: "0→1", label: "Arquitectura diseñada desde cero", color: "green" },
      { value: "PCI DSS", label: "Compliance resuelto vía Rapyd", color: "blue" },
      { value: "Biométrico", label: "Auth fingerprint + facial", color: "purple" },
    ],
  },
  {
    company: "VauOk",
    role: "Team Lead & Full Stack Engineer",
    period: "Abr – Dic 2023",
    context:
      "Plataforma de marketing digital para funnels de venta y video funnels con pagos, analytics y rastreo de conversiones (Ecuador).",
    description:
      "Coordiné el equipo backend y lideré la implementación de Stripe para procesamiento de pagos seguro. Diseñé el sistema de roles y permisos para control de acceso multi-usuario. Administré infraestructura en AWS para escalabilidad y distribución de contenido. También supervisé el desarrollo frontend, mejorando la experiencia de usuario en interfaces de funnels y analytics.",
    technologies: ["Node.js", "AWS", "Stripe", "React", "MySQL"],
    metrics: [
      { value: "Stripe", label: "Gateway integrado", color: "green" },
      { value: "AWS", label: "Infraestructura gestionada", color: "blue" },
      { value: "RBAC", label: "Sistema de roles diseñado", color: "purple" },
    ],
  },
  {
    company: "Gesprender",
    role: "Full Stack Developer",
    period: "Abr 2022 – Jul 2023",
    context:
      "Plataforma SaaS para PYMEs — gestión de inventarios, finanzas y operaciones internas (Argentina, Remoto).",
    description:
      "Participé en la migración del codebase a Symfony + React, modernizando la arquitectura y mejorando la mantenibilidad. Trabajé en frontend con React al mismo tiempo que en el backend con PHP/Symfony, asegurando integración fluida entre capas. Desarrollé scripts de automatización que redujeron el tiempo de ejecución de tareas en un 70%. Optimicé la base de datos MySQL en operaciones críticas.",
    technologies: ["PHP", "Symfony", "React", "MySQL"],
    metrics: [
      { value: "-70%", label: "Tiempo en tareas automatizadas", color: "green" },
      { value: "Symfony", label: "Migración de codebase", color: "blue" },
      { value: "MySQL", label: "Optimización BD", color: "purple" },
    ],
  },
];

export const V2_PROJECTS = [
  {
    name: "High-Volume B2B Catalog Engine",
    type: "Producción · B2B SaaS",
    description:
      "Motor backend para gestión de circulares digitales de supermercados con 4M+ registros en producción. El sistema maneja consultas de alto volumen, control de acceso por tenant y actualizaciones en tiempo real.",
    architecture:
      "APIs REST en Node.js sobre Supabase (PostgreSQL). RLS a nivel de base de datos para aislamiento estricto por cliente. JWT como capa de autenticación. Sistema de verificación automatizada para garantizar integridad durante la migración MongoDB → PostgreSQL.",
    stack: ["Node.js", "Supabase", "PostgreSQL", "React", "JWT", "RLS"],
    metrics: [
      { value: "4M+", label: "Registros migrados" },
      { value: "<500ms", label: "Latencia API" },
      { value: "0 downtime", label: "Durante migración" },
    ],
    features: [
      "Migración MongoDB → PostgreSQL de 4M+ registros sin downtime",
      "Sistema de verificación: comparación automatizada MongoDB ↔ PostgreSQL",
      "JWT + Row Level Security — doble capa de seguridad",
      "Query optimization e indexación sobre múltiples tablas de alto volumen",
      "Visualización en tiempo real de catálogos desde React",
    ],
    accentColor: "violet",
  },
  {
    name: "Biometric Fintech Payment System",
    type: "Producción · Fintech",
    description:
      "Infraestructura backend completa para pagos autenticados con huella dactilar y reconocimiento facial. Gestiona transacciones financieras reales en producción con pasarela de pago integrada.",
    architecture:
      "Backend en Node.js con separación por dominio de negocio: autenticación, transacciones y seguridad. Integración Rapyd con validación de datos y manejo de errores financieros. MySQL para persistencia. APIs REST consumidas desde React Native con módulos nativos biométricos.",
    stack: ["Node.js", "React Native", "MySQL", "Rapyd", "REST APIs", "JWT"],
    metrics: [
      { value: "0→1", label: "Arquitectura diseñada" },
      { value: "Real $", label: "Transacciones procesadas" },
      { value: "2 factores", label: "Auth biométrica" },
    ],
    features: [
      "Auth biométrica: fingerprint + reconocimiento facial",
      "Pasarela Rapyd con flujos de transacciones reales",
      "Manejo seguro de datos financieros sensibles",
      "APIs REST para consumo desde React Native",
      "Migración Expo → React Native puro (módulos nativos)",
    ],
    accentColor: "blue",
  },
  {
    name: "Multi-Tenant Business Operations SaaS",
    type: "Producción · SaaS",
    description:
      "Plataforma SaaS para gestión empresarial multi-empresa: usuarios, documentos, flujos y reportes. Cada empresa opera en un entorno aislado con control de acceso granular.",
    architecture:
      "Arquitectura modular por dominio en Node.js + TypeScript. PostgreSQL con separación de datos por empresa a nivel de base de datos. RBAC a nivel de aplicación. Dashboard de analytics en React con datos en tiempo real.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "React"],
    metrics: [
      { value: "500+", label: "Empresas activas" },
      { value: "RBAC", label: "Control de acceso" },
      { value: "-35%", label: "Tiempo en procesos" },
    ],
    features: [
      "Aislamiento estricto de datos por empresa",
      "RBAC granular — roles por recurso y acción",
      "Dashboard de analytics en tiempo real",
      "Notificaciones automáticas por evento",
      "Audit logs completos por acción y usuario",
    ],
    accentColor: "emerald",
  },
];

export const V2_ARCHITECTURE = {
  title: "Arquitectura & Decisiones técnicas",
  subtitle: "Decisiones reales de producción — basadas en el diseño del sistema fintech de Sethor: pagos biométricos, compliance PCI DSS y auth distribuida.",
  decisions: [
    "Rapyd sobre integración directa con Visa/MC/Amex — integrar redes de tarjetas directamente requiere PCI DSS Level 1: auditorías anuales presenciales, servidores aislados certificados y cifrado HSM para datos de cardholder. Rapyd es un agregador ya certificado que delega ese compliance a su infraestructura.",
    "Arquitectura modular por dominio desde cero — auth, pagos y lógica de negocio como servicios separados para que cada uno sea auditable, testeable y escalable de forma independiente.",
    "JWT para auth distribuida — tokens stateless que funcionan en mobile (React Native) y web sin sesiones compartidas. El token transporta contexto de usuario sin necesidad de consultar base de datos en cada request.",
    "React Native en bare workflow (sin Expo) — los módulos nativos de biometría (fingerprint + facial recognition) requieren acceso a APIs de plataforma que Expo managed workflow no permite.",
    "MySQL con ACID compliance para transacciones financieras — integridad referencial y rollbacks atómicos son no negociables en operaciones de pago real.",
    "Procesamiento async para transacciones — los pagos se encolan y procesan fuera del request lifecycle, desacoplando la experiencia del usuario de la latencia del gateway externo.",
    "PostgreSQL + RLS para plataformas multi-tenant — en HireSprint, RLS garantiza aislamiento de datos a nivel de base de datos, no solo de código, eliminando el riesgo de data leaks por bugs en la API.",
  ],
  techPrimary: ["Node.js", "TypeScript", "MySQL", "PostgreSQL", "React Native", "Rapyd", "JWT"],
  diagram: [
    {
      layer: "Client",
      nodes: [
        { label: "React Native App", color: "blue" },
        { label: "React Web", color: "blue" },
      ],
    },
    {
      layer: "API Gateway",
      nodes: [{ label: "JWT Validation · Rate Limiting · Routing", color: "violet" }],
    },
    {
      layer: "Services",
      nodes: [
        { label: "Biometric Auth Service", color: "indigo" },
        { label: "Payment Service", color: "indigo" },
        { label: "Business Logic", color: "indigo" },
      ],
    },
    {
      layer: "Async Processing",
      nodes: [{ label: "Event Bus · Transaction Queue", color: "orange" }],
    },
    {
      layer: "External",
      nodes: [
        { label: "Rapyd (PCI DSS L1)", color: "emerald" },
        { label: "Visa · Mastercard · Amex", color: "emerald" },
      ],
    },
    {
      layer: "Data Layer",
      nodes: [
        { label: "MySQL (fintech)", color: "cyan" },
        { label: "PostgreSQL + RLS (B2B)", color: "cyan" },
      ],
    },
  ],
};

export const V2_METRICS = [
  {
    value: "3+",
    label: "Años en producción",
    detail: "Sistemas activos en entornos B2B, SaaS y fintech en LATAM y US",
    accent: "blue",
  },
  {
    value: "4M+",
    label: "Registros migrados",
    detail: "Circulares y tablas de productos migrados de MongoDB a PostgreSQL con sistema de verificación de integridad",
    accent: "violet",
  },
  {
    value: "<500ms",
    label: "Latencia API lograda",
    detail: "Reducida desde ~30s mediante indexación, query optimization y schema redesign en PostgreSQL",
    accent: "emerald",
  },
  {
    value: "4",
    label: "Plataformas productivas",
    detail: "B2B de catálogos, fintech de pagos, SaaS de marketing y gestión empresarial",
    accent: "orange",
  },
  {
    value: "-70%",
    label: "Tiempo en tareas automatizadas",
    detail: "Scripts que eliminaron trabajo manual repetitivo en operaciones internas críticas",
    accent: "cyan",
  },
];

export const V2_ABOUT = {
  title: "Sobre mí",
  description:
    "Backend engineer con foco en diseño de sistemas, no solo implementación. Antes de escribir código, entiendo el problema — la escala, los puntos de fallo, los requisitos de seguridad. He tomado decisiones técnicas en producción real: desde migrar bases de datos hasta definir estrategias de auth. Me muevo bien entre el diseño de arquitectura y la ejecución concreta.",
  focus: [
    "Diseño de sistemas backend escalables",
    "Toma de decisiones técnicas en producción",
    "Optimización de rendimiento con métricas reales",
    "Seguridad por diseño (no como add-on)",
    "Migraciones de datos sin downtime",
    "Colaboración directa con producto y frontend",
  ],
  interests: [
    "Diseño de APIs y contratos de datos",
    "Seguridad en sistemas distribuidos",
    "Optimización de bases de datos relacionales",
    "Arquitecturas event-driven",
    "Sistemas fintech y pasarelas de pago",
    "Infraestructura y DevOps",
  ],
  openTo:
    "Disponible para roles de ingeniería backend en empresas remotas globales. Trabajo con equipos de cualquier zona horaria.",
};

export const V2_STACK = [
  {
    category: "Lenguajes",
    items: [
      "TypeScript — tipado estricto en sistemas críticos",
      "JavaScript — APIs, lógica de negocio, workers",
      "SQL — consultas complejas, optimización, índices",
      "Python — scripting y automatización (básico)",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js — APIs REST, servicios async, business logic",
      "Express — middleware, routing, request lifecycle",
      "PHP · Symfony · Laravel — sistemas y migraciones",
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      "React — componentes, datos en tiempo real",
      "React Native — mobile con módulos nativos",
      "Next.js — SSR y API routes",
      "Angular — apps SPA (experiencia profesional)",
    ],
  },
  {
    category: "Bases de datos",
    items: [
      "PostgreSQL — modelado relacional, RLS, indexación",
      "Supabase — auth, storage, políticas de acceso",
      "MongoDB — documentos, migración a relacional",
      "MySQL — workloads transaccionales",
    ],
  },
  {
    category: "Cloud & Herramientas",
    items: [
      "AWS · Firebase — infraestructura y hosting",
      "Stripe · Rapyd — integraciones de pagos",
      "Git · Postman · Trello — flujo de trabajo",
      "Cursor · Claude Code — desarrollo asistido por IA",
    ],
  },
];

export const V2_BLOG = [
  {
    slug: "mongodb-to-postgresql",
    title: "Migrar de MongoDB a PostgreSQL sin perder el sueño",
    excerpt:
      "Cómo planifiqué y ejecuté la migración de 4M+ registros de MongoDB a Supabase (PostgreSQL): schema design, sistema de verificación de integridad y estrategia de acceso con RLS.",
    date: "15 Mayo, 2024",
    tag: "Base de datos",
    accent: "blue",
    readTime: "7 min lectura",
    content: [
      {
        type: "intro",
        text: "En HireSprint trabajé en una plataforma B2B con más de 4 millones de registros en la tabla principal de circulares, más tablas adicionales de productos que sumaban volúmenes similares. La decisión de migrar de MongoDB a Supabase (PostgreSQL) no fue solo técnica — era necesaria para garantizar seguridad real a nivel de base de datos, integridad referencial y escalabilidad a largo plazo. Esta es la historia de cómo ejecutamos esa migración sin downtime, y por qué el sistema de verificación fue la parte más crítica de todo el proceso.",
      },
      {
        type: "h2",
        text: "Por qué migramos: el límite real de MongoDB para este caso",
      },
      {
        type: "p",
        text: "MongoDB es excelente para documentos flexibles, pero tiene fricciones cuando necesitás integridad referencial, joins complejos o seguridad a nivel de fila. En nuestro caso, el problema más crítico era el control de acceso: necesitábamos garantizar que cada cliente solo pudiera ver sus propios productos, imágenes y datos — y hacerlo a nivel de base de datos, no solo en el código de aplicación.",
      },
      {
        type: "h2",
        text: "Fase 1: Diseño del schema relacional",
      },
      {
        type: "p",
        text: "Antes de mover un solo documento, dediqué tiempo a diseñar el schema en PostgreSQL. El objetivo era normalizar la estructura de los catálogos manteniendo la flexibilidad donde era necesario. Usé columnas JSONB para datos variables de productos y tablas relacionales para entidades con integridad estricta (clientes, usuarios, permisos).",
      },
      {
        type: "code",
        lang: "sql",
        text: `-- Tabla de circulares con RLS habilitado (4M+ registros)
CREATE TABLE circulars (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id   uuid NOT NULL REFERENCES tenants(id),
  name        text NOT NULL,
  metadata    jsonb,
  created_at  timestamptz DEFAULT now()
);

ALTER TABLE circulars ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation ON circulars
  USING (tenant_id = auth.uid());`,
      },
      {
        type: "h2",
        text: "Fase 2: Migración progresiva — sin big bang",
      },
      {
        type: "p",
        text: "Con 4M+ registros en la tabla principal más otras tablas de productos, un big bang era inviable. Migramos en lotes continuos: el script leía documentos de MongoDB en páginas de 5.000 registros, los transformaba al nuevo schema y los insertaba en PostgreSQL via upsert. La app seguía operando con MongoDB mientras la migración corría en background.",
      },
      {
        type: "list",
        items: [
          "Lotes de 5.000 registros con reintentos automáticos por batch fallido",
          "Logs de errores por registro — detectar inconsistencias sin detener el proceso completo",
          "Doble escritura temporal: nuevos registros se guardaban en ambas bases durante la transición",
          "Múltiples tablas migradas en paralelo con control de prioridades",
        ],
      },
      {
        type: "h2",
        text: "Fase 3: El sistema de verificación — la parte más crítica",
      },
      {
        type: "p",
        text: "No todo el mundo iba a migrar al mismo tiempo. Mientras algunos tenants ya estaban en PostgreSQL, otros seguían en MongoDB. El riesgo real no era la migración en sí — era no saber si los datos migrados eran correctos, si faltaba algo, o si algo cambió de manera inesperada después del movimiento.",
      },
      {
        type: "p",
        text: "Construí un sistema de verificación automatizada que comparaba ambas bases de datos en tiempo real. Dado un tenant_id y un rango de fechas, el sistema consultaba MongoDB y PostgreSQL en paralelo y comparaba resultado por resultado.",
      },
      {
        type: "code",
        lang: "javascript",
        text: `// Sistema de verificación MongoDB ↔ PostgreSQL
async function verifyMigration(tenantId, batchIds) {
  const [mongoDocs, pgRows] = await Promise.all([
    mongoCollection.find({ tenant_id: tenantId, _id: { $in: batchIds } }).toArray(),
    supabase.from('circulars').select('*').eq('tenant_id', tenantId).in('source_id', batchIds),
  ]);

  const mongoMap = new Map(mongoDocs.map(d => [String(d._id), d]));
  const pgMap    = new Map(pgRows.data.map(r => [r.source_id, r]));

  const report = { missing: [], mismatch: [], ok: 0 };

  for (const [id, mongoDoc] of mongoMap) {
    const pgRow = pgMap.get(id);
    if (!pgRow) {
      report.missing.push(id);
    } else if (!deepEqual(normalize(mongoDoc), normalize(pgRow))) {
      report.mismatch.push({ id, mongo: mongoDoc, pg: pgRow });
    } else {
      report.ok++;
    }
  }
  return report;
}`,
      },
      {
        type: "list",
        items: [
          "Conteos de registros por tabla: MongoDB vs PostgreSQL deben coincidir exactamente",
          "Comparación campo por campo en registros muestreados aleatoriamente",
          "Detección de registros faltantes (presentes en Mongo, ausentes en PG)",
          "Detección de datos desactualizados (registro existe pero con valores diferentes)",
          "Alerta automática ante cambios imprevistos durante la ventana de transición",
        ],
      },
      {
        type: "h2",
        text: "Fase 4: Row Level Security como capa de seguridad real",
      },
      {
        type: "p",
        text: "RLS fue uno de los principales motivos de la migración. Con las políticas de Supabase, cada query tiene el contexto del usuario autenticado, y PostgreSQL aplica automáticamente los filtros de acceso. Incluso si hay un bug en la API que olvida el WHERE tenant_id = ?, la base de datos lo bloquea de todas formas.",
      },
      {
        type: "h2",
        text: "Resultado",
      },
      {
        type: "p",
        text: "La migración de 4M+ registros se completó sin downtime. El sistema de verificación detectó inconsistencias puntuales antes de que afectaran a los usuarios finales. Los tiempos de respuesta bajaron de ~30s a <500ms con indexación adecuada. La seguridad dejó de depender exclusivamente del código y pasó a estar garantizada también a nivel de base de datos.",
      },
    ],
  },
  {
    slug: "jwt-rls-double-layer-auth",
    title: "JWT + Row Level Security: auth de doble capa",
    excerpt:
      "Por qué no basta con validar el token en el API layer y cómo RLS añade una segunda barrera real contra accesos no autorizados a nivel de base de datos.",
    date: "10 Mayo, 2024",
    tag: "Seguridad",
    accent: "violet",
    readTime: "5 min lectura",
    content: [
      {
        type: "intro",
        text: "En la mayoría de APIs, la seguridad vive en el middleware: se valida el JWT, se verifica el rol, y si pasa, el código accede a la base de datos sin restricciones adicionales. Ese diseño tiene un problema: si hay un bug en la lógica de autorización, los datos quedan expuestos. Este artículo explica cómo implementé una arquitectura de doble capa que combina JWT en el API layer con Row Level Security a nivel de base de datos.",
      },
      {
        type: "h2",
        text: "El problema con depender solo del código",
      },
      {
        type: "p",
        text: "Imaginá un endpoint que devuelve los productos de un cliente. El código verifica el token, extrae el tenant_id, y agrega un WHERE tenant_id = ? a la query. Funciona perfectamente. Pero ¿qué pasa si alguien agrega un nuevo endpoint y olvida ese filtro? ¿O si hay un error de lógica en un refactor? La base de datos no tiene forma de saber que esa query no debería ver esos datos.",
      },
      {
        type: "h2",
        text: "Capa 1: JWT en el API layer",
      },
      {
        type: "p",
        text: "El JWT sigue siendo el primer punto de control. Valida identidad, expiración, firma y permisos antes de que el request llegue a la lógica de negocio. En Supabase, el token de auth se usa también para configurar el contexto de la sesión en PostgreSQL.",
      },
      {
        type: "code",
        lang: "javascript",
        text: `// Middleware de auth — primera barrera
export function requireAuth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });

  const payload = verifyJWT(token); // lanza si inválido
  req.user = payload;
  next();
}`,
      },
      {
        type: "h2",
        text: "Capa 2: Row Level Security en PostgreSQL",
      },
      {
        type: "p",
        text: "RLS permite definir políticas directamente en las tablas. Cada query ejecutada contra esa tabla es filtrada automáticamente por PostgreSQL según el contexto del usuario autenticado. No importa qué escriba el código: si la política dice que solo podés ver tus propios registros, solo ves tus propios registros.",
      },
      {
        type: "code",
        lang: "sql",
        text: `-- La tabla solo devuelve registros del tenant activo
-- sin importar qué WHERE escriba el código
CREATE POLICY tenant_isolation ON documents
  FOR ALL
  USING (tenant_id = (
    SELECT id FROM tenants
    WHERE owner_id = auth.uid()
  ));`,
      },
      {
        type: "h2",
        text: "Por qué importa la defensa en profundidad",
      },
      {
        type: "list",
        items: [
          "Un bug en un nuevo endpoint no expone datos de otros tenants — RLS lo bloquea en la BD",
          "Un ataque de inyección SQL tampoco puede saltarse las políticas de acceso",
          "Las auditorías de seguridad son más fáciles: la lógica de acceso está centralizada en la BD",
          "Menos superficie de error: no hace falta recordar agregar el filtro en cada query",
        ],
      },
      {
        type: "h2",
        text: "Implementación en producción",
      },
      {
        type: "p",
        text: "En HireSprint esta arquitectura protege acceso a imágenes, documentos y datos de catálogos. Implementamos RLS en todas las tablas con datos sensibles, y el JWT lleva el contexto de autenticación que PostgreSQL usa para evaluar las políticas. El resultado es un sistema donde la seguridad no depende de que cada desarrollador recuerde agregar el filtro correcto.",
      },
    ],
  },
  {
    slug: "api-latency-30s-to-500ms",
    title: "Reducir latencia de APIs de 30s a 500ms",
    excerpt:
      "El proceso de diagnóstico, indexación y query optimization que llevó las APIs críticas de una plataforma B2B de ~30s a menos de 500ms en producción.",
    date: "5 Mayo, 2024",
    tag: "Performance",
    accent: "emerald",
    readTime: "7 min lectura",
    content: [
      {
        type: "intro",
        text: "Cuando entré a HireSprint, algunas APIs críticas tardaban entre 20 y 30 segundos en responder. No era un problema menor: el sistema gestionaba catálogos de supermercados con más de 1M de productos, y los tiempos de respuesta hacían la plataforma prácticamente inutilizable en producción. Este es el proceso que seguí para llevarlos a menos de 500ms.",
      },
      {
        type: "h2",
        text: "Paso 1: Diagnóstico antes de tocar nada",
      },
      {
        type: "p",
        text: "Lo primero es entender el problema, no adivinarlo. Usé EXPLAIN ANALYZE en PostgreSQL para ver exactamente qué hacía cada query problemática. La mayoría de los casos graves tenían algo en común: sequential scans sobre tablas con millones de registros, sin ningún índice que ayudara al planner.",
      },
      {
        type: "code",
        lang: "sql",
        text: `-- Ver el plan de ejecución real con tiempos
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT p.*, c.name as category_name
FROM products p
JOIN categories c ON c.id = p.category_id
WHERE p.tenant_id = $1
  AND p.status = 'active'
ORDER BY p.updated_at DESC
LIMIT 50;

-- Resultado típico antes de optimizar:
-- Seq Scan on products (cost=0.00..48920.00 rows=1M)
-- Planning Time: 2.3 ms
-- Execution Time: 28450.2 ms  ← problema aquí`,
      },
      {
        type: "h2",
        text: "Paso 2: Indexación estratégica",
      },
      {
        type: "p",
        text: "El primer ajuste fue crear índices sobre las columnas más usadas en WHERE y ORDER BY. Para tablas de millones de registros, un índice compuesto puede reducir el tiempo de query de segundos a milisegundos.",
      },
      {
        type: "code",
        lang: "sql",
        text: `-- Índice compuesto para el patrón de query más frecuente
CREATE INDEX CONCURRENTLY idx_products_tenant_status_updated
  ON products (tenant_id, status, updated_at DESC);

-- Índice parcial para solo registros activos (mucho más pequeño)
CREATE INDEX CONCURRENTLY idx_products_active
  ON products (tenant_id, updated_at DESC)
  WHERE status = 'active';`,
      },
      {
        type: "h2",
        text: "Paso 3: Reescribir queries problemáticas",
      },
      {
        type: "p",
        text: "Algunos endpoints hacían múltiples queries secuenciales que podían consolidarse en una sola. Otros usaban SELECT * cuando solo necesitaban 3 o 4 columnas — en tablas con columnas JSONB grandes, esto tenía un costo real de I/O.",
      },
      {
        type: "list",
        items: [
          "Reemplazar N+1 queries con JOINs o CTEs según el caso",
          "Seleccionar solo las columnas necesarias en cada endpoint",
          "Usar paginación con keyset (cursor) en lugar de OFFSET para datasets grandes",
          "Mover cálculos pesados a vistas materializadas donde era posible",
        ],
      },
      {
        type: "h2",
        text: "Paso 4: Schema normalization selectiva",
      },
      {
        type: "p",
        text: "Algunos datos que estaban embebidos en documentos JSONB eran consultados frecuentemente con filtros. Los extraje a columnas propias para que los índices funcionaran. No todo necesitaba normalizarse — solo lo que afectaba performance en producción.",
      },
      {
        type: "h2",
        text: "Resultado final",
      },
      {
        type: "p",
        text: "Las APIs que tardaban entre 20 y 30 segundos bajaron a menos de 500ms en la mayoría de los casos, y a menos de 100ms en los endpoints más críticos. El cambio más impactante fue la combinación de índices compuestos + queries específicas en lugar de SELECT *. No se cambió ninguna librería, no se agregó caché en esta fase — solo diagnóstico correcto + SQL bien escrito.",
      },
      {
        type: "list",
        items: [
          "~30s → <500ms en APIs críticas de catálogos",
          "Seq Scan eliminados en todas las queries de alto tráfico",
          "Sin downtime: índices creados con CONCURRENTLY en producción",
          "Base sólida para agregar Redis como caché en la siguiente fase",
        ],
      },
    ],
  },
  {
    slug: "why-rapyd-not-visa-direct",
    title: "Por qué no integramos Visa directamente — y qué aprendimos sobre PCI DSS",
    excerpt:
      "El análisis técnico detrás de la decisión de usar Rapyd en Sethor: por qué integrar Visa/Mastercard/Amex directamente hubiera requerido PCI DSS Level 1, y cómo un agregador de pagos resolvió el compliance sin bloquearnos.",
    date: "3 Junio, 2024",
    tag: "Fintech · Arquitectura",
    accent: "emerald",
    readTime: "6 min lectura",
    content: [
      {
        type: "intro",
        text: "Cuando empezamos a diseñar el sistema de pagos de Sethor, la pregunta obvia fue: ¿por qué no integramos directamente con Visa o Mastercard? La respuesta no es técnica en el sentido usual — es legal, regulatoria y de compliance. Este artículo cuenta el proceso de investigación que hicimos, qué implica realmente ser PCI DSS Level 1, y por qué Rapyd fue la decisión correcta para nuestro contexto.",
      },
      {
        type: "h2",
        text: "El problema con 'integrar directamente las tarjetas'",
      },
      {
        type: "p",
        text: "Aceptar pagos con tarjeta de crédito directamente (sin intermediarios) significa que tu sistema maneja datos de cardholder: número de tarjeta, fecha de expiración, CVV. Desde el momento en que tu servidor toca esos datos, quedás sujeto al estándar PCI DSS — Payment Card Industry Data Security Standard — que es el framework de seguridad obligatorio para cualquier entidad que procese, almacene o transmita datos de tarjeta.",
      },
      {
        type: "h2",
        text: "¿Qué implica PCI DSS Level 1?",
      },
      {
        type: "p",
        text: "PCI DSS tiene cuatro niveles según el volumen de transacciones. El Level 1 (el más estricto) aplica a procesadores de más de 6 millones de transacciones anuales — pero también a cualquier entidad que quiera integrarse directamente a las redes de Visa o Mastercard como procesador autorizado.",
      },
      {
        type: "list",
        items: [
          "Auditoría anual presencial por un QSA (Qualified Security Assessor) certificado",
          "Servidores físicamente aislados y certificados para datos de cardholder (CDE — Cardholder Data Environment)",
          "Cifrado punto a punto con claves gestionadas en HSM (Hardware Security Module)",
          "Segmentación de red obligatoria: los sistemas que tocan datos de tarjeta no pueden compartir infraestructura con el resto",
          "Programa de vulnerability scanning y penetration testing trimestral",
          "Controles de acceso físico a los servidores del CDE",
        ],
      },
      {
        type: "p",
        text: "Para una startup en etapa temprana, esto no solo es costoso — es estructuralmente inviable en los plazos reales de un producto. La certificación puede tomar meses, el costo de auditoría oscila entre $50k y $200k USD anuales, y la infraestructura requerida es sustancialmente más compleja que cualquier arquitectura estándar.",
      },
      {
        type: "h2",
        text: "La investigación: qué analizamos antes de decidir",
      },
      {
        type: "p",
        text: "Antes de elegir Rapyd, mapeamos las opciones disponibles con tres criterios: tiempo para llegar a producción, costo operativo, y cobertura de métodos de pago en LATAM. El análisis incluyó integración directa con redes de tarjetas, procesadores regionales, y plataformas de fintech-as-a-service.",
      },
      {
        type: "list",
        items: [
          "Integración directa (Visa/MC): PCI DSS L1 requerido, meses de certificación, inviable en nuestro timeline",
          "Procesadores locales (LATAM): cobertura limitada a mercados específicos, no escalable globalmente",
          "Stripe: excelente para SaaS, pero sin soporte robusto de métodos locales LATAM que necesitábamos",
          "Rapyd: agregador global, PCI DSS L1 certificado, soporte para tarjetas + métodos locales + transferencias",
        ],
      },
      {
        type: "h2",
        text: "Cómo funciona Rapyd: la diferencia clave",
      },
      {
        type: "p",
        text: "Al integrar Rapyd, los datos de cardholder nunca pasan por nuestros servidores. El usuario ingresa su información directamente en el entorno de Rapyd (que es el CDE certificado), y nosotros recibimos solo un token de la transacción. Rapyd gestiona la conexión con las redes Visa, Mastercard y Amex, el cifrado, los chargebacks y el compliance regulatorio.",
      },
      {
        type: "code",
        lang: "javascript",
        text: `// Flujo simplificado: nosotros solo manejamos tokens, nunca datos de tarjeta
async function initiatePayment(userId, amount, currency) {
  // Rapyd crea el checkout — los datos de tarjeta nunca tocan nuestro servidor
  const checkout = await rapyd.createCheckout({
    amount,
    currency,
    complete_payment_url: process.env.PAYMENT_SUCCESS_URL,
    error_payment_url:    process.env.PAYMENT_ERROR_URL,
    metadata: { userId },
  });

  // Guardamos solo el ID de la transacción, no datos de cardholder
  await db.transactions.create({
    user_id:    userId,
    rapyd_id:   checkout.id,
    status:     'pending',
    amount,
    currency,
  });

  return { checkoutUrl: checkout.redirect_url };
}`,
      },
      {
        type: "h2",
        text: "Lo que aprendimos de este proceso",
      },
      {
        type: "p",
        text: "La decisión de no integrar directamente las redes de tarjetas no fue una limitación — fue una decisión de arquitectura consciente que nos permitió enfocarnos en lo que realmente diferenciaba a Sethor: la autenticación biométrica y la experiencia de pago. El compliance que hubiéramos tardado meses en alcanzar lo delegamos a una infraestructura que ya lo tenía resuelto.",
      },
      {
        type: "list",
        items: [
          "Investigar el marco regulatorio antes de diseñar la arquitectura de pagos es obligatorio",
          "PCI DSS no es solo un requisito técnico — es también un proceso legal y organizacional",
          "Los agregadores de pago existen precisamente para absorber este compliance",
          "La elección correcta de un gateway puede acelerar el time-to-market en meses",
          "La arquitectura de pagos debe pensarse desde el principio, no como un afterthought",
        ],
      },
    ],
  },
];

export const V2_CONTACT = {
  heading: "¿Tienes un proyecto en mente?",
  subheading:
    "Disponible para roles de ingeniería backend full-time en remoto. Trabajo efectivo con equipos en cualquier zona horaria — LATAM, US, Europa y más allá.",
  email: "dylanecervantes@gmail.com",
  location: "Ecuador · Remoto · UTC-5 · Global",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dylan-espana/" },
    { label: "GitHub", href: "https://github.com/DylanCerv" },
    {
      label: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=593997237902&text=Hi%20Dylan%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20chat.",
    },
  ],
};
