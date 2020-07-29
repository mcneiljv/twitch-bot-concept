import * as React from "react";

import CommandItem from "./CommandItem";
import { CommandListInterface } from "./../interfaces";

const CommandList = (props: CommandListInterface) => {
  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Command</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  );
};

export default CommandList;
