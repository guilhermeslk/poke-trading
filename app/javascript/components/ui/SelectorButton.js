import React from "react"

class SelectorButton extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    this.props.onAddItem(this.props.selectedItem)
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={this.handleClick} type="button">Add</button>
      </React.Fragment>
    );
  }
}

export default SelectorButton
