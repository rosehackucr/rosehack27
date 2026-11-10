import TracksSection from "@/components/tracks/TracksSection";
import Theme from "@/components/Theme";

const TracksPage = () => {
  return (
    <>
      <TracksSection />
      <Theme showTracksLink={false} />
    </>
  );
};

export default TracksPage;
