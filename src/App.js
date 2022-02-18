import * as React from "react";
// import { Admin, Resource } from 'react-admin';
import { Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import {PostList} from './posts';
import {UserList} from './users';
import jsonServerProvider from 'ra-data-json-server';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonIcon from '@mui/icons-material/Person';
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () =>(
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    {/* <Resource name="posts" list={ListGuesser} /> */}
    <Resource name="posts" list={PostList} edit={EditGuesser} icon={PostAddIcon}/>
    <Resource name="users" list={UserList} icon={PersonIcon}/>
  </Admin>
);

export default App;