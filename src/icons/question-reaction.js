import React from 'react';
import PropTypes from 'prop-types';

const QuestionReaction = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="feather-icon"
      {...otherProps}
    >
      <path
        d="M4.36366 12.1213C3.56026 12.1213 2.90911 11.4701 2.90911 10.6667V8.72732C2.90911 7.92392 3.56026 7.27277 4.36366 7.27277C4.65603 7.26986 7.27277 6.78792 7.27277 4.84851C7.27277 3.87881 6.30306 2.90911 4.84851 2.90911C3.66499 2.90911 2.90911 3.87881 2.90911 4.36366C2.90911 5.16706 2.25795 5.81821 1.45455 5.81821C0.651155 5.81821 0 5.16706 0 4.36366C0 1.99856 2.22062 0 4.84851 0C8.72732 0 10.1819 2.90038 10.1819 5.33336C10.1819 7.34307 9.07787 8.87908 7.07252 9.65824C6.63616 9.82842 6.20464 9.94284 5.81821 10.0204V10.6667C5.81821 11.4701 5.16706 12.1213 4.36366 12.1213Z"
        fill="#BE1931"
      />
      <path
        d="M4.36373 16C5.16706 16 5.81829 15.3488 5.81829 14.5454C5.81829 13.7421 5.16706 13.0909 4.36373 13.0909C3.56041 13.0909 2.90918 13.7421 2.90918 14.5454C2.90918 15.3488 3.56041 16 4.36373 16Z"
        fill="#BE1931"
      />
    </svg>
  );
};

QuestionReaction.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

QuestionReaction.defaultProps = {
  color: 'width=',
  size: '24',
};

export default QuestionReaction;
