import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { circle } from "react-icons-kit/fa/circle";

export default function DotBtn() {
  const dotIconStyles = {
    margin: "1.5px ",
  };
  return (
    <DotBtnWrapper>
      <Icon icon={circle} size={5} style={dotIconStyles} />
      <Icon icon={circle} size={5} style={dotIconStyles} />
      <Icon icon={circle} size={5} style={dotIconStyles} />
    </DotBtnWrapper>
  );
}

const DotBtnWrapper = styled.div`
  border: 1px solid red;
  margin-left: 16px;
`;
