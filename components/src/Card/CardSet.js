import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import PropTypes from "prop-types";
import { Box } from "../Box";
import Card from "./Card";
import CPCard from "./CPCard";
import theme from "../theme";

const UnstyledCardSet = ({ children, ...props }) => <Box {...props}>{children}</Box>;

const CardSet = styled(UnstyledCardSet)(space, {
  [`${Card}, ${CPCard}`]: {
    marginBottom: theme.space.x1,
    "&:last-child": {
      marginBottom: theme.space.none
    }
  }
});

UnstyledCardSet.propTypes = {
  children: PropTypes.node,
  ...space.PropTypes
};

UnstyledCardSet.defaultProps = {
  children: []
};

export default CardSet;
