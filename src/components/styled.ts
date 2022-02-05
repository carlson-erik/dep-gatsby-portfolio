import styled from "styled-components";

import { Link as GatsbyLink } from "gatsby";

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

export { GLink, Link };
