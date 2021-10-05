import { useEffect, useLayoutEffect, useRef, useState } from "react";

const divide = (date) => {
  const target = new Date(date).getTime();
  const now = new Date().getTime();
  const distance = target - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 3600 * 24)) / (1000 * 3600));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}


export default function useCountdown(date) {
  const timer = useRef(null);

  const { days: d, hours: h, minutes: m, seconds: s } = divide(date)

  const [days, setDays] = useState(d);
  const [hours, setHours] = useState(h);
  const [minutes, setMinutes] = useState(m);
  const [seconds, setSeconds] = useState(s);
  const [isFinish, setIsFinish] = useState(false);

  useLayoutEffect(() => {
    timer.current = window.setInterval(() => {
      const target = new Date(date).getTime();
      const now = new Date().getTime();

      if (now >= target) return setIsFinish(true);
      const { days, hours, minutes, seconds } = divide(date)

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);

    return () => window.clearInterval(timer.current);
  }, [date]);

  return { days, hours, minutes, seconds, isFinish };
}
