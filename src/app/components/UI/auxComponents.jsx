import React from "react";

export class ActionButton extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.value);
  };

  render() {
    const { content, ...props } = this.props;
    return (
      <button {...props} onClick={this.handleClick}>
        {content}
      </button>
    );
  }
}
