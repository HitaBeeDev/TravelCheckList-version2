export default function Description() {
  return (
    <div className="flex flex-col gap-2 mt-12">
      <p className="text-xs text-color4 leading-relaxed">
        <soan className="font-semibold">"Roam and Remember" </soan>
        offers a streamlined approach to creating your essential travel
        checklist. From must-have documents to destination-specific items, we've
        got you covered for an organized and unforgettable journey. Start your
        adventure with confidence and cherish every moment, knowing you're fully
        prepared.
      </p>

      <p className="text-xs mt-8 text-color3 font-semibold text-center">
        Ready to find the ideal flight for your next great adventure? Click over
        to{" "}
        <a
          className="underline underline-offset-2 hover:text-color5"
          href="https://sky-quest-adventures.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SkyQuest
        </a>{" "}
        and let the journey begin! ✈️🌟
      </p>
    </div>
  );
}
