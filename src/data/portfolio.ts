export const personal = {
  name: 'Mohd Faizan Khan',
  initials: 'FK',
  title: 'Lead Software Engineer',
  taglines: [
    'Backend Engineer at Heart',
    'Java & Spring Boot Specialist',
    'API Design Craftsman',
    'Problem Solver First',
    'Building for Scale',
  ],
  location: 'Gurugram, Haryana, India',
  email: 'khanfaizan1196@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faizan~khan',
  github: 'https://github.com/faizan-khan',
  summary:
    '7+ years of engineering experience across pharma tech, telecom, and enterprise IT. I specialize in Java and Spring Boot back-ends with a deep focus on system design, RESTful APIs, and cloud-native architectures. Currently leading engineering efforts at ZS Associates in the life sciences domain.',
};

export const stats = [
  { value: 7, suffix: '+', label: 'Years Experience' },
  { value: 5, suffix: '+', label: 'Products Shipped' },
  { value: 3, suffix: '', label: 'Companies' },
  { value: 50, suffix: '+', label: 'APIs Designed' },
];

export const expertiseAreas = [
  {
    title: 'Backend Engineering',
    description:
      'Designing scalable Java & Spring Boot microservices with clean RESTful APIs, JPA-driven data layers, and event-driven messaging patterns.',
    highlights: ['Java & Spring Boot', 'RESTful APIs', 'JPA / Hibernate', 'Microservices'],
  },
  {
    title: 'System Design & Architecture',
    description:
      'Architecting resilient distributed systems — from data modelling to API contracts, caching strategies, and service decomposition.',
    highlights: ['Event-Driven Design', 'API Gateway Patterns', 'Caching Strategies', 'CQRS'],
  },
  {
    title: 'Database Engineering',
    description:
      'Crafting efficient schemas, complex queries, and performance tuning across relational and NoSQL stores used in production systems.',
    highlights: ['PostgreSQL', 'Oracle SQL', 'Couchbase', 'Query Optimisation'],
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Deploying containerised workloads on cloud infrastructure with CI/CD pipelines, Kubernetes orchestration, and serverless compute.',
    highlights: ['Kubernetes', 'Docker', 'AWS Lambda', 'CI/CD Pipelines'],
  },
  {
    title: 'Scripting & Automation',
    description:
      'Automating workflows, data pipelines, and operational tasks with Python — from ETL scripts to internal tooling.',
    highlights: ['Python', 'Flask', 'Data Pipelines', 'Automation Scripts'],
  },
  {
    title: 'Frontend Integration',
    description:
      'Building Angular SPAs that consume well-designed APIs — type-safe, component-driven, and maintainable at scale.',
    highlights: ['Angular', 'TypeScript', 'RxJS', 'HTML5 / CSS3'],
  },
];

export const impactStories = [
  {
    id: 'low-code-pharma',
    alias: 'Low-Code Studio for Pharma Field Teams',
    category: 'Platform Engineering',
    industry: 'Life Sciences',
    challenge:
      'Pharma field teams across 30+ markets needed custom workflow apps, but every new requirement took months of dev cycles — creating a massive backlog and delaying commercial operations.',
    solution:
      'Co-architected a low-code application studio on a Spring Boot microservices backbone. Introduced a drag-and-drop widget registry backed by a JSON schema engine, enabling business users to compose complex multi-step workflows without writing a line of code.',
    impact: [
      'Reduced new app delivery from months to under 2 weeks',
      'Enabled 30+ markets to self-serve custom workflows',
      'Eliminated ~60% of recurring development backlog',
      'Zero production incidents in first year post-launch',
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Kubernetes', 'Docker', 'Angular'],
    isFeatured: true,
  },
  {
    id: 'field-ai-deployment',
    alias: 'AI-Powered Field Intelligence Deployment',
    category: 'AI Integration',
    industry: 'Life Sciences',
    challenge:
      'Field representatives had no real-time intelligence on which healthcare professionals to prioritise or what message resonated best — decisions were purely intuition-driven, leading to inconsistent outcomes.',
    solution:
      'Built the backend data delivery layer for an AI recommendation engine. Designed high-throughput REST APIs that served ML model outputs to 10,000+ field reps in sub-200ms, with a caching strategy that absorbed 80% of read traffic without hitting the inference layer.',
    impact: [
      'Served real-time AI insights to 10,000+ field reps globally',
      'API p95 latency under 200ms at peak load',
      'Caching layer absorbed 80% read traffic',
      'Directly contributed to measurable rep productivity uplift',
    ],
    techStack: ['Java', 'Spring Boot', 'Couchbase', 'Redis Patterns', 'AWS Lambda', 'Python'],
    isFeatured: true,
  },
  {
    id: 'real-time-billing',
    alias: 'Real-Time Billing Engine for Telecom',
    category: 'Cloud-Native',
    industry: 'Telecom',
    challenge:
      'Legacy batch-based billing system produced end-of-month billing surprises for millions of subscribers and caused significant revenue leakage due to delayed charge application.',
    solution:
      'Contributed to migrating the core billing engine to an event-driven microservices architecture. Designed idempotent charge-processing APIs and a compensating transaction pattern to guarantee exactly-once billing semantics across distributed services.',
    impact: [
      'Eliminated end-of-month billing batch spikes entirely',
      'Real-time charge application within seconds of usage event',
      'Reduced billing disputes by ~40% within 6 months',
      'System handles 2M+ daily billing events reliably',
    ],
    techStack: ['Java', 'Spring Boot', 'Oracle SQL', 'Docker', 'Kubernetes', 'REST APIs'],
    isFeatured: true,
  },
  {
    id: 'hr-talent-platform',
    alias: 'Enterprise Talent Acquisition Platform',
    category: 'Full-Stack',
    industry: 'HR Tech / Enterprise',
    challenge:
      'A large IT organisation\'s hiring process ran entirely on manual workflows and disconnected email chains — causing offer delays, candidate drop-offs, and zero visibility for hiring managers.',
    solution:
      'Built the full-stack backbone of an internal talent acquisition platform — Spring Boot APIs for candidate lifecycle management, JPA-based audit trail, Angular dashboard for hiring managers, and a notification engine for candidate communication.',
    impact: [
      'Reduced average offer-to-join cycle by 35%',
      'Centralised hiring pipeline for 500+ concurrent requisitions',
      'End-to-end audit trail for compliance reporting',
      'Adopted across multiple business units within 3 months',
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'TypeScript', 'Python'],
    isFeatured: false,
  },
  {
    id: 'ecommerce-college',
    alias: 'College E-Commerce Platform',
    category: 'Full-Stack',
    industry: 'E-Commerce',
    challenge:
      'A college campus had no digital storefront — students and vendors operated on paper-based systems for stationery, supplies, and food orders, causing long queues and inventory mismatches.',
    solution:
      'Designed and built a full-stack e-commerce platform from scratch as a personal project — product catalogue, cart management, order lifecycle, and a lightweight admin panel for inventory management.',
    impact: [
      'Eliminated paper-based ordering entirely for the campus',
      'Launched with 5+ vendors onboarded from day one',
      'Personal publication showcasing end-to-end ownership',
      'Foundation for future freelance e-commerce projects',
    ],
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'HTML5', 'CSS3'],
    isFeatured: false,
  },
];

export const techCategories = [
  {
    label: 'Backend',
    techs: [
      { name: 'Java', icon: 'devicon-java-plain', color: '#EA2D2E' },
      { name: 'Spring Boot', icon: 'devicon-spring-plain', color: '#6DB33F' },
      { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
      { name: 'Flask', icon: 'devicon-flask-original', color: '#ffffff' },
      { name: 'REST APIs', icon: 'devicon-fastapi-plain', color: '#009688' },
      { name: 'JPA/Hibernate', icon: 'devicon-hibernate-plain', color: '#BCAE79' },
    ],
  },
  {
    label: 'Frontend',
    techs: [
      { name: 'Angular', icon: 'devicon-angularjs-plain', color: '#DD0031' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
      { name: 'HTML5', icon: 'devicon-html5-plain', color: '#E34F26' },
      { name: 'CSS3', icon: 'devicon-css3-plain', color: '#1572B6' },
    ],
  },
  {
    label: 'Databases',
    techs: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791' },
      { name: 'Oracle SQL', icon: 'devicon-oracle-original', color: '#F80000' },
      { name: 'Couchbase', icon: 'devicon-couchdb-plain', color: '#E42527' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    techs: [
      { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', color: '#326CE5' },
      { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark', color: '#FF9900' },
      { name: 'Git', icon: 'devicon-git-plain', color: '#F05032' },
      { name: 'Linux', icon: 'devicon-linux-plain', color: '#FCC624' },
    ],
  },
];

export const quotes = [
  {
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler',
    role: 'Author, Refactoring',
  },
  {
    text: 'The function of good software is to make the complex appear to be simple.',
    author: 'Grady Booch',
    role: 'Chief Scientist, IBM',
  },
  {
    text: 'A distributed system is one in which the failure of a computer you didn\'t even know existed can render your own computer unusable.',
    author: 'Leslie Lamport',
    role: 'Turing Award Winner',
  },
  {
    text: 'Premature optimisation is the root of all evil.',
    author: 'Donald Knuth',
    role: 'Computer Scientist & Author',
  },
  {
    text: 'The best performance improvement is the transition from the nonworking state to the working state.',
    author: 'John Ousterhout',
    role: 'Creator of Tcl/Tk',
  },
];

export const blogs = [
  {
    id: 'llm-truths',
    category: 'AI & LLMs',
    tag: 'AI Insights',
    readTime: '7 min read',
    date: 'Jun 2025',
    title: '5 Things About LLMs That Most Engineers Get Wrong',
    subtitle: 'Mind-bending truths about how large language models actually work — from why temperature isn\'t "creativity" to why RLHF doesn\'t teach truth.',
    insights: [
      {
        heading: 'Temperature is not creativity — it\'s chaos control',
        body: 'Most engineers think temperature = creativity. It\'s closer to the opposite. Temperature scales the logit distribution before sampling. At temperature 0 you always pick the most probable next token. At temperature 2 you\'re sampling almost uniformly — producing word-salad, not creativity. Real nuanced output lives in the 0.7–1.0 band. Setting temperature to 1.5 in production and calling it "more creative" is just adding noise.',
      },
      {
        heading: 'Chain-of-thought works because it buys more compute per answer',
        body: 'Prompting a model to "think step by step" doesn\'t teach it to reason — it allocates more forward passes to the problem. Every generated token gives the transformer one additional chance to update its internal state. A 300-token chain-of-thought before the final answer is literally 300 more computation steps. The model isn\'t reasoning in the human sense; it\'s running longer.',
      },
      {
        heading: 'RLHF teaches human preference, not ground truth',
        body: 'Reinforcement Learning from Human Feedback optimises for what annotators marked as "good". If annotators prefer confident-sounding answers to uncertain-but-honest ones, the model learns to sound confident — even when wrong. This is the root cause of LLM hallucinations that feel authoritative. The model isn\'t lying; it\'s doing exactly what it was rewarded for.',
      },
      {
        heading: 'Attention is O(n²) — context length is not free',
        body: 'The transformer\'s self-attention mechanism has quadratic complexity in sequence length. Doubling your context window doesn\'t double your memory and compute — it quadruples it. The race to 1M-token contexts is architecturally expensive. Techniques like sliding window attention, sparse attention, and flash attention exist precisely because vanilla attention at long ranges is prohibitively costly.',
      },
      {
        heading: 'Two different sentences can have identical embeddings',
        body: '"The bank by the river" and "financial bank" can produce very similar embedding vectors depending on the model. Embeddings are lossy compressions of semantic meaning into fixed-dimensional space — subtle distinctions collapse into proximity. This is why RAG pipelines need re-ranking layers on top of vector search: nearest neighbours by cosine similarity is a noisy approximation, not a semantic oracle.',
      },
    ],
    takeaway: 'Understanding the mechanics behind LLMs makes you a better consumer and integrator of AI. The magic is real — but it\'s mathematics, not intelligence.',
  },
  {
    id: 'system-design-patterns',
    category: 'System Design',
    tag: 'Architecture',
    readTime: '8 min read',
    date: 'May 2025',
    title: 'System Design Patterns Most Engineers Have Never Heard Of',
    subtitle: 'Beyond load balancers and caches — the lesser-known patterns that separate resilient production systems from ones that silently corrupt data.',
    insights: [
      {
        heading: 'The Transactional Outbox Pattern — guaranteed event delivery',
        body: 'You save an order to the database and then publish an event to Kafka. What happens if the service crashes between those two steps? Either the event is lost (no inventory update) or duplicated (double charge). The Outbox pattern solves this by saving both the order row AND an outbox_events row in a single DB transaction. A separate poller reads the outbox and publishes to the broker — retrying until acknowledged. Atomicity at the DB level guarantees the event eventually reaches the broker.',
      },
      {
        heading: 'The Thundering Herd Problem — cache invalidation at scale',
        body: 'Your cache entry expires at midnight. 50,000 requests simultaneously hit the cache, find nothing, and all stampede to your database. The DB melts. The fix: use probabilistic early expiration — randomly expire cache entries slightly before their actual TTL for a small fraction of requests. Or use a mutex lock so only the first thread refreshes the cache while others wait, returning the stale value briefly. Twitter solved a version of this with pre-computed timeline caches.',
      },
      {
        heading: 'CQRS — reads and writes are not equal, stop pretending they are',
        body: 'Command Query Responsibility Segregation separates the write model (commands) from the read model (queries). In a social feed, writes are rare (you post once), but reads are millions per second (everyone loads their feed). With CQRS, writes update the source-of-truth database while asynchronous projections maintain separate denormalised read stores (often Redis or Elasticsearch). Your read queries become trivially simple lookups instead of complex joins.',
      },
      {
        heading: 'The Two Generals Problem — why perfect distributed consensus is impossible',
        body: 'Two armies need to coordinate an attack via messages through enemy territory. Any messenger could be captured. Neither general can ever be certain the other received the final confirmation. This 1975 thought experiment proves that perfect consensus over an unreliable channel is mathematically impossible. Every distributed system — Kafka, Kubernetes, your microservices — is operating under this constraint. CAP theorem is a consequence, not a starting point.',
      },
      {
        heading: 'Backpressure — the missing feature in most event-driven systems',
        body: 'A fast producer sending events to a slow consumer will eventually overwhelm it. Most engineers add retries and hope. Proper backpressure propagates the "slow down" signal upstream: the consumer signals capacity, the producer throttles. Reactive Streams (used in Project Reactor / Spring WebFlux) formalises this with the concept of demand — a consumer requests exactly N items and the publisher honours that limit. Without this, your buffers fill, memory explodes, and you\'re debugging at 2am.',
      },
    ],
    takeaway: 'These patterns exist because someone shipped a system that failed in a subtle, catastrophic way at 3am. Learn from their pain before you repeat it.',
  },
];
