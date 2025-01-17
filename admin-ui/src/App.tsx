import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SdfList } from "./sdf/SdfList";
import { SdfCreate } from "./sdf/SdfCreate";
import { SdfEdit } from "./sdf/SdfEdit";
import { SdfShow } from "./sdf/SdfShow";
import { SdfsdfsdfList } from "./sdfsdfsdf/SdfsdfsdfList";
import { SdfsdfsdfCreate } from "./sdfsdfsdf/SdfsdfsdfCreate";
import { SdfsdfsdfEdit } from "./sdfsdfsdf/SdfsdfsdfEdit";
import { SdfsdfsdfShow } from "./sdfsdfsdf/SdfsdfsdfShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Sdf"
          list={SdfList}
          edit={SdfEdit}
          create={SdfCreate}
          show={SdfShow}
        />
        <Resource
          name="Sdfsdfsdf"
          list={SdfsdfsdfList}
          edit={SdfsdfsdfEdit}
          create={SdfsdfsdfCreate}
          show={SdfsdfsdfShow}
        />
      </Admin>
    </div>
  );
};

export default App;
