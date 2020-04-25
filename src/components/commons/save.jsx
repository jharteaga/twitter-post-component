import React from 'react';

const Save = (props) => {
  let iconClasses = 'save fa fa-bookmark';
  if (!props.save) iconClasses += '-o';

  return (
    <i
      className={iconClasses}
      aria-hidden="true"
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
    ></i>
  );
};

export default Save;
