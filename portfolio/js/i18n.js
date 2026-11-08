/* =========================================================
   Traductions anglaises du contenu statique (index.html).
   Le texte français est lu directement dans la page :
   pour modifier une phrase, changez-la dans index.html (FR)
   et ici (EN), avec la même clé data-i18n.
   ========================================================= */
const I18N_EN = {
  "nav.about": "About",
  "nav.exp": "Latest experience",
  "nav.projects": "Projects",
  "nav.path": "Background",
  "nav.skills": "Skills",
  "nav.engagement": "Involvement",
  "nav.extra": "Beyond school",
  "nav.contact": "Contact me",

  "hero.eyebrow":
    "Final-year engineering student · 6-month end-of-studies internship from February 2027",
  "hero.title":
    "I build solid applications, and make them <em>work together</em>.",
  "hero.lead":
    "Brayann Adrien Ouandji, final-year engineering student at ESIGELEC (Digital Services Engineering). Back-end Java, web and full-stack development on one side, automation and applied AI on the other, with one goal: becoming an <strong>IT architect</strong>. What drives me:",
  "hero.cta1": "See my latest experience",
  "hero.cta2": "Download my CV (French)",
  "hero.loc": "Rouen, France · open to relocation in France and Europe",
  "hero.badge": "Class of 2027 · final year",

  "about.index": "01 · About",
  "about.title":
    'A developer first, <span class="muted-serif">with a view of the whole system.</span>',
  "about.p1":
    "I enjoy writing clean, maintainable code: REST APIs with Java / Spring Boot or ASP.NET Core, full-stack web applications, well-designed databases. My school and personal projects have taken me across the whole stack, from back-end to user interface.",
  "about.p2":
    "My latest internship at ACEP Groupe added another string to my bow: connecting applications, automating business processes and running AI in production. This combined skill set is what I want to grow, with a medium-term goal: <strong>IT architect / solutions architect</strong>.",
  "about.roles": "Roles I am interested in",
  "int.1t": "Back-end Java development",
  "int.1d":
    "Spring Boot, Hibernate, REST APIs, JUnit testing. Also comfortable with C# / ASP.NET Core.",
  "int.2t": "Web and full-stack development",
  "int.2d":
    "React, Next.js, TypeScript, PHP: from the database all the way to the interface.",
  "int.3t": "Architecture and integration",
  "int.3d":
    "API design, data modelling, interoperability between applications.",
  "int.4t": "Process automation",
  "int.4d": "n8n workflows, ETL, removing repetitive tasks.",
  "int.5t": "Applied AI",
  "int.5d":
    "Integrating LLMs into real processes and evaluating output quality.",
  "int.6t": "Industrialisation and DevOps",
  "int.6d": "Docker, CI/CD, production deployment and operational maintenance.",

  "exp.index": "02 · Latest experience",
  "exp.title":
    "A recruitment pipeline, from application to candidate file, with no manual work.",
  "exp.m1": "Context",
  "exp.m1v": "Automation, AI and DevOps internship",
  "exp.m2": "Company",
  "exp.m3": "Period",
  "exp.m3v": "June to August 2026",
  "exp.m4": "Role",
  "exp.m4v": "Design, development, production deployment",
  "exp.b1t": "Problem",
  "exp.b1":
    "Applications scattered across the careers site, HR mailbox, Indeed and LinkedIn, with fully manual screening.",
  "exp.b2t": "Approach",
  "exp.b2":
    "Build services (FastAPI, Spring Boot), orchestrate them with n8n, then score candidates and generate HR deliverables automatically.",
  "exp.b3t": "Outcome",
  "exp.b3":
    "Around 70% fewer manual tasks, the full application lifecycle covered end to end, tool running in production.",
  "flow.hint": "Click a block to see the details",
  "flow.c1": "Sources",
  "flow.c2": "Orchestration",
  "flow.c3": "Processing",
  "flow.c4": "Data",
  "flow.c5": "Outputs",
  "flow.n1": "Careers site",
  "flow.n2": "HR e-mail (IMAP)",
  "flow.n3": "State machine",
  "flow.n4": "Private storage",
  "flow.n5": ".docx candidate file",
  "flow.n6": "Technical test",
  "flow.n7": "Reminders · archiving",
  "exp.dec": "Technical decisions",
  "exp.decList":
    "<li><strong>A dedicated FastAPI microservice</strong> for PDF/DOCX extraction and file generation, instead of overloading the workflows.</li><li><strong>Extraction inside each channel</strong> rather than in shared sub-workflows, to work around binary data limits in the n8n 2.x task runner.</li><li><strong>File uploads as multipart/form-data</strong> instead of base64, after tracing a double-encoding bug that corrupted PDFs.</li><li><strong>PostgreSQL inserts through a single jsonb parameter</strong> to make database writes reliable.</li><li><strong>Private storage and signed temporary links</strong> to protect candidates' CVs and personal data.</li>",
  "exp.phases": "Phased delivery",
  "exp.phaseList":
    '<li><span>Phase 1</span> Multi-source centralisation of applications in PostgreSQL and file storage.</li><li><span>Phase 2</span> AI scoring out of 100 with a four-tier ranking and output quality checks.</li><li><span>Phase 3</span> Generated technical tests, reminders, archiving, extension to all job types (about 100 roles).</li><li><span>Go-live</span> Docker, Nginx reverse proxy, Let\'s Encrypt HTTPS, key-based SSH, n8n not publicly exposed.</li><li class="is-next"><span>Phase 4</span> Scoped: job postings created from manager e-mails, automated code repository review, interview scheduling.</li>',

  "proj.index": "03 · Projects",
  "proj.title": "What I have built.",
  "proj.f1": "All",
  "proj.f3": "Web and full-stack",
  "proj.f4": "AI and automation",

  "path.index": "04 · Background",
  "path.title": "From preparatory classes in Yaoundé to production in Lyon.",
  "path.sub":
    "General engineering education, a specialisation in digital services, and two technical internships. Graduating in 2027.",
  "tl.1d": "June to August 2026",
  "tl.1t": "Automation, AI and DevOps internship",
  "tl.1l":
    "<li>Developed REST services in Python / FastAPI and Java / Spring Boot integrating the OpenAI and Mistral AI APIs.</li><li>Ingested LinkedIn, Indeed and e-mail data into n8n-orchestrated workflows (ETL logic).</li><li>Containerisation, server deployment, build and run.</li><li>Requirements gathering, specifications, test plans, documentation and user onboarding.</li>",
  "tl.2d": "2024 to 2027 · currently in final year",
  "tl.2t": "Engineering degree · Digital Services Engineering",
  "tl.2l":
    "<li>Java EE software engineering (Spring, Hibernate), REST APIs, MERN stack, C# / ASP.NET Core, PHP.</li><li>AI with Python, Deep Reinforcement Learning (PROMIA), Android development.</li><li>Docker, Kubernetes, CI/CD, JUnit testing, Linux services (web servers, firewall).</li><li>SQL (MySQL, Oracle, PostgreSQL) and NoSQL (MongoDB).</li>",
  "tl.3d": "June to August 2023",
  "tl.3t": "Back-end developer internship",
  "tl.3l":
    "<li>Optimised Java code and SQL queries, integrated relational databases.</li><li>Wrote technical documentation for code maintenance.</li>",
  "tl.4t": "Preparatory classes",
  "tl.4l":
    "<li>Student union president and coach of the women's handball team.</li>",

  "sk.index": "05 · Skills",
  "sk.title": "From code to production.",
  "sk.sub":
    "Development is my foundation; automation and AI build on top of it. Hover over a category to highlight it.",
  "sk.1": "Back-end",
  "sk.1a": "REST APIs",
  "sk.2": "Web and full-stack",
  "sk.3": "Databases",
  "sk.3a": "Data modelling",
  "sk.4": "Architecture and security",
  "sk.4l":
    "<li>API design</li><li>Event-driven architecture</li><li>State machines</li><li>Technical specifications</li><li>Prepared statements</li><li>Password hashing</li><li>Roles and access control</li>",
  "sk.5": "Automation and AI",
  "sk.5l":
    "<li>n8n</li><li>ETL</li><li>Airtable</li><li>Odoo</li><li>OpenAI API</li><li>Mistral AI</li><li>Prompt engineering</li><li>PyTorch · DQN</li><li>ROS2</li>",
  "sk.6": "Industrialisation and methods",
  "sk.lang": "Languages",
  "sk.langList":
    "<li><span>French</span><span>Native</span></li><li><span>English</span><span>B2 · TOEIC 840</span></li><li><span>Japanese</span><span>Beginner</span></li>",
  "sk.q": "Strengths",
  "sk.qText":
    "Rigour, analytical skills, autonomy, adaptability, team spirit and a taste for sharing knowledge (documentation, user support).",

  "eng.index": "06 · Involvement",
  "eng.title": "Bringing people together, organising, passing on.",
  "eng.sub":
    "Teamwork and getting people aligned: I have been practising this for years, outside of code.",
  "eng.int":
    "<span>Chess</span><span>Handball</span><span>Football</span><span>Video creation</span><span>Video Game</span><span>DIY</span><span>Tennis</span>",
  "eng.1d": "Since May 2025",
  "eng.1t": "Student union vice-president",
  "eng.2d": "Since Oct. 2024",
  "eng.2t": "ESIGELEC ambassador",
  "eng.2p": "Representing the school to prospective students",
  "eng.3t": "Student union president",
  "eng.4t": "Women's handball coach",
  "eng.5t": "Volunteer · ELANS",
  "eng.5p":
    "International solidarity association supporting participatory and sustainable development in Cameroon.",

  "ex.index": "07 · Beyond school",
  "ex.title": "Outside of school, I build things and I work too.",
  "ex.sub":
    "A project built for real users, and jobs that fund my studies while teaching me customer focus, pace and teamwork.",
  "ex.proj": "Personal project",
  "ex.video.label": "Creativity · Social media",
  "ex.video.title":
    'Video content creation <span class="video-creation-platforms">· TikTok &amp; Instagram</span>',
  "ex.video.text":
    "From scripting to editing, I create short humorous videos about tech and other topics, as well as film and TV series analysis. I also produced a video in partnership with <strong>Trilio</strong>, an AI tool for writing LinkedIn posts.",
  "ex.jobs": "Student jobs",
  "job.1d": "Since Oct. 2026",
  "job.1t": "Kitchen porter & kitchen assistant",
  "job.1p":
    "Cleaning and putting away tableware, preparing and plating dishes (starters and desserts), and maintaining the workstation in a professional kitchen.",
  "job.2d": "Sept. 2025 to Feb. 2026",
  "job.2t": "Sales assistant",
  "job.2p":
    "Customer advice, shelf management and teamwork during peak periods.",
  "job.3d": "May to July 2023",
  "job.3t": "Waiter",
  "job.3p":
    "Welcoming an international clientele, preparing drinks and cocktails following recipes and hygiene standards, setting up the dining room.",
  "job.4d": "June to August 2022",
  "job.4t": "Cashier and sales assistant",
  "job.4o": "Paule Gaby, perfume house",
  "job.4p":
    "Handling payments, welcoming and advising customers, setting up promotions.",
  "ex.learn": "What these jobs taught me",
  "ex.learnList":
    "<li>Understanding a customer's needs</li><li>Keeping pace under pressure</li><li>Following a process precisely</li><li>Working as a team</li>",

  "ct.index": "08 · Contact",
  "ct.title": "Hiring an engineering intern for 2027? <em>Let's talk.</em>",
  "ct.text":
    "I am looking for a <strong>6-month end-of-studies internship starting February 2027</strong>, in France or elsewhere in Europe. Development matters to me as much as the rest: <strong>back-end Java, web or full-stack</strong>, as well as architecture, integration, automation, applied AI or industrialisation.",
  "ct.cv": "CV in PDF (French)",
  "ct.licence": "Driving licence · based in Rouen",
  "ft.top": "Back to top",
};

const UI = {
  fr: {
    title:
      "Brayann Adrien Ouandji · Élève-ingénieur · Développement, intégration et automatisation",
    details: "Voir le détail",
    detailsAria: "Voir le détail du projet",
    did: "Ce que j'ai réalisé",
    stack: "Stack",
    copied: "Adresse copiée dans le presse-papiers",
  },
  en: {
    title:
      "Brayann Adrien Ouandji · Engineering student · Development, integration and automation",
    details: "See details",
    detailsAria: "See project details",
    did: "What I did",
    stack: "Stack",
    copied: "Address copied to clipboard",
  },
};
