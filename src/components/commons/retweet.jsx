import React from 'react';

const Retweet = (props) => {
  let iconClasses = 'retweet fa fa-retweet ';
  if (props.retweet) iconClasses += 'active';
  return (
    <i
      className={iconClasses}
      aria-hidden="true"
      onClick={props.onClick}
      style={{ cursor: 'pointer' }}
    >
      <span>{props.value}</span>
    </i>
  );
};

export default Retweet;
