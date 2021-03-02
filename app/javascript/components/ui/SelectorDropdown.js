import React from "react";
import PropTypes from "prop-types";
import SelectorDropdownItem from "./SelectorDropdownItem";

class SelectorDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(selectedOption) {
    this.props.onSelectedItem({ name: selectedOption.target.value });
  }

  render() {
    const listItems = this.props.items.map((item, i) => (
      <React.Fragment key={i}>
        <SelectorDropdownItem name={item.name}></SelectorDropdownItem>
      </React.Fragment>
    ));

    return (
      <React.Fragment>
        <div className="form-group mr-sm-2">
          <select
            className="form-control"
            onChange={this.handleChange}
            value={this.props.selectedItem.name}
          >
            <SelectorDropdownItem
              name={this.props.defaultName}
            ></SelectorDropdownItem>
            {listItems}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

SelectorDropdown.propTypes = {
  items: PropTypes.array,
};
export default SelectorDropdown;
