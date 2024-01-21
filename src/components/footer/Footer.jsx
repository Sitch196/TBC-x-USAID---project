import "./Footer.css";
import footerlogo from "../../../assets/footerlogo.png";
import socialslogo from "../../../assets/socialslogo.png";
export default function Footer() {
  return (
    <section className="footer_container">
      <main className="footer_wrapper">
        <div className="left_container">
          <img src={footerlogo} className="footer_logo" alt="tbc logo" />
          <p>&#169; 2023 ყველა უფლება დაცულია</p>
          <p>წესები და პირობები</p>
        </div>
        <div className="right_container">
          <img src={socialslogo} className="socials_logo" alt="socials logo" />
          <button className="contact_button">მოგვწერეთ</button>
        </div>
      </main>
    </section>
  );
}
