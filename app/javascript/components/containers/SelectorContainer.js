import React from "react";
import PropTypes from "prop-types";

import SelectorDropdown from "../ui/SelectorDropdown";
import SelectorButton from "../ui/SelectorButton";

class SelectorContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedItem: "", totalBaseExperience: 0 };
    this.handleSelectorDropdownChange = this.handleSelectorDropdownChange.bind(
      this
    );
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleSelectorDropdownChange(selectedItem) {
    this.setState({ selectedItem });
  }

  handleButtonClick(addedItem) {
    this.updateTotalBaseExperience(addedItem.name);
    this.setState({ selectedItem: "" });
  }

  updateTotalBaseExperience(name) {
    fetch(`/pokemons/?name=${name}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("A network response error has occured");
      })
      .then((addedItem) => {
        this.props.onAddedItem(addedItem);
      })
      .catch(() =>
        console.log("An error occurred while fetching the Pokemon data")
      );
  }

  render() {
    return (
      <React.Fragment>
        <SelectorDropdown
          items={this.props.items}
          onSelectedItem={this.handleSelectorDropdownChange}
          selectedItem={this.state.selectedItem}
        ></SelectorDropdown>
        <SelectorButton
          selectedItem={this.state.selectedItem}
          onAddItem={this.handleButtonClick}
        ></SelectorButton>
        Total Base Experience: {this.props.totalBaseExperience}
      </React.Fragment>
    );
  }
}

SelectorContainer.propTypes = {
  items: PropTypes.array,
};

export default SelectorContainer;
