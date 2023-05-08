import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <img
        src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683474943/pruebaUM/Image_2_acdyxg.png"
        alt="logo"
      />
      <section className={styles.iconsContainer}>
        <img
          src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683474972/pruebaUM/Group_31_zb7c8l.png"
          alt="instagram"
        />
        <img
          src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683475014/pruebaUM/Path_3_ourlhv.png"
          alt="facebook"
        />
        <img
          src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683475038/pruebaUM/Path_4_hyb6h9.png"
          alt="youtube"
        />
      </section>
      <section className={styles.conditions}>
        <p>Términos y Condiciones</p>
        <p>Política de Datos</p>
      </section>
    </div>
  );
};

export default Footer;
