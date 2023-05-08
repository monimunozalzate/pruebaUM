import styles from "./Cellphones.module.css";
import { icons } from "../../../utils/utils";

const Cellphones = () => {
  return (
    <div className={styles.cellphonesContainer}>
      <section className={styles.left}>
        <img
          src="https://res.cloudinary.com/dwqrlr45w/image/upload/v1683474525/pruebaUM/Image_13_hlxora.png"
          alt="cellphones"
        />
      </section>
      <section className={styles.right}>
      <h1 className={styles.buy}>COMPRA TU</h1>
        <div className={styles.buyContainer}>
          
          <h2 className={styles.cellphone}>MÓVIL</h2>
        </div>
        <div className={styles.iconsContainer}>
          {icons.map((icon)=>{
            return (
              <img key={icon.id}
            src={icon.url}
            alt={icon.name}
          />
            )
          })}
          
        </div>
        <p className={styles.paragraph}>
          Amet nulla facilisi morbi tempus. Dictum varius duis at consectetur.
          Tortor vitae purus faucibus ornare suspendisse sed nisi. Nec nam
          aliquam sem et. Eget gravida cum sociis natoque penatibus et. Ac
          tincidunt vitae semper quis.
        </p>
        <button className={styles.buyNowButton}>Cómpralo Ahora</button>
      </section>
    </div>
  );
};

export default Cellphones;
