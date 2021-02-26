import React from "react";
import PropTypes from "prop-types";

class TradeInfo extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isFairTrade ? (
          <span className="green">The trade is fair!</span>
        ) : (
          <span className="red">The trade is not fair!</span>
        )}
      </React.Fragment>
    );
  }
}

TradeInfo.propTypes = {
  isFairTrade: PropTypes.bool,
};
export default TradeInfo;
