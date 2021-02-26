import React from "react";
import PropTypes from "prop-types";

import SelectedItemsContainer from "../containers/SelectedItemsContainer";

class TradingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItemsA: [],
      selectedItemsB: [],
      totalBaseExperienceA: 0,
      totalBaseExperienceB: 0,
    };

    this.handleChangeSelectedItemsA = this.handleChangeSelectedItemsA.bind(
      this
    );
    this.handleChangeSelectedItemsB = this.handleChangeSelectedItemsB.bind(
      this
    );
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

  render() {
    return (
      <React.Fragment>
        {this.props.title}

        <SelectedItemsContainer
          items={this.props.items}
          selectedItems={this.state.selectedItemsA}
          onChangeSelectedItems={this.handleChangeSelectedItemsA}
          totalBaseExperience={this.state.totalBaseExperienceA}
        ></SelectedItemsContainer>

        <SelectedItemsContainer
          items={this.props.items}
          selectedItems={this.state.selectedItemsB}
          onChangeSelectedItems={this.handleChangeSelectedItemsB}
          totalBaseExperience={this.state.totalBaseExperienceB}

        ></SelectedItemsContainer>
      </React.Fragment>
    );
  }
}

TradingContainer.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
export default TradingContainer;
