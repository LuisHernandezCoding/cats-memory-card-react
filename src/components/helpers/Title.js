import React from 'react';
import PropTypes from 'prop-types';

const Title = (props) => {
  const { title } = props;
  const { size } = props;
  if (size === 1) {
    return <h1>{title}</h1>;
  } if (size === 2) {
    return <h2>{title}</h2>;
  } if (size === 3) {
    return <h3>{title}</h3>;
  }
  return <h4>{title}</h4>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number,
};

Title.defaultProps = {
  size: 1,
};

export default Title;
