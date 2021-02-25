import React from "react"
import PropTypes from "prop-types"
class TradingContainer extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.title}
      </React.Fragment>
    );
  }
}

TradingContainer.propTypes = {
  title: PropTypes.string
};
export default TradingContainer
