import React from 'react';

// Components
import Button from '../../components/Common/Button';
import Image from '../../components/Common/Image';

// Images
import Image3 from '../../assets/images/events/image-3.png';
import Image4 from '../../assets/images/events/image-4.png';
import Image5 from '../../assets/images/events/image-5.png';



// Gallery component
const Gallery = ({ images }: { images: string[] }) => {
  return (
    <div className={styles.eventGallery}>
      {images.map((imgSrc, index) => (
        <Image
          key={index}
          className={styles.eventGallery__img} 
          src={imgSrc}
          alt="Banner Image"
        />
      ))}
    </div>
  );
}

// Style
import styles from './EventsPage.module.scss';
import EventBanner from '../../components/Sections/EventBanner';
import { EventBlock } from '../../components/Common/Block';
import ReservationForm from '../../components/Common/Form/ReservationForm';

const EventsPage: React.FC = () => {
  return (
    <>
      <h1 style={{ display: 'none' }} aria-label='Events Info'>Events Info</h1>
      {/* Event Banner */}
      <EventBanner />

      {/* Discover upcoming block */}
      <EventBlock />
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
            <ReservationForm
              className={styles.form}                      // Applies to the <form> element
              fieldItemClassName={styles.form__fieldItem} // Applies to each <fieldset>
              labelClassName={styles.form__label}           // Applies to each <label>
              inputClassName={styles.form__input}           // Applies to each <input>
              formRowFullClassName={styles['form__row--full']} // NEW: Pass this specific class
              buttonText="Booking now!" // Pass the button text
            />
            {/* <form className={styles.form} action="/" method="POST">
              <fieldset className={`${styles.form__fieldItem} ${styles['form__row--full']}`}>
                <label className={styles.form__label}>Name</label>
                <input className={styles.form__input}  type="text" name="name" placeholder={"Name"} required/>
              </fieldset>
              <div className={`${styles.form__fieldItem} ${styles['form__row--full']}`}>
                <Button variant='primary' cta="Booking now!" />
              </div>
            </form> */}
          </div>
        </div>
      </section>
      {/* Special feature */}
      <section className={styles.specialFeature}>
      <div className="overlay--light"></div>
      <div className={styles.specialFeature__content}>
        <div className={styles.specialFeature__description}>
          <p className={styles.specialFeature__kicker}>Special features</p>
          <h2 className={styles.specialFeature__title}>Enjoy an exceptional<br />Journey of taste</h2>
          {/* Separator */}
          <div className="separator--sm"></div>
          <p className={styles.specialFeature__text}>Your exceptional journey of taste awaits at LaidBack. Discover a menu designed to excite your palate and leave a lasting impression. Don't miss the opportunity to experience culinary excellence. Book your table now and prepare for an unforgettable dining adventure!</p>
        </div>
      </div>
    </section>
    {/* Gallery */}
    <section className={styles.eventGallery}>
      <div className={styles.eventGallery__showcase}>
        <Image
          className={styles.eventGallery__img} 
          src={Image3}
          alt="Banner Image"
        />
        <Image
          className={styles.eventGallery__img} 
          src={Image4}
          alt="Banner Image"
        />
        <Image
          className={styles.eventGallery__img} 
          src={Image5}
          alt="Banner Image"
        />
      </div>
    </section>
    </>
  );
};

export default EventsPage;