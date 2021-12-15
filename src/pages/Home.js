import Navbar from "../components/Navbar";
import api from "../apis/api";
import HomeComponent from "../components/HomeComponent";
import ActivityDescription from "../components/Activity/ActivityDescription";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [allActivities, setAllActivities] = useState([]);
  const { loggedInUser } = useContext(AuthContext);
  const [activitiesState, setActivitiesState] = useState([]);
  const [pageState, setPageState] = useState("home");

  // Acessar o banco de dados para pegar todas as atividades
  useEffect(() => {
    async function fetchActivities() {
      try {
        const response = await api.get("/activities");
        setAllActivities([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchActivities();
  }, []);

  // Acessar o usuário para descobrir quais são as atividades bloqueadas para retirá-las da array

  const blockedActivities = loggedInUser.user.blockedActivities;
  const activitiesToSort = allActivities.filter((currentActivity) => {
    if (blockedActivities.includes(currentActivity)) {
      return null;
    } else {
      return currentActivity;
    }
  });

  // Acessar o usuário para descobrir quais são as atividades favoritas e duplicá-las na array

  const favoriteActivities = loggedInUser.user.favorites;
  for (let i in favoriteActivities) {
    activitiesToSort.push(favoriteActivities[i]);
  }

  // Criar duas arrays: "indoors" e "outdoors", para sortear as atividades de maneira aleatória de acordo com o tipo

  const indoorsArr = activitiesToSort.filter((currentActivity) => {
    if (currentActivity.type === "indoors") {
      return currentActivity;
    } else {
      return null;
    }
  });

  const outdoorsArr = activitiesToSort.filter((currentActivity) => {
    if (currentActivity.type === "outdoors") {
      return currentActivity;
    } else {
      return null;
    }
  });

  // Função para selecionar aleatoriamente as atividades em cada array

  const activitiesToShow = [];

  function selectRandomOption(typeArr) {
    for (let i = 0; activitiesToShow.length < 3; i++) {
      let randomOption = typeArr[Math.floor(Math.random() * typeArr.length)];
      if (
        !activitiesToShow.includes(randomOption) &&
        randomOption !== undefined &&
        !blockedActivities.includes(randomOption.id)
      ) {
        activitiesToShow.push(randomOption);
        console.log(activitiesToShow);
      }
    }
  }

  // useEffect(() => {
  //   Promise.all(activitiesToShow).then((activities) =>
  //     setActivitiesState(activitiesToShow)
  //   );

  //   console.log(activitiesState);
  // }, []);

  return (
    <div>
      <Navbar />
      {pageState === "home" ? (
        <HomeComponent
          setPageState={setPageState}
          selectRandomOption={selectRandomOption}
          indoorsArr={indoorsArr}
          outdoorsArr={outdoorsArr}
        />
      ) : null}
      {pageState === "activities" ? (
        <ActivityDescription
          activitiesToShow={activitiesToShow}
          blockedActivities={blockedActivities}
          favoriteActivities={favoriteActivities}
        />
      ) : null}
    </div>
  );
}
