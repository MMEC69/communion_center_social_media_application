import React from "react";
import StoryWindow from "./StoryWindow";

export default function Stories() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
        <StoryWindow />
      </div>
    </div>
  );
}
