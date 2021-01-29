import React from 'react';

const card = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default card;
