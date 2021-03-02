import React from "react";
import PropTypes from "prop-types";

import SelectedItemsContainer from "../containers/SelectedItemsContainer";
import TradeButton from "../ui/TradeButton";
import TradeInfo from "../ui/TradeInfo";
import ResetButton from "../ui/ResetButton";

class TradingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeSelectedItemsA = this.handleChangeSelectedItemsA.bind(
      this
    );
    this.handleChangeSelectedItemsB = this.handleChangeSelectedItemsB.bind(
      this
    );

    this.handleTradeClick = this.handleTradeClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleChangeSelectedItemsA(selectedItems) {
    this.props.onChangeSelectedItemsA(selectedItems);
  }

  handleChangeSelectedItemsB(selectedItems) {
    this.props.onChangeSelectedItemsB(selectedItems);
  }

  handleTradeClick(event) {
    this.props.onTradeClick(event);
  }

  handleResetClick(event) {
    this.props.onResetClick(event);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-6">
            <SelectedItemsContainer
              items={this.props.items}
              selectedItems={this.props.selectedItemsA}
              onChangeSelectedItems={this.handleChangeSelectedItemsA}
              totalBaseExperience={this.props.totalBaseExperienceA}
              tableColor="table-danger"
            ></SelectedItemsContainer>
          </div>

          <div className="col-6">
            <SelectedItemsContainer
              items={this.props.items}
              selectedItems={this.props.selectedItemsB}
              onChangeSelectedItems={this.handleChangeSelectedItemsB}
              totalBaseExperience={this.props.totalBaseExperienceB}
              tableColor="table-success"
            ></SelectedItemsContainer>
          </div>
        </div>

        {(this.props.selectedItemsA.length > 0 ||
          this.props.selectedItemsB.length > 0) && (
          <TradeInfo isFairTrade={this.props.isFairTrade} />
        )}

        <div className="row justify-content-center mt-1">
          <ResetButton onClick={this.handleResetClick}></ResetButton>
          <TradeButton
            selectedItemsA={this.props.selectedItemsA}
            selectedItemsB={this.props.selectedItemsB}
            onClick={this.handleTradeClick}
          ></TradeButton>
        </div>
      </React.Fragment>
    );
  }
}

TradingContainer.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
export default TradingContainer;
