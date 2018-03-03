import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import Playbill from "../components/playbill";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello hot reloading</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("Playbill", module)
  .add("basic", () => (
    <Playbill
      title="foo"
      imageUrl="https://virtualplaybill.s3.amazonaws.com/1517893742975_Magellanica"
    />
  ))
  .add("with long title", () => (
    <Playbill
      title="we are proud to present a presentation"
      imageUrl="https://virtualplaybill.s3.amazonaws.com/1517893742975_Magellanica"
    />
  ));
