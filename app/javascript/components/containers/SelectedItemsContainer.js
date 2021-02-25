import React from "react"
import PropTypes from "prop-types"
import SelectorContainer from "../containers/SelectorContainer"
import SelectedItemsList from "../ui/SelectedItemsList"

class SelectedItemsContainer extends React.Component {
  render () {
    return (
      <React.Fragment>
        <SelectorContainer items={this.props.items}></SelectorContainer>
        <br />
        <SelectedItemsList selectedItems={this.props.selectedItems}></SelectedItemsList>
        <br />
      </React.Fragment>
    );
  }
}

SelectedItemsContainer.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  selectedItems: PropTypes.array
};
export default SelectedItemsContainer
