import footerlogo from "../../content/images/footer/cosetlogo.svg";
import notion from "../../content/images/footer/notion.svg";
import youtube from "../../content/images/footer/youtube.svg";
import twitter from "../../content/images/footer/twitter.svg";
import mirror from "../../content/images/footer/mirror.svg";

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  target?: string;
  rel?: string;
}

export interface FooterConfig {
  logo: string;
  copyright: string;
  email: string;
  socialLinks: SocialLink[];
  newsletter: {
    apiEndpoint: string;
    substackConfig: {
      first_url: string;
      first_referrer: string;
      current_url: string;
      source: string;
      referral_code: string;
      referring_pub_id: string;
      additional_referring_pub_ids: string;
    };
  };
}

// Footer 数据配置
export const footerConfig: FooterConfig = {
  logo: footerlogo,
  copyright: "© 2024 Coset. All Rights Reserved.",
  email: "emily@coset.io",
  socialLinks: [
    {
      label: "Mirror",
      href: "https://mirror.xyz/0xeA68d8B403FE1891ae4F309ABeE6D3C9D1089b25",
      icon: mirror,
      target: "_blank",
      rel: "noreferrer",
    },
    {
      label: "Notion",
      href: "https://coset.notion.site/Coset-HackerHouse-13884d3f3d214ed59d430bb472ce523c",
      icon: notion,
      target: "_blank",
      rel: "noreferrer",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCNFowsoGM9OI2NcEP2EFgrw",
      icon: youtube,
      target: "_blank",
      rel: "noreferrer",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/coset_io",
      icon: twitter,
      target: "_blank",
      rel: "noreferrer",
    },
  ],
  newsletter: {
    apiEndpoint: "/api/substack/v1/free",
    substackConfig: {
      first_url: "https://woshizhengqiuwan.substack.com/publish/dashboard",
      first_referrer: "https://substack.com/",
      current_url: "https://woshizhengqiuwan.substack.com/embed",
      source: "embed",
      referral_code: "",
      referring_pub_id: "",
      additional_referring_pub_ids: "",
    },
  },
}; 

// only keeps mirror and youtube, no logo
export const coursesFooterConfig: FooterConfig = {
  logo: "",
  copyright: "© 2024 Coset. All Rights Reserved.",
  email: "emily@coset.io",
  socialLinks: [
    {
      label: "Mirror",
      href: "https://mirror.xyz/0xeA68d8B403FE1891ae4F309ABeE6D3C9D1089b25",
      icon: mirror,
      target: "_blank",
      rel: "noreferrer",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UCNFowsoGM9OI2NcEP2EFgrw",
      icon: youtube,
      target: "_blank",
      rel: "noreferrer",
    },
  ],
  newsletter: {
    apiEndpoint: "/api/substack/v1/free",
    substackConfig: {
      first_url: "https://woshizhengqiuwan.substack.com/publish/dashboard",
      first_referrer: "https://substack.com/",
      current_url: "https://woshizhengqiuwan.substack.com/embed",
      source: "embed",
      referral_code: "",
      referring_pub_id: "",
      additional_referring_pub_ids: "",
    },
  },
};
