import * as React from "react";

import CommandForm from "./CommandForm";
import CommandList from "./CommandList";

import { CommandInterface } from "./../interfaces";

const Commands = () => {
  const [commands, setCommands] = React.useState<CommandInterface[]>([]);

  // Creating a new command item
  function handleCommandCreate(command: CommandInterface) {
    // Prepare new commands state
    const newCommandsState: CommandInterface[] = [...commands];

    // Update new commands state
    newCommandsState.push(command);

    // Update commands state
    setCommands(newCommandsState);
  }

  // Updating existing command item
  function handleCommandUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    // Prepare new commands state
    const newCommandsState: CommandInterface[] = [...commands];

    // Find correct command item to update
    newCommandsState.find(
      (command: CommandInterface) => command.id === id
    )!.text = event.target.value;

    // Update commands state
    setCommands(newCommandsState);
  }

  // Remove existing command item
  function handleCommandRemove(id: string) {
    // Prepare new command state
    const newCommandsState: CommandInterface[] = commands.filter(
      (command: CommandInterface) => command.id !== id
    );

    // Update command state
    setCommands(newCommandsState);
  }

  function handleCommandBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add("command-input-error");
    } else {
      event.target.classList.remove("command-input-error");
    }
  }

  return (
    <div>
      <CommandForm
        commands={commands}
        handleCommandCreate={handleCommandCreate}
      />

      <CommandList
        commands={commands}
        handleCommandUpdate={handleCommandUpdate}
        handleCommandRemove={handleCommandRemove}
        handleCommandBlur={handleCommandBlur}
      />
    </div>
  );
};

export default Commands;
