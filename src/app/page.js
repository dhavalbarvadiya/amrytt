"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BlogHeroImage from "@/assets/images/blog.jpg";
import Blog1 from "@/assets/images/blog1.jpg";
import Blog2 from "@/assets/images/blog2.jpg";
import Blog3 from "@/assets/images/blog3.jpg";
import Blog4 from "@/assets/images/blog4.jpg";
import Blog5 from "@/assets/images/blog5.jpg";
import Blog6 from "@/assets/images/blog6.jpg";
import Author from "@/assets/images/author.png";
import User1 from "@/assets/images/user1.png";
import User2 from "@/assets/images/user2.png";
import User3 from "@/assets/images/user3.png";
import {
  AngryIcon,
  ChatIcon,
  FillStarIcon,
  HappyIcon,
  LineStarIcon,
  LoveIt,
  MapIcon,
  NeutralIcon,
  NextIcon,
  PreviousIcon,
  VHappyIcon,
} from "@/assets/icon/icon";

export default function Home() {
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
      <header className="header_section">
        <div className="container">
          <div className="heading_wrap">
            <nav className="breadcrumb_wrap">
              <ul className="breadcrumb">
                <li className="breadcrumb_item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb_item active" aria-current="page">
                  Articles
                </li>
              </ul>
            </nav>
            <div className="main_heading">
              <h1 className="title">
                The Ultimate Guide to Full-Body Workouts
              </h1>
            </div>
          </div>
        </div>
        <div className="container_fluid">
          <Image
            src={BlogHeroImage}
            alt="The Ultimate Guide to Full-Body Workouts"
            title="The Ultimate Guide to Full-Body Workouts"
            className="img_fluid w_100"
          />
        </div>
      </header>
      <main className="main_section">
        <div className="container">
          <div className="grid_wrap">
            <article>
              <div className="author_details">
                <div className="author">
                  <Image
                    src={Author}
                    alt="Alex Carter"
                    title="Alex Carter"
                    className="img"
                  />
                  <div className="text">Alex Carter</div>
                </div>
                <div className="post_date">23 January, 2025</div>
              </div>
              <div className="editor_text">
                <p>
                  Discover exercises that target every muscle group, helping you
                  build strength and endurance. Perfect for beginners and
                  seasoned gym-goers alike.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus
                </p>
                <p>
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus{" "}
                </p>
                <blockquote>
                  With over a decade of experience in the fitness industry, Alex
                  specializes in strength training and functional fitness.
                  Certified by NASM and known for his motivational style, Alex
                  designs workout programs that are both challenging and
                  achievable. His passion lies in helping clients build strength
                  and confidence through personalized training routines. Outside
                  the gym, Alex is an avid runner and enjoys outdoor adventures.
                </blockquote>
                <p>
                  With over a decade of experience in the fitness industry, Alex
                  specializes in strength training and functional fitness.
                  Certified by NASM and known for his motivational style, Alex
                  designs workout programs that are both challenging and
                  achievable. His passion lies in helping clients build strength
                  and confidence through personalized training routines. Outside
                  the gym, Alex is an avid runner and enjoys outdoor adventures.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus{" "}
                </p>
                <p>
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus{" "}
                </p>
                <p>
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                  quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor
                  sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean
                </p>
              </div>
              <div className="author_intro">
                <div className="section_title p_24">
                  <h2 className="title">
                    About <span>Alex Carter</span>
                  </h2>
                </div>
                <Image
                  src={Author}
                  alt="Alex Carter"
                  title="Alex Carter"
                  width={100}
                  height={100}
                  className="author_img"
                />
                <p className="para">
                  With over a decade of experience in the fitness industry, Alex
                  specializes in strength training and functional fitness.
                  Certified by NASM and known for his motivational style, Alex
                  designs workout programs that are both challenging and
                  achievable. His passion lies in helping clients build strength
                  and confidence through personalized training routines. Outside
                  the gym, Alex is an avid runner and enjoys outdoor adventures.
                </p>
              </div>
              <div className="pre_next_block">
                <div className="pre_item">
                  <button type="button" className="btn btn_outline_primary">
                    <PreviousIcon /> Previous
                  </button>
                  <p className="para">5 Tips for Better Cardio Sessions</p>
                </div>
                <div className="next_item">
                  <button type="button" className="btn btn_outline_primary">
                    <NextIcon /> Next
                  </button>
                  <p className="para">Meal Prep Basics for Gym Enthusiasts</p>
                </div>
              </div>
            </article>
            <aside>
              <div className="explore_block">
                <div className="section_title p_24">
                  <h2 className="title">Explore more</h2>
                </div>
                <div className="post_card">
                  <Image
                    src={Blog1}
                    alt="Two women in local stand are chatting during morning.."
                    title="Two women in local stand are chatting during morning.."
                    className="img_fuild w_100"
                  />
                  <div className="card_body">
                    <ul className="list">
                      <li className="category">Culinary</li>
                      <li className="date">| 13 Jun 2022</li>
                    </ul>
                    <h3 className="title">
                      Two women in local stand are chatting during morning..
                    </h3>
                  </div>
                </div>
                <div className="post_card">
                  <Image
                    src={Blog1}
                    alt="Two women in local stand are chatting during morning.."
                    title="Two women in local stand are chatting during morning.."
                    className="img_fuild w_100"
                  />
                  <div className="card_body">
                    <ul className="list">
                      <li className="category">Travel</li>
                      <li className="date">| 22 Jul 2022</li>
                    </ul>
                    <h3 className="title">
                      Enjoying the sunset on Padar island together
                    </h3>
                  </div>
                </div>
                <div className="post_card">
                  <Image
                    src={Blog2}
                    alt="Two women in local stand are chatting during morning.."
                    title="Two women in local stand are chatting during morning.."
                    className="img_fuild w_100"
                  />
                  <div className="card_body">
                    <ul className="list">
                      <li className="category">Travel</li>
                      <li className="date">| 22 Jul 2022</li>
                    </ul>
                    <h3 className="title">
                      The lush green surroundings of the campgrounds create a..
                    </h3>
                  </div>
                </div>
              </div>
              <div className="guides_block">
                <div className="section_title">
                  <h2 className="title">Tour Guides</h2>
                </div>
                <div className="tour_guides_card">
                  <div className="card_body">
                    <Image
                      src={User1}
                      alt="Miranda Rachel"
                      title="Miranda Rachel"
                      className="avatar"
                    />
                    <div>
                      <h3 className="title">Miranda Rachel</h3>
                      <address className="location">
                        <MapIcon />
                        <span>Jombang, Jawa timur</span>
                      </address>
                    </div>
                  </div>
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
                    <div className="count">(4.0)</div>
                  </div>
                </div>
                <div className="tour_guides_card">
                  <div className="card_body">
                    <Image
                      src={User2}
                      alt="Danielle Marsh"
                      title="Danielle Marsh"
                      className="avatar"
                    />
                    <div>
                      <h3 className="title">Danielle Marsh</h3>
                      <address className="location">
                        <MapIcon />
                        <span>Wonosobo, Jawa ten..</span>
                      </address>
                    </div>
                  </div>
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
                    <div className="count">(4.0)</div>
                  </div>
                </div>
                <div className="tour_guides_card">
                  <div className="card_body">
                    <Image
                      src={User3}
                      alt="Kang Haerin"
                      title="Kang Haerin"
                      className="avatar"
                    />
                    <div>
                      <h3 className="title">Kang Haerin</h3>
                      <address className="location">
                        <MapIcon />
                        <span>Bandung, Jawa barat</span>
                      </address>
                    </div>
                  </div>
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
                    <div className="count">(5.0)</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <section className="comment_section">
        <div className="container">
          <div className="section_title">
            <h2 className="title comment_title">Comments</h2>
          </div>

          <div className="comment_list">
            <div className="comment_card">
              <div>
                <Image
                  src={User2}
                  alt="Kang Haerin"
                  title="Kang Haerin"
                  className="user_image"
                  width={60}
                  height={60}
                />
              </div>
              <div className="comment_body">
                <div className="user_details">
                  <div className="user">
                    <div className="title">Kang Haerin</div>
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
                      <div className="count">(4.0)</div>
                    </div>
                  </div>
                  <div className="date">22 Jul 2022</div>
                </div>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus.
                </p>
              </div>
            </div>
            <div className="comment_card">
              <div>
                <Image
                  src={User2}
                  alt="Kang Haerin"
                  title="Kang Haerin"
                  className="user_image"
                  width={60}
                  height={60}
                />
              </div>
              <div className="comment_body">
                <div className="user_details">
                  <div className="user">
                    <div className="title">Kang Haerin</div>
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
                      <div className="count">(4.0)</div>
                    </div>
                  </div>
                  <div className="date">22 Jul 2022</div>
                </div>
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  {errors.name && <p>{errors.name.message}</p>}
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
                  {errors.email && <p>Email is required</p>}
                </div>
              </div>
              <div className="form_group">
                <label htmlFor="comment" className="form_label">
                  Comment
                </label>
                <textarea
                  id="commentq"
                  placeholder="Search anything..."
                  className="form_control textarea"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
                {errors.message && <p>{errors.message.message}</p>}
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
                    <ChatIcon /> Submit
                  </button>
                </div>
                {errors.rating && (
                  <p style={{ color: "red" }}>{errors.rating.message}</p>
                )}
              </div>
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
      <section className="related_section">
        <div className="container">
          <div className="main_heading">
            <h2 className="title">Related articles</h2>
          </div>
          <div className="related_grid">
            <div className="related_card">
              <Image
                src={Blog3}
                alt="The Ultimate Guide to Full-Body Workouts"
                title="The Ultimate Guide to Full-Body Workouts"
                width={1200}
                height={630}
                className="img_fluid"
              />
              <div className="card_body">
                <h3 className="title">
                  The Ultimate Guide to Full-Body Workouts
                </h3>
                <p className="para">
                  Discover exercises that target every muscle group, helping you
                  build strength and endurance. Perfect for beginners and
                  seasoned gym-goers alike.
                </p>
                <div className="author">
                  By <span>Alex Carter</span>
                </div>
              </div>
            </div>
            <div className="related_card">
              <Image
                src={Blog4}
                alt="5 Tips for Better Cardio Sessions"
                title="5 Tips for Better Cardio Sessions"
                width={1200}
                height={630}
                className="img_fluid"
              />
              <div className="card_body">
                <h3 className="title">5 Tips for Better Cardio Sessions</h3>
                <p className="para">
                  Improve your cardio performance with these simple yet
                  effective techniques to maximize stamina and get the most from
                  each workout.
                </p>
                <div className="author">
                  By <span>Maya Lee</span>
                </div>
              </div>
            </div>
            <div className="related_card">
              <Image
                src={Blog5}
                alt="Meal Prep Basics for Gym Enthusiasts"
                title="Meal Prep Basics for Gym Enthusiasts"
                width={1200}
                height={630}
                className="img_fluid"
              />
              <div className="card_body">
                <h3 className="title">Meal Prep Basics for Gym Enthusiasts</h3>
                <p className="para">
                  Fuel your workouts with balanced, easy-to-prepare meals. A
                  guide on planning, prepping, and staying consistent with
                  nutrition.
                </p>
                <div className="author">
                  By <span>Jordan Smith</span>
                </div>
              </div>
            </div>
            <div className="related_card">
              <Image
                src={Blog6}
                alt="Building Core Strength: Exercises and Benefits"
                title="Building Core Strength: Exercises and Benefits"
                width={1200}
                height={630}
                className="img_fluid"
              />
              <div className="card_body">
                <h3 className="title">
                  Building Core Strength: Exercises and Benefits
                </h3>
                <p className="para">
                  A strong core is essential for stability and injury
                  prevention. Learn the best exercises to enhance your core
                  power.
                </p>
                <div className="author">
                  By <span>Emma Rodriguez</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
