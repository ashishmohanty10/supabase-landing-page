import { testimonials } from "@/utils/constant";
import { Marquee } from "./marquee";
import { Repeat2, ThumbsUp } from "lucide-react";

export function TestimonialMarquee() {
  return (
    <>
      <Marquee className="overflow-hidden mask-gradient-custom flex items-center mb-8 mask-image-custom">
        <div className="flex animate-infinite-scroll [--animation-delay:60s]">
          {testimonials.map((data) => (
            <div
              key={data.id}
              className="border bo available border-transparent-border flex flex-col items-center mx-4 min-w-[40rem] p-5 rounded-3xl space-y-2"
            >
              <div className="flex items-center gap-x-2 w-full">
                <div className="w-10 h-10 rounded-full border border-transparent-border bg-gradient-to-tr from-green via-brand to-primary-button"></div>
                <p className="text-md">{data.displayName}</p>
              </div>

              <div className="flex flex-col justify-between h-full space-y-2">
                <p className="text-sm text-secondary-text">{data.content}</p>

                <div className="flex items-center w-full gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <ThumbsUp size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Repeat2 size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {testimonials.map((data) => (
            <div
              key={data.id}
              className="border border-transparent-border flex flex-col items-center mx-4 min-w-[40rem] p-5 rounded-3xl space-y-2"
            >
              <div className="flex items-center gap-x-2 w-full">
                <div className="w-10 h-10 rounded-full border border-transparent-border bg-gradient-to-tr from-green via-brand to-primary-button"></div>
                <p className="text-md">{data.displayName}</p>
              </div>

              <div className="flex flex-col justify-between h-full space-y-2">
                <p className="text-sm text-secondary-text">{data.content}</p>

                <div className="flex items-center w-full gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <ThumbsUp size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Repeat2 size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee className="overflow-hidden mask-gradient-custom flex items-center mask-gradient-opacity">
        <div className="flex animate-infinite-scroll [--animation-delay:60s]">
          {testimonials.map((data) => (
            <div
              key={data.id}
              className="border border-transparent-border flex flex-col items-center mx-4 min-w-[40rem] p-5 rounded-3xl space-y-2"
            >
              <div className="flex items-center gap-x-2 w-full">
                <div className="w-10 h-10 rounded-full border border-transparent-border bg-gradient-to-tr from-green via-brand to-primary-button"></div>
                <p className="text-md">{data.displayName}</p>
              </div>

              <div className="flex flex-col justify-between h-full space-y-2">
                <p className="text-sm text-secondary-text">{data.content}</p>

                <div className="flex items-center w-full gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <ThumbsUp size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Repeat2 size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {testimonials.map((data) => (
            <div
              key={data.id}
              className="border border-transparent-border flex flex-col items-center mx-4 min-w-[40rem] p-5 rounded-3xl space-y-2"
            >
              <div className="flex items-center gap-x-2 w-full">
                <div className="w-10 h-10 rounded-full border border-transparent-border bg-gradient-to-tr from-green via-brand to-primary-button"></div>
                <p className="text-md">{data.displayName}</p>
              </div>

              <div className="flex flex-col justify-between h-full space-y-2">
                <p className="text-sm text-secondary-text">{data.content}</p>

                <div className="flex items-center w-full gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <ThumbsUp size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Repeat2 size={16} />
                    <p className="text-sm">{data.likes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </>
  );
}
