import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-content">
      <div className="right">
        <a href="/">Home</a>
        <a href="/store">Store</a>
        <a href="/about">About Us</a>
      </div>
      <div className="bottom">
        <hr />
        <h3>
          Made with ❤ by{" "}
          <a href="linked.com/in/shahzainshafique">Shahzain Shafique</a>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
