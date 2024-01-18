import "./header.css";
import logo from "../../../assets/tbcLogo.png";
import hero from "../../../assets/heroImage.png";
export default function Header() {
  return (
    <section className="Main_Wrapper">
      <nav className="nav_wrapper">
        <div className="logo_Wrapper">
          <img src={logo} width={80} />
          <p className="logo_Title">x აკადემია</p>
        </div>
        <ul>
          <li>მთავარი</li>
          <li>TBC IT</li>
          <li className="current_Link">TBC x USAID</li>
          <li>რისკები</li>
        </ul>
      </nav>
      <main>
        <img src={hero} alt="hero image" />
      </main>
    </section>
  );
}
