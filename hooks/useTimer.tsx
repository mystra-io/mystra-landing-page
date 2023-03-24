import { useEffect, useState } from 'react';

export const useTimer = (targetDate : Date) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime() + (new Date()).getTimezoneOffset()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - (new Date().getTime() + (new Date()).getTimezoneOffset()*60000));
      console.log(countDown)
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown : number) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

