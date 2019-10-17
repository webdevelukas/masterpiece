import React from "react";
import Badge from "../components/Badge";
import BadgeList from "../components/BadgeList";

export default {
  title: "Badge"
};

export const Default = () => <Badge>1. Mannschaft</Badge>;

export const ListedHorizontal = () => (
  <>
    <Badge>Fussball</Badge>
    <Badge>Herren</Badge>
    <Badge>1. Mannschaft</Badge>
  </>
);

export const ListedVertical = () => (
  <BadgeList>
    <Badge>Fussball</Badge>
    <Badge>Herren</Badge>
    <Badge>1. Mannschaft</Badge>
  </BadgeList>
);
