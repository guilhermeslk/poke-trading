import React from "react";
import PropTypes from "prop-types";

import SelectorDropdown from "../ui/SelectorDropdown";
import SelectorButton from "../ui/SelectorButton";

import axios from "axios";

class SelectorContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedItem: "", totalBaseExperience: 0, fetching: false };
    this.handleSelectorDropdownChange = this.handleSelectorDropdownChange.bind(
      this
    );
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleSelectorDropdownChange(selectedItem) {
    this.setState({ selectedItem });
  }

  handleButtonClick(addedItem) {
    this.setState({ ...this.state, fetching: true });

    this.updateTotalBaseExperience(addedItem.name);
  }

  updateTotalBaseExperience(name) {
    axios
      .get(`/pokemons/?name=${name}`)
      .then((response) => {
        this.setState({ ...this.state, fetching: false });

        const addedItem = response.data;
        this.props.onAddedItem(addedItem);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
          <form className="form-inline">
            <SelectorDropdown
              defaultName="Choose pokémon..."
              items={this.props.items}
              onSelectedItem={this.handleSelectorDropdownChange}
              selectedItem={this.state.selectedItem}
            ></SelectorDropdown>
        
            <SelectorButton
              selectedItem={this.state.selectedItem}
              onAddItem={this.handleButtonClick}
              isLoading={this.state.fetching}
            ></SelectorButton>
          </form>
      </React.Fragment>
    );
  }
}

SelectorContainer.propTypes = {
  items: PropTypes.array,
};

export default SelectorContainer;
