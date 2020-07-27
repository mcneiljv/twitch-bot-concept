import * as React from "react";

import { CommandItemInterface } from "./../interfaces";

import "./CommandItem.css";

const CommandItem = (props: CommandItemInterface) => {
  return (
    <React.Fragment>
      <td data-label="Command">
        <p>{props.command.text}</p>
      </td>

      <td data-label="Edit">
        <i className="edit icon"></i>
      </td>

      <td data-label="Delete">
        {" "}
        <div onClick={() => props.handleCommandRemove(props.command.id)}>
          <i className="cursor-pointer trash alternate icon"></i>
        </div>
      </td>
    </React.Fragment>
  );
};

export default CommandItem;
