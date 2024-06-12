import { style } from "@vanilla-extract/css";

import { vars } from "~/global.css";

export const tileRoot = style({
  display: "flex",
  justifyContent: "space-between",
  gap: 20,
});

export const tileItem = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  height: 150,
  padding: 16,
  backgroundColor: vars.color.lightGray,
  borderRadius: 4,
});

export const tileHeading = style({
  margin: 0,
  fontSize: vars.fontSize.md,
  fontWeight: 400,
});

export const tileDescription = style({
  alignSelf: "center",
  margin: 0,
  fontSize: vars.fontSize.lg,
  fontWeight: 700,
});

export const tileHelp = style({
  margin: 0,
  fontWeight: 400,
});
