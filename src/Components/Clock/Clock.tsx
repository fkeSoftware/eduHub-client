import React, { useState, useEffect } from "react";
import "./clock.css";
const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="clock">
      {" "}
      <div
        className="hand hour"
        style={{ transform: `rotate(${hours * 30 + minutes / 2}deg)` }}
      />{" "}
      <div
        className="hand minute"
        style={{ transform: `rotate(${minutes * 6}deg)` }}
      />{" "}
      <div
        className="hand second"
        style={{ transform: `rotate(${seconds * 6}deg)` }}
      />{" "}
      <div className="center-point" />
      <div className="number n1">1</div>
      <div className="number n2">2</div>
      <div className="number n3">3</div>
      <div className="number n4">4</div>
      <div className="number n5">5</div>
      <div className="number n6">6</div>
      <div className="number n7">7</div>
      <div className="number n8">8</div>
      <div className="number n9">9</div>
      <div className="number n10">10</div>
      <div className="number n11">11</div>
      <div className="number n12">12</div>
    </div>
  );
};

export default Clock;
