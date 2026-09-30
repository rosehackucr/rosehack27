import background from "@/public/gingham-panel1.png";
import myImage from "@/public/paper-card-md 1.png";
import myImage2 from "@/public/paper-card-sm 1.png";

const stats = [
  { value: "24", label: "hours to build" },
  { value: "10", label: "tracks to enter" },
  { value: "$0", label: "to attend" },
  { value: "All", label: "majors & years" },
];


const About = () => {
  return (
    <div className="p-8">

      <img
        src={background.src}
        alt="Gingham Panel"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />

      <div className="flex flex-col md:flex-row gap-8 items-start">

      <div className="relative w-full max-w-2xl">

        <img
          src={myImage.src}
          alt="Paper"
          className="w-full h-auto"
        />

        <div className="absolute inset-0 p-10">

          <div className="text-sm font-bold text-green-700">
            WHAT IS ROSEHACK?
          </div>

          <div className="mt-6 text-4xl font-serif text-purple-400">
            Most people here have
            <br />
            never done this before.
          </div>

          <div className="mt-6 w-28 border-t-2 border-green-700" />

          <div className="mt-8 text-md text-green-700">
            RoseHack is UC Riverside's 24-hour women-centric hackathon,
            hosted by Women in Computing and founded by leaders from ACM-W
            and the Society of Women Engineers. Over one weekend you'll
            join a team, learn from mentors working in industry, and demo
            something real by Sunday afternoon.
          </div>

          <div className="mt-6 text-md text-green-700">
            You don't need a team. You don't need a project idea. You don't
            need to know how to code. Most people walk in with none of that -
            that's exactly who we build it for.
          </div>

        </div>
      </div>


      <div className="relative w-full max-w-2xl">

        <img
          src={myImage2.src}
          alt="Paper"
          className="w-full h-auto"
        />

        <div className="absolute inset-0 p-10">

          <div className="text-sm font-bold text-green-700">
            AT A GLANCE
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center border-2 border-green-300 py-6 text-center"
                >
                  <div className="text-4xl font-serif text-purple-400">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-green-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          <div className="mt-8 text-md text-green-700">
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