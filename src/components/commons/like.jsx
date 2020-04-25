import React from 'react';

const Like = (props) => {
  let iconClasses = 'like fa fa-heart';
  if (!props.like) {
    iconClasses += '-o';
  } else {
    iconClasses += ' active';
  }
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

export default Like;
