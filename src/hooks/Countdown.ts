// import {useCallback, useEffect, useRef, useState} from 'react';

import {useCallback, useEffect, useRef, useState} from 'react';

// export const useCountDown = (timerFor?: number): {time: string} => {
//   const [remain, SetTotal] = useState(0);
//   const interval = useRef(1000); // ms
//   const expected = useRef(Date.now() + interval.current);

//   useEffect(() => {
//     if (timerFor && timerFor > 0) {
//       SetTotal(timerFor);
//       expected.current = Date.now() + interval.current;
//     }
//   }, [timerFor]);

//   const step = useCallback(() => {
//     let dt = Date.now() - expected.current;
//     if (dt > 1000) {
//       return null;
//     }
//     SetTotal(current => current - 1);
//     console.log(remain);
//     if (remain > 0) {
//       expected.current += interval.current;
//       setTimeout(step, Math.max(0, interval.current - dt));
//     }
//   }, []);
//   //   setTimeout(step, interval.current);
//   return {time: 'time' + remain};
// };

function MilliSecond2Time(secs: number): {hh: number; mm: number; ss: number} {
  if (secs < 0) {
    return {
      hh: 0,
      mm: 0,
      ss: 0,
    };
  }
  const seconds = Math.floor((secs / 1000) % 60);
  const minutes = Math.floor((secs / (1000 * 60)) % 60);
  const hours = Math.floor((secs / (1000 * 60 * 60)) % 24);

  return {
    hh: hours,
    mm: minutes,
    ss: seconds,
  };
}

function countdown(startTime: number) {
  const diff = Date.now() - startTime;
  //   console.log(diff);
  return MilliSecond2Time(diff);
}

export const useCountdown = (sec: number) => {
  const [time, SetTime] = useState('');
  const totalTime = MilliSecond2Time(sec * 1000);
  const intervalRef = useRef<number>();
  const StartTimer = useCallback(() => {
    const st = Date.now();
    intervalRef.current = setInterval(() => {
      const data = countdown(st);
      const m = totalTime?.mm - data?.mm;
      const s = totalTime?.ss - data?.ss;
      if (s < 0) {
        if (intervalRef.current) {
          // intervalRef.current = 0;
          clearInterval(intervalRef.current);
        }
      } else {
        SetTime([m, s].join(':'));
      }
    }, 1000);
  }, [totalTime?.mm, totalTime?.ss]);

  //   if (time === '0' && intervalRef.current) {
  //     // intervalRef.current = 0;
  //     clearInterval(intervalRef.current);
  //   }
  //   console.log(time);

  useEffect(() => {
    StartTimer();
  }, [StartTimer]);
  return {time};
};
