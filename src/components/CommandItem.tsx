import * as React from "react";

import { CommandItemInterface } from "./../interfaces";

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

      <div onClick={() => props.handleCommandRemove(props.command.id)}>X</div>
    </div>
  );
};

export default CommandItem;
