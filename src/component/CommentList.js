import { FillStarIcon, LineStarIcon } from "@/assets/icon/icon";
import Image from "next/image";
import React from "react";

export default function CommentList(props) {
  return (
    <>
      <section className="comment_section">
        <div className="container">
          <div className="section_title">
            <h2 className="title comment_title">Comments</h2>
          </div>

          <div className="comment_list">
            {props.commentlist &&
              props.commentlist.map((item, i) => {
                return (
                  <div className="comment_card" key={i}>
                    <div>
                      <Image
                        src={item.image}
                        alt={item.name}
                        title={item.name}
                        className="user_image"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="comment_body">
                      <div className="user_details">
                        <div className="user">
                          <div className="title">{item.name}</div>
                          <div className="star_count">
                            <ul className="star_icon">
                              <li>
                                <FillStarIcon />
                              </li>
                              <li>
                                <FillStarIcon />
                              </li>
                              <li>
                                <FillStarIcon />
                              </li>
                              <li>
                                <FillStarIcon />
                              </li>
                              <li>
                                <LineStarIcon />
                              </li>
                            </ul>
                            <div className="count">({`${item.rating}.0`})</div>
                          </div>
                        </div>
                        <div className="date">{item.date}</div>
                      </div>
                      <p className="para">{item.content}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
