"use client";

import {
  AngryIcon,
  ChatIcon,
  HappyIcon,
  LoveIt,
  NeutralIcon,
  VHappyIcon,
} from "@/assets/icon/icon";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function CommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [fromData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data);
    console.log(data);
  };
  return (
    <>
      <section className="comment_form_section">
        <div className="container">
          <div className="section_title">
            <h2 className="title comment_title">Add a comment</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form_grid" suppressHydrationWarning={true}>
              <div>
                <div className="form_group mb_20">
                  <label htmlFor="name" className="form_label">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form_control"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p style={{ color: "red" }}>{errors.name.message}</p>
                  )}
                </div>
                <div className="form_group">
                  <label htmlFor="email" className="form_label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="form_control"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>Email is required</p>
                  )}
                </div>
              </div>
              <div className="form_group">
                <label htmlFor="comment" className="form_label">
                  Comment
                </label>
                <textarea
                  id="comment"
                  placeholder="Search anything..."
                  className="form_control textarea"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
                {errors.message && (
                  <p style={{ color: "red" }}>{errors.message.message}</p>
                )}
              </div>

              <div className="rating_btn_block full_width">
                <div className="rating_block">
                  <label>Rate the usefulness of the article</label>
                  <div className="rating_list">
                    {[
                      {
                        value: 1,
                        emoji: (
                          <>
                            <AngryIcon />
                          </>
                        ),
                        label: "Angry",
                      },
                      {
                        value: 2,
                        emoji: (
                          <>
                            <NeutralIcon />
                          </>
                        ),
                        label: "Neutral",
                      },
                      {
                        value: 3,
                        emoji: (
                          <>
                            <HappyIcon />
                          </>
                        ),
                        label: "Happy",
                      },
                      {
                        value: 4,
                        emoji: (
                          <>
                            <VHappyIcon />
                          </>
                        ),
                        label: "Very Happy",
                      },
                      {
                        value: 5,
                        emoji: (
                          <>
                            <LoveIt />
                          </>
                        ),
                        label: "Love It",
                      },
                    ].map(({ value, emoji, label }) => (
                      <label key={value} style={{ cursor: "pointer" }}>
                        <input
                          type="radio"
                          value={value}
                          style={{ display: "none" }}
                          {...register("rating", {
                            required: "Rating is required",
                          })}
                        />
                        <div className="rating_item">
                          <div className="icon">{emoji}</div>
                          <div className="label">{label}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="button_block">
                  <button type="submit" className="btn btn_primary">
                    <ChatIcon /> Submit{" "}
                    <span className="comment_text">Comment</span>
                  </button>
                </div>
              </div>
              {errors.rating && (
                <p style={{ color: "red" }}>{errors.rating.message}</p>
              )}
            </div>
          </form>
          {fromData && (
            <div
              style={{
                marginTop: "20px",
                background: "#f9f9f9",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              <h3>Comment Data:</h3>
              <p>
                <strong>Name:</strong> {fromData.name}
              </p>
              <p>
                <strong>Email:</strong> {fromData.email}
              </p>
              <p>
                <strong>Message:</strong> {fromData.message}
              </p>
              <p>
                <strong>Rating:</strong> {fromData.rating}
              </p>

              {(() => {
                const ratingMap = {
                  1: {
                    emoji: (
                      <>
                        <AngryIcon />
                      </>
                    ),
                    label: "Angry",
                  },
                  2: {
                    emoji: (
                      <>
                        <NeutralIcon />
                      </>
                    ),
                    label: "Neutral",
                  },
                  3: {
                    emoji: (
                      <>
                        <HappyIcon />
                      </>
                    ),
                    label: "Happy",
                  },
                  4: { emoji: <VHappyIcon />, label: "Very Happy" },
                  5: {
                    emoji: (
                      <>
                        <LoveIt />
                      </>
                    ),
                    label: "Love It",
                  },
                };

                const rating = ratingMap[fromData.rating];

                return (
                  <p>
                    <strong>Rating:</strong> {rating?.emoji} {rating?.label}
                  </p>
                );
              })()}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
