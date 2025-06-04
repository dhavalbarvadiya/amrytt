"use client";

import React from "react";
import dynamic from "next/dynamic";

const CommentForms = dynamic(() => import("../component/CommentForm"), {
  ssr: false,
});

export default function CommentFormWrapper() {
  return <CommentForms />;
}
