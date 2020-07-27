import * as React from "react";

import { CommandItemInterface } from "./../interfaces";

import "./CommandItem.css";

const CommandItem = (props: CommandItemInterface) => {
  return (
    <div>
      <div>
        <input
          value={props.command.text}
          onBlur={props.handleCommandBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleCommandUpdate(event, props.command.id)
          }
        />
      </div>

      <i className="edit icon"></i>

      <div onClick={() => props.handleCommandRemove(props.command.id)}>
        <i className="cursor-pointer trash alternate icon"></i>
      </div>
    </div>
  );
};

export default CommandItem;
