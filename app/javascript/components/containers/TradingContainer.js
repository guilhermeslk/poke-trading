import React from "react"
import PropTypes from "prop-types"

import SelectedItemsContainer from "../containers/SelectedItemsContainer";

class TradingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItemsA: [], selectedItemsB: []}

    this.handleChangeSelectedItemsA = this.handleChangeSelectedItemsA.bind(this);
    this.handleChangeSelectedItemsB = this.handleChangeSelectedItemsB.bind(this);
  }

  handleChangeSelectedItemsA(selectedItems) {
    this.setState({ selectedItemsA: selectedItems})
  }


  handleChangeSelectedItemsB(selectedItems) {
    this.setState({ selectedItemsB: selectedItems})

  }

  render () {
    return (
      <React.Fragment>
        {this.props.title}
        <SelectedItemsContainer
          items={this.props.items}
          selectedItems={this.state.selectedItemsA}
          onChangeSelectedItems={this.handleChangeSelectedItemsA}></SelectedItemsContainer>

        <SelectedItemsContainer
          items={this.props.items}
          selectedItems={this.state.selectedItemsB}
          onChangeSelectedItems={this.handleChangeSelectedItemsB}></SelectedItemsContainer>
      </React.Fragment>
    );
  }
}

TradingContainer.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};
export default TradingContainer
