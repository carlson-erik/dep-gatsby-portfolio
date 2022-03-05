import styled from "styled-components";

const Heading = styled.h2`
  font-size: 1.75rem;
  margin-block: 0;
`;

const Link = styled.a<{ hasIcon?: boolean }>`
  & svg {
    margin-right: 0.25rem;
  }

  ${(props) =>
    props.hasIcon
      ? `
        display:flex;
        align-items: center;
      `
      : ""}
`;

const Paragraph = styled.p`
  line-height: 1.5rem;
`;

export { Heading, Link, Paragraph };
