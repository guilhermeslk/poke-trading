import React from "react"

class ResetButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent(event) {
    this.props.onClick(event);
  }

  render () {
    return (
      <React.Fragment>
          <button
          type="button"
          className="btn btn-default"
          onClick={this.handleClickEvent}
        >
          Reset
        </button>
      </React.Fragment>
    );
  }
}

export default ResetButton
