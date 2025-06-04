"use client";

import React from "react";
import dynamic from "next/dynamic";
import useWindowWidth from "@/hook/useWindowWidth";
import TourGuides from "./TourGuides";

const PostSlider = dynamic(() => import("../component/PostSlider"), {
  ssr: false,
});
const PostCard = dynamic(() => import("../component/PostCard"), {
  ssr: false,
});

export default function AsideBlock(props) {
  const width = useWindowWidth();
  if (width === undefined) return null;
  return (
    <aside>
      <div className="explore_block">
        <div className="section_title p_24">
          <h2 className="title">Explore more</h2>
        </div>

        {width >= 767 ? (
          <PostCard posts={props.posts} />
        ) : (
          <PostSlider posts={props.posts} />
        )}
      </div>
      <div className="guides_block">
        <div className="section_title">
          <h2 className="title">Tour Guides</h2>
        </div>
        <TourGuides profiles={props.profiles} />
      </div>
    </aside>
  );
}
