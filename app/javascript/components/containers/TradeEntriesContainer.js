import React from "react";
import PropTypes from "prop-types";
import TradeEntryItem from "../ui/TradeEntryItem";

class TradeEntriesContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h3 className="text-center">{this.props.title}</h3>
          <table className="table">
            <thead>
              <tr>
                <th>From</th>
                <th>Total Base XP</th>

                <th>To</th>
                <th>Total Base XP</th>

                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.props.tradeEntries.map((tradeEntry, i) => (
                <TradeEntryItem
                  key={i}
                  tradeEntryItem={tradeEntry}
                ></TradeEntryItem>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

TradeEntriesContainer.propTypes = {
  tradeEntries: PropTypes.array,
};
export default TradeEntriesContainer;
