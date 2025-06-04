import Image from "next/image";
import React from "react";

export default function PostCard(props) {
  return (
    <>
      {props.posts &&
        props.posts.map((post, i) => {
          return (
            <div className="post_card" key={i}>
              <Image
                src={post.image}
                alt={post.title}
                title={post.title}
                className="img_fuild"
                width={301}
                height={165}
              />
              <div className="card_body">
                <ul className="list">
                  <li className="category">{post.category}</li>
                  <li className="date">| {post.date}</li>
                </ul>
                <h3 className="title">{post.title}</h3>
              </div>
            </div>
          );
        })}
    </>
  );
}
