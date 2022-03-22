import Navbar from "../components/Navbar";
import api from "../apis/api";
import HomeComponent from "../components/HomeComponent";
import ActivityDescription from "../components/Activity/ActivityDescription";
import { useState, useEffect } from "react";

export default function Home() {
  const [allActivities, setAllActivities] = useState([]);
  const [currentUserObj, setCurrentUserObj] = useState([]);
  const [pageState, setPageState] = useState("home");

  useEffect(() => {
    function fetchUser() {
      api
        .get(`/profile/`)
        .then((response) => {
          const currentUser = response.data;
          setCurrentUserObj(currentUser);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchUser();
  }, []);

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

  const blockedActivities = currentUserObj?.blockedActivities?.map(
    (currentActivity) => {
      return currentActivity._id;
    }
  );

  const activitiesToSort = allActivities.filter((currentActivity) => {
    if (blockedActivities?.includes(currentActivity._id)) {
      return null;
    } else {
      return currentActivity;
    }
  });

  // Acessar o usuário para descobrir quais são as atividades favoritas e duplicá-las na array

  const favoriteActivities = currentUserObj.favorites;
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

  function selectRandomOption(typeArr) {
    const activitiesToShow = [];

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
    return activitiesToShow;
  }

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
      {pageState === "indoors" ? (
        <ActivityDescription
          activitiesToShow={selectRandomOption(indoorsArr)}
          blockedActivities={blockedActivities}
          selectRandomOption={selectRandomOption}
          pageState={pageState}
          favoriteActivities={favoriteActivities}
          setPageState={setPageState}
        />
      ) : null}
      {pageState === "outdoors" ? (
        <ActivityDescription
          activitiesToShow={selectRandomOption(outdoorsArr)}
          selectRandomOption={selectRandomOption}
          pageState={pageState}
          blockedActivities={blockedActivities}
          favoriteActivities={favoriteActivities}
          setPageState={setPageState}
        />
      ) : null}
    </div>
  );
}
