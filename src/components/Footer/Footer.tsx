// social links
const socials = [
  {
    id: "0",
    icon: "/assets/twitter.png",
    label: "twitter",
    url: "https://twitter.com/kalashsharma99",
  },
  {
    id: "1",
    icon: "/assets/github.png",
    label: "github",
    url: "https://github.com/k99sharma",
  },
  {
    id: "2",
    icon: "/assets/linkedin.png",
    label: "linkedin",
    url: "https://www.linkedin.com/in/kalashsharma99/",
  },
];

// social link component
type SocialLinkProps = {
  key: string;
  id: string;
  icon: string;
  label: string;
  url: string;
};

function SocialLink(_props: SocialLinkProps) {
  // props destructuring
  const { url, icon, label } = _props;

  return (
    <div className="socialLink mx-3">
      <a target="_blank" href={url}>
        <img height={25} width={25} src={icon} alt={label} />
      </a>
    </div>
  );
}

// footer component
export default function Footer() {
  return (
    <div className="footer flex flex-col items-center mb-5">
      <div className="footer-socials flex items-center mb-5">
        {socials.map((social) => (
          <SocialLink key={social.id} {...social} />
        ))}
      </div>

      <div className="footer-developer text-sm mb-2">
        Designed & Built by{" "}
        <a
          className="text-blue-600"
          href="https://www.kalashsharma.com"
          target="_blank"
        >
          kalashsharma99
        </a>
      </div>

      <div className="footer-copyright text-sm">
        © {new Date().getFullYear()} Bifrost. All Rights Reserved
      </div>
    </div>
  );
}
