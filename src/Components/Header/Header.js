import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header className="Header">
      <a href="/" className="Header-Emblem">
        <img className="Header-Logo" src={logo} alt=""></img>
        <div className="Header-Text">CROWDME</div>
      </a>
      <div className="Header-MenuButton"></div>
      <nav className="Header-Menu">
        <a href="#1" className="Header-MenuItem">HOME</a>
        <a href="#1" className="Header-MenuItem">HOW IT WORKS</a>
        <a href="#1" className="Header-MenuItem">DISCOVER A PROJECT</a>
        <a href="#1" className="Header-MenuItem">BLOG</a>
        <a href="#1" className="Header-MenuItem">FIND OUT MORE</a>
      </nav>
      <button className="Header-LoginButton">LOGIN</button>
    </header>
  )
};

export default Header;