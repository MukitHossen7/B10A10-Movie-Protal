import { Link } from "react-router-dom";
import blogsImg from "../../assets/pexels-donaldtong94-66134.jpg";
import blogsImg2 from "../../assets/pexels-mediocrememories-1117132.jpg";
import blogsImg3 from "../../assets/pexels-solliefoto-320617.jpg";
const OurBlogs = () => {
  return (
    <div className="mt-14 lg:mt-20">
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
                {/* <time datetime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time> */}

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-white">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
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
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
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
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </div>
  );
};

export default OurBlogs;
