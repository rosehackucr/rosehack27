import { CalendarPlus, ChevronDown, MapPin } from "lucide-react";

// Only facts the site already states: January 30–31, 2027 at Winston Chung
// Hall. No start or end time is published, so it's an all-day event.
const TITLE = "RoseHack ’27";
const LOCATION = "Winston Chung Hall, UC Riverside, Riverside, CA";
const DETAILS =
  "UC Riverside's 24-hour women-centric hackathon. Free to attend, open to all, no experience required. https://rosehack27.vercel.app";

const googleCalendar =
  "https://calendar.google.com/calendar/render?" +
  new URLSearchParams({
    action: "TEMPLATE",
    text: TITLE,
    // All-day: the end date is exclusive.
    dates: "20270130/20270201",
    details: DETAILS,
    location: LOCATION,
  });

const directions =
  "https://www.google.com/maps/search/?" +
  new URLSearchParams({ api: "1", query: "Winston Chung Hall, UC Riverside" });

const link =
  "hover:text-rosehack-yellow flex items-center gap-1.5 underline-offset-4 transition duration-200 hover:underline";

// "Add to calendar" and "Directions" under the hero's date line. The menu is
// a native <details>, so it works with the keyboard and without JS.
const EventLinks = () => (
  <div className="relative z-10 -mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
    <details className="group relative">
      <summary
        className={`${link} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}
      >
        <CalendarPlus className="size-4" aria-hidden="true" />
        Add to calendar
        <ChevronDown
          className="size-4 transition duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="bg-rosehack-cream text-rosehack-darkgreen absolute top-full left-1/2 z-20 mt-2 flex w-56 -translate-x-1/2 flex-col rounded-lg p-2 text-left shadow-lg">
        <a
          href={googleCalendar}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-rosehack-darkgreen/10 rounded-md px-3 py-2 transition duration-200"
        >
          Google Calendar
        </a>
        <a
          href="/rosehack-2027.ics"
          download
          className="hover:bg-rosehack-darkgreen/10 rounded-md px-3 py-2 transition duration-200"
        >
          Apple Calendar / Outlook (.ics)
        </a>
      </div>
    </details>
    <a
      href={directions}
      target="_blank"
      rel="noopener noreferrer"
      className={link}
    >
      <MapPin className="size-4" aria-hidden="true" />
      Directions
    </a>
  </div>
);

export default EventLinks;
