import React from "react";

class SelectorButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onAddItem(this.props.selectedItem);
    e.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-outline-primary"
          onClick={this.handleClick}
          type="submit"
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
