import React from "react";
import PropTypes from "prop-types";
class SelectedItemsList extends React.Component {
  render() {
    const className = `table table-hover table-sm ${this.props.tableColor}`;

    const listItems = this.props.selectedItems.map((item, i) => (
      <React.Fragment key={i}>
        <tr>
          <td>{item.name}</td>
          <td>{item.base_experience}</td>
        </tr>
      </React.Fragment>
    ));

    return (
      <React.Fragment>
        <table className={className}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Base XP</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>

          <tfoot>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>{this.props.totalBaseExperience}</td>
            </tr>
          </tfoot>
        </table>
      </React.Fragment>
    );
  }
}

SelectedItemsList.propTypes = {
  selectedItems: PropTypes.array,
};
export default SelectedItemsList;
