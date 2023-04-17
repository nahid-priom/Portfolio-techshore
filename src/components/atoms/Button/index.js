import { Button } from "@chakra-ui/react";
import React from "react";

export const PortfolioButton = (props) => {
  return <Button {...props}>{props.text} </Button>;
};