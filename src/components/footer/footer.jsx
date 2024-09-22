import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FooterStyle } from './footerStyle';

function Order() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <FooterStyle>
      <div className="order">
        <p>
          We re open from 18:00 to 00:00. Come visit us or order online.
        </p>
        <p>Current time: {formatTime(currentTime)}</p>
        <button className="btn" onClick={handleClick}>Order</button>
        {showMessage && (
          <p>Thank you for using our services, but we are still working on it!</p>
        )}
      </div>
    </FooterStyle>
  );
}

Order.propTypes = {
  closeHour: PropTypes.number.isRequired,
  openHour: PropTypes.number.isRequired,
};

export default Order;