import React from "react";
import PropTypes from "prop-types";
import SelectorDropdownItem from "./SelectorDropdownItem";

class SelectorDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedOption) {
    this.props.onSelectedItem(selectedOption.target.value);
  }

  render() {
    const listItems = this.props.items.map((item, i) => (
      <React.Fragment key={i}>
        <SelectorDropdownItem name={item.name}></SelectorDropdownItem>
      </React.Fragment>
    ));

    return (
      <select
        onChange={this.handleChange}
        value={this.props.selectedItem}
        name="pokemons">
          <SelectorDropdownItem name=""></SelectorDropdownItem>
          {listItems}
      </select>
    );
  }
}

SelectorDropdown.propTypes = {
  items: PropTypes.array,
};
export default SelectorDropdown;
