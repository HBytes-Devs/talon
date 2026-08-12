export const POSTS = [
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
          "Managers' time is expensive! Track your team's productivity without losing yours. Talon helps businesses boost employee productivity and improve time tracking through automated distraction-free monitoring and real-time feedback.",
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
      "Talon is your organization’s Human Resource A/B testing tool. Find productive & distraction patterns after new HR policies, perks & rules.",
    sections: [
      {
        body: [
          "Talon is your organization’s Human Resource A/B Testing tool. Find productive / distraction patterns after new HR policies, perks, rules & more.",
          "Each company has its own productive tasks and our ML system will learn from your company and rank / classify your tasks appropriately over time.",
        ],
      },
      {
        heading: "Simple & easy to use",
        body: [
          "By automatically logging employee hours, Talon allows employees to stay on task, save time on manual time logging and avoid distractions. Being extremely easy to use, Talon gives no excuses to the employees.",
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
    with: "Talon displays the most recent screenshots along with each employee’s current status. The view refreshes automatically based on your selected screenshot frequency.",
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
        a: "No. Talon does not record keystrokes, microphones, or other invasive inputs. Tracking is non-intrusive by design.",
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
          "Talon detects inactivity based on keyboard and mouse usage, helping you identify unproductive hours and optimize team performance.",
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
        a: "Yes. Talon lets users log meeting time within the app, ensuring it is recognized as part of their productive workday.",
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
          "Effortlessly manage your on-the-go sales and marketing teams with the Talon mobile app.",
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
        a: "Yes. The Talon mobile app enables time tracking, GPS-based site visits, notes & photos, and a real-time site map for field teams.",
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
    with: "Talon calculates pay from hourly rates and task time, then turns tracked hours into ready-to-send invoices from predefined client rates. No more guesswork.",
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
        a: "Yes. When an employee is working on multiple projects or clients, Talon captures time spent on each task. Invoices use your predefined client rates.",
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
