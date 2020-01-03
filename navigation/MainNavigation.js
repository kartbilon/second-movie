import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Tabnavigation from "./Tabnavigation";
import D from "../screens/D";

const MainNavigation = createStackNavigator(
    {
        Tabs: { screen: Tabnavigation, navigationOptions: { title: 'lol' } },
        Detail: D
    },
    {
        mode: "card"
    }
);

export default createAppContainer(MainNavigation)