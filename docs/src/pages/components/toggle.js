import React from "react";
import { Helmet } from "react-helmet";
import {
  Box, Flex, SectionTitle, SubsectionTitle, Title,
} from "@nulogy/components";
import {
  DocText as Text, Layout, Intro, DocSection, Image,
} from "../../components";
import anatomy from "../../images/toggle/anatomy.png";
import on from "../../images/toggle/on.png";
import off from "../../images/toggle/off.png";
import onDisabled from "../../images/toggle/on-disabled.png";
import offDisabled from "../../images/toggle/off-disabled.png";

export default () => (
  <Layout>
    <Helmet>
      <title>Toggle</title>
    </Helmet>
    <Box
      bg="whiteGrey" p="x4" borderRadius={ 1 }
      mb="x6"
    >
      <Title mb="none">Toggle</Title>
      <Intro>For quickly switching between two possible states.</Intro>
    </Box>
    <DocSection>
      <Image src={ on } width="75%" alt="Toggle screenshot" />
    </DocSection>
    <DocSection>
      <SectionTitle>Anatomy</SectionTitle>
      <Image src={ anatomy } alt="Toggle screenshot" />
    </DocSection>
    <DocSection>
      <SectionTitle>Guidelines</SectionTitle>
      <Text>Always use the toggle value label to clearly communicate the selected state.</Text>
    </DocSection>
    <DocSection>
      <SectionTitle>States</SectionTitle>
      <SubsectionTitle>Default</SubsectionTitle>
      <Flex mb="x1">
        <Box><Image src={ on } alt="Toggle screenshot" /></Box>
        <Box><Image src={ off } alt="Toggle screenshot" /></Box>
      </Flex>
      <SubsectionTitle>Disabled</SubsectionTitle>
      <Flex>
        <Box><Image src={ onDisabled } alt="Toggle screenshot" /></Box>
        <Box><Image src={ offDisabled } alt="Toggle screenshot" /></Box>
      </Flex>
    </DocSection>
  </Layout>
);
