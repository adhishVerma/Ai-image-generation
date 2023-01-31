import React, { useState, useEffect } from "react";
import { Loader, Card, FormField } from "../components";

const Rendercards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return <h2 className="mt-5 font-bold text-[#6449ff] uppercase">{title}</h2>;
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");

  return (
    <section className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="font-extrabold text-[#222328] text-[32px] mb-3">
          Community Showcase
        </h1>
        <p className="text-gray-600 text-[16px] max-w-[500px]">
          Browse the imaginative and stunning pictures created by Dall E
        </p>
      </div>

      <div className="mb-10">
        <FormField />
      </div>

      <div className="">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-gray-600 text-xl mb-3">
                Showing results for{" "}
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <Rendercards data={[]} title="No search Results" />
              ) : (
                <Rendercards data={[]} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
