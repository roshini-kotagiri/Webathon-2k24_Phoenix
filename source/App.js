
import './App.css';
import Register from './components/Register';
import Login from './components/Login'
import Home from './components/Home';
import Chat from './components/Chat';
import Main from './components/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Help from './components/Help';


// function App() {
//   const browserouter = createBrowserRouter([
//     {
//       path: '',
//       element: <Home />,
//       children: [
//       //  {path:'',element:<Navbar/>},
//         { path: 'register', element: <Register /> },
//         {
//           path:'login',element:<Login/>
//       },{
//         path:'help',element:<Help/>,
//       },
//       {
//         path:'chat',
//         element:<Chat/>
//       }
//     ],
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={browserouter} />
//     </div>
//   );
// }
function App(){
  <Main/>
}
export default App; 