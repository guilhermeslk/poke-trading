import React from "react"
import PropTypes from "prop-types"

import SelectorDropdown from "../ui/SelectorDropdown"
import SelectorButton from "../ui/SelectorButton"


class SelectorContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { selectedItem: ''};
    this.handleSelectorDropdownChange = this.handleSelectorDropdownChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

  }

  handleSelectorDropdownChange(selectedItem) {
    this.setState({ selectedItem });
  }

  handleButtonClick(addedItem) {
    this.props.onAddedItem(addedItem);
  }

  render () {
    return (
      <React.Fragment>
        <SelectorDropdown
          items={this.props.items}
          onSelectedItem={this.handleSelectorDropdownChange}></SelectorDropdown>
        <SelectorButton
          selectedItem={this.state.selectedItem}
          onAddItem={this.handleButtonClick}></SelectorButton>
      </React.Fragment>
    );
  }
}

SelectorContainer.propTypes = {
  items: PropTypes.array,
};

export default SelectorContainer
