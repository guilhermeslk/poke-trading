import React from "react";
import PropTypes from "prop-types";

class SelectorDropdownItem extends React.Component {
  render() {
    return (
      <React.Fragment>
        <option value={this.props.name}>{this.props.name}</option>
      </React.Fragment>
    );
  }
}

SelectorDropdownItem.propTypes = {
  name: PropTypes.string,
};
export default SelectorDropdownItem;
