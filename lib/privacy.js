import { BRAND } from "./brand";

function buildPrivacy({
  title,
  intro,
  who,
  collect,
  use,
  share,
  aws,
  retention,
  security,
  workplace,
  rights,
  children,
  transfers,
  updates,
  contact,
}) {
  return {
    title,
    effectiveDate: "4 October 2026",
    lastUpdated: "4 October 2026",
    intro,
    sections: [
      { id: "who", title: who.title, paragraphs: who.paragraphs },
      {
        id: "collect",
        title: collect.title,
        paragraphs: collect.paragraphs,
        bullets: collect.bullets,
      },
      {
        id: "use",
        title: use.title,
        paragraphs: use.paragraphs,
        bullets: use.bullets,
      },
      {
        id: "share",
        title: share.title,
        paragraphs: share.paragraphs,
        bullets: share.bullets,
      },
      {
        id: "aws",
        title: aws.title,
        paragraphs: aws.paragraphs,
        bullets: aws.bullets,
        paragraphsAfter: aws.paragraphsAfter,
      },
      {
        id: "retention",
        title: retention.title,
        paragraphs: retention.paragraphs,
        bullets: retention.bullets,
        paragraphsAfter: retention.paragraphsAfter,
      },
      {
        id: "security",
        title: security.title,
        paragraphs: security.paragraphs,
        bullets: security.bullets,
        paragraphsAfter: security.paragraphsAfter,
      },
      { id: "workplace", title: workplace.title, paragraphs: workplace.paragraphs },
      { id: "rights", title: rights.title, paragraphs: rights.paragraphs },
      { id: "children", title: children.title, paragraphs: children.paragraphs },
      { id: "transfers", title: transfers.title, paragraphs: transfers.paragraphs },
      { id: "updates", title: updates.title, paragraphs: updates.paragraphs },
      { id: "contact", title: contact.title, paragraphs: contact.paragraphs },
    ],
  };
}

const en = buildPrivacy({
  title: "Privacy Policy",
  intro: `This Privacy Policy explains how ${BRAND.company} (“${BRAND.company}”, “we”, “us”) collects, uses, stores, and protects information when you use ${BRAND.name} — our ML-based employee productivity and time-tracking platform. It covers our marketing site, product dashboard, client applications, and related support channels.`,
  who: {
    title: "1. Who we are",
    paragraphs: [
      `${BRAND.name} is operated by ${BRAND.company} (${BRAND.domain}). For privacy questions, contact ${BRAND.email}.`,
      `When an organization (our “Client”) deploys ${BRAND.name} for its workforce, that Client is typically the data controller for employee productivity data. ${BRAND.company} acts as a data processor / service provider on the Client’s instructions, except for account, billing, and marketing data we control as a business.`,
    ],
  },
  collect: {
    title: "2. Information we collect",
    paragraphs: [
      `Depending on how ${BRAND.name} is used, we may process the following categories of information:`,
    ],
    bullets: [
      "Account & organization data: name, work email, company name, role, billing contacts, plan, and authentication credentials.",
      "Device & client data: device type, OS version, app version, install identifiers, and basic diagnostics needed to keep the client running.",
      "Work activity data: app and browsing activity classes, idle / meeting / break status, time logs, tasks, projects, and client associations.",
      `Screenshots: periodic screen captures configured by the Client, which may be blurred for privacy and IP protection. ${BRAND.name} does not record keystrokes, microphone audio, webcam video, or other invasive inputs.`,
      "Field / location data (when enabled): location and site-visit signals for field teams, only as configured by the Client.",
      "Support & site data: messages you send to support or our AI assistant, and limited website usage data needed to operate and secure the site.",
    ],
  },
  use: {
    title: "3. How we use information",
    paragraphs: ["We use information to:"],
    bullets: [
      "Provide live tracking, Focus Timeline, reports, attendance, billing exports, and related product features.",
      "Classify activity as productive or distraction using ML trained on each Client’s own productive-task patterns over time.",
      "Secure accounts, prevent abuse, troubleshoot issues, and improve reliability.",
      "Communicate about service changes, security notices, and (where permitted) product updates.",
      "Comply with law and enforce our terms.",
    ],
  },
  share: {
    title: "4. How we share information",
    paragraphs: [
      `We do not sell personal information. We share data only as needed to operate ${BRAND.name}:`,
    ],
    bullets: [
      "With the Client organization that owns the workspace (admins, managers, and permitted roles).",
      "With infrastructure providers that process data on our behalf — including Amazon Web Services (AWS) for hosting and object storage — under contractual confidentiality and security obligations.",
      "With professional advisors or authorities when required by law, or to protect rights, safety, and security.",
      "In connection with a merger, acquisition, or asset transfer, with notice where required.",
    ],
  },
  aws: {
    title: "5. Cloud storage & Amazon S3",
    paragraphs: [
      `Where ${BRAND.name} uses cloud storage, object storage such as Amazon S3 may hold encrypted screenshots, exports, and related artifacts. AWS security follows a shared responsibility model: AWS secures the cloud infrastructure; ${BRAND.company} and/or the Client configure security in the cloud (access control, encryption choices, monitoring, and retention).`,
      "In line with AWS S3 practices we rely on:",
    ],
    bullets: [
      "Encryption in transit (HTTPS/TLS) and encryption at rest for stored objects.",
      "Least-privilege access using IAM roles, bucket policies, and blocked public access by default.",
      "Lifecycle rules so objects can automatically expire or transition after retention windows.",
      "Optional stronger retention controls (for example Object Lock / legal hold) for Clients with regulatory WORM or immutability needs.",
      "Enterprise and on-prem options so a Client can keep company data in its own location or private network when contracted.",
    ],
    paragraphsAfter: [
      `AWS does not use customer content to provide services to other customers or for its own purposes without agreement. ${BRAND.company} configures S3 and related services for ${BRAND.name} workloads; Clients remain responsible for lawful workplace monitoring notices and internal access policies.`,
    ],
  },
  retention: {
    title: "6. Data retention policies for Clients",
    paragraphs: [
      "Retention is designed to balance operational value, employee privacy, storage efficiency, and Client policy. Default product retention (aligned with FocusRO-style workplace monitoring practice) is:",
    ],
    bullets: [
      "Screenshots with 0% blur (full clarity): retained for 30 days, then automatically deleted.",
      "Screenshots with blur enabled (typically 20%–100%): retained for up to 90 days, then automatically deleted.",
      "Activity, idle, meeting, break, and time logs: retained for the active subscription term plus up to 90 days after cancellation unless a longer Client retention schedule is agreed in writing.",
      "Reports & exports generated by admins: retained until deleted by the Client or until the workspace retention window ends.",
      "Account, billing, and security logs: retained as needed for contracts, fraud prevention, and legal obligations (typically up to 7 years for financial records where required).",
      "Support tickets & chat transcripts: retained up to 24 months unless a shorter deletion is requested and feasible.",
    ],
    paragraphsAfter: [
      "Clients may request custom retention, earlier deletion, or export before deletion, subject to technical limits and legal holds. On-prem / private deployments may apply Client-controlled retention and lifecycle policies on their own storage. Unblurred screenshots intentionally use a shorter window to reduce privacy and IP exposure.",
    ],
  },
  security: {
    title: "7. Security measures",
    paragraphs: ["We apply technical and organizational measures appropriate to the risk, including:"],
    bullets: [
      "Encryption of data in transit over HTTPS and encryption at rest (including ECC-oriented crypto practices for sensitive payloads where used in the product).",
      "Screenshot blur options to protect intellectual property and reduce exposure of private content on screen.",
      "Role-based access for admins, managers, and employees.",
      `No keystroke logging and no microphone recording as part of standard ${BRAND.name} monitoring.`,
      "Hardening of cloud buckets and monitoring of access paths used by the service.",
    ],
    paragraphsAfter: [
      "No method of transmission or storage is 100% secure. Clients should use strong passwords, limit admin access, enable blur where appropriate, and follow their own security policies.",
    ],
  },
  workplace: {
    title: "8. Workplace monitoring & Client responsibilities",
    paragraphs: [
      `${BRAND.name} is a business productivity tool. Clients are responsible for providing any legally required notices to employees and contractors, obtaining consents where required, configuring blur and capture intervals appropriately, and using ${BRAND.name} in a non-intrusive, lawful manner.`,
      "We encourage Clients to prefer blurred screenshots, limit retention to business need, and avoid collecting sensitive personal data that is not required for productivity or time tracking.",
    ],
  },
  rights: {
    title: "9. Your rights & choices",
    paragraphs: [
      `Depending on your location and role, you may have rights to access, correct, delete, export, or restrict processing of personal data, or to object to certain processing. Employees should usually contact their employer (the Client) first for workplace ${BRAND.name} data. Account holders and site visitors can contact us at the email below.`,
      "You may also unsubscribe from non-essential marketing emails using the link in those messages.",
    ],
  },
  children: {
    title: "10. Children",
    paragraphs: [
      `${BRAND.name} is not directed to children under 16 (or the minimum age required in your jurisdiction). We do not knowingly collect personal information from children for the product.`,
    ],
  },
  transfers: {
    title: "11. International transfers",
    paragraphs: [
      `We may process data in regions where ${BRAND.company}, AWS, or subprocessors operate. Where required, we use appropriate transfer safeguards (such as standard contractual clauses or equivalent mechanisms) and configure regional storage options when offered under a Client agreement.`,
    ],
  },
  updates: {
    title: "12. Updates to this policy",
    paragraphs: [
      `We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Material changes may also be communicated through the product or by email where appropriate. Continued use of ${BRAND.name} after an update means the updated policy applies to that use.`,
    ],
  },
  contact: {
    title: "13. Contact",
    paragraphs: [
      `Questions about this Privacy Policy or ${BRAND.name} privacy practices: ${BRAND.email}.`,
      `Company website: ${BRAND.website}`,
    ],
  },
});

const ru = buildPrivacy({
  title: "Политика конфиденциальности",
  intro: `Эта Политика конфиденциальности объясняет, как ${BRAND.company} («${BRAND.company}», «мы») собирает, использует, хранит и защищает информацию при использовании ${BRAND.name} — нашей платформы продуктивности сотрудников и учёта времени на базе ML. Она распространяется на маркетинговый сайт, панель продукта, клиентские приложения и каналы поддержки.`,
  who: {
    title: "1. Кто мы",
    paragraphs: [
      `${BRAND.name} управляется компанией ${BRAND.company} (${BRAND.domain}). По вопросам конфиденциальности: ${BRAND.email}.`,
      `Когда организация (наш «Клиент») внедряет ${BRAND.name} для сотрудников, Клиент обычно является контролёром данных о продуктивности. ${BRAND.company} действует как обработчик / поставщик услуг по указаниям Клиента, за исключением данных аккаунта, биллинга и маркетинга, которыми мы управляем как бизнес.`,
    ],
  },
  collect: {
    title: "2. Какую информацию мы собираем",
    paragraphs: [`В зависимости от использования ${BRAND.name} мы можем обрабатывать:`],
    bullets: [
      "Данные аккаунта и организации: имя, рабочий email, компания, роль, контакты для биллинга, план и учётные данные.",
      "Данные устройства и клиента: тип устройства, ОС, версия приложения, идентификаторы установки и базовая диагностика.",
      "Рабочая активность: классы приложений и браузинга, статус простоя / встречи / перерыва, логи времени, задачи, проекты и клиенты.",
      `Скриншоты: периодические снимки экрана по настройкам Клиента, с возможным размытием для приватности и защиты ИС. ${BRAND.name} не записывает клавиши, микрофон, веб-камеру и другие инвазивные данные.`,
      "Полевая / геолокация (если включено): сигналы локации и визитов только по настройке Клиента.",
      "Поддержка и сайт: сообщения в поддержку или ИИ-ассистенту и ограниченные данные использования сайта для работы и безопасности.",
    ],
  },
  use: {
    title: "3. Как мы используем информацию",
    paragraphs: ["Мы используем информацию, чтобы:"],
    bullets: [
      "Предоставлять живой трекинг, Focus Timeline, отчёты, посещаемость, экспорт для биллинга и связанные функции.",
      "Классифицировать активность как продуктивную или отвлечение с помощью ML, обучаемой на задачах Клиента.",
      "Защищать аккаунты, предотвращать злоупотребления, устранять сбои и повышать надёжность.",
      "Сообщать об изменениях сервиса, безопасности и (где разрешено) обновлениях продукта.",
      "Соблюдать закон и наши условия.",
    ],
  },
  share: {
    title: "4. Как мы передаём информацию",
    paragraphs: [
      `Мы не продаём персональные данные. Данные передаём только для работы ${BRAND.name}:`,
    ],
    bullets: [
      "Организации-Клиенту, владеющей рабочим пространством (админы, менеджеры и разрешённые роли).",
      "Инфраструктурным провайдерам, включая Amazon Web Services (AWS) для хостинга и объектного хранилища, по договорам конфиденциальности и безопасности.",
      "Консультантам или органам власти, когда этого требует закон, или для защиты прав и безопасности.",
      "В связи со слиянием, поглощением или передачей активов — с уведомлением, где требуется.",
    ],
  },
  aws: {
    title: "5. Облачное хранение и Amazon S3",
    paragraphs: [
      `Там, где ${BRAND.name} использует облако, объектное хранилище вроде Amazon S3 может содержать зашифрованные скриншоты, экспорты и связанные файлы. Безопасность AWS строится на модели общей ответственности: AWS защищает инфраструктуру; ${BRAND.company} и/или Клиент настраивают безопасность в облаке (доступ, шифрование, мониторинг и хранение).`,
      "Мы опираемся на практики AWS S3:",
    ],
    bullets: [
      "Шифрование при передаче (HTTPS/TLS) и при хранении объектов.",
      "Минимально необходимые права через IAM, политики бакетов и блокировку публичного доступа по умолчанию.",
      "Lifecycle-правила для автоматического удаления или перехода объектов после срока хранения.",
      "Опционально Object Lock / legal hold для Клиентов с требованиями WORM или неизменяемости.",
      "Enterprise и on-prem варианты, чтобы Клиент хранил данные у себя или в частной сети по договору.",
    ],
    paragraphsAfter: [
      `AWS не использует контент клиентов для услуг другим клиентам или своих целей без соглашения. ${BRAND.company} настраивает S3 и связанные сервисы для ${BRAND.name}; Клиенты отвечают за законные уведомления о мониторинге и внутренние политики доступа.`,
    ],
  },
  retention: {
    title: "6. Политики хранения данных для Клиентов",
    paragraphs: [
      "Сроки хранения балансируют пользу, приватность сотрудников, эффективность хранения и политику Клиента. По умолчанию (в духе практик мониторинга вроде FocusRO):",
    ],
    bullets: [
      "Скриншоты без размытия (0%): хранятся 30 дней, затем удаляются автоматически.",
      "Скриншоты с размытием (обычно 20%–100%): до 90 дней, затем удаляются автоматически.",
      "Логи активности, простоя, встреч, перерывов и времени: на срок подписки плюс до 90 дней после отмены, если письменно не согласован более длинный срок.",
      "Отчёты и экспорты админов: до удаления Клиентом или окончания окна хранения workspace.",
      "Аккаунт, биллинг и логи безопасности: столько, сколько нужно для договоров, antifraud и закона (финансовые записи — обычно до 7 лет, где требуется).",
      "Тикеты поддержки и чаты: до 24 месяцев, если не запрошено более короткое удаление.",
    ],
    paragraphsAfter: [
      "Клиенты могут запросить иное хранение, раннее удаление или экспорт до удаления — с учётом технических ограничений и legal hold. On-prem / private deployments могут применять свои lifecycle-политики. Неразмытые скриншоты намеренно хранятся меньше, чтобы снизить риски приватности и ИС.",
    ],
  },
  security: {
    title: "7. Меры безопасности",
    paragraphs: ["Мы применяем технические и организационные меры, соразмерные риску, включая:"],
    bullets: [
      "Шифрование при передаче по HTTPS и при хранении (включая ECC-подходы для чувствительных данных, где используется в продукте).",
      "Размытие скриншотов для защиты ИС и снижения видимости частного контента.",
      "Ролевой доступ для админов, менеджеров и сотрудников.",
      `Без записи клавиш и микрофона в стандартном мониторинге ${BRAND.name}.`,
      "Укрепление облачных бакетов и контроль путей доступа сервиса.",
    ],
    paragraphsAfter: [
      "Ни один способ передачи или хранения не даёт 100% гарантии. Клиентам следует использовать сильные пароли, ограничивать админ-доступ, включать размытие где уместно и следовать своим политикам безопасности.",
    ],
  },
  workplace: {
    title: "8. Мониторинг на работе и обязанности Клиента",
    paragraphs: [
      `${BRAND.name} — бизнес-инструмент продуктивности. Клиенты обязаны давать сотрудникам и подрядчикам требуемые по закону уведомления, получать согласия где нужно, корректно настраивать размытие и интервалы съёмки и использовать ${BRAND.name} законно и ненавязчиво.`,
      "Мы рекомендуем предпочитать размытые скриншоты, ограничивать хранение деловой необходимостью и не собирать лишние чувствительные данные.",
    ],
  },
  rights: {
    title: "9. Ваши права и выбор",
    paragraphs: [
      `В зависимости от региона и роли у вас могут быть права на доступ, исправление, удаление, экспорт или ограничение обработки, а также возражение против определённой обработки. Сотрудникам обычно следует сначала обращаться к работодателю (Клиенту) по данным ${BRAND.name} на рабочем месте. Владельцы аккаунтов и посетители сайта могут писать нам на email ниже.`,
      "От несущественных маркетинговых писем можно отписаться по ссылке в письме.",
    ],
  },
  children: {
    title: "10. Дети",
    paragraphs: [
      `${BRAND.name} не предназначен для детей младше 16 лет (или минимального возраста в вашей юрисдикции). Мы сознательно не собираем персональные данные детей для продукта.`,
    ],
  },
  transfers: {
    title: "11. Международные передачи",
    paragraphs: [
      `Мы можем обрабатывать данные в регионах, где работают ${BRAND.company}, AWS или субпроцессоры. Где требуется, применяем надлежащие гарантии передачи (например SCC или эквивалент) и региональное хранение по договору с Клиентом.`,
    ],
  },
  updates: {
    title: "12. Обновления политики",
    paragraphs: [
      `Мы можем обновлять эту Политику. Дата «Последнее обновление» сверху изменится. Существенные изменения можем сообщить в продукте или по email. Продолжение использования ${BRAND.name} после обновления означает применение новой редакции.`,
    ],
  },
  contact: {
    title: "13. Контакты",
    paragraphs: [
      `Вопросы по этой Политике или практикам ${BRAND.name}: ${BRAND.email}.`,
      `Сайт компании: ${BRAND.website}`,
    ],
  },
});

const el = buildPrivacy({
  title: "Πολιτική Απορρήτου",
  intro: `Η παρούσα Πολιτική Απορρήτου εξηγεί πώς η ${BRAND.company} («${BRAND.company}», «εμείς») συλλέγει, χρησιμοποιεί, αποθηκεύει και προστατεύει πληροφορίες όταν χρησιμοποιείτε το ${BRAND.name} — την πλατφόρμα παραγωγικότητας εργαζομένων και παρακολούθησης χρόνου με ML. Καλύπτει τον ιστότοπο, τον πίνακα ελέγχου, τις εφαρμογές πελάτη και τα κανάλια υποστήριξης.`,
  who: {
    title: "1. Ποιοι είμαστε",
    paragraphs: [
      `Το ${BRAND.name} λειτουργεί από την ${BRAND.company} (${BRAND.domain}). Για θέματα απορρήτου: ${BRAND.email}.`,
      `Όταν ένας οργανισμός («Πελάτης») αναπτύσσει το ${BRAND.name} για το προσωπικό του, ο Πελάτης είναι συνήθως ο υπεύθυνος επεξεργασίας. Η ${BRAND.company} ενεργεί ως εκτελών την επεξεργασία / πάροχος υπηρεσιών, εκτός από δεδομένα λογαριασμού, χρέωσης και marketing που ελέγχουμε ως επιχείρηση.`,
    ],
  },
  collect: {
    title: "2. Πληροφορίες που συλλέγουμε",
    paragraphs: [`Ανάλογα με τη χρήση του ${BRAND.name}, ενδέχεται να επεξεργαστούμε:`],
    bullets: [
      "Δεδομένα λογαριασμού & οργανισμού: όνομα, εταιρικό email, εταιρεία, ρόλος, επαφές χρέωσης, πλάνο και διαπιστευτήρια.",
      "Δεδομένα συσκευής & πελάτη: τύπος συσκευής, OS, έκδοση εφαρμογής, αναγνωριστικά εγκατάστασης και βασικά διαγνωστικά.",
      "Δεδομένα εργασιακής δραστηριότητας: εφαρμογές/περιήγηση, αδράνεια / συνάντηση / διάλειμμα, χρόνοι, εργασίες, έργα και πελάτες.",
      `Στιγμιότυπα οθόνης: περιοδικές λήψεις που ρυθμίζει ο Πελάτης, με δυνατότητα θόλωσης. Το ${BRAND.name} δεν καταγράφει πληκτρολογήσεις, μικρόφωνο, κάμερα ή άλλα παρεμβατικά δεδομένα.`,
      "Τοποθεσία πεδίου (αν ενεργοποιηθεί): σήματα τοποθεσίας/επισκέψεων μόνο σύμφωνα με τον Πελάτη.",
      "Υποστήριξη & ιστότοπος: μηνύματα σε υποστήριξη/AI και περιορισμένα δεδομένα χρήσης για λειτουργία και ασφάλεια.",
    ],
  },
  use: {
    title: "3. Πώς χρησιμοποιούμε τις πληροφορίες",
    paragraphs: ["Χρησιμοποιούμε τις πληροφορίες για να:"],
    bullets: [
      "Παρέχουμε live παρακολούθηση, Focus Timeline, αναφορές, παρουσία, εξαγωγές χρέωσης και σχετικά χαρακτηριστικά.",
      "Ταξινομούμε δραστηριότητα ως παραγωγική ή απόσπαση με ML που μαθαίνει από τα παραγωγικά καθήκοντα κάθε Πελάτη.",
      "Προστατεύουμε λογαριασμούς, αποτρέπουμε κατάχρηση, επιλύουμε προβλήματα και βελτιώνουμε την αξιοπιστία.",
      "Ενημερώνουμε για αλλαγές υπηρεσίας, ασφάλεια και (όπου επιτρέπεται) ενημερώσεις προϊόντος.",
      "Τηρούμε τον νόμο και τους όρους μας.",
    ],
  },
  share: {
    title: "4. Πώς κοινοποιούμε πληροφορίες",
    paragraphs: [
      `Δεν πουλάμε προσωπικά δεδομένα. Τα κοινοποιούμε μόνο όσο χρειάζεται για το ${BRAND.name}:`,
    ],
    bullets: [
      "Με τον οργανισμό-Πελάτη που κατέχει τον χώρο εργασίας.",
      "Με παρόχους υποδομής, συμπεριλαμβανομένου του Amazon Web Services (AWS), υπό συμβατικές υποχρεώσεις εμπιστευτικότητας και ασφάλειας.",
      "Με συμβούλους ή αρχές όταν απαιτείται από τον νόμο ή για προστασία δικαιωμάτων και ασφάλειας.",
      "Σε συγχώνευση, εξαγορά ή μεταβίβαση περιουσιακών στοιχείων, με ειδοποίηση όπου απαιτείται.",
    ],
  },
  aws: {
    title: "5. Αποθήκευση στο cloud & Amazon S3",
    paragraphs: [
      `Όπου το ${BRAND.name} χρησιμοποιεί cloud, αποθήκευση αντικειμένων όπως το Amazon S3 μπορεί να κρατά κρυπτογραφημένα στιγμιότυπα και εξαγωγές. Η ασφάλεια AWS ακολουθεί μοντέλο κοινής ευθύνης: η AWS ασφαλίζει την υποδομή· η ${BRAND.company} και/ή ο Πελάτης ρυθμίζουν την ασφάλεια στο cloud.`,
      "Βασιζόμαστε σε πρακτικές AWS S3:",
    ],
    bullets: [
      "Κρυπτογράφηση κατά τη μετάδοση (HTTPS/TLS) και σε ηρεμία.",
      "Ελάχιστα προνόμια με IAM, πολιτικές bucket και αποκλεισμό δημόσιας πρόσβασης από προεπιλογή.",
      "Κανόνες lifecycle για αυτόματη λήξη ή μετάβαση μετά τα παράθυρα διατήρησης.",
      "Προαιρετικά Object Lock / legal hold για κανονιστικές ανάγκες WORM.",
      "Επιλογές enterprise/on-prem ώστε ο Πελάτης να κρατά δεδομένα στον χώρο του.",
    ],
    paragraphsAfter: [
      `Η AWS δεν χρησιμοποιεί περιεχόμενο πελατών για άλλους πελάτες ή δικούς της σκοπούς χωρίς συμφωνία. Η ${BRAND.company} ρυθμίζει το S3 για φορτία ${BRAND.name}· οι Πελάτες ευθύνονται για νόμιμες ειδοποιήσεις παρακολούθησης και εσωτερικές πολιτικές πρόσβασης.`,
    ],
  },
  retention: {
    title: "6. Πολιτικές διατήρησης δεδομένων για Πελάτες",
    paragraphs: [
      "Η διατήρηση ισορροπεί λειτουργική αξία, απόρρητο εργαζομένων, αποθήκευση και πολιτική Πελάτη. Προεπιλογή (σε γραμμή με πρακτικές τύπου FocusRO):",
    ],
    bullets: [
      "Στιγμιότυπα με 0% θόλωση: διατήρηση 30 ημερών, μετά αυτόματη διαγραφή.",
      "Στιγμιότυπα με θόλωση (συνήθως 20%–100%): έως 90 ημέρες, μετά αυτόματη διαγραφή.",
      "Αρχεία δραστηριότητας/αδράνειας/συναντήσεων/διαλειμμάτων/χρόνου: για τη διάρκεια συνδρομής συν έως 90 ημέρες μετά την ακύρωση, εκτός γραπτής συμφωνίας.",
      "Αναφορές & εξαγωγές: έως διαγραφή από τον Πελάτη ή λήξη παραθύρου διατήρησης.",
      "Λογαριασμός, χρέωση και αρχεία ασφαλείας: όσο απαιτείται για συμβάσεις και νόμο (οικονομικά αρχεία έως 7 έτη όπου απαιτείται).",
      "Tickets υποστήριξης & συνομιλίες: έως 24 μήνες, εκτός αιτήματος συντομότερης διαγραφής.",
    ],
    paragraphsAfter: [
      "Οι Πελάτες μπορούν να ζητήσουν προσαρμοσμένη διατήρηση, νωρίτερη διαγραφή ή εξαγωγή πριν τη διαγραφή. Οι ιδιωτικές αναπτύξεις μπορούν να εφαρμόζουν δικές τους πολιτικές. Τα μη θολωμένα στιγμιότυπα έχουν σκόπιμα μικρότερο παράθυρο.",
    ],
  },
  security: {
    title: "7. Μέτρα ασφαλείας",
    paragraphs: ["Εφαρμόζουμε τεχνικά και οργανωτικά μέτρα ανάλογα με τον κίνδυνο, όπως:"],
    bullets: [
      "Κρυπτογράφηση σε μετάδοση HTTPS και σε ηρεμία (συμπεριλαμβανομένων πρακτικών ECC όπου εφαρμόζεται).",
      "Επιλογές θόλωσης στιγμιοτύπων για προστασία IP και ιδιωτικότητας.",
      "Πρόσβαση βάσει ρόλων για διαχειριστές, managers και εργαζομένους.",
      `Χωρίς καταγραφή πληκτρολογήσεων ή μικροφώνου στο τυπικό monitoring του ${BRAND.name}.`,
      "Σκλήρυνση buckets και παρακολούθηση διαδρομών πρόσβασης.",
    ],
    paragraphsAfter: [
      "Καμία μέθοδος δεν είναι 100% ασφαλής. Οι Πελάτες πρέπει να χρησιμοποιούν ισχυρούς κωδικούς, να περιορίζουν πρόσβαση διαχειριστών και να ενεργοποιούν θόλωση όπου χρειάζεται.",
    ],
  },
  workplace: {
    title: "8. Παρακολούθηση χώρου εργασίας & ευθύνες Πελάτη",
    paragraphs: [
      `Το ${BRAND.name} είναι επιχειρηματικό εργαλείο. Οι Πελάτες ευθύνονται για νομικές ειδοποιήσεις, συναινέσεις όπου απαιτούνται, σωστή ρύθμιση θόλωσης/διαστημάτων και νόμιμη, μη παρεμβατική χρήση.`,
      "Ενθαρρύνουμε θολωμένα στιγμιότυπα, περιορισμένη διατήρηση και αποφυγή ευαίσθητων δεδομένων που δεν χρειάζονται.",
    ],
  },
  rights: {
    title: "9. Δικαιώματα & επιλογές",
    paragraphs: [
      `Ανάλογα με την τοποθεσία και τον ρόλο, μπορείτε να έχετε δικαιώματα πρόσβασης, διόρθωσης, διαγραφής, εξαγωγής ή περιορισμού επεξεργασίας. Οι εργαζόμενοι πρέπει συνήθως να απευθύνονται πρώτα στον εργοδότη (Πελάτη) για δεδομένα ${BRAND.name}. Κάτοχοι λογαριασμού και επισκέπτες μπορούν να επικοινωνούν μαζί μας.`,
      "Μπορείτε να διαγραφείτε από μη ουσιώδη marketing emails μέσω του συνδέσμου στο μήνυμα.",
    ],
  },
  children: {
    title: "10. Παιδιά",
    paragraphs: [
      `Το ${BRAND.name} δεν απευθύνεται σε παιδιά κάτω των 16 (ή της ελάχιστης ηλικίας της δικαιοδοσίας σας). Δεν συλλέγουμε εν γνώσει μας δεδομένα παιδιών για το προϊόν.`,
    ],
  },
  transfers: {
    title: "11. Διεθνείς μεταφορές",
    paragraphs: [
      `Ενδέχεται να επεξεργαζόμαστε δεδομένα σε περιοχές όπου λειτουργούν ${BRAND.company}, AWS ή υποεπεξεργαστές, με κατάλληλες εγγυήσεις μεταφοράς όπου απαιτείται.`,
    ],
  },
  updates: {
    title: "12. Ενημερώσεις πολιτικής",
    paragraphs: [
      `Ενδέχεται να ενημερώνουμε αυτή την Πολιτική. Η ημερομηνία «Τελευταία ενημέρωση» θα αλλάζει. Συνέχιση χρήσης του ${BRAND.name} μετά από ενημέρωση σημαίνει αποδοχή της νέας έκδοσης.`,
    ],
  },
  contact: {
    title: "13. Επικοινωνία",
    paragraphs: [
      `Ερωτήσεις για αυτή την Πολιτική ή πρακτικές ${BRAND.name}: ${BRAND.email}.`,
      `Ιστότοπος εταιρείας: ${BRAND.website}`,
    ],
  },
});

const tr = buildPrivacy({
  title: "Gizlilik Politikası",
  intro: `Bu Gizlilik Politikası, ${BRAND.name} — ML tabanlı çalışan verimliliği ve zaman takibi platformumuz — kullanılırken ${BRAND.company}’in («${BRAND.company}», «biz») bilgileri nasıl topladığını, kullandığını, sakladığını ve koruduğunu açıklar. Pazarlama sitesi, ürün paneli, istemci uygulamaları ve destek kanallarını kapsar.`,
  who: {
    title: "1. Biz kimiz",
    paragraphs: [
      `${BRAND.name}, ${BRAND.company} (${BRAND.domain}) tarafından işletilir. Gizlilik için: ${BRAND.email}.`,
      `Bir kuruluş («Müşteri») ${BRAND.name}’i iş gücüne kurduğunda, çalışan verimliliği verileri için genellikle veri sorumlusu Müşteri’dir. ${BRAND.company}, hesap/faturalama/pazarlama verileri dışında Müşteri talimatlarıyla işleyen / hizmet sağlayıcıdır.`,
    ],
  },
  collect: {
    title: "2. Topladığımız bilgiler",
    paragraphs: [`${BRAND.name} kullanımına göre şu kategorileri işleyebiliriz:`],
    bullets: [
      "Hesap ve kuruluş verileri: ad, iş e-postası, şirket, rol, fatura kişileri, plan ve kimlik bilgileri.",
      "Cihaz ve istemci verileri: cihaz türü, OS, uygulama sürümü, kurulum kimlikleri ve temel tanılama.",
      "İş aktivitesi: uygulama/tarama sınıfları, boşta / toplantı / mola durumu, zaman kayıtları, görevler, projeler ve müşteriler.",
      `Ekran görüntüleri: Müşteri’nin yapılandırdığı periyodik yakalamalar; gizlilik ve fikri mülkiyet için bulanıklaştırılabilir. ${BRAND.name} tuş vuruşu, mikrofon, kamera veya diğer müdahaleci girdileri kaydetmez.`,
      "Saha / konum (etkinse): yalnızca Müşteri yapılandırmasına göre konum ve saha ziyareti sinyalleri.",
      "Destek ve site: destek/AI mesajları ve sitenin güvenli çalışması için sınırlı kullanım verileri.",
    ],
  },
  use: {
    title: "3. Bilgileri nasıl kullanırız",
    paragraphs: ["Bilgileri şunlar için kullanırız:"],
    bullets: [
      "Canlı takip, Focus Timeline, raporlar, devam, faturalama dışa aktarımları ve ilgili özellikler.",
      "Her Müşteri’nin üretken görev kalıplarına göre eğitilen ML ile üretken / dikkat dağıtıcı sınıflandırma.",
      "Hesap güvenliği, kötüye kullanım önleme, sorun giderme ve güvenilirlik.",
      "Hizmet değişiklikleri, güvenlik bildirimleri ve (izin verildiğinde) ürün güncellemeleri.",
      "Yasal uyum ve koşulların uygulanması.",
    ],
  },
  share: {
    title: "4. Bilgileri nasıl paylaşırız",
    paragraphs: [
      `Kişisel bilgileri satmayız. Verileri yalnızca ${BRAND.name}’i işletmek için paylaşırız:`,
    ],
    bullets: [
      "Çalışma alanına sahip Müşteri kuruluşuyla (yöneticiler, yöneticiler ve izinli roller).",
      "Barındırma ve nesne depolama için Amazon Web Services (AWS) dahil altyapı sağlayıcılarıyla — gizlilik ve güvenlik yükümlülükleri altında.",
      "Yasaların gerektirdiği veya hak/güvenlik koruması için danışmanlar veya yetkililerle.",
      "Birleşme, satın alma veya varlık transferinde, gerektiğinde bildirimle.",
    ],
  },
  aws: {
    title: "5. Bulut depolama ve Amazon S3",
    paragraphs: [
      `${BRAND.name} bulut depolama kullandığında Amazon S3 gibi nesne depolama; şifreli ekran görüntüleri ve dışa aktarımları tutabilir. AWS güvenliği paylaşılan sorumluluk modeline uyar: AWS altyapıyı korur; ${BRAND.company} ve/veya Müşteri buluttaki güvenliği yapılandırır.`,
      "Dayandığımız AWS S3 uygulamaları:",
    ],
    bullets: [
      "Aktarımda (HTTPS/TLS) ve durağan halde şifreleme.",
      "IAM, bucket politikaları ve varsayılan olarak engellenmiş genel erişimle en az yetki.",
      "Saklama pencerelerinden sonra otomatik sona erme / geçiş için lifecycle kuralları.",
      "WORM / değiştirilemezlik ihtiyacı olan Müşteriler için isteğe bağlı Object Lock / legal hold.",
      "Sözleşmeyle veriyi kendi konumunda tutmak için enterprise ve on-prem seçenekleri.",
    ],
    paragraphsAfter: [
      `AWS, müşteri içeriğini anlaşma olmadan başka müşterilere hizmet veya kendi amaçları için kullanmaz. ${BRAND.company} ${BRAND.name} iş yükleri için S3’ü yapılandırır; Müşteriler yasal izleme bildirimleri ve iç erişim politikalarından sorumludur.`,
    ],
  },
  retention: {
    title: "6. Müşteriler için veri saklama politikaları",
    paragraphs: [
      "Saklama; operasyonel değer, çalışan gizliliği, depolama verimliliği ve Müşteri politikasını dengeler. Varsayılan (FocusRO tarzı izleme uygulamasına uyumlu):",
    ],
    bullets: [
      "%0 bulanıklık (tam netlik) ekran görüntüleri: 30 gün saklanır, sonra otomatik silinir.",
      "Bulanıklık açık ekran görüntüleri (genelde %20–%100): 90 güne kadar, sonra otomatik silinir.",
      "Aktivite, boşta, toplantı, mola ve zaman kayıtları: abonelik süresi + iptalden sonra 90 güne kadar (yazılı daha uzun süre yoksa).",
      "Yönetici raporları ve dışa aktarımlar: Müşteri silene veya workspace saklama penceresi bitene kadar.",
      "Hesap, faturalama ve güvenlik kayıtları: sözleşme, dolandırıcılık önleme ve yasal yükümlülükler için gerektiği kadar (mali kayıtlar genelde 7 yıla kadar).",
      "Destek talepleri ve sohbetler: 24 aya kadar; daha kısa silme istenebilir.",
    ],
    paragraphsAfter: [
      "Müşteriler özel saklama, erken silme veya silmeden önce dışa aktarma talep edebilir. On-prem / özel kurulumlar kendi lifecycle politikalarını uygulayabilir. Bulanıklaştırılmamış görüntüler bilerek daha kısa tutulur.",
    ],
  },
  security: {
    title: "7. Güvenlik önlemleri",
    paragraphs: ["Riske uygun teknik ve organizasyonel önlemler uygularız:"],
    bullets: [
      "HTTPS ile aktarımda ve durağan halde şifreleme (üründe kullanıldığında ECC odaklı uygulamalar dahil).",
      "Fikri mülkiyet ve özel içeriği korumak için ekran görüntüsü bulanıklığı.",
      "Yöneticiler, yöneticiler ve çalışanlar için rol tabanlı erişim.",
      `Standart ${BRAND.name} izlemede tuş kaydı ve mikrofon kaydı yok.`,
      "Bulut bucket’larının sertleştirilmesi ve erişim yollarının izlenmesi.",
    ],
    paragraphsAfter: [
      "Hiçbir yöntem %100 güvenli değildir. Müşteriler güçlü parolalar kullanmalı, yönetici erişimini sınırlamalı ve uygun yerde bulanıklığı açmalıdır.",
    ],
  },
  workplace: {
    title: "8. İşyeri izleme ve Müşteri sorumlulukları",
    paragraphs: [
      `${BRAND.name} bir iş verimliliği aracıdır. Müşteriler yasal bildirimleri sağlamak, gerektiğinde rıza almak, bulanıklık ve yakalama aralıklarını doğru yapılandırmak ve ${BRAND.name}’i yasal, müdahalesiz kullanmaktan sorumludur.`,
      "Bulanık ekran görüntülerini tercih etmeyi, saklamayı iş ihtiyacıyla sınırlamayı ve gereksiz hassas veri toplamamayı öneririz.",
    ],
  },
  rights: {
    title: "9. Haklarınız ve seçenekleriniz",
    paragraphs: [
      `Konumunuza ve rolünüze bağlı olarak erişim, düzeltme, silme, dışa aktarma veya işlemeyi kısıtlama haklarınız olabilir. Çalışanlar işyeri ${BRAND.name} verileri için önce işverenlerine (Müşteri) başvurmalıdır. Hesap sahipleri ve ziyaretçiler bize yazabilir.`,
      "Zorunlu olmayan pazarlama e-postalarından mesajdaki bağlantıyla çıkabilirsiniz.",
    ],
  },
  children: {
    title: "10. Çocuklar",
    paragraphs: [
      `${BRAND.name} 16 yaş altı çocuklara (veya yargı alanınızdaki asgari yaşa) yönelik değildir. Ürün için bilerek çocuklardan kişisel bilgi toplamayız.`,
    ],
  },
  transfers: {
    title: "11. Uluslararası aktarımlar",
    paragraphs: [
      `${BRAND.company}, AWS veya alt işleyenlerin bulunduğu bölgelerde veri işleyebiliriz; gerektiğinde uygun aktarım güvenceleri kullanırız.`,
    ],
  },
  updates: {
    title: "12. Politika güncellemeleri",
    paragraphs: [
      `Bu Politikayı zaman zaman güncelleyebiliriz. Üstteki «Son güncelleme» tarihi değişir. ${BRAND.name}’i güncellemeden sonra kullanmaya devam etmek yeni politikanın uygulanması anlamına gelir.`,
    ],
  },
  contact: {
    title: "13. İletişim",
    paragraphs: [
      `Bu Politika veya ${BRAND.name} gizlilik uygulamaları için: ${BRAND.email}.`,
      `Şirket sitesi: ${BRAND.website}`,
    ],
  },
});

const ar = buildPrivacy({
  title: "سياسة الخصوصية",
  intro: `توضح سياسة الخصوصية هذه كيف تجمع ${BRAND.company} («${BRAND.company}»، «نحن») المعلومات وتستخدمها وتخزّنها وتحميها عند استخدامك لـ ${BRAND.name} — منصتنا لتتبّع إنتاجية الموظفين والوقت المعتمدة على التعلم الآلي. وتشمل موقع التسويق ولوحة المنتج وتطبيقات العميل وقنوات الدعم.`,
  who: {
    title: "1. من نحن",
    paragraphs: [
      `يشغّل ${BRAND.name} بواسطة ${BRAND.company} (${BRAND.domain}). لأسئلة الخصوصية: ${BRAND.email}.`,
      `عندما تنشر مؤسسة (عميلنا) ${BRAND.name} لفريقها، يكون العميل عادةً المتحكّم ببيانات إنتاجية الموظفين. تعمل ${BRAND.company} كمعالج / مزوّد خدمة وفق تعليمات العميل، باستثناء بيانات الحساب والفوترة والتسويق التي نديرها كعمل تجاري.`,
    ],
  },
  collect: {
    title: "2. المعلومات التي نجمعها",
    paragraphs: [`حسب استخدام ${BRAND.name} قد نعالج الفئات التالية:`],
    bullets: [
      "بيانات الحساب والمؤسسة: الاسم، البريد الوظيفي، الشركة، الدور، جهات الفوترة، الخطة وبيانات المصادقة.",
      "بيانات الجهاز والعميل: نوع الجهاز، نظام التشغيل، إصدار التطبيق، معرّفات التثبيت والتشخيص الأساسي.",
      "نشاط العمل: تصنيفات التطبيقات والتصفح، حالة الخمول / الاجتماع / الاستراحة، سجلات الوقت، المهام والمشاريع والعملاء.",
      `لقطات الشاشة: التقاط دوري وفق إعدادات العميل، ويمكن تعتيمها للخصوصية وحماية الملكية الفكرية. لا يسجّل ${BRAND.name} ضغطات المفاتيح أو الميكروفون أو الكاميرا أو مدخلات تدخّلية أخرى.`,
      "بيانات الميدان / الموقع (عند التفعيل): إشارات الموقع والزيارات فقط وفق إعداد العميل.",
      "الدعم والموقع: رسائل الدعم أو المساعد الذكي وبيانات استخدام محدودة لتشغيل الموقع وأمانه.",
    ],
  },
  use: {
    title: "3. كيف نستخدم المعلومات",
    paragraphs: ["نستخدم المعلومات من أجل:"],
    bullets: [
      "توفير التتبّع المباشر وFocus Timeline والتقارير والحضور وتصدير الفوترة والميزات ذات الصلة.",
      "تصنيف النشاط كإنتاجي أو مشتت عبر تعلم آلي يتعلّم مهام العميل الإنتاجية بمرور الوقت.",
      "تأمين الحسابات ومنع الإساءة واستكشاف الأعطال وتحسين الموثوقية.",
      "التواصل بشأن تغييرات الخدمة وإشعارات الأمن وتحديثات المنتج حيث يُسمح بذلك.",
      "الامتثال للقانون وتطبيق شروطنا.",
    ],
  },
  share: {
    title: "4. كيف نشارك المعلومات",
    paragraphs: [
      `لا نبيع المعلومات الشخصية. نشارك البيانات فقط بقدر ما يلزم لتشغيل ${BRAND.name}:`,
    ],
    bullets: [
      "مع مؤسسة العميل المالكة لمساحة العمل (المشرفون والمديرون والأدوار المسموح بها).",
      "مع مزوّدي البنية التحتية — بما في ذلك Amazon Web Services (AWS) للاستضافة وتخزين الكائنات — بموجب التزامات تعاقدية بالسرية والأمان.",
      "مع مستشارين أو سلطات عندما يقتضي القانون ذلك، أو لحماية الحقوق والسلامة والأمن.",
      "في حال اندماج أو استحواذ أو نقل أصول، مع إشعار حيث يلزم.",
    ],
  },
  aws: {
    title: "5. التخزين السحابي وAmazon S3",
    paragraphs: [
      `حيث يستخدم ${BRAND.name} التخزين السحابي، قد يحتفظ تخزين كائنات مثل Amazon S3 بلقطات وتصديرات مشفّرة. يتبع أمن AWS نموذج مسؤولية مشتركة: تؤمّن AWS البنية التحتية؛ وتضبط ${BRAND.company} و/أو العميل الأمن داخل السحابة (الوصول والتشفير والمراقبة والاحتفاظ).`,
      "نعتمد على ممارسات AWS S3 التالية:",
    ],
    bullets: [
      "التشفير أثناء النقل (HTTPS/TLS) والتشفير أثناء التخزين.",
      "أقل صلاحيات عبر IAM وسياسات الحاويات وحظر الوصول العام افتراضيًا.",
      "قواعد دورة حياة لانتهاء صلاحية الكائنات أو نقلها تلقائيًا بعد فترات الاحتفاظ.",
      "ضوابط احتفاظ أقوى اختيارية (مثل Object Lock / الحجز القانوني) للعملاء ذوي متطلبات WORM.",
      "خيارات مؤسساتية ومحلية ليحتفظ العميل ببيانات الشركة في موقعه أو شبكته الخاصة عند التعاقد.",
    ],
    paragraphsAfter: [
      `لا تستخدم AWS محتوى العملاء لتقديم خدمات لعملاء آخرين أو لأغراضها دون اتفاق. تضبط ${BRAND.company} خدمة S3 لأعباء ${BRAND.name}؛ ويبقى العملاء مسؤولين عن إشعارات المراقبة المشروعة وسياسات الوصول الداخلية.`,
    ],
  },
  retention: {
    title: "6. سياسات الاحتفاظ بالبيانات للعملاء",
    paragraphs: [
      "يوازن الاحتفاظ بين القيمة التشغيلية وخصوصية الموظفين وكفاءة التخزين وسياسة العميل. الافتراضي (متماشٍ مع ممارسات مراقبة مثل FocusRO):",
    ],
    bullets: [
      "لقطات بدون تعتيم (0%): تُحتفظ 30 يومًا ثم تُحذف تلقائيًا.",
      "لقطات مع تعتيم (عادة 20%–100%): حتى 90 يومًا ثم تُحذف تلقائيًا.",
      "سجلات النشاط والخمول والاجتماعات والاستراحات والوقت: لمدة الاشتراك النشط إضافة إلى حتى 90 يومًا بعد الإلغاء ما لم يُتفق كتابيًا على مدة أطول.",
      "التقارير والتصديرات: حتى يحذفها العميل أو ينتهي نافذة احتفاظ مساحة العمل.",
      "سجلات الحساب والفوترة والأمن: حسب العقود ومنع الاحتيال والالتزامات القانونية (السجلات المالية عادة حتى 7 سنوات حيث يلزم).",
      "تذاكر الدعم ومحادثاته: حتى 24 شهرًا ما لم يُطلب حذف أقصر.",
    ],
    paragraphsAfter: [
      "يمكن للعملاء طلب احتفاظ مخصص أو حذف أبكر أو تصدير قبل الحذف ضمن الحدود التقنية والحجوزات القانونية. قد تطبّق النشر المحلي سياسات العميل الخاصة. اللقطات غير المعتمة تستخدم نافذة أقصر عمدًا لتقليل مخاطر الخصوصية والملكية الفكرية.",
    ],
  },
  security: {
    title: "7. تدابير الأمن",
    paragraphs: ["نطبّق تدابير تقنية وتنظيمية ملائمة للمخاطر، تشمل:"],
    bullets: [
      "تشفير البيانات أثناء النقل عبر HTTPS وأثناء التخزين (بما في ذلك ممارسات ECC للحمولات الحساسة حيث تُستخدم).",
      "خيارات تعتيم اللقطات لحماية الملكية الفكرية وتقليل ظهور المحتوى الخاص.",
      "وصول قائم على الأدوار للمشرفين والمديرين والموظفين.",
      `عدم تسجيل ضغطات المفاتيح وعدم تسجيل الميكروفون في مراقبة ${BRAND.name} القياسية.`,
      "تعزيز حاويات السحابة ومراقبة مسارات الوصول المستخدمة من الخدمة.",
    ],
    paragraphsAfter: [
      "لا توجد طريقة نقل أو تخزين آمنة بنسبة 100%. ينبغي للعملاء استخدام كلمات مرور قوية وتقييد وصول المشرفين وتفعيل التعتيم حيث يناسب واتباع سياساتهم الأمنية.",
    ],
  },
  workplace: {
    title: "8. مراقبة مكان العمل ومسؤوليات العميل",
    paragraphs: [
      `${BRAND.name} أداة إنتاجية للأعمال. يتحمل العملاء مسؤولية تقديم أي إشعارات قانونية للموظفين والمقاولين، والحصول على الموافقات حيث يلزم، وضبط التعتيم وفترات الالتقاط بشكل مناسب، واستخدام ${BRAND.name} بطريقة قانونية وغير تدخّلية.`,
      "نشجّع تفضيل اللقطات المعتمة وحصر الاحتفاظ بالحاجة التجارية وتجنّب جمع بيانات حسّاسة غير لازمة.",
    ],
  },
  rights: {
    title: "9. حقوقك وخياراتك",
    paragraphs: [
      `حسب موقعك ودورك قد تتمتع بحقوق الوصول أو التصحيح أو الحذف أو التصدير أو تقييد المعالجة أو الاعتراض على معالجة معيّنة. ينبغي للموظفين عادةً التواصل أولًا مع صاحب العمل (العميل) بشأن بيانات ${BRAND.name} في مكان العمل. يمكن لأصحاب الحسابات وزوّار الموقع مراسلتنا على البريد أدناه.`,
      "يمكنك أيضًا إلغاء الاشتراك من رسائل التسويق غير الأساسية عبر الرابط في الرسالة.",
    ],
  },
  children: {
    title: "10. الأطفال",
    paragraphs: [
      `لا يوجّه ${BRAND.name} إلى الأطفال دون 16 عامًا (أو الحد الأدنى في نطاقك القضائي). لا نجمع عن علم معلومات شخصية من الأطفال للمنتج.`,
    ],
  },
  transfers: {
    title: "11. النقل الدولي",
    paragraphs: [
      `قد نعالج البيانات في مناطق تعمل فيها ${BRAND.company} أو AWS أو معالجون فرعيون، مع ضمانات نقل مناسبة حيث يلزم.`,
    ],
  },
  updates: {
    title: "12. تحديثات هذه السياسة",
    paragraphs: [
      `قد نحدّث سياسة الخصوصية من وقت لآخر. سيتغيّر تاريخ «آخر تحديث» في الأعلى. استمرار استخدام ${BRAND.name} بعد التحديث يعني تطبيق السياسة المحدّثة.`,
    ],
  },
  contact: {
    title: "13. التواصل",
    paragraphs: [
      `أسئلة حول هذه السياسة أو ممارسات خصوصية ${BRAND.name}: ${BRAND.email}.`,
      `موقع الشركة: ${BRAND.website}`,
    ],
  },
});

export const PRIVACY_BY_LOCALE = { en, ru, el, tr, ar };

/** @deprecated use getPrivacy(locale) */
export const PRIVACY = en;

export function getPrivacy(locale = "en") {
  return PRIVACY_BY_LOCALE[locale] || PRIVACY_BY_LOCALE.en;
}
