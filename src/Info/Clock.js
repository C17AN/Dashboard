import React, { useState } from "react";
import styles from "../InfoStyle/Clock.module.scss";
const Clock = () => {
  const date = new Date();
  //   const [time, setTime] = useState({ curDate: null, curTime: null });
  const [time, setTime] = useState({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    time: date.getHours(),
    minute: date.getMinutes()
  });
  setInterval(() => {
    setTime({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      time: date.getHours(),
      minute: date.getMinutes()
    });
  }, 60000);
  const monthToString = month => {
    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
    }
  };
  return (
    <div className={styles.clock}>
      <div className={styles.date}>
        {`${time.year}, ${monthToString(time.month)} ${time.day}`}
        <br />
      </div>
      <div className={styles.time}>{`${time.time} : ${time.minute}`}</div>
    </div>
  );
};

export default Clock;
