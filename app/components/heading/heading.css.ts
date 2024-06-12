import { style } from "@vanilla-extract/css";

import { vars } from "~/global.css";

export const heading = style({
  marginTop: 18,
  marginBottom: 18,
  fontSize: vars.fontSize.lg,
});
