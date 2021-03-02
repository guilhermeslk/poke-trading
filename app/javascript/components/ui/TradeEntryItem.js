import React from "react";
import PropTypes from "prop-types";

import * as moment from "moment";

class TradeEntryItem extends React.Component {
  render() {
    const pokemonFromList = (
      <ul>
        {this.props.tradeEntryItem.pokemons_from.map((pokemon, i) => (
          <li key={i}>
            <span className="badge badge-secondary bg-danger">{pokemon}</span>
          </li>
        ))}
      </ul>
    );

    const pokemonToList = (
      <ul>
        {this.props.tradeEntryItem.pokemons_to.map((pokemon, i) => (
          <li key={i}>
            <span className="badge badge-secondary bg-success">{pokemon}</span>
          </li>
        ))}
      </ul>
    );

    return (
      <React.Fragment>
        <tr>
          <td>{pokemonFromList}</td>
          <td>{this.props.tradeEntryItem.total_experience_from}</td>
          <td>{pokemonToList}</td>
          <td>{this.props.tradeEntryItem.total_experience_to}</td>
          <td>{moment(this.props.tradeEntryItem.updated_at).fromNow()}</td>
        </tr>
      </React.Fragment>
    );
  }
}

TradeEntryItem.propTypes = {
  tradeEntry: PropTypes.object,
};
export default TradeEntryItem;
