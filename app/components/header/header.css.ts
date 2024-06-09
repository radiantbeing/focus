import { style } from "@vanilla-extract/css";

import { vars } from "~/global.css";

export const header = style({
  position: "sticky",
  top: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 56,
  borderBottom: `1px solid ${vars.color.gray}`,
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
});

export const brand = style({
  marginLeft: 20,
  fontFamily: vars.fonts.brand,
});
