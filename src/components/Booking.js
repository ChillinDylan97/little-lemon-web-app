import React from 'react';
import BookingForm from './BookingForm';
const Booking=(props)=> {
    return(
    <BookingForm availableTimes={props.availableTimes}
    dispatch = {props.dispatch} SubmitForm={props.SubmitForm}/>
    );l
}
export default Booking;
