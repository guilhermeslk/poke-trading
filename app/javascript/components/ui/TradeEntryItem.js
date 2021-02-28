import React from "react";
import PropTypes from "prop-types";

import * as moment from 'moment'

class TradeEntryItem extends React.Component {
  render() {
    const pokemonFromList = this.props.tradeEntryItem.pokemons_from.map(
      (pokemon, i) => (
        <span key={i} className="badge bg-danger">
          {pokemon}
        </span>
      )
    );

    const pokemonToList = this.props.tradeEntryItem.pokemons_to.map(
      (pokemon, i) => (
        <span key={i} className="badge bg-success">
          {pokemon}
        </span>
      )
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
