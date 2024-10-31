import img from "../assets/logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content pb-5  bottom-0">
      <aside>
        <img className="w-12" src={img} />
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Elysian
          Company Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
