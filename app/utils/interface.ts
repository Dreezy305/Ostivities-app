import React, { HTMLAttributeAnchorTarget } from "react";

export enum ACCOUNT_TYPE {
  PERSONAL = "PERSONAL",
  ORGANISATION = "ORGANISATION",
}

export interface INavLinks {
  target: HTMLAttributeAnchorTarget | undefined;
  rel: string | undefined;
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
  actionType?: "delete" | "warning";
  data?: any;
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
  id?: string; // Optional, since it's not used in the data generation
}

export interface SalesDataType {
  eventType: any;
  dateCreated: any;
  key: React.Key;
  eventName: string;
  ticketSold: number;
  sold?: number; // Optional, since it's not used in the data generation
  name?: string; // Optional, since it's not used in the data generation
  age?: number | any; // Optional, since it's not used in the data generation
  address?: string; // Optional, since it's not used in the data generation
  id?: string; // Optional, since it's not used in the data generation
  revenue?: number; // Optional, since it's not used in the data generation
  fees?: number; // Optional, since it's not used in the data generation
  sales?: number; // Optional, since it
}

export interface SummaryDataType {
  key: string;
  buyerName: string;
  ticketName: string;
  checkedInBy: string;
  discountCode?: string;  // optional if they can be null or undefined
  uses?: number;
  dateEnding?: string;
}


export interface PaymentDataType {
  key: string;
  recipient: string;
  bankAccount: string;
  transferFee: number;
  payout: number;
  paymentDate: string;
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

export interface DiscountDataType {
  key: string;
  discountCode: string;
  uses: string;
  dateEnding: string;
}
