export const POSTS = [
  {
    slug: "what-are-pinns",
    title: "What are PINNs? Physics-informed AI for real work time",
    tag: "PINNs",
    date: "September 21, 2026",
    read: "5 min read",
    blurb:
      "Physics-Informed Neural Networks (PINNs) mix data with the laws of how systems evolve — so HawkLens can reason about time, not only count clicks.",
    sections: [
      {
        body: [
          "PINNs — Physics-Informed Neural Networks — are a class of machine learning models that do more than fit historical labels. They are trained so their predictions stay consistent with known physical or dynamical constraints: continuity of effort, recovery after interruptions, and how focus builds or decays over a work session.",
          "Traditional time trackers only sum timestamps. A PINN-backed system can interpolate sparse signals, correct noisy idle gaps, and estimate what portion of a block was truly productive — even when screenshots and input events are imperfect.",
        ],
      },
      {
        heading: "Why physics belongs in productivity software",
        body: [
          "Work is not a random bag of events. Attention has inertia. Context switching has a cost. Meetings displace deep work. Those patterns behave like soft physical systems: energy in, friction, recovery.",
          "By encoding those priors into the network, HawkLens can produce stable estimates of total time, effective time, and productive time — instead of brittle rules that break the moment someone multitasks or pauses for coffee.",
        ],
      },
      {
        heading: "What this means for HawkLens",
        body: [
          "We use PINNs as a research layer inside HawkLens: the same live activity, idle, and app signals you already see, plus a model that respects how time actually unfolds in a workday.",
          "You still get clear dashboards. Under the hood, the clock gets smarter — and more accurate — without becoming invasive.",
        ],
      },
    ],
  },
  {
    slug: "pinns-role-in-time-management",
    title: "The role of PINNs in better time management",
    tag: "PINNs",
    date: "September 21, 2026",
    read: "5 min read",
    blurb:
      "PINNs help HawkLens turn raw activity into trustworthy time: total, accurate, effective, and productive — with fewer manual corrections.",
    sections: [
      {
        body: [
          "Managers do not just need “hours logged.” They need to know whether those hours were usable. That is where Physics-Informed Neural Networks earn their place in HawkLens.",
          "PINNs act as a consistency engine: given sparse observations (app focus, idle gaps, meetings, breaks), they reconstruct a continuous timeline that respects how work sessions evolve.",
        ],
      },
      {
        heading: "From raw events to managed time",
        body: [
          "Raw signals are messy: short idle spikes, overlapping meetings, context switches. Rule engines either over-count or under-count. PINNs learn a smooth trajectory that stays faithful to both the data and the dynamics of focus.",
          "Result: fewer “why is this 20 minutes off?” debates, and reports that managers can trust when planning staffing, invoices, and HR experiments.",
        ],
      },
      {
        heading: "Non-intrusive by design",
        body: [
          "A better clock does not require keystroke logging or always-on screen reading. HawkLens keeps monitoring non-intrusive — blur, status, and activity classes — while PINNs improve how that evidence is interpreted.",
          "Better science. Same privacy posture.",
        ],
      },
    ],
  },
  {
    slug: "total-effective-productive-time",
    title: "Total time, effective time & productive time — explained",
    tag: "Time accuracy",
    date: "September 20, 2026",
    read: "6 min read",
    blurb:
      "Not every logged minute is equal. Here’s how HawkLens separates total time, time accuracy, effective time, and productive time — and why it matters.",
    sections: [
      {
        body: [
          "Most tools show one number: hours. Teams actually need four ideas. HawkLens surfaces them clearly so managers and employees share the same language.",
        ],
      },
      {
        heading: "Total time",
        body: [
          "Total time is the full span of a work session — from Start to Finish, including meetings, breaks, and short interruptions. It answers: how long was someone on the clock?",
        ],
      },
      {
        heading: "Time accuracy",
        body: [
          "Time accuracy is how closely that clock matches reality. Missed starts, forgotten stops, and noisy idle detection destroy accuracy. PINNs help by reconstructing plausible timelines from partial signals instead of trusting every edge case as gospel.",
        ],
      },
      {
        heading: "Effective time",
        body: [
          "Effective time removes pure idle and long unplanned away periods. Meetings can still count as effective when they are intentional work. Effective time answers: how much of the day was spent doing something work-related?",
        ],
      },
      {
        heading: "Productive time",
        body: [
          "Productive time is the subset of effective time spent on tasks your company treats as high-value — deep work on client deliverables, coding, design, analysis. Distraction apps and endless chat do not count the same way.",
          "Together, these four metrics let HawkLens show not only that time was tracked, but that it was understood.",
        ],
      },
    ],
  },
  {
    slug: "physics-pinns-better-time-accuracy",
    title: "How physics PINNs improve time accuracy in HawkLens",
    tag: "Research",
    date: "September 19, 2026",
    read: "5 min read",
    blurb:
      "We’re applying physics-informed models so total time, effective time, and productive time stay consistent — even when the workday is messy.",
    sections: [
      {
        body: [
          "HawkLens already captures live activity, idle, meetings, and breaks. The next leap is accuracy: making those streams add up to a timeline people believe.",
          "Physics-informed neural networks give us a way to do that. We treat a workday as a dynamical system: focus rises, interruptions inject friction, recovery takes time. The model is penalized when its timeline violates those priors.",
        ],
      },
      {
        heading: "What gets better",
        body: [
          "Idle edges become cleaner. Short false idles do not shatter a productive block. Meeting overlap is reconciled with app activity. Gaps in sparse telemetry are filled with physics-consistent estimates instead of zeros or wild guesses.",
          "That lifts time accuracy for payroll-adjacent reporting, client invoices, and Focus Timeline reviews — without asking employees to babysit a timer.",
        ],
      },
      {
        heading: "Grounded in HawkBytes research",
        body: [
          "This work sits inside HawkBytes’ broader AI and applied research practice: take a hard modeling problem, ship it as a product feature people can feel in the dashboard.",
          "PINNs are not a buzzword banner. They are how we make the clock honest.",
        ],
      },
    ],
  },
  {
    slug: "hawklens-pinns-feature-roadmap",
    title: "What’s next: PINNs features we’re shipping in HawkLens",
    tag: "Product",
    date: "September 18, 2026",
    read: "4 min read",
    blurb:
      "A clear look at the PINNs-powered features coming to HawkLens — from smarter time accuracy to productive-time scoring and manager-ready reports.",
    sections: [
      {
        body: [
          "Here is what we are building next on top of live tracking, screenshots, idle detection, and attendance — with Physics-Informed Neural Networks as the accuracy layer.",
        ],
      },
      {
        heading: "Smarter time accuracy engine",
        body: [
          "Automatic reconciliation of Start/Finish gaps, idle spikes, and meeting overlaps into a single trusted timeline. Less manual cleanup for managers and employees.",
        ],
      },
      {
        heading: "Effective vs productive scores",
        body: [
          "Per-person and per-team views that separate total time, effective time, and productive time — trained to your company’s definition of valuable work, not a generic internet blacklist.",
        ],
      },
      {
        heading: "PINNs Focus Timeline",
        body: [
          "A continuous Focus Timeline that explains why a block was marked productive, effective, or idle — so reviews feel fair, not mysterious.",
        ],
      },
      {
        heading: "Invoice-ready accuracy",
        body: [
          "Client and project rollups that inherit PINNs-corrected minutes, so invoices and utilization reports start from trustworthy inputs.",
        ],
      },
      {
        heading: "Still non-intrusive",
        body: [
          "Blur, no keystroke capture, no mic recording. PINNs improve interpretation of signals you already allow — they do not expand surveillance.",
          "3 users free forever while we ship. Follow the HawkLens blog for release notes as each piece lands.",
        ],
      },
    ],
  },
  {
    slug: "win-back-productivity",
    title: "Win back productivity & profits affected by distractions",
    tag: "Productivity",
    date: "June 12, 2026",
    read: "3 min read",
    blurb:
      "Managers' time is expensive. Automated, non-intrusive tracking shows where time & efforts are spent — without losing yours.",
    sections: [
      {
        body: [
          "Managers' time is expensive! Track your team's productivity without losing yours. HawkLens helps businesses boost employee productivity and improve time tracking through automated distraction-free monitoring and real-time feedback.",
          "When an employee is working on multiple projects or clients, our system can intelligently capture the time spent on each of the different tasks spread over multiple projects. Meetings are also accounted for in their report.",
        ],
      },
      {
        heading: "Know where the time & efforts are spent",
        body: [
          "Our dashboard accurately depicts the time spent working on tasks, meetings, or if people have been idle, distracted, and had breaks — with different metrics. It also helps you see how much of the time has been spent on a particular client or project easily.",
          "Granular & grand-level reports are well presented in the dashboard for company admins & managers to analyse productivity & distractions of all employees. This can help your HR team make informed decisions and compare team productivity at ease.",
        ],
      },
      {
        heading: "Non-intrusive, minimal distraction",
        body: [
          "Non-intrusive tracking is the optimal way to keep employees focused on their work. This helps to create a more positive work environment as they know their privacy is not invaded.",
          "Employees will be happy to track their productivity if their privacy is not at risk. We prioritize that by always blurring their screens and not recording their keystrokes, microphones, and other inputs.",
        ],
      },
    ],
  },
  {
    slug: "beyond-time-tracking",
    title: "Beyond time tracking",
    tag: "HR",
    date: "June 12, 2026",
    read: "3 min read",
    blurb:
      "HawkLens is your organization’s Human Resource A/B testing tool. Find productive & distraction patterns after new HR policies, perks & rules.",
    sections: [
      {
        body: [
          "HawkLens is your organization’s Human Resource A/B Testing tool. Find productive / distraction patterns after new HR policies, perks, rules & more.",
          "Each company has its own productive tasks and our ML system will learn from your company and rank / classify your tasks appropriately over time.",
        ],
      },
      {
        heading: "Simple & easy to use",
        body: [
          "By automatically logging employee hours, HawkLens allows employees to stay on task, save time on manual time logging and avoid distractions. Being extremely easy to use, HawkLens gives no excuses to the employees.",
          "3 users free forever. Download and install the client app on employee work devices — Windows, Mac & mobile.",
        ],
      },
    ],
  },
];

export const USE_CASES = [
  {
    slug: "live-activity-screenshots",
    n: "01",
    node: "templates",
    pill: "Live tracking",
    keyword: "live stream & screenshots",
    title: "Live activity tracking & screenshot monitoring.",
    cardTitle: "Live stream & Screenshots",
    atlas: "See work progress in real time.",
    summary:
      "Get a real-time overview of your team’s workday — recent screenshots plus each employee’s current status: Working, Idle, In a Meeting, or on Break.",
    chips: [
      "Periodic screenshot monitoring",
      "Adjustable screenshot blur",
      "Live status refresh",
    ],
    demo: {
      title: "Live Activity",
      meta: "working · idle · meeting · break",
      rows: [
        { title: "Aisha Khan", extra: "Working · Figma" },
        { title: "Omar Malik", extra: "Idle · 18 min" },
        { title: "Sara Ahmed", extra: "Meeting · Zoom" },
        { title: "Hassan Ali", extra: "Break · 12 min" },
      ],
    },
    without:
      "Managers spend expensive time going through work by hand. There is no live view of who is working, idle, in a meeting, or on a break.",
    with: "HawkLens displays the most recent screenshots along with each employee’s current status. The view refreshes automatically based on your selected screenshot frequency.",
    blocks: [
      {
        heading: "Screenshot monitoring",
        kicker: "Visibility",
        items: [
          "Automatically captures periodic screenshots of user activity to provide clear visibility into work progress, boost accountability, and support performance analysis.",
          "Maintain privacy without losing visibility. Blur sensitive information in screenshots, with adjustable blur levels.",
          "A smart solution for secure, compliant, and respectful employee tracking.",
        ],
      },
      {
        heading: "Live activity tracking",
        kicker: "Real time",
        items: [
          "Get a real-time overview of your team’s workday — all in one place.",
          "Monitor activity, spot issues, and support productivity without switching screens.",
          "Quick View shows total logged time, active time (productive, distraction and neutral), meetings, breaks, and idle status.",
        ],
      },
    ],
    loop: [
      "Install the client app on work devices.",
      "Employees click Start at the beginning of the workday.",
      "Screenshots & activity are captured automatically.",
      "Managers review live status & reports in the dashboard.",
    ],
    faqs: [
      {
        q: "Are screenshots blurred?",
        a: "Yes. Screenshots that are analysed can be blurred to ensure intellectual property protection and employee privacy. Blur levels are adjustable.",
      },
      {
        q: "Do you record keystrokes or microphones?",
        a: "No. HawkLens does not record keystrokes, microphones, or other invasive inputs. Tracking is non-intrusive by design.",
      },
    ],
  },
  {
    slug: "idle-time-monitoring",
    n: "02",
    node: "history",
    pill: "Idle & breaks",
    keyword: "idle time monitoring",
    title: "Idle time, breaks & meeting logging.",
    cardTitle: "Time & Attendance",
    atlas: "Work, idle, meeting & break — hour by hour.",
    summary:
      "Maximize productivity with smart idle tracking. Detect inactivity, log breaks with a single click, and count meetings as part of the productive workday.",
    chips: [
      "Idle detection from keyboard & mouse",
      "One-click break logging",
      "Meeting time logging",
    ],
    demo: {
      title: "Focus Timeline",
      meta: "work · idle · meeting · break",
      rows: [
        { title: "Work", extra: "6h 12m" },
        { title: "Idle", extra: "48 min" },
        { title: "Meeting", extra: "1h 20m" },
        { title: "Break", extra: "40 min" },
      ],
    },
    without:
      "Idle hours, meetings and breaks get mixed into one number. Reports cannot show where the day actually went.",
    with: "The Focus Timeline presents a detailed, color-coded graph showing Work, Idle, Meeting, and Break time — hour by hour.",
    blocks: [
      {
        heading: "Idle time monitoring",
        kicker: "Focus",
        items: [
          "HawkLens detects inactivity based on keyboard and mouse usage, helping you identify unproductive hours and optimize team performance.",
          "Gain actionable insights to boost focus, efficiency, and results.",
        ],
      },
      {
        heading: "Breaks & meetings",
        kicker: "Balance",
        items: [
          "Users log break time with a single click, keeping work hours and personal time clearly separated.",
          "Meeting time is recognized as part of the productive workday.",
          "This ensures accurate productivity reports while encouraging healthy, balanced work habits.",
        ],
      },
    ],
    loop: [
      "Start the workday in the client app.",
      "Idle time is detected automatically.",
      "Log a break or meeting with one click.",
      "Review the Focus Timeline in the dashboard.",
    ],
    faqs: [
      {
        q: "Does idle tracking interrupt employees?",
        a: "No. Non-intrusive tracking is the optimal way to keep employees focused on their work. Privacy is not invaded.",
      },
      {
        q: "Are meetings counted as productive?",
        a: "Yes. HawkLens lets users log meeting time within the app, ensuring it is recognized as part of their productive workday.",
      },
    ],
  },
  {
    slug: "time-attendance",
    n: "03",
    node: "manager",
    pill: "Attendance",
    keyword: "time & attendance",
    title: "Time, attendance & leave — without paperwork.",
    cardTitle: "Time & Attendance",
    atlas: "No manual check-ins required.",
    summary:
      "Automate attendance tracking with real-time activity monitoring. Set custom leave policies, manage requests, and keep accurate records without the paperwork.",
    chips: [
      "Automated attendance",
      "Custom leave policies",
      "Admin review & approve",
    ],
    demo: {
      title: "Attendance",
      meta: "present · leave · hours",
      rows: [
        { title: "Present", extra: "22 today" },
        { title: "On leave", extra: "2" },
        { title: "Logged hours", extra: "164h" },
        { title: "Pending requests", extra: "1" },
      ],
    },
    without:
      "Manual check-ins, spreadsheets, and leave paperwork eat manager time and still produce incomplete records.",
    with: "Attendance is automated from real-time activity. Admins have full control to review, approve, or adjust entries — automation with flexibility.",
    blocks: [
      {
        heading: "Attendance & leave policies",
        kicker: "Workforce",
        items: [
          "Automate attendance tracking with real-time activity monitoring — no manual check-ins required.",
          "Set up custom leave policies, manage employee leave requests, and ensure accurate records without the paperwork.",
          "Admins have full control to review, approve, or adjust entries.",
        ],
      },
      {
        heading: "Employee & team management",
        kicker: "Structure",
        items: [
          "Create employee profiles and organize them into teams for better structure.",
          "Managers can assign tasks to individuals or entire teams, streamlining delegation and improving accountability.",
        ],
      },
    ],
    loop: [
      "Add employees & teams.",
      "Set leave policies once.",
      "Attendance logs automatically from activity.",
      "Review, approve, or adjust in the dashboard.",
    ],
    faqs: [
      {
        q: "Do employees need to check in manually?",
        a: "No. Attendance is automated with real-time activity monitoring. No manual check-ins required.",
      },
      {
        q: "Can admins change an entry?",
        a: "Yes. Admins have full control to review, approve, or adjust entries, combining automation with flexibility.",
      },
    ],
  },
  {
    slug: "location-tracking",
    n: "04",
    node: "local",
    pill: "Field teams",
    keyword: "location tracking",
    title: "Field employee location tracking & site visits.",
    cardTitle: "Location Tracking",
    atlas: "Live locations, journey maps & visit reports.",
    summary:
      "Manage on-the-go sales and marketing teams. Track live locations, view daily journey maps, and monitor visits to defined client sites — with photos, in real time.",
    chips: [
      "Live location tracking",
      "Daily journey map",
      "Visit reports with photos",
    ],
    demo: {
      title: "Field map",
      meta: "sites · visits · routes",
      rows: [
        { title: "Client site A", extra: "Checked in" },
        { title: "Client site B", extra: "En route" },
        { title: "Warehouse", extra: "2 visits" },
        { title: "HQ", extra: "On site" },
      ],
    },
    without:
      "Field teams are hard to see. Site visits, routes, and photos live in chats and spreadsheets instead of one live view.",
    with: "Track live locations, view the daily journey map, set visit frequencies, plan site visits, and receive detailed visit reports with photos — all in real time.",
    blocks: [
      {
        heading: "Field employee location tracking & site visit management",
        kicker: "Mobile",
        items: [
          "Effortlessly manage your on-the-go sales and marketing teams with the HawkLens mobile app.",
          "Track employee live locations, view their daily journey map, and monitor visits to defined client sites.",
          "Set visit frequencies, plan site visits, and receive detailed visit reports with photos — all in real time.",
        ],
      },
      {
        heading: "Complete visibility",
        kicker: "Control",
        items: [
          "Gain complete visibility and control over field operations from anywhere.",
          "See your team on the map and track movement between locations during shifts.",
        ],
      },
    ],
    loop: [
      "Define client sites.",
      "Field staff use the mobile app.",
      "Live location & visits sync to the dashboard.",
      "Review journey maps & photo reports.",
    ],
    faqs: [
      {
        q: "Is there a mobile app?",
        a: "Yes. The HawkLens mobile app enables time tracking, GPS-based site visits, notes & photos, and a real-time site map for field teams.",
      },
      {
        q: "Can I see historical routes?",
        a: "Yes. View routes and location history to understand where work is being completed.",
      },
    ],
  },
  {
    slug: "task-invoice",
    n: "05",
    node: "hotkey",
    pill: "Billing",
    keyword: "task & invoice",
    title: "Tasks, pay rates & invoices from tracked time.",
    cardTitle: "Task & Invoice",
    atlas: "Turn tracked time into revenue — automatically.",
    summary:
      "Add clients, projects & tasks. Track time automatically against each one. Calculate pay and billable invoices from the hours you already captured.",
    chips: [
      "Clients, projects & tasks",
      "Automatic pay rates",
      "Ready-to-send invoices",
    ],
    demo: {
      title: "Billing",
      meta: "tasks · pay · invoice",
      rows: [
        { title: "Acme website", extra: "12.4h · billable" },
        { title: "Northstar QA", extra: "6.1h · billable" },
        { title: "Internal ops", extra: "2.0h · non-billable" },
        { title: "Invoice draft", extra: "Ready" },
      ],
    },
    without:
      "Time, tasks, payroll and invoices live in different tools. Guesswork creeps in, and billing is slow.",
    with: "HawkLens calculates pay from hourly rates and task time, then turns tracked hours into ready-to-send invoices from predefined client rates. No more guesswork.",
    blocks: [
      {
        heading: "Task management system",
        kicker: "Work",
        items: [
          "Easily manage workflows by adding Clients, creating Projects, and assigning Tasks to specific employees or teams.",
          "Track work time automatically against each task, project, and client for accurate reporting, productivity insights, and billing transparency.",
        ],
      },
      {
        heading: "Pay rates & invoice rates",
        kicker: "Revenue",
        items: [
          "Track labor costs with precision. Pay is calculated automatically from each employee’s hourly rate and time spent on tasks.",
          "Turn tracked time into revenue — automatically. Billable amounts use total task hours and your predefined client rates.",
          "No more guesswork or manual tracking — just ready-to-send, accurate invoices that build trust and help you get paid faster.",
        ],
      },
    ],
    loop: [
      "Add clients, projects & tasks.",
      "Time logs against the active task.",
      "Pay rates calculate labor cost.",
      "Generate the invoice from tracked hours.",
    ],
    faqs: [
      {
        q: "Can time be billed per client?",
        a: "Yes. When an employee is working on multiple projects or clients, HawkLens captures time spent on each task. Invoices use your predefined client rates.",
      },
      {
        q: "Is there a free plan?",
        a: "Yes. 3 users free forever. Premium is $3.99 / user / month from the 4th user onwards, with a 10% yearly discount.",
      },
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}

export function getUseCase(slug) {
  return USE_CASES.find((u) => u.slug === slug);
}
