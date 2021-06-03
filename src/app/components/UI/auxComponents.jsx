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

export function BaseAsideProcess(props) {
  const { title, process } = props;
  return (
    <ul className="nav">
      <li>
        <h4 className="aside-text">{title}</h4>
      </li>
      {/* <li>
        <div className="progress progress-bar-vertical">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ height: "30%" }}
          >
            <span className="sr-only">30% Complete</span>
          </div>
        </div>
      </li> */}
      {process &&
        process.map((value, index) => (
          <li key={index} className="sidebar-item" aria-haspopup="true">
            <span>{value.title}</span>
          </li>
        ))}
    </ul>
  );
}
