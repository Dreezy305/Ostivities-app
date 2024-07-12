import React from "react";

export enum ACCOUNT_TYPE {
  PERSONAL = "PERSONAL",
  ORGANISATION = "ORGANISATION",
}

export interface INavLinks {
  link: string;
  name: string;
}

export interface ITypography {
  content?: string | React.ReactNode;
  className?: string;
  styles?: React.CSSProperties;
  htmlFor?: string;
}

export interface IFeatures {
  icon?: React.ReactNode | any;
  title?: string;
  content?: string | React.ReactNode;
}

export interface IAuthLayout {
  children?: React.ReactNode;
}

export interface IDashboard {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  tab?: React.ReactNode;
  steppers?: React.ReactNode;
  extraComponents?: React.ReactNode;
  isLoggedIn?: Boolean | React.ReactNode;
}

export interface IHeader {
  isLoggedIn?: Boolean | React.ReactNode;
}
export interface IFormProps {
  formStep?: number;
  nextFormStep?: () => void;
  formData?: any;
}

export interface IFormInput {
  eventName: string;
  eventDetails: string;
  eventState: string;
  eventAddress: string;
  customURL: string;
  document: string;
  eventType: string;
  eventInfo: string;
  timeZone: string;
  startDateAndTime: any;
  endDateAndTime: any;
  eventFrequency?: string;
  eventImage?: string;
  websiteUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

export interface IModal {
  open?: boolean;
  onCancel?: any;
  onOk?: any;
}

export type FieldType = {
  ticketType?: string;
  ticketName?: string;
  ticketStock?: number;
  ticketPrice?: number;
  ticketDescription?: string;
  purchaseLimit?: number | any;
};

export interface FormContextProps {
  formState: FormState;
  setFormStage: (stage: number) => void;
}

export interface FormState {
  stages: any;
  stage: number | any;
}

export interface FormProviderProps {
  children: React.ReactNode;
}

export interface DataType {
  key: React.Key;
  eventName: string;
  eventType: string;
  ticketSold: number;
  type?: string; // Optional, since it's not used in the data generation
  sold?: number; // Optional, since it's not used in the data generation
  dateCreated: string | number | Date;
  status: "Active" | "Closed" | "Pending";
  name?: string; // Optional, since it's not used in the data generation
  age?: number | any; // Optional, since it's not used in the data generation
  address?: string; // Optional, since it's not used in the data generation
}

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType: ACCOUNT_TYPE;
  confirmPassword: string;
  terms_and_condition: boolean;
  businessName: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IResetToken {
  email: string;
  originUrl: string;
}
