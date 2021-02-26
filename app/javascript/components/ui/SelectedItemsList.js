import React from "react"
import PropTypes from "prop-types"
class SelectedItemsList extends React.Component {
  render () {
    const listItems = this.props.selectedItems.map((item, i) =>
      <React.Fragment key={i}>
        <li>{item}</li>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        Selected Items:
        <ul>
          {listItems}
        </ul>
      </React.Fragment>
    );
  }
}

SelectedItemsList.propTypes = {
  selectedItems: PropTypes.array
};
export default SelectedItemsList
