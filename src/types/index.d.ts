import { ReactNode } from "react";
import { shipments } from "../constants";

type SignupForm = {
  username: string;
  password: string;
};

type Shipment = (typeof shipments)[0];

type Timeline = {
  title: string;
  description?: string;
  time: string;
  user?: string;
  icon: JSX.Element;
};
