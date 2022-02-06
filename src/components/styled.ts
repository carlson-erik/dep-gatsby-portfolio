import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

const Heading = styled.h2`
  font-size: 1.75rem;
`;

const GLink = styled(GatsbyLink)`
  color: #1f5aff;
  &:hover {
    color: #0036cc;
  }
`;

const Link = styled.a<{ hasIcon?: boolean }>`
  color: #1f5aff;
  &:hover {
    color: #0036cc;
  }

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

export { Heading, GLink, Link, Paragraph };
