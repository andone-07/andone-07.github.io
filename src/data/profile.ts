import bilibiliIcon from "@/assets/icons/bilibili.svg";
import emailIcon from "@/assets/icons/email.svg";
import githubIcon from "@/assets/icons/github.svg";
import googleIcon from "@/assets/icons/google.svg";
import timeIcon from "@/assets/icons/time_series.svg";
import pdfIcon from "@/assets/icons/pdf.svg";
import twitterIcon from "@/assets/icons/TwitterX.svg";
import zjuLogo from "@/assets/icons/zjulogo.svg";

export type SectionId = "about" | "news" | "publication";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface SocialLink {
  label: string;
  href?: string;
  icon: string;
}

export interface ResearchArea {
  label: string;
  icon: string;
}

export interface NewsItem {
  date: string;
  content: string;
  highlights: string[];
}

export interface PublicationLink {
  label: string;
  href?: string;
  icon: string;
}

export interface Publication {
  title: string;
  authors: string[];
  highlightedAuthors: string[];
  venueTag: string;
  venue: string;
  year: string;
  image: string;
  links: PublicationLink[];
}

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "publication", label: "Publications" },
];

export const profile = {
  name: "Jiawen Zhu",
  chineseName: "朱甲文",
  avatarAlt: "Portrait of Jiawen Zhu",
  logo: zjuLogo,
  affiliation: "PhD Student in Artificial Intelligence @ Zhejiang University",
  researchAreas: [
    { label: "Time Series Forecasting", icon: timeIcon },
    // { label: "Data Visualization", icon: visualizationIcon },
  ] as ResearchArea[],
  links: [
    {
      label: "Email",
      href: "mailto:jiawenzhu@zju.edu.cn",
      icon: emailIcon,
    },
    {
      label: "GitHub",
      href: "https://github.com/andone-07",
      icon: githubIcon,
    },
    {
      label: "Google Scholar",
      icon: googleIcon,
    },
    {
      label: "X",
      icon: twitterIcon,
    },
    {
      label: "Bilibili",
      icon: bilibiliIcon,
    },
  ] as SocialLink[],
};

export const introduction = {
  textBeforeGroup:
    "Welcome to visit my homepage! Currently, I am a master's student majoring in artificial intelligence at",
  group: {
    label: "ZJUIDG",
    href: "https://zjuidg.org/",
  },
  university: "Zhejiang University",
  supervisor: {
    label: "Prof. Di Weng",
    href: "https://dwe.ng/",
  },
  bachelorSchool: "Ocean University of China",
  researchGoal: "Time Series Analysis",
};

export const newsItems: NewsItem[] = [
  {
    date: "2026.05",
    content:
      "Our paper Dynamic TMoE: A Drift-Aware Dynamic Mixture of Experts Framework for Non-Stationary Time Series Forecasting has been accepted to ICML 2026 as a poster!",
    highlights: [
      "ICML 2026",
      "Dynamic TMoE: A Drift-Aware Dynamic Mixture of Experts Framework for Non-Stationary Time Series Forecasting",
    ],
  },
  {
    date: "2025.09",
    content: "I started my PhD studies at ZJUIDG, Zhejiang University.",
    highlights: ["ZJUIDG", "Zhejiang University"],
  },
  {
    date: "2024.09",
    content: "I started my master's studies at ZJUIDG, Zhejiang University.",
    highlights: ["ZJUIDG", "Zhejiang University"],
  },
  {
    date: "2024.06",
    content:
      "I obtained my bachelor's degree in Computer Science from Ocean University of China.",
    highlights: ["Ocean University of China"],
  },
];

export const publications: Publication[] = [
  {
    title:
      "Dynamic TMoE: A Drift-Aware Dynamic Mixture of Experts Framework for Non-Stationary Time Series Forecastin",
    authors: ["Jiawen Zhu", "Shuhan Liu", "Di Weng", "Yingcai Wu"],
    highlightedAuthors: ["Jiawen Zhu"],
    venueTag: "ICML'26",
    venue: "Forty-Third International Conference on Machine Learning",
    year: "2026",
    image: `${import.meta.env.BASE_URL}dynamic_tmoe.png`,
    links: [
      {
        label: "Paper",
        icon: pdfIcon,
        href: "https://openreview.net/forum?id=JabkBcaoa9",
      },
      {
        label: "Code",
        icon: githubIcon,
        href: "https://github.com/andone-07/Dynamic-TMoE",
      },
    ],
  },
  // {
  //   title: "Watchtower: Semantic-aware Authoring of Data Validation Rules",
  //   authors: [
  //     "Zhongsu Luo",
  //     "Jiawen Zhu",
  //     "Xinhuan Shu",
  //     "Shuhan Liu",
  //     "Xiwen Cai",
  //     "Ran Chen",
  //     "Kai Xiong",
  //     "Jiajun Zhu",
  //     "Di Weng",
  //     "Yingcai Wu",
  //   ],
  //   highlightedAuthors: ["Jiawen Zhu"],
  //   venueTag: "VIS'25",
  //   venue: "IEEE Transactions on Visualization and Computer Graphics",
  //   year: "2025",
  //   image: `${import.meta.env.BASE_URL}watchtower.jpg`,
  //   links: [
  //     { label: "Paper", icon: pdfIcon },
  //     { label: "Video", icon: videoIcon },
  //     { label: "Web", icon: webIcon },
  //     { label: "Code", icon: githubIcon },
  //   ],
  // },
];
