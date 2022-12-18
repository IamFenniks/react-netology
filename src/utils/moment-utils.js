import moment from 'moment';

export const getSpecificDate = (month, dayOfMonth, year) => {  
    return moment(`${month}-${dayOfMonth}-${year}`, 'MM-DD-YYYY').toDate();  
  };
  
  export const getDayOfMonth = (date) => moment(date).date();
  
  export const getMonth = (date) => moment(date).month();
  
  export const getYear = (date) => moment(date).year();
  
  export const getToday = () => moment().toDate();
  
  export const getReadableWeekday = (date) => moment(date).format('dddd').charAt(0).toUpperCase() + (moment(date).format('dddd').slice(1));
  
  export const getReadableMonthDate = (date) => moment(date).format('MMMM Do').substring(0, moment(date).format('MMMM').length-1) + "я";
  export const getMonthDate = (date) => moment(date).format('MMMM').charAt(0).toUpperCase() + (moment(date).format('MMMM').slice(1));
  
  export const getMonthDayYear = (date) => moment(date).format('MM-DD-YYYY');