import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExampleComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="col-12 u-mv++ text-center">
            <h1>DB react starter</h1>
            {this.props.name}
          </div>
        </div>
      </div>
    );
  }

}


ExampleComponent.defaultProps = {
  name: 'Examaple Component',
};


ExampleComponent.propTypes = {
  name: PropTypes.string.isRequired,
};


function mapStateToProps(state) {
  return {
    Dumeo: state,
  };
}

export default connect(mapStateToProps)(ExampleComponent);
