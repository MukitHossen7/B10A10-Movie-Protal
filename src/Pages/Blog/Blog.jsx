import blogBanner from "../../assets/blogBanner.jpeg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img2 from "../../assets/img2.jpg";
const Blog = () => {
  return (
    <div className=" dark:text-gray-50 pb-16">
      <div className="py-10">
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg ">
          <img
            src={blogBanner}
            alt="image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl text-white  font-bold text-center">
              Blog
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-7 flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[65%] flex flex-col gap-7">
          <div className="bg-white dark:bg-gray-800/50 shadow-md rounded-xl">
            <img src={img5} className="rounded-xl"></img>
            <div className="px-8 py-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Drama Is Life With The Dull Bits Cut Out
              </h2>
              <p className="mt-4 dark:text-white/70 ">
                Drama is the art of extracting life’s most captivating moments
                and weaving them into stories that resonate deeply with us.
                While daily life often drifts in routines and ordinary tasks,
                drama takes the highlights—the joy, conflict, passion, and
                triumph—and distills them into a concentrated narrative. It
                strips away the dull, repetitive moments and focuses on what
                moves us, challenges us, and inspires us. By doing so, drama
                becomes a mirror reflecting the intensity of human experience,
                reminding us that even within the mundane, there are sparks of
                extraordinary waiting to be uncovered.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800/50 shadow-md rounded-xl">
            <img src={img4} className="rounded-xl"></img>
            <div className="px-8 py-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                Filmmaking Can Give You Everything
              </h2>
              <p className="mt-4 dark:text-white/70 ">
                Filmmaking is a boundless art form that combines storytelling,
                emotion, and creativity into a single medium, offering the power
                to transport audiences to new worlds, evoke deep emotions, and
                challenge perceptions. It gives you the opportunity to explore
                diverse perspectives, share your voice, and craft unforgettable
                narratives. From the thrill of directing actors to the magic of
                editing and visual effects, filmmaking provides a unique sense
                of fulfillment. It’s not just about creating movies—it’s about
                shaping dreams, inspiring change, and leaving a legacy that can
                resonate across generations.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800/50 shadow-md rounded-xl">
            <img src={img3} className="rounded-xl"></img>
            <div className="px-8 py-8">
              <h2 className="text-2xl md:text-3xl font-bold">
                I Love Editing. It’s One Of My Favorite.
              </h2>
              <p className="mt-4 dark:text-white/70 ">
                Editing is more than just a technical process its where the
                magic of storytelling truly comes alive. It’s the art of shaping
                raw footage into a seamless narrative, piecing together moments,
                emotions, and visuals to create something extraordinary. For
                those who love editing, it’s a blend of creativity and
                precision, a puzzle waiting to be solved with every cut and
                transition. It’s one of the most rewarding parts of filmmaking,
                where you have the power to control the rhythm, enhance the
                emotion, and bring your vision to life. Every frame edited feels
                like a step closer to perfection, making it a favorite craft for
                many
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800/50 shadow-md rounded-xl">
            <img src={img2} className="rounded-xl"></img>
            <div className="px-8 py-8">
              <h2 className="text-2xl md:text-3xl font-bold ">
                Filmmaking is a miracle of collaboration.
              </h2>
              <p className="mt-4 dark:text-white/70 ">
                Filmmaking is a testament to the power of collaboration, where
                diverse talents and perspectives come together to create
                something extraordinary. It’s a seamless blend of art and
                technology, where directors, writers, actors, cinematographers,
                editors, and countless others work in harmony to bring a shared
                vision to life. Each person contributes their unique expertise,
                whether it’s crafting compelling dialogue, capturing
                breathtaking visuals, or designing immersive soundscapes. The
                true miracle lies in how these individual efforts unite to form
                a cohesive story that resonates with audiences. Filmmaking
                reminds us that great things are rarely achieved alone—it’s the
                collective passion and teamwork that make the magic happen.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-8">
          <div className="bg-white dark:bg-gray-800/50 shadow-md rounded-xl px-7 flex py-10 space-x-5">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full max-w-xs py-7 dark:bg-gray-700 rounded-full"
            />
            <button className=" bg-indigo-600 py-4 px-5 rounded-full text-white">
              Search
            </button>
          </div>
          <div className="bg-white dark:bg-gray-800/50 shadow-md rounded-xl py-10 px-7">
            <h2 className="text-2xl md:text-3xl font-bold">Recent Posts</h2>
            <div className="divider"></div>
            <div className="flex flex-col gap-9">
              <div>
                <div className="flex items-center gap-6">
                  <img
                    src={img5}
                    alt="image"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="text-sm md:text-lg font-medium">
                      Drama Is Life With The Dull Bits Cut Out
                    </h3>
                    <p className="text-xs md:text-sm dark:text-gray-400">
                      Dec 30 ,2024
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <img
                    src={img4}
                    alt="image"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="text-sm md:text-lg font-medium">
                      Filmmaking Can Give You Everything
                    </h3>
                    <p className="text-xs md:text-sm dark:text-gray-400">
                      Jan 2 ,2025
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <img
                    src={img3}
                    alt="image"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="text-sm md:text-lg font-medium">
                      I Love Editing. It’s One Of My Favorite.
                    </h3>
                    <p className="text-xs md:text-sm dark:text-gray-400">
                      Jan 10 ,2025
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <img
                    src={img2}
                    alt="image"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  <div>
                    <h3 className="text-sm md:text-lg font-medium">
                      Filmmaking is a miracle of collaboration.
                    </h3>
                    <p className="text-xs md:text-sm dark:text-gray-400">
                      Feb 10 ,2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800/50 shadow-md rounded-xl py-10 px-7">
            <h2 className="text-2xl md:text-3xl font-bold">Categories</h2>
            <div className="divider"></div>
            <ul className="list-disc text-xl space-y-2 list-inside">
              <li>Accessories</li>
              <li>Body Parts</li>
              <li>Engine & Drivetrain</li>
              <li>Helmet</li>
              <li>Interior Parts</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800/50 shadow-md rounded-xl py-10 px-7">
            <h2 className="text-2xl md:text-3xl font-bold">Tags</h2>
            <div className="divider"></div>
            <div className="flex flex-wrap gap-3">
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Air Filters
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Brake Discs
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Bumpers
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Car Care
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Car Covers
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Cargo Accessories
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Consoles & Organizers
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Corner Lights
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Floor Mats
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Fog Lights
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Hoods
              </button>
              <button className="px-3 py-1 rounded-full bg-gray-300 dark:bg-black/50 dark:text-gray-300">
                Wheel Hubs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
