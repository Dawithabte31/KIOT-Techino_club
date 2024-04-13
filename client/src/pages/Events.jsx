



import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Events() {
  const [events, setEvents] = useState(null);
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(
        "http://localhost:3000/api/events/allevents" + search
      );
      setEvents(res.data);
      setLoading(false);
    };
    fetchEvents();
  }, [search]);
  const PF = "http://localhost:3000/images/";

  return (
    <div>
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {!loading ? (
            events &&
            events.map((event, key) => (
              <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                <a href={event.href}>
                  {event.photo && (
                    <img
                      src={PF + event.photo}
                      loading="lazy"
                      alt="image"
                      className="w-full rounded-lg"
                    />
                  )}
                  <div className="mt-3 space-y-2">
                    <span className="block text-indigo-600 text-sm">
                      {new Date(event.createdAt).toDateString()}
                    </span>
                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                      {event.desc}
                    </p>
                  </div>
                </a>
              </li>
            ))
          ) : (
            <div className="text-center w-full">
              <Skeleton
                className="mt-3 mb-2"
                width={["100%", "400px"]}
                height="250px"
              ></Skeleton>
              <Skeleton
                className=""
                width={["100%", "400px"]}
                height="30px"
              ></Skeleton>
            </div>
          )}
        </ul>
      </div>
    </section>
    <Footer />
    </div>
  );
}

export default Events;


