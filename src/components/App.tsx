// import React,{useState}from 'react';
// import { prependOnceListener } from 'process';
// import { userInfo } from 'os';

// const UserList  :React.FC =()=>{
// const [name,setName]=useState("");
// //const [guestList,setGuestList]=useState<string[]>([])
// const [user,setUser]=useState<{name:string ,age:Number,sex:string}| undefined >()
// const users=[
//     {
//         name:'Arpit',
//         age:20,
//         sex:'M'
//     },
//     {
//         name:'pal',
//         age:21,
//         sex:'F'
//     },
//     {
//         name:'Dub',
//         age:22,
//         sex:'M'
//     }
// ]
// // const handleChange=()=>{
// //     setName("");
// //     setGuestList([...guestList,name]);
// // }
// const handleSearch=()=>{
// const finduser=users.find((us)=>{
//     return us.name===name;
// });
// setUser(finduser)
// }
// return(
//     <div>
//         {/* <div>
//           <ul>
//                 {guestList.map(guest=>{
//                     return(
//                         <li>
//                             {guest}
//                         </li>
//                     )
//                 })}
//            </ul>
//         </div>
//         <div>
//             <input
//              value={name}
//              onChange={(e)=>setName(e.target.value)}
//              />
//             <button
//             onClick={handleChange}
//             >
//                  Add guest
//             </button>
//         </div> */}
//         <input
//         value={name}
//         onChange={(e)=>setName(e.target.value)}
//         >
//         </input>
//         <button
//         onClick={handleSearch}
//         >
//             Search
//         </button>
//         <div>
//             {user && user.name}
//             {user && user.age}
//             {user && user.sex}
//         </div>
//     </div>
// )
// }

// export default UserList;





import { Provider } from 'react-redux';
import { store } from '../redux';
import RepoSearch from './RepoSearch';
import React from 'react';
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepoSearch />
      </div>
    </Provider>
  );
};

export default App;