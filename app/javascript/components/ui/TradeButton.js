import React from "react";

class TradeButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent(event) {
    this.props.onClick(event);
  }

  render() {
    return (
      <React.Fragment>
        <button type="button" className="btn btn-primary" onClick={this.handleClickEvent}>
          Trade!
        </button>
      </React.Fragment>
    );
  }
}

export default TradeButton;
