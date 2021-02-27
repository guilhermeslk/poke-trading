import React from "react";
import PropTypes from "prop-types";
import TradeEntryItem from "../ui/TradeEntryItem";

class TradeEntriesContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h3 className="text-center">{this.props.title}</h3>
          {this.props.tradeEntries.map((tradeEntry, i) => (
            <TradeEntryItem
              key={i}
              tradeEntryItem={tradeEntry}
            ></TradeEntryItem>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

TradeEntriesContainer.propTypes = {
  tradeEntries: PropTypes.array,
};
export default TradeEntriesContainer;
