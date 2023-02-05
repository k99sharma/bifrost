// social links
const socials = [
  {
    icon: "",
    label: "",
    url: "",
  },
];

// footer component
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-social">
        {socials.map((social) => (
          <div key={social.label} className="footer-social-link">
            <img src={social.icon} alt={social.label} />
          </div>
        ))}
      </div>

      <div className="footer-"></div>
    </div>
  );
}
