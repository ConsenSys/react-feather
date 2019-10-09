import React from 'react';
import PropTypes from 'prop-types';

const Sort = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather-icon"
      {...otherProps}
    >
      <path d="M1.85868 5.4966L5.01091 2.34437M5.01091 2.34437L8.16314 5.4966M5.01091 2.34437V9.69957" />
      <path d="M14.1429 10.5238L11 13.6667M11 13.6667L7.85716 10.5238M11 13.6667V6.33333" />
    </svg>
  );
};

Sort.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sort.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sort;
