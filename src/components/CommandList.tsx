import * as React from "react";

import CommandItem from "./CommandItem";
import { CommandListInterface } from "./../interfaces";

const CommandList = (props: CommandListInterface) => {
  return (
    <div>
      <table>
        {props.commands.map((command) => (
          <tr key={command.id}>
            <CommandItem
              command={command}
              handleCommandUpdate={props.handleCommandUpdate}
              handleCommandRemove={props.handleCommandRemove}
              handleCommandBlur={props.handleCommandBlur}
            />
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CommandList;
