import background from "@/public/gingham-panel.webp";
import Box1 from "@/public/paper-card-md.webp";
import Box2 from "@/public/paper-card-sm.webp";

const stats = [
  { value: "24", label: "hours to build" },
  { value: "10", label: "tracks to enter" },
  { value: "$0", label: "to attend" },
  { value: "All", label: "majors & years" },
];

const About = () => {
  return (
    <div className="font-poppins p-4 sm:p-6 md:p-8">
      <img
        src={background.src}
        alt="Gingham Panel"
        className="fixed inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-start md:gap-8">
        <div className="relative w-full md:max-w-2xl">
          <img
            src={Box1.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-fill"
          />

          <div className="relative p-6 sm:p-8 md:p-10">
            <div className="text-rosehack-darkgreen text-xs font-bold sm:text-sm">
              WHAT IS ROSEHACK?
            </div>

            <div className="font-cormorant text-rosehack-purple mt-4 text-2xl leading-tight sm:mt-6 sm:text-3xl md:text-4xl">
              Most people here have
              <br className="hidden sm:block" /> never done this before.
            </div>

            <div className="border-rosehack-darkgreen mt-4 w-20 border-t-2 sm:mt-6 sm:w-28" />

            <div className="text-rosehack-darkgreen mt-6 text-sm sm:text-base md:mt-8">
              RoseHack is UC Riverside's 24-hour women-centric hackathon, hosted
              by Women in Computing and founded by leaders from ACM-W and the
              Society of Women Engineers. Over one weekend you'll join a team,
              learn from mentors working in industry, and demo something real by
              Sunday afternoon.
            </div>

            <div className="text-rosehack-darkgreen mt-4 text-sm sm:mt-6 sm:text-base">
              You don't need a team. You don't need a project idea. You don't
              need to know how to code. Most people walk in with none of that -{" "}
              that's exactly who we build it for.
            </div>
          </div>
        </div>

        <div className="relative w-full md:max-w-2xl">
          <img
            src={Box2.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-fill"
          />

          <div className="relative p-6 sm:p-8 md:p-10">
            <div className="text-rosehack-darkgreen text-xs font-bold sm:text-sm">
              AT A GLANCE
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-rosehack-lightgreen bg-rosehack-cream/70 flex flex-col items-center justify-center border-2 px-2 py-4 text-center sm:py-6"
                >
                  <div className="font-cormorant text-rosehack-purple text-3xl sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-rosehack-darkgreen mt-1 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-rosehack-darkgreen mt-6 text-sm sm:text-base md:mt-8">
              Meals, workshops, mentors and a quiet room to sleep in are all
              included. Come alone — teams form on the day.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
