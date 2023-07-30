import Footer from "./Footer";
import Header from "./Header";
import "./Reservation.css"
import {React, useState, useReducer} from 'react';
import BookingForm from "./BookingForm";
import FormField from "./FormField";
import {fetchAPI, submitAPI} from './api.js';
// import { useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, FC, HTMLAttributes, Dispatch } from "react";
// import { Container, Top, Form, FormMessageError } from "./styles";
import { useNavigate, NavigateFunction } from "react-router-dom";
import Popup from "./Popup";
// export default function Reservation({availableTimes, dispatch, submitForm}) {
//     console.log(dispatch)
//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         contactNumber: "",
//         date: "",
//         time: "00:00",
//         noOfGuests: 1,
//         occasion: "Birthday"
//     })

//     const handleFormChange = (event) => {
//       const { name, value } = event.target
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         [name]: value
//       }))
//     }

//     const handleDateChange = async (event) => {
//       const { name, value } = event.target
      
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         [name]: value
//       }))
//      dispatch({ type: 'UPDATE_TIMES', payload: value })
//     }

//     const handleSubmit = (event) => {
//       event.preventDefault()
//       submitForm(formData)
//     }

//     const currentDate = new Date().toISOString().split("T")[0]
//     const options = availableTimes.map(time => <option key={time}>{time}</option>)
//     return (
//       <main>
//         <p className="desc-text form-desc">Please fill in the form below accurately to enable us serve you nicely.</p>
//         <form onSubmit={handleSubmit}>
//           <div className="seperate">
//             <label htmlFor="first-name">First Name</label>
//             <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleFormChange} required />
//           </div>
//           <div className="seperate">
//             <label htmlFor="last-name">Last Name</label>
//             <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleFormChange} required />
//           </div>
//           <div className="seperate">
//             <label htmlFor="contact-number">Contact Number</label>
//             <input type="text" id="contact-number" name="contactNumber" placeholder="123-456-7890"
//             value={formData.contactNumber} onChange={handleFormChange} 
//             pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
//           </div>
//           <div className="seperate date-time">
//             <div className="seperate-child">
//               <label htmlFor="res-date">Choose date</label>
//               <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange} required min={currentDate}/>
//             </div>
//             <div className="seperate-child">
//               <label htmlFor="res-time">Choose time</label>
//               <select id="res-time " name="time" value={formData.time} onChange={handleFormChange} required>
//                 {options}
//               </select>
//             </div>
//           </div>
//           <div className="seperate guests-occasion">
//             <div className="seperate-child">
//               <label htmlFor="guests">Number of guests</label>
//               <input type="number" placeholder="1" min="1" max="10" required id="guests" name="noOfGuests" value={formData.noOfGuests} onChange={handleFormChange}/>
//             </div>
//             <div className="seperate-child">
//               <label htmlFor="occasion">Occasion</label>
//               <select id="occasion" name="occasion" required value={formData.occasion} onChange={handleFormChange}>
//                 <option>Birthday</option>
//                 <option>Anniversary</option>
//               </select>
//             </div>
//           </div>
//           <input className="submit" type="submit" value="Reserve" aria-label="submit button"/>
//       </form>
//       </main>
//     )
//   }
  

  



const Reservations = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e, formValues) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const areAllFieldsFilled = Object.values(formValues).every(
      (value) => value
    );

    if (areAllFieldsFilled) {
      setIsPopupVisible(true);
    }
  };

  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };

  const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
  ];

  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <>
    <Header/>
    <div data-testid="reservations-component" className="reservation">
      <div className="reservation-card">
        <h1 className="reservation-title">Table reservation</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          onFormSubmit={handleFormSubmit}
          isFormSubmitted={isFormSubmitted}
        />
      </div>

      {isPopupVisible && (
        <Popup
          onClose={() => {
            setIsPopupVisible(false);
            // navigate(pages.get("home").path);
          }}
          title="Reservation Completed!"
          description="Thank you for choosing Little Lemon! Your reservation has been successfully made. You will receive a confirmation email with the details of your reservation. We are excited to see you soon!"
        />
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Reservations;







// const Reservation = () => {
//     const minimumDate = new Date().toISOString().split('T')[0];
//     // const defaultTime = availableTimes[0];
//     const defaultTime = availableTimes.length > 0 ? availableTimes[0] : '17:00';

//     const minimumNumberOfGuests = 1;
//     const maximumNumberOfGuests = 10;
//     const occasions = ['Birthday', 'Anniversary'];
//     const invalidDateErrorMessage = 'Please choose a valid date';
//     const invalidTimeErrorMessage = 'Please choose a valid time';
//     const invalidOccasionErrorMessage = 'Please choose a valid occasion';
//     const invalidNumberOfGuestsErrorMessage = 
//       'Please enter a number between 1 and 10';
  
//     const [date, setDate] = useState(minimumDate);
//     const [time, setTime] = useState(defaultTime);
//     const [
//       numberOfGuests, 
//       setNumberGuests
//     ] = useState(minimumNumberOfGuests);
//     const [occasion, setOccasion] = useState(occasions[0]);
  
//     const isDateValid = () => date !== '';
//     const isTimeValid = () => time !== '';
//     const isNumberOfGuestsValid = () => numberOfGuests !== '';
//     const isOccasionValid = () => occasion !== '';
  
//     const areAllFieldsValid = () => 
//       isDateValid() 
//       && isTimeValid() 
//       && isNumberOfGuestsValid() 
//       && isOccasionValid();
    
//     const handleDateChange = e => {
//       setDate(e.target.value);
//       dispatchOnDateChange(e.target.value);
//     };
  
//     const handleTimeChange = e => setTime(e.target.value);
  
//     const handleFormSubmit = e => {
//       e.preventDefault();
//       submitData({ date, time, numberOfGuests, occasion, });
//     };
  
//     return (
//       <form onSubmit={handleFormSubmit}>
//         <FormField 
//           label="Date" 
//           htmlFor="booking-date" 
//           hasError={!isDateValid()} 
//           errorMessage={invalidDateErrorMessage}
//         >
//           <input 
//             type="date" 
//             id="booking-date" 
//             name="booking-date" 
//             min={minimumDate} 
//             value={date} 
//             required={true} 
//             onChange={handleDateChange}
//           />
//         </FormField>
//         <FormField 
//           label="Time" 
//           htmlFor="booking-time" 
//           hasError={!isTimeValid()} 
//           errorMessage={invalidTimeErrorMessage}
//         >
//           <select 
//             id="booking-time" 
//             name="booking-time" 
//             value={time} 
//             required={true} 
//             onChange={handleTimeChange}
//           >
//             {availableTimes.map(times => 
//               <option data-testid="booking-time-option" key={times}>
//                 {times}
//               </option>
//             )}
//           </select>
//         </FormField>
//         <FormField 
//           label="Number of guests" 
//           htmlFor="booking-number-guests" 
//           hasError={!isNumberOfGuestsValid()} 
//           errorMessage={invalidNumberOfGuestsErrorMessage}
//         >
//           <input 
//             type="number" 
//             id="booking-number-guests" 
//             name="booking-number-guests" 
//             value={numberOfGuests} 
//             min={minimumNumberOfGuests} 
//             max={maximumNumberOfGuests} 
//             required={true} 
//             onChange={e => setNumberGuests(e.target.value)}
//           />
//         </FormField>
//         <FormField 
//           label="Occasion" 
//           htmlFor="booking-occasion" 
//           hasError={!isOccasionValid()} 
//           errorMessage={invalidOccasionErrorMessage}
//         >
//           <select 
//             id="booking-occasion" 
//             name="booking-occasion" 
//             value={occasion} 
//             required={true} 
//             onChange={e => setOccasion(e.target.value)}
//           >
//             {occasions.map(occasion => 
//               <option data-testid="booking-occasion-option" key={occasion}>
//                 {occasion}
//               </option>
//             )}
//           </select>
//         </FormField>
//         <button 
//           className="button-primary" 
//           type="submit" 
//           disabled={!areAllFieldsValid()}
//         >
//           Make your reservation
//         </button>
//       </form>
//     );
//   };
  
//   export default Reservation;



// function Reservation(){

//     const [selectedDate, setSelectedDate] = useState('');
//     const [selectedTime, setSelectedTime] = useState('17:00');
//     const [guests, setGuests] = useState(1);
//     const [occasion, setOccasion] = useState('Birthday');
//     const [availableTimes, setAvailableTimes] = useState([]);
  
//     useEffect(() => {
//       // Function to fetch available times for today's date
//       const initializeTimes = async () => {
//         const today = new Date();
//         const formattedDate = formatDate(today);
//         const times = await fetchAPI(formattedDate);
//         setAvailableTimes(times);
//       };
  
//       initializeTimes();
//     }, []);
  
//     // Function to fetch available times for the selected date
//     const updateTimes = async () => {
//       const times = await fetchAPI(selectedDate);
//       setAvailableTimes(times);
//     };
  
//     // Helper function to format date as 'YYYY-MM-DD'
//     const formatDate = (date) => {
//       const year = date.getFullYear();
//       const month = String(date.getMonth() + 1).padStart(2, '0');
//       const day = String(date.getDate()).padStart(2, '0');
//       return `${year}-${month}-${day}`;
//     };
  
//     // Handle form submission
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       const formData = {
//         date: selectedDate,
//         time: selectedTime,
//         guests: guests,
//         occasion: occasion,
//       };
  
//       const isSubmitted = await submitAPI(formData);
//       if (isSubmitted) {
//         // Handle successful form submission
//         console.log('Form submitted successfully!');
//       } else {
//         // Handle form submission error
//         console.error('Form submission failed.');
//       }
//     };
//     return(
//         <>
//             <Header />
//             <div className="restyle">

//             <div className="form-container">
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                     <label htmlFor="res-date">Choose date</label>
//                     <input
//                         type="date"
//                         id="res-date"
//                         value={selectedDate}
//                         onChange={(e) => setSelectedDate(e.target.value)}
//                     />

//                     <label htmlFor="res-time">Choose time</label>
//                     <select
//                         id="res-time"
//                         value={selectedTime}
//                         onChange={(e) => setSelectedTime(e.target.value)}
//                     >
//                         {availableTimes.map((time) => (
//                         <option key={time} value={time}>
//                             {time}
//                         </option>
//                         ))}
//                     </select>
//                     </div>
//                     <div>
//                     <label htmlFor="guests">Number of guests</label>
//                     <input
//                         type="number"
//                         placeholder="1"
//                         min="1"
//                         max="10"
//                         id="guests"
//                         value={guests}
//                         onChange={(e) => setGuests(e.target.value)}
//                     />

//                     <label htmlFor="occasion">Occasion</label>
//                     <select
//                         id="occasion"
//                         value={occasion}
//                         onChange={(e) => setOccasion(e.target.value)}
//                     >
//                         <option value="Birthday">Birthday</option>
//                         <option value="Anniversary">Anniversary</option>
//                     </select>

//                     <input type="submit" value="Make Your reservation" />
//                     </div>
//                 </form>
//             </div>
            
//             </div>
            
//             <Footer/>
//         </>
//     )
// }

// export default Reservation;