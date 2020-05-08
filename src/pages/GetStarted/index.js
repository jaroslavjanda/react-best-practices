import React from "react";
import Code from "react-code-prettify";

import { H1, H3, H2 } from "../../components/Typography";
import { Wrapper } from "../../components/Layout/styled";
import { Icon, Emoji, FlexItems, EmojiText, Text } from "./styled";
import theme from "../../common/theme";
import { ButtonDiv } from "../../components/Button";
import * as routes from "../../routes";
import { Center } from "../../components/Alignment/index";

const GetStarted = ({ history }) => {
  const setup = `

  git clone https://github.com/jaroslavjanda/react-best-practices.git
  `;
  return (
    <>
      <H1>Get Started</H1>
      <H3>Why?</H3>
      <FlexItems>
        <Emoji>✅</Emoji>
        <EmojiText>Scalability</EmojiText>
      </FlexItems>
      <FlexItems>
        <Emoji>✅</Emoji>
        <EmojiText>Clarity</EmojiText>
      </FlexItems>
      <FlexItems>
        <Emoji>✅</Emoji>
        <EmojiText>Production-ready</EmojiText>
      </FlexItems>
      <H2>1. Setup</H2>
      <Wrapper style={{}}>
        <Text>
          The easiest way to learn someting new or check my work just clone the
          repo or visit the GitHub
        </Text>
        <Code codeString={setup} language="javascript" />
        <a
          href="https://github.com/jaroslavjanda/react-best-practices"
          target="_blank"
        >
          <Icon src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
        </a>
        <H3>What can you find in this repo?</H3>
        <div style={{ textAlign: "left" }}>
          <Text style={{ fontSize: theme.fontSize.normal, textAlign: "left" }}>
            Configurated tools:
          </Text>
          <ul>
            <li>ESLint</li>
            <li>Husky</li>
            <li>Prettier</li>
            <li>.ENV</li>
          </ul>
          <Text style={{ fontSize: theme.fontSize.normal, textAlign: "left" }}>
            Libraries with examples
          </Text>
          <ul>
            <li>styled-components</li>
            <li>redux</li>
            <li>react-toastify</li>
            <li>auth0</li>
          </ul>
        </div>
        <H2>2. Edit</H2>
        <Text>
          Go throught clean architecture and look how all libraries work
          together with respect to best practices
        </Text>
        <ButtonDiv onClick={() => history.push(routes.BEST_PRACTICES)}>
          Check all features
        </ButtonDiv>
        <H2>3. Deploy site in less than 1 minute</H2>
        <Text>
          Do you have GitHub account and want to host your site on Netlify for
          FREE? Clone, deploy and set CI in less than 1 minute. CLICK BELOW and
          see magic
        </Text>
        <Center>
          <a href="https://app.netlify.com/start/deploy?repository=https://github.com/jaroslavjanda/react-best-practices">
            <img
              src="https://www.netlify.com/img/deploy/button.svg"
              alt="Deploy to Netlify"
            />
          </a>
        </Center>
      </Wrapper>
    </>
  );
};

export default GetStarted;
