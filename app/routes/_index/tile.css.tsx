import { style } from "@vanilla-extract/css";

import { vars } from "~/global.css";

export const tileRoot = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: 150,
  padding: 16,
  backgroundColor: vars.color.lightGray,
  border: `1px solid ${vars.color.gray}`,
  borderRadius: 4,
});

export const tileHeading = style({
  margin: 0,
  fontSize: "1.6rem",
  fontWeight: 400,
});

export const tileDescription = style({
  alignSelf: "center",
  margin: 0,
  fontSize: "1.8rem",
  fontWeight: 700,
});

export const tileHelp = style({
  margin: 0,
  fontSize: "1.6rem",
  fontWeight: 400,
});
