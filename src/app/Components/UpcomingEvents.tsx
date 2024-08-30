// import { useState, useEffect } from 'react';
// import styles from '../styles/components/UpcomingEventsCarousel.module.css';

// const UpcomingEventsCarousel = ({ events }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [events.length]);

//   return (
//     <div className={styles.carousel}>
//       {events.map((event, index) => (
//         <div
//           key={event.id}
//           className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
//         >
//           <img src={event.image} alt={event.title} className={styles.image} />
//           <div className={styles.info}>
//             <h2>{event.title}</h2>
//             <p>{new Date(event.date).toLocaleDateString()}</p>
//             <button className={styles.learnMoreButton}>Learn More</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UpcomingEventsCarousel;
