import { useState } from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log("login successful!");
        setFormData({ email: "" });
      } else {
        // Handle errors (e.g., show an error message)
        console.error("login failed");
        setFormData({ email: "" });
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.signUpAnd}>Sign up and stay up to date.</div>
        <div className={styles.copyright2023Farmjoint}>
          © Copyright 2023 Farmjoint
        </div>
        <button className={styles.about}>About</button>
        <button className={styles.blog}>Blog</button>
        <button className={styles.contact}>Contact</button>
        <button className={styles.service}>Service</button>
        <button className={styles.myAccount}>My Account</button>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
        <img
          className={styles.fa6SolidenvelopeOpenTextIcon}
          alt=""
          src="/fa6solidenvelopeopentext.svg"
        />
        <div className={styles.callUs247}>CALL US 24/7</div>
        <b className={styles.address}>ADDRESS</b>
        <b className={styles.account}>ACCOUNT</b>
        <b className={styles.information}>INFORMATION</b>
        <b className={styles.subscribe}>SUBSCRIBE</b>
        <div className={styles.emailUs}>EMAIL US</div>
        <div className={styles.followUs}>FOLLOW US</div>
        <div className={styles.div}>+234-703-1234-567</div>
        <div className={styles.contactfarmjointcom}>contact@farmjoint.com</div>

        <button className={styles.fafacebook}>
          <img className={styles.vectorIcon} alt="" src="/vector6.svg" />
        </button>
        <button className={styles.mdiinstagram}>
          <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
        </button>
        <button className={styles.mditwitter}>
          <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
        </button>
        <button className={styles.mdilinkedin}>
          <img className={styles.vectorIcon3} alt="" src="/vector5.svg" />
        </button>
        <input
          className={styles.rectangleInput}
          type="email"
          name="email"
          placeholder="       Your email"
          onChange={handleInputChange}
          value={formData.email}
        />
      </div>
      <img
        className={styles.faSolidheadphonesAltIcon1}
        alt=""
        src="/fasolidheadphonesalt.svg"
      />
      <div className={styles.footerInner}>
        <button className={styles.frameParent} onClick={handleSubmit}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.submitWrapper}>
            <div className={styles.submit}>Submit</div>
          </div>
        </button>
      </div>
      <button className={styles.shoppingCart}>Shopping Cart</button>
    </footer>
  );
};

export default Footer;
