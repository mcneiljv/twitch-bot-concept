// Commands Interface
export interface CommandInterface {
  id: string;
  text: string;
}

// Command Form Interface
export interface CommandFormInterface {
  commands: CommandInterface[];
  handleCommandCreate: (command: CommandInterface) => void;
}

// Command List Interface
export interface CommandListInterface {
  handleCommandUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleCommandRemove: (id: string) => void;
  handleCommandBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  commands: CommandInterface[];
}

// Command Item Interface
export interface CommandItemInterface {
  handleCommandUpdate: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleCommandRemove: (id: string) => void;
  handleCommandBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  command: CommandInterface;
}
