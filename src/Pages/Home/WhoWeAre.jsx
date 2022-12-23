import React from "react";
import img from "../../Assets/blog_01.jpg";

const WhoWeAre = () => {
  return (
    <section className="bg-slate-100 lg:px-0 px-5 py-10">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2">
          <div>
            <img className="rounded-md" src={img} alt="" />
          </div>
          <div className="flex items-center lg:px-10 mt-5 lg:mt-0">
            <div>
              <h1 className="uppercase lg:text-3xl text-2xl text-gray-700">
                <span className="font-bold">Who </span> We Are
              </h1>
              <p className="my-3 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                nobis architecto saepe. Ab enim at non explicabo voluptas hic a
                laudantium perferendis ad aperiam quaerat modi neque, temporibus
                sequi deleniti ratione, pariatur quibusdam amet sed. Illum nobis
                hic nisi molestias tenetur obcaecati expedita natus, optio iste.
                Ipsa praesentium quaerat eum!
              </p>
              <button className="px-5 py-2 text-lg font-semibold border-2 rounded border-emerald-500 flex items-center uppercase hover:bg-emerald-500 hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
