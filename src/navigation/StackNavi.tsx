import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { ApplicationState } from "../store";

import Home from "../pages/Home";
import Login from "../pages/Login";

const Stack = createStackNavigator();

export default function StackNavi() {
  const loginState = useSelector(
    (state: ApplicationState) => state.login.logged
  );

  return (
    <>
      <Stack.Navigator headerMode="none">
        {loginState ? (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </>
  );
}
