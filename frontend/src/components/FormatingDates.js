import React from "react";

const FormatingDates = (date) => {
    let formatted_date = null;

    if (date) {
        const dateObject = new Date(date);
        const day = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();

        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        formatted_date = `${formattedDay}.${formattedMonth}.${year}`;
    }

  return formatted_date
}

export default FormatingDates;
