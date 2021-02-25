import React from "react"
import PropTypes from "prop-types"

import SelectedItemsContainer from "../containers/SelectedItemsContainer";

class TradingContainer extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.title}
        <SelectedItemsContainer items={this.props.items} selectedItems={[]}></SelectedItemsContainer>
        <SelectedItemsContainer items={this.props.items} selectedItems={[]}></SelectedItemsContainer>
      </React.Fragment>
    );
  }
}

TradingContainer.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
};
export default TradingContainer
