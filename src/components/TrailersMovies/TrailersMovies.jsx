const TrailersMovies = () => {
  return (
    <div className="mt-10 lg:mt-14">
      <h3 className="font-semibold text-xl lg:text-3xl dark:text-white">
        Coming soon to movies
      </h3>
      <p className="text-base lg:text-lg dark:text-white/50 mt-2">
        Trailers for upcoming releases
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <div>
          <iframe
            className="rounded-md"
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/8IiAm7KUuoY?si=mb7RvxqKsI347ICn"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3 className="font-semibold dark:text-white/50 mt-4">DEC 20</h3>
          <h3 className="text-xl dark:text-white">
            Marvel Studios’ Thunderbolts
          </h3>
        </div>

        <div>
          <iframe
            className="rounded-md"
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/NOhDyUmT9z0?si=OZIPzjk83m2mWEgm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3 className="font-semibold dark:text-white/50 mt-4">DEC 30</h3>
          <h3 className="text-xl dark:text-white">
            Mission: Impossible – The Final Reckoning
          </h3>
        </div>
        <div>
          <iframe
            className="rounded-md"
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/YBwoSa3n8Yc?si=fgsG5CAaqgd6zX_5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h3 className="font-semibold dark:text-white/50 mt-4">DEC 25</h3>
          <h3 className="text-xl dark:text-white">Dirty Angels (2024)</h3>
        </div>
      </div>
    </div>
  );
};

export default TrailersMovies;
