import {
  FormContextProps,
  FormProviderProps,
  FormState,
} from "@/app/utils/interface";
import { FC, createContext, useContext, useState } from "react";

const initialFormState: FormState = {
  stage: 0,
  data: {},
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

const FormProvider: FC<FormProviderProps> = ({ children }) => {
  const [formState, setFormState] = useState<any>(initialFormState.stage);
  const [data, setData] = useState(initialFormState.data);

  const setFormValues = (values: any) => {
    setData((prevValues: any) => ({
      ...prevValues,
      ...values,
    }));
  };

  const setFormStage = (stage: number): any => {
    setFormState((prevState: any) => ({ ...prevState, stage }));
  };

  const contextValue: FormContextProps = {
    formState,
    setFormStage,
    data,
    setFormValues,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export default FormProvider;
