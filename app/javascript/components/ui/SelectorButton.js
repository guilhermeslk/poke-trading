import React from "react";

class SelectorButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onAddItem(this.props.selectedItem);
  }

  render() {
    return (
      <React.Fragment>
        <button
          style={{ marginLeft: "10px" }}
          className="btn btn-outline-primary bt"
          onClick={this.handleClick}
          type="button"
        >
          {this.props.isLoading ? (
             <span className="spinner-border spinner-border-sm" role="status"></span>
          ) : (
            null
          )}
          Add
        </button>
      </React.Fragment>
    );
  }
}

export default SelectorButton;
