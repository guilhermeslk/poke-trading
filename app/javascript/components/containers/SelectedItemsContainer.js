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
    this.props.onChangeSelectedItems([...this.props.selectedItems, item]);
  }

  render() {
    return (
      <React.Fragment>
        <SelectorContainer
          items={this.props.items}
          onAddedItem={this.handleAddedItem}
          totalBaseExperience={this.props.totalBaseExperience}
        ></SelectorContainer>
        <br />
        <SelectedItemsList
          selectedItems={this.props.selectedItems}
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
