/**
*
* Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';


function StatelessComponent(props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

StatelessComponent.defaultProps = {
  children: 'Stateless Component'
};

StatelessComponent.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string,
};

export default StatelessComponent;
