import React from "react";
import CommentList from "@/component/CommentList";
import RelatedPost from "@/component/RelatedPost";
import Header from "@/component/Header";
import MainSection from "@/component/MainSection";
import CommentFormWrapper from "@/component/CommentFormWrapper";

const posts = [
  {
    image: "/images/blog1.jpg",
    category: "Culinary",
    date: "13 Jun 2022",
    title: "Two women in local stand are chatting during morning..",
  },
  {
    image: "/images/blog1.jpg",
    category: "Travel",
    date: "22 Jul 2022",
    title: "Enjoying the sunset on Padar island together",
  },
  {
    image: "/images/blog2.jpg",
    category: "Travel",
    date: "22 Jul 2022",
    title: "The lush green surroundings of the campgrounds create a..",
  },
];

const profiles = [
  {
    image: "/images/user1.png",
    name: "Miranda Rachel",
    location: "Jombang, Jawa Timur",
    rating: 4.0,
  },
  {
    image: "/images/user2.png",
    name: "Danielle Marsh",
    location: "Wonosobo, Jawa Tengah",
    rating: 4.0,
  },
  {
    image: "/images/user3.png",
    name: "Kang Haerin",
    location: "Bandung, Jawa Barat",
    rating: 5.0,
  },
];

const commentlist = [
  {
    image: "/images/user2.png",
    name: "Kang Haerin",
    rating: 5.0,
    date: "22 Jul 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
  },
  {
    image: "/images/user2.png",
    name: "Kang Haerin",
    rating: 5.0,
    date: "22 Jul 2022",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
  },
];

const articles = [
  {
    image: "/images/blog3.jpg",
    title: "The Ultimate Guide to Full-Body Workouts",
    description:
      "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
    author: "Alex Carter",
  },
  {
    image: "/images/blog4.jpg",
    title: "5 Tips for Better Cardio Sessions",
    description:
      "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
    author: "Maya Lee",
  },
  {
    image: "/images/blog5.jpg",
    title: "Meal Prep Basics for Gym Enthusiasts",
    description:
      "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
    author: "Jordan Smith",
  },
  {
    image: "/images/blog6.jpg",
    title: "Building Core Strength: Exercises and Benefits",
    description:
      "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
    author: "Emma Rodriguez",
  },
];

const postdetails = {
  title: "The Ultimate Guide to Full-Body Workouts",
  image: "/images/blog.jpg",
  author_img: "/images/author.png",
  author_name: "Alex Carter",
  author_description:
    "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
  date: "23 January, 2025",
  body: "<p>Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p><p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p><blockquote>With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.</blockquote><p>With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p><p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p><p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean</p>",
};

export const metadata = {
  title: postdetails.title,
  description: "Learn more about our company.",
  keywords: ["about", "company", "info"],
  authors: [{ name: postdetails.author_name, url: "https://example.com" }],
  openGraph: {
    title: postdetails.title,
    description: "OG description for social sharing",
    url: "https://example.com/about",
    siteName: "Amrytt",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: postdetails.title,
    description: "Learn more about us on Twitter",
    images: ["https://example.com/twitter-image.jpg"],
    creator: "@amrytt",
  },
  robots: {
    index: false, // on development
    follow: false, // on development
    nocache: false,
  },
};

export default function Home() {
  return (
    <>
      <Header title={postdetails.title} image={postdetails.image} />
      <MainSection
        postdetails={postdetails}
        posts={posts}
        profiles={profiles}
      />
      <CommentList commentlist={commentlist} />
      <CommentFormWrapper />
      <RelatedPost title={"Related articles"} articles={articles} />
    </>
  );
}
