import React from "react"
import PropTypes from "prop-types"
class SelectorDropdownItem extends React.Component {
  render () {
    return (
      <option value={this.props.name}>{this.props.name}</option>
    );
  }
}

SelectorDropdownItem.propTypes = {
  name: PropTypes.string
};
export default SelectorDropdownItem
