import Image from "next/image";
import type { Judge } from "@/data/judges";

type JudgeCardProps = {
  judge?: Judge;
};

const JudgeCard = ({ judge }: JudgeCardProps) => {
  return (
    <div className="flex aspect-[300/190] items-center gap-5 bg-[url('/paper-card-sm.webp')] bg-[length:100%_100%] bg-no-repeat px-7 pb-4">
      {judge ? (
        <>
          <Image
            src={judge.photo}
            alt={judge.name}
            width={112}
            height={112}
            className="size-24 shrink-0 rounded-full object-cover sm:size-28"
          />
          <div className="flex flex-col gap-1 text-left">
            <p className="text-rosehack-purple text-lg font-bold">
              {judge.name}
            </p>
            <p className="text-sm">{judge.role}</p>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default JudgeCard;
