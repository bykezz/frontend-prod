import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.componentChild} />
      <div className={styles.signUpAnd}>Sign up and stay up to date.</div>
      <div className={styles.copyright2023Farmjoint}>
        © Copyright 2023 Farmjoint
      </div>
      <div className={styles.aboutBlogContactContainer}>
        <p className={styles.about}>About</p>
        <p className={styles.about}>Blog</p>
        <p className={styles.about}>Contact</p>
        <p className={styles.about}>Service</p>
      </div>
      <div className={styles.myAccountShoppingContainer}>
        <p className={styles.about}>My Account</p>
        <p className={styles.about}>Shopping Cart</p>
      </div>
      <div className={styles.myAccountShoppingContainer1}>
        <p className={styles.about}>My Account</p>
        <p className={styles.about}>Shopping Cart</p>
      </div>
      <div className={styles.componentItem} />
      <div className={styles.componentInner} />
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
      <img className={styles.fafacebookIcon} alt="" src="/vector6.svg" />
      <img className={styles.mdiinstagramIcon} alt="" src="/vector.svg" />
      <img className={styles.mditwitterIcon} alt="" src="/vector4.svg" />
      <img className={styles.mdilinkedinIcon} alt="" src="/vector5.svg" />
      <input
        className={styles.rectangleInput}
        placeholder="        Your email"
        type="email"
      />
      <button className={styles.groupParent}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.submit}>Submit</div>
      </button>
      <img
        className={styles.faSolidheadphonesAltIcon}
        alt=""
        src="/fasolidheadphonesalt.svg"
      />
    </div>
  );
};

export default Footer;
