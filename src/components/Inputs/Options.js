import { Component } from "react";
import "./Input.css";

class Options extends Component {
  render() {
    return (
      <div className="Option-Wraper">
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
              <option key={`op_keys_${e}`} value={e}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Options;
