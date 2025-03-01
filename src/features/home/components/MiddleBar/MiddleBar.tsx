import React from "react";
import Stories from "./Stories";
import AddPost from "@/components/AddPostMiddleBar/AddPost";
import Feed from "@/components/FeedMiddleBar/Feed";
export default function MiddleBar() {
  return (
    <div className="flex flex-col gap-6 pl-2 pr-2">
      <Stories />
      <AddPost />
      <Feed />
    </div>
  );
}
