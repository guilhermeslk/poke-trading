import React from "react";
import PropTypes from "prop-types";

import SelectedItemsContainer from "../containers/SelectedItemsContainer";
import TradeButton from "../ui/TradeButton";
import TradeInfo from "../ui/TradeInfo";

class TradingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemsA: [],
      selectedItemsB: [],
      totalBaseExperienceA: 0,
      totalBaseExperienceB: 0,
      isFairTrade: null,
    };

    this.handleChangeSelectedItemsA = this.handleChangeSelectedItemsA.bind(
      this
    );
    this.handleChangeSelectedItemsB = this.handleChangeSelectedItemsB.bind(
      this
    );
    this.handleTradeClick = this.handleTradeClick.bind(this);
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
    this.setState({
      isFairTrade:
        this.state.totalBaseExperienceA == this.state.totalBaseExperienceB,
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h2 className="main-title">{this.props.title}</h2>
        </div>

        <div className="row">
          <div className="col-6">
            <SelectedItemsContainer
              items={this.props.items}
              selectedItems={this.state.selectedItemsA}
              onChangeSelectedItems={this.handleChangeSelectedItemsA}
              totalBaseExperience={this.state.totalBaseExperienceA}
              tableColor="table-danger"
            ></SelectedItemsContainer>
          </div>

          <div className="col-6">
            <SelectedItemsContainer
              items={this.props.items}
              selectedItems={this.state.selectedItemsB}
              onChangeSelectedItems={this.handleChangeSelectedItemsB}
              totalBaseExperience={this.state.totalBaseExperienceB}
              tableColor="table-success"
            ></SelectedItemsContainer>
          </div>
        </div>

        <div className="row justify-content-center">
          <TradeButton onClick={this.handleTradeClick}></TradeButton>
        </div>

        {this.state.isFairTrade != null && (
          <TradeInfo isFairTrade={this.state.isFairTrade} />
        )}
      </React.Fragment>
    );
  }
}

TradingContainer.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
export default TradingContainer;
