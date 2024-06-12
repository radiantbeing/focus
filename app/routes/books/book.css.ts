import { style } from "@vanilla-extract/css";

import { vars } from "~/global.css";

export const bookList = style({
  paddingLeft: 0,
  marginTop: 0,
  marginBottom: 0,
  listStyle: "none",
});

export const bookItem = style({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: 16,
  paddingBottom: 16,
  borderBottom: `1px solid ${vars.color.gray}`,
  ":first-child": {
    paddingTop: 0,
  },
  ":last-child": {
    border: "none",
  },
});

export const bookLink = style({
  width: "100%",
  textDecoration: "none",
});

export const bookInfoContainer = style({
  display: "flex",
  gap: 12,
});

export const bookDetails = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const bookCover = style({
  width: 48,
  height: 48,
  objectFit: "contain",
  backgroundColor: vars.color.black,
});

export const bookTitle = style({
  marginTop: 0,
  marginBottom: 0,
  color: vars.color.black,
  fontSize: vars.fontSize.md,
});

export const bookAuthor = style({
  marginTop: 0,
  marginBottom: 0,
  color: vars.color.gray,
});
