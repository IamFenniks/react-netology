import React, { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./views/CardsView";
import ListView from "./views/ListView";
 
const Store = () => {
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }]

  const [isToggleOn, setIsToggleOn] = useState(false);

  const onClc = () => {
    setIsToggleOn(!isToggleOn);
  }
//  debugger;
  return (
      <div className="store m-content">
          { isToggleOn 
            ? <IconSwitch icon="view_module" onSwitch={ onClc } title="Карточки товара" /> 
            : <IconSwitch icon="view_list"   onSwitch={ onClc } title="Списки товара"   /> 
          }

          { isToggleOn 
            ? <ListView  items={ products } />
            : <CardsView cards={ products } /> 
          }
      </div>
  )
}

export default Store;