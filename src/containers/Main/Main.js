import React, { useContext, useEffect, useState } from "react";
import { userDetailsContext } from "../../context/ReferenceDataContext";
import { Grid } from "@mui/material";

import Ucard from "../../components/Ucard/Ucard";
import axios from "axios";

const Main = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useContext(userDetailsContext);

  const handleGetUser = async () => {
    try {
      setIsLoading(true);
      let response = await axios.get(
        "https://dummyapi.io/data/v1/user?limit=10",
        {
          headers: {
            "app-id": "6171766d468dff2759fe6678",
          },
        }
      );
      setUserDetails(response.data.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!userDetails) {
      handleGetUser();
    }
  }, []);

  return (
    <Grid
      container
      spacing={3}
      sx={{
        padding: 5,
        background:
          "linear-gradient(280deg, rgba(254,134,104,1) 10%, rgba(255,103,159,1) 100%)",
      }}
    >
      {userDetails &&
        userDetails.map((data) => {
          return (
            <Ucard
              key={data.id}
              id={data.id}
              name={data.firstName}
              img={data.picture}
              title={data.title}
              last={data.lastName}
            />
          );
        })}
    </Grid>
  );
};

export default Main;
