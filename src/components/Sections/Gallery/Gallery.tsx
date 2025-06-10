import React from "react";
// Component
import Image from "../../Common/Image";
import styles from "./Gallery.module.scss";

// Explore
import explore1 from '../../../assets/images/gallery/gallery-1.png';
import explore2 from '../../../assets/images/gallery/gallery-2.png';
import explore3 from '../../../assets/images/gallery/gallery-3.png';
import explore4 from '../../../assets/images/gallery/gallery-4.png';
import explore5 from '../../../assets/images/gallery/gallery-5.png';
import explore6 from '../../../assets/images/gallery/gallery-6.png';

const GallerySection: React.FC = () => (
  <section className={styles.explore}>
    <header className={styles.explore__header}>
      <h2 className={styles.explore__title}>Explore more</h2>
    </header>
    {/* Image */}
    <div className={styles.explore__showcase}>
      <Image
        className={styles.explore__imgContainer}
        src={explore1}
        alt='explore Image'
      />
      <Image
        className={styles.explore__imgContainer}
        src={explore2}
        alt='explore Image'
      />
      <Image
        className={styles.explore__imgContainer}
        src={explore3}
        alt='explore Image'
      />
      <Image
        className={styles.explore__imgContainer}
        src={explore4}
        alt='explore Image'
      />
      <Image
        className={styles.explore__imgContainer}
        src={explore5}
        alt='explore Image'
      />
      <Image
        className={styles.explore__imgContainer}
        src={explore6}
        alt='explore Image'
      />
    </div>
  </section>
);

export default GallerySection;