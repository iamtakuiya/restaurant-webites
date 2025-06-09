import React from 'react';

// Components
import Button from '../../components/Common/Button';
import Image from '../../components/Common/Image';

import BannerImage from '../../assets/images/events/bannerImage.png';
import Image3 from '../../assets/images/events/image-3.png';
import Image4 from '../../assets/images/events/image-4.png';
import Image5 from '../../assets/images/events/image-5.png';



// Style
import styles from './EventsPage.module.scss';

const EventsPage: React.FC = () => {
  return (
    <>
      <h1 style={{ display: 'none' }} aria-label='Events Info'>Events Info</h1>
      {/* Event Banner */}
      <section className={styles.eventBanner}>
        <article className={styles.eventBanner__container}>
          <Image 
            className={styles.eventBanner__img}
            src={BannerImage}
            alt="Banner Image"
          />
          <div className={styles.eventBanner__content}>
            <h2 className={styles.eventBanner__heading}>Holiday celebrations</h2>
            <p className={styles.eventBanner__description}>Stay up-to-date on all the exciting events at LaidBack! From special tasting menus and holiday celebrations to live music and guest chef appearances, you'll find all the details here. Check back often as our calendar is always evolving.</p>
          </div>
        </article>
      </section>
      {/* Discover upcoming block */}
      <div className={styles.discover}>
        <header className={styles.discover__header}>
          <h3 className={styles.discover__headline}>Discover upcoming special events</h3>
        </header>
      </div>
      {/* Book a table */}
      <section className={styles.bookingForm}>
        <div className={styles.bookingForm__container}>
          {/* Content */}
          <div className={styles.bookingForm__content}>
            <h3 className={styles.bookingForm__heading}>Reserve Your Spot at <br />LaidBack</h3>
            {/* Separator */}
            <div className="separator--sm"></div>
            <p className={styles.bookingForm__description}>Our award-winning cuisine, our stunning city views, our family-friendly atmosphere</p>
          </div>
          {/* Reservation Form */}
          <div className={styles.formContainer}>
            <div className={styles.formContainer__content}>
              <h5 className={styles.formContainer__heading}>Book a Table</h5>
              <p className={styles.formContainer__text}>Meet our delicious food and welcoming atmosphere. </p>
            </div>
            <form className={styles.form} action="/" method="POST">
              <fieldset className={`${styles.form__fieldItem} ${styles['form__row--full']}`}>
                <label className={styles.form__label}>Name</label>
                <input className={styles.form__input}  type="text" name="name" placeholder={"Name"} required/>
              </fieldset>
              <fieldset className={`${styles.form__fieldItem}`}>
                <label className={styles.form__label}>Phone</label>
                <input className={styles.form__input} type="tel" name="phone" placeholder={"Phone"} required/>
              </fieldset>
              <fieldset className={`${styles.form__fieldItem}`}>
                <label className={styles.form__label}>Address</label>
                <input className={styles.form__input} type="text" name="address" placeholder={"Address"} required/>
              </fieldset>
              <fieldset className={`${styles.form__fieldItem}`}>
                <label className={styles.form__label}>Number of guests</label>
                <input className={styles.form__input} type="number" name="guests" placeholder={"Number of guests"} required/>
              </fieldset>
              <fieldset className={`${styles.form__fieldItem}`}>
                <label className={styles.form__label}>Date</label>
                <input className={styles.form__input} type="date" name="date" placeholder={"15/24/2025"} required/>
              </fieldset>
              <div className={`${styles.form__fieldItem} ${styles['form__row--full']}`}>
                <Button variant='primary' cta="Booking now!" />
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Special feature */}
      <section className={styles.specialFeature}>
      <div className="overlay--dark"></div>
      <div className={styles.specialFeature__content}>
        <div className={styles.specialFeature__description}>
          <h2 className={styles.specialFeature__title}>Catering & Special Features<br />Authentic Italian Feasts</h2>
          <p className={styles.specialFeature__text}>Create a sophisticated and memorable event with our authentic Italian catering. We offer customized menus featuring handcrafted pasta, flavorful sauces, and exquisite desserts, ensuring a dining experience.</p>
        </div>
        <div className="btnContainer">
          <Button variant='primary' cta="Let's Plan" />
        </div>
      </div>
    </section>
    {/* Gallery */}
    <section className={styles.eventGallery}>
      <div className={styles.eventGallery__showcase}>
        <Image 
          src={Image3}
          alt="Banner Image"
        />
        <Image 
          src={Image4}
          alt="Banner Image"
        />
        <Image 
          src={Image5}
          alt="Banner Image"
        />
      </div>
    </section>
    </>
  );
};

export default EventsPage;