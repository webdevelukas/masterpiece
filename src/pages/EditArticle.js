import React from "react";
import MainArea from "../components/MainArea";
import Menu from "../components/Menu";
import FunctionBar from "../components/FunctionBar";
import Button, {
  ButtonWithIcon,
  SquareButtonWithIcon
} from "../components/Button";
import ArrowDropDownIcon from "../icons/ArrowDropDownIcon";
import Textarea, { TextareaWithBoldText } from "../components/Textarea";
import AddPhotosIcon from "../icons/AddPhotosIcon";
import Gallery from "../components/Gallery";

export default function EditArticle() {
  return (
    <>
      <Menu />
      <MainArea>
        <h1>What do you want to edit?</h1>
        <hr />
        <FunctionBar></FunctionBar>
        <h2>Event</h2>
        <ButtonWithIcon>
          <ArrowDropDownIcon />
          Event variable
        </ButtonWithIcon>
        <h2>Title</h2>
        <TextareaWithBoldText placeholder="What are you talking about?" />
        <h2>Text</h2>
        <Textarea placeholder="What you wanna tell the people out there?" />
        <h2>Photos</h2>
        <Gallery />
        <SquareButtonWithIcon>
          <AddPhotosIcon />
          Add Photos
        </SquareButtonWithIcon>
        <hr />
        <Button>Save Article</Button>
      </MainArea>
      ;
    </>
  );
}
