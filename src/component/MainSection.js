import React from "react";
import ArticleBlock from "./ArticleBlock";
import AsideBlock from "./AsideBlock";

export default function MainSection(props) {
  return (
    <>
      <main className="main_section">
        <div className="container">
          <div className="grid_wrap">
            <ArticleBlock postdetails={props.postdetails} />
            <AsideBlock posts={props.posts} profiles={props.profiles} />
          </div>
        </div>
      </main>
    </>
  );
}
