import React, { useEffect, useState } from "react";
import { supabase } from "../../supabase/clients";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../../ui/Spinner";
import { Navbar } from "../../ui/Navbar";
import { Footer } from "../../ui/Footer";

export const Game = () => {
  const [nike, setNike] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNike = async () => {
    const { data, error } = await supabase.from("games").select();

    if (error) {
      console.log(error);
    } else {
      setNike(data);
    }
    setLoading(true);
  };

  useEffect(() => {
    getNike();
    window.scrollTo(0, 0);
  }, [window.scrollTo(0, 0)]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [4000]);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Navbar/>
      <div className=" pt-24 md:pt-7 px-3 grid grid-cols-2 md:grid-cols-4 gap-3">
        {nike.map((shoe) => {
          return (
            <div key={shoe.id}>
              <Link to={"/gameProduct/" + shoe.id}>
                <img
                  src={shoe.image}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
              </Link>

              <p className="p-3 ">{shoe.title}</p>
              <p className="px-3 text-orange-700 font-bold">
                ₦{shoe.price.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};
