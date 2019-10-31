import React from 'react';
import PropTypes from 'prop-types';

const BlockReaction = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="feather-icon"
      {...otherProps}
    >
      <path
        d="M16 8C16 12.4182 12.4182 16 8 16C3.58178 16 0 12.4182 0 8C0 3.58178 3.58178 0 8 0C12.4182 0 16 3.58178 16 8Z"
        fill="#BE1931"
      />
      <path
        d="M14.2223 8.88883C14.2223 9.3795 13.8241 9.77772 13.3334 9.77772H2.66672C2.17605 9.77772 1.77783 9.3795 1.77783 8.88883V7.11106C1.77783 6.62039 2.17605 6.22217 2.66672 6.22217H13.3334C13.8241 6.22217 14.2223 6.62039 14.2223 7.11106V8.88883Z"
        fill="white"
      />
    </svg>
  );
};

BlockReaction.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BlockReaction.defaultProps = {
  color: 'width=',
  size: '24',
};

export default BlockReaction;
