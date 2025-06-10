// import React from 'react';

// // Components
// import Button from '../../components/Common/Button';
// import Image from '../../components/Common/Image';

// // Images
// import Image3 from '../../assets/images/events/image-3.png';
// import Image4 from '../../assets/images/events/image-4.png';
// import Image5 from '../../assets/images/events/image-5.png';



// // Gallery component
// const Gallery = ({ images }) => {

// }

// // Style
// import styles from './EventsPage.module.scss';
// import EventBanner from '../../components/Sections/EventBanner';
// import { EventBlock } from '../../components/Common/Block';

// const EventsPage: React.FC = () => {
//   return (
//     <>
//       <h1 style={{ display: 'none' }} aria-label='Events Info'>Events Info</h1>
//       {/* Event Banner */}
//       <EventBanner />

//       {/* Discover upcoming block */}
//       <EventBlock />
//       {/* Book a table */}
//       <section className={styles.bookingForm}>
//         <div className={styles.bookingForm__container}>
//           {/* Content */}
//           <div className={styles.bookingForm__content}>
//             <h3 className={styles.bookingForm__heading}>Reserve Your Spot at <br />LaidBack</h3>
//             {/* Separator */}
//             <div className="separator--sm"></div>
//             <p className={styles.bookingForm__description}>Our award-winning cuisine, our stunning city views, our family-friendly atmosphere</p>
//           </div>
//           {/* Reservation Form */}
//           <div className={styles.formContainer}>
//             <div className={styles.formContainer__content}>
//               <h5 className={styles.formContainer__heading}>Book a Table</h5>
//               <p className={styles.formContainer__text}>Meet our delicious food and welcoming atmosphere. </p>
//             </div>
//             <form className={styles.form} action="/" method="POST">
//               <fieldset className={`${styles.form__fieldItem} ${styles['form__row--full']}`}>
//                 <label className={styles.form__label}>Name</label>
//                 <input className={styles.form__input}  type="text" name="name" placeholder={"Name"} required/>
//               </fieldset>
//               <fieldset className={`${styles.form__fieldItem}`}>
//                 <label className={styles.form__label}>Phone</label>
//                 <input className={styles.form__input} type="tel" name="phone" placeholder={"Phone"} required/>
//               </fieldset>
//               <fieldset className={`${styles.form__fieldItem}`}>
//                 <label className={styles.form__label}>Address</label>
//                 <input className={styles.form__input} type="text" name="address" placeholder={"Address"} required/>
//               </fieldset>
//               <fieldset className={`${styles.form__fieldItem}`}>
//                 <label className={styles.form__label}>Number of guests</label>
//                 <input className={styles.form__input} type="number" name="guests" placeholder={"Number of guests"} required/>
//               </fieldset>
//               <fieldset className={`${styles.form__fieldItem}`}>
//                 <label className={styles.form__label}>Date</label>
//                 <input className={styles.form__input} type="date" name="date" placeholder={"15/24/2025"} required/>
//               </fieldset>
//               <div className={`${styles.form__fieldItem} ${styles['form__row--full']}`}>
//                 <Button variant='primary' cta="Booking now!" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//       {/* Special feature */}
//       <section className={styles.specialFeature}>
//       <div className="overlay--light"></div>
//       <div className={styles.specialFeature__content}>
//         <div className={styles.specialFeature__description}>
//           <p className={styles.specialFeature__kicker}>Special features</p>
//           <h2 className={styles.specialFeature__title}>Enjoy an exceptional<br />Journey of taste</h2>
//           {/* Separator */}
//           <div className="separator--sm"></div>
//           <p className={styles.specialFeature__text}>Your exceptional journey of taste awaits at LaidBack. Discover a menu designed to excite your palate and leave a lasting impression. Don't miss the opportunity to experience culinary excellence. Book your table now and prepare for an unforgettable dining adventure!</p>
//         </div>
//       </div>
//     </section>
//     {/* Gallery */}
//     <section className={styles.eventGallery}>
//       <div className={styles.eventGallery__showcase}>
//         <Image
//           className={styles.eventGallery__img} 
//           src={Image3}
//           alt="Banner Image"
//         />
//         <Image
//           className={styles.eventGallery__img} 
//           src={Image4}
//           alt="Banner Image"
//         />
//         <Image
//           className={styles.eventGallery__img} 
//           src={Image5}
//           alt="Banner Image"
//         />
//       </div>
//     </section>
//     </>
//   );
// };

// export default EventsPage;