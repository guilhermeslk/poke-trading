import React from "react";
import PropTypes from "prop-types";
import TradeEntryItem from "../ui/TradeEntryItem";

class TradeEntriesContainer extends React.Component {
  render() {
    const tradeEntries = this.props.tradeEntries.map((tradeEntry, i) => (
      <TradeEntryItem key={i} tradeEntryItem={tradeEntry}></TradeEntryItem>
    ));

    return (
      <React.Fragment>
        <div className="row mt-3">
          <table className="table">
            <thead>
              <tr>
                <th>From</th>
                <th>Total Base XP</th>

                <th>To</th>
                <th>Total Base XP</th>

                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>{tradeEntries}</tbody>
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
