import React from "react"
import PropTypes from "prop-types"
class SelectedItemsList extends React.Component {
  render () {
    return (
      <React.Fragment>
        Selected Items: {this.props.selectedItems}
      </React.Fragment>
    );
  }
}

SelectedItemsList.propTypes = {
  selectedItems: PropTypes.array
};
export default SelectedItemsList
