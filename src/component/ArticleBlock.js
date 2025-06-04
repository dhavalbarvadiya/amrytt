import Image from "next/image";
import React from "react";
import Pre from "@/assets/images/pre.svg";
import Next from "@/assets/images/next.svg";

export default function ArticleBlock(props) {
  const { author_img, author_name, author_description, date, body } =
    props.postdetails;
  return (
    <article>
      <div className="author_details">
        <div className="author">
          <Image
            src={author_img}
            alt={author_name}
            title={author_name}
            className="img"
            width={32}
            height={32}
          />
          <div className="text">{author_name}</div>
        </div>
        <div className="post_date">{date}</div>
      </div>
      <div
        className="editor_text"
        dangerouslySetInnerHTML={{ __html: body }}
      ></div>
      <div className="author_intro">
        <div className="section_title p_24">
          <h2 className="title">
            About <span>{author_name}</span>
          </h2>
        </div>
        <Image
          src={author_img}
          alt={author_name}
          title={author_name}
          width={100}
          height={100}
          className="author_img"
        />
        <p className="para">{author_description}</p>
      </div>
      <div className="pre_next_block">
        <div className="pre_item">
          <button type="button" className="btn btn_outline_primary">
            <Image src={Pre} alt="icon" width={16} height={16} /> Previous
          </button>
          <p className="para">5 Tips for Better Cardio Sessions</p>
        </div>
        <div className="next_item">
          <button type="button" className="btn btn_outline_primary">
            Next
            <Image src={Next} alt="icon" width={16} height={16} />
          </button>
          <p className="para">Meal Prep Basics for Gym Enthusiasts</p>
        </div>
      </div>
    </article>
  );
}
