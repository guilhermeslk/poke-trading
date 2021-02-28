import React from "react";
import PropTypes from "prop-types";

import TradingContainer from "../containers/TradingContainer";
import TradeEntriesContainer from "../containers/TradeEntriesContainer";

import axios from "axios";

const TRADE_ENTRIES_URL = "/trade_entries";

class TradingCalculatorContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemsA: [],
      selectedItemsB: [],
      totalBaseExperienceA: 0,
      totalBaseExperienceB: 0,
      isFairTrade: null,
      tradeEntries: [],
    };

    this.handleChangeSelectedItemsA = this.handleChangeSelectedItemsA.bind(
      this
    );
    this.handleChangeSelectedItemsB = this.handleChangeSelectedItemsB.bind(
      this
    );
    this.handleTradeClick = this.handleTradeClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  componentDidMount() {
    this.loadTradeEntries();
  }

  handleChangeSelectedItemsA(selectedItems) {
    this.setState({
      selectedItemsA: selectedItems,
      totalBaseExperienceA: this.calculateTotalExperience(selectedItems),
    });
  }

  handleChangeSelectedItemsB(selectedItems) {
    this.setState({
      selectedItemsB: selectedItems,
      totalBaseExperienceB: this.calculateTotalExperience(selectedItems),
    });
  }

  calculateTotalExperience(selectedItems) {
    return selectedItems.reduce((acc, curr) => acc + curr.base_experience, 0);
  }

  handleTradeClick(event) {
    const xpDiff = Math.abs(
      this.state.totalBaseExperienceA - this.state.totalBaseExperienceB
    );

    this.setState({
      isFairTrade: xpDiff < 10,
    });

    this.persistTrade();
  }

  handleResetClick(event) {
    this.setState({
      selectedItemsA: [],
      selectedItemsB: [],
      totalBaseExperienceA: 0,
      totalBaseExperienceB: 0,
      isFairTrade: null,
    });
  }

  persistTrade() {
    axios
      .post(TRADE_ENTRIES_URL, this.tradeObjectToJSON(), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        this.loadTradeEntries();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadTradeEntries() {
    axios
      .get(TRADE_ENTRIES_URL)
      .then((response) => {
        const tradeEntries = response.data.trade_entries;
        this.setState({ tradeEntries });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  tradeObjectToJSON() {
    const {
      totalBaseExperienceA,
      totalBaseExperienceB,
      selectedItemsA,
      selectedItemsB,
    } = this.state;

    return {
      total_experience_from: totalBaseExperienceA,
      total_experience_to: totalBaseExperienceB,
      pokemons_from: selectedItemsA.map((pokemon) => pokemon.name),
      pokemons_to: selectedItemsB.map((pokemon) => pokemon.name),
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="main container">
          <TradingContainer
            items={this.props.pokemons}
            onChangeSelectedItemsA={this.handleChangeSelectedItemsA}
            onChangeSelectedItemsB={this.handleChangeSelectedItemsB}
            selectedItemsA={this.state.selectedItemsA}
            selectedItemsB={this.state.selectedItemsB}
            totalBaseExperienceA={this.state.totalBaseExperienceA}
            totalBaseExperienceB={this.state.totalBaseExperienceB}
            isFairTrade={this.state.isFairTrade}
            onTradeClick={this.handleTradeClick}
            onResetClick={this.handleResetClick}
          ></TradingContainer>
        </div>

        <div className="container">
          <TradeEntriesContainer
            tradeEntries={this.state.tradeEntries}
          ></TradeEntriesContainer>
        </div>
      </React.Fragment>
    );
  }
}

TradingCalculatorContainer.propTypes = {
  pokemons: PropTypes.array,
};
export default TradingCalculatorContainer;
