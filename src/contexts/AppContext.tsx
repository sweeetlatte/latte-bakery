import React from 'react';
import UserProvider from "./UserContext";
import { combineComponents } from "./combiner";
const providers = [
  UserProvider
]
const AppContextProvider = combineComponents(...providers);

export default AppContextProvider;