import * as React from "react";

import CommandItem from "./CommandItem";
import { CommandListInterface } from "./../interfaces";

const CommandList = (props: CommandListInterface) => {
  return (
    <div>
      <ul>
        {props.commands.map((command) => (
          <li key={command.id}>
            <CommandItem
              command={command}
              handleCommandUpdate={props.handleCommandUpdate}
              handleCommandRemove={props.handleCommandRemove}
              handleCommandBlur={props.handleCommandBlur}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommandList;
