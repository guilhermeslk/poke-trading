import React from "react";
import PropTypes from "prop-types";
import SelectorDropdownItem from "./SelectorDropdownItem";

class SelectorDropdown extends React.Component {
  render() {
    const listItems = this.props.items.map((item, i) => (
      <React.Fragment key={i}>
        <SelectorDropdownItem name={item.name}></SelectorDropdownItem>
      </React.Fragment>
    ));
    return <select name="pokemons">{listItems}</select>;
  }
}

SelectorDropdown.propTypes = {
  items: PropTypes.array,
};
export default SelectorDropdown;
