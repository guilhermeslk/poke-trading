import React from "react";
import PropTypes from "prop-types";

class TradeInfo extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isFairTrade ? (
          <div className="alert alert-success" role="alert">
            The trade is fair!
          </div>
        ) : (
          <div className="alert alert-danger" role="alert">
            The trade is not fair!
          </div>
        )}
      </React.Fragment>
    );
  }
}

TradeInfo.propTypes = {
  isFairTrade: PropTypes.bool,
};
export default TradeInfo;
