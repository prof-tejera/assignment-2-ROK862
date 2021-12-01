import { Component } from "react";
import "./Input.css";
import { _getKey } from "../../utils/helpers";

// TODO: Convert to functional component.
const Options = () => {
  return (
    <div className="Option-Wrapper">
      <label>{this.props.name}</label>
      <select
        onChange={(e) => {
          this.props.onChange(e.target.value);
        }}
        className={this.props.className || "Default-select"}
        value={this.props.current || 0}
      >
        {(this.props.options || ["Nothing found"]).map((e, i) => {
          return (
            <option key={_getKey()} value={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Options;
