import React from "react";
import PropTypes from "prop-types";

import SelectedItemsContainer from "../containers/SelectedItemsContainer";
import TradeButton from "../ui/TradeButton";
import TradeInfo from "../ui/TradeInfo";

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

        <div className="row justify-content-center">
          <TradeButton onClick={this.handleTradeClick}></TradeButton>
        </div>

        {this.props.isFairTrade != null && (
          <TradeInfo isFairTrade={this.props.isFairTrade} />
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
