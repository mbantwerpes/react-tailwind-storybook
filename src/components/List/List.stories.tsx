import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { List } from "./List";

export default {
  title: "Example/List",
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {};
