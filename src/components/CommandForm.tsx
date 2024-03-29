import * as React from "react";
import shortid from "shortid";

import { CommandInterface, CommandFormInterface } from "./../interfaces";

const CommandForm = (props: CommandFormInterface) => {
  // Create ref for form input
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Create new form state
  const [formState, setFormState] = React.useState("");

  // Handle command input change
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Update form state with the text from input
    setFormState(event.target.value);
  }

  // Handle 'enter' in command input
  function handleInputEnter(event: React.KeyboardEvent) {
    event.stopPropagation();

    // Check for 'enter' key
    if (event.key === "Enter" && inputRef!.current!.value !== "") {
      // Prepare new command object
      const newCommand: CommandInterface = {
        id: shortid.generate(),
        text: formState,
      };

      // Create new command item
      props.handleCommandCreate(newCommand);

      // Reset the input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  // Handle add button click
  function handleAddButton() {
    if (inputRef!.current!.value !== "") {
      // Prepare new command object
      const newCommand: CommandInterface = {
        id: shortid.generate(),
        text: formState,
      };

      // Create new command item
      props.handleCommandCreate(newCommand);

      // Reset the input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  return (
    <div>
      <div className="ui input field">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add a New Command"
          onChange={(event) => handleInputChange(event)}
          onKeyPress={(event) => handleInputEnter(event)}
        />
      </div>
      <button className="ui button" onClick={handleAddButton}>
        Add
      </button>
    </div>
  );
};

export default CommandForm;
