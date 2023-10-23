import React, { useEffect, useState } from "react";
import { supabase } from "../../../supabase/clients";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../../../ui/Footer";
import { Navbar } from "../../../ui/Navbar";
import { Spinner } from "../../../ui/Spinner";

export const SamsungTablets = () => {
  const [nike, setNike] = useState([]);
   const [loading, setLoading] = useState(true);

  const getNike = async () => {
    const { data, error } = await supabase.from("samsungTabs").select();

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
              <Link to={"/samsungTabsProducts/" + shoe.id}>
                <img
                  src={shoe.image}
                  style={{
                    width: "600px",
                    height: "250px",
                    // objectFit: "cover",
                  }}
                  alt={shoe.title}
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
