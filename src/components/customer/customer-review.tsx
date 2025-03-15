"use client";

import { customerStories } from "@/utils/constant";
import { ReviewItem } from "./review-item";

export const CustomerReview = () => {
  return (
    <div className="overflow-hidden mask-image-custom py-8 group">
      <div className="flex items-center gap-5 animate-infinite-scroll [--animation-delay:30s] group-hover:[animation-play-state:paused]">
        {[...customerStories, ...customerStories].map((items, idx) => (
          <ReviewItem key={idx} items={items} />
        ))}
      </div>
    </div>
  );
};
