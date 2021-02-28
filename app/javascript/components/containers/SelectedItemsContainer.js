import React from "react";
import PropTypes from "prop-types";
import SelectorContainer from "../containers/SelectorContainer";
import SelectedItemsList from "../ui/SelectedItemsList";

class SelectedItemsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddedItem = this.handleAddedItem.bind(this);
  }

  handleAddedItem(item) {
    if (this.props.selectedItems.length == 6) {
      alert("You've reached the max of 6 pokemons!");
      return;
    }

    this.props.onChangeSelectedItems([...this.props.selectedItems, item]);
  }

  render() {
    return (
      <React.Fragment>
        <SelectorContainer
          items={this.props.items}
          onAddedItem={this.handleAddedItem}
        ></SelectorContainer>
        <br />

        <SelectedItemsList
          selectedItems={this.props.selectedItems}
          totalBaseExperience={this.props.totalBaseExperience}
          tableColor={this.props.tableColor}

        ></SelectedItemsList>
        <br />
      </React.Fragment>
    );
  }
}

SelectedItemsContainer.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  selectedItems: PropTypes.array,
};
export default SelectedItemsContainer;
