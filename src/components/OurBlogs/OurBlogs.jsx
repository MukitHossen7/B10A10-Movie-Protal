import { Link } from "react-router-dom";
import blogsImg from "../../assets/pexels-donaldtong94-66134.jpg";
import blogsImg2 from "../../assets/pexels-mediocrememories-1117132.jpg";
import blogsImg3 from "../../assets/pexels-solliefoto-320617.jpg";
const OurBlogs = () => {
  return (
    <div className="mt-14 lg:mt-20 flex flex-col items-center">
      <div className="flex flex-col items-center text-center">
        <h2 className="font-semibold text-xl lg:text-3xl dark:text-white">
          Our Blogs
        </h2>
        <p className="w-full lg:w-[750px] text-lg dark:text-white/80 mt-4">
          At CineLens, we celebrate the magic of movies that captivate audiences
          worldwide. From cinematic masterpieces to hidden indie treasures, we
          delve deep into the craft of storytelling, exceptional performances,
          and groundbreaking direction
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        <Link to="/blog">
          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src={blogsImg2}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">
                    Lights, Camera, Action
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  The iconic clapperboard marks the start of another cinematic
                  journey. With the director’s touch and the camera rolling, the
                  magic of filmmaking begins.
                </p>
              </div>
            </div>
          </article>
        </Link>
        <Link to="/blog">
          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src={blogsImg}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">
                    The Directors Lens
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Capturing moments through the directors eye, this image
                  illustrates the magic of storytelling as seen from the
                  camera’s perspective. Every frame tells a story, bringing life
                  to the creative vision.
                </p>
              </div>
            </div>
          </article>
        </Link>
        <Link to="/blog">
          <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt=""
              src={blogsImg3}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">
                    Focus on Creativity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  A close-up of the lens reminds us that creativity starts here.
                  This image symbolizes the filmmakers commitment to detail,
                  capturing every frame with precision and passion.
                </p>
              </div>
            </div>
          </article>
        </Link>
      </div>
      <div className="mt-12">
        <Link
          to="/blog"
          className="bg-indigo-600 text-white px-5 py-3 rounded-md"
        >
          See All Blogs
        </Link>
      </div>
    </div>
  );
};

export default OurBlogs;
