import { useState, createContext, ReactNode } from "react";

export interface DialogOptions {
  open: boolean;
  title: ReactNode;
  content: ReactNode;
  submit: ReactNode;
  cancel: ReactNode;
  onSubmit: () => void;
}

const iDialog: DialogOptions = {
  open: false,
  title: "",
  content: "",
  submit: "",
  cancel: "",
  onSubmit: () => {},
};

interface IDialogContext {
  dialog: DialogOptions;
  setDialog: (dialog: DialogOptions) => void;
}

export const DialogContext = createContext<IDialogContext>({
  dialog: iDialog,
  setDialog: () => {},
});

export const useDialog = () => {
  const [dialog, setDialog] = useState(iDialog);

  return { dialog, setDialog };
};
