import React from "react"
import PropTypes from "prop-types"

import SelectorDropdown from "../ui/SelectorDropdown"
import SelectorButton from "../ui/SelectorButton"


class SelectorContainer extends React.Component {
  render () {
    return (
      <React.Fragment>
        <SelectorDropdown items={this.props.items}></SelectorDropdown>
        <SelectorButton></SelectorButton>
      </React.Fragment>
    );
  }
}

SelectorContainer.propTypes = {
  items: PropTypes.array,
};

export default SelectorContainer
