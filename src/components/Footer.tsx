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
        <h4>
          Made with <span style={{ color: "red" }}>❤</span> by{" "}
          <a href="linked.com/in/shahzainshafique">Shahzain Shafique</a>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
