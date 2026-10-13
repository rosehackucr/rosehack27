import Image from "next/image";
import type { Speaker } from "@/data/speakers";

type SpeakerCardProps = {
  speaker?: Speaker;
};

const SpeakerCard = ({ speaker }: SpeakerCardProps) => {
  return (
    <div className="flex aspect-[300/190] min-w-0 items-center gap-4 bg-[url('/paper-card-sm.webp')] bg-[length:100%_100%] bg-no-repeat px-6 py-6">
      {!speaker && <span className="sr-only">Speaker to be announced</span>}
      {speaker ? (
        <>
          <Image
            src={speaker.photo}
            alt={speaker.name}
            width={112}
            height={112}
            className="size-24 shrink-0 rounded-full object-cover sm:size-28"
          />
          <div className="flex min-w-0 flex-col gap-1 text-left [overflow-wrap:anywhere]">
            <h2 className="text-rosehack-purple text-lg font-bold">
              {speaker.name}
            </h2>
            <p className="text-sm">{speaker.role}</p>
          </div>
        </>
      ) : (
        <div
          aria-hidden="true"
          className="flex w-full min-w-0 items-center gap-4"
        >
          <div className="border-rosehack-lightgreen flex size-24 shrink-0 items-center justify-center rounded-full border-2 border-dashed text-xs font-semibold uppercase sm:size-28">
            Photo
          </div>
          <div className="flex flex-1 flex-col gap-3 text-left">
            <div className="bg-rosehack-darkgreen/20 h-3 w-full rounded-full" />
            <div className="bg-rosehack-darkgreen/15 h-2.5 w-3/4 rounded-full" />
            <div className="bg-rosehack-pink/60 h-2.5 w-5/6 rounded-full" />
            <p className="mt-3 text-[0.65rem] font-semibold uppercase">
              Name · Role
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakerCard;
