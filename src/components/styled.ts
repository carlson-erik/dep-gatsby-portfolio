import styled from "styled-components";

const Heading = styled.h2`
  font-size: 1.75rem;
  margin-block: 0;
  padding-bottom: 0.5rem;
`;

const Link = styled.a<{ hasIcon?: boolean }>`
  ${(props) =>
    props.hasIcon
      ? `
        display:flex;
        align-items: center;
        & svg {
          margin-right: 0.25rem;
        }
      `
      : ""}
`;

const Paragraph = styled.p`
  line-height: 1.5rem;
`;

export { Heading, Link, Paragraph };
