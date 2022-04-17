// import { Table, Tag, Space } from 'antd';
// import Pokemon from './Pokemon';
// import { usePokeStore } from '../mobx/pokeContext';

// const Homepage = () => {
//   const { pokemons } = usePokeStore();

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       render: (text) => <a>{text}</a>,
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//     {
//       title: 'Tags',
//       key: 'tags',
//       dataIndex: 'tags',
//       render: (tags) => (
//         <span>
//           {tags.map((tag) => {
//             let color = tag.length > 5 ? 'geekblue' : 'green';
//             if (tag === 'loser') {
//               color = 'volcano';
//             }
//             return (
//               <Tag color={color} key={tag}>
//                 {tag.toUpperCase()}
//               </Tag>
//             );
//           })}
//         </span>
//       ),
//     },
//     {
//       title: 'Action',
//       key: 'action',
//       render: (text, record) => (
//         <Space size="middle">
//           <a>
//             Invite
//             {record.name}
//           </a>
//           <a>Delete</a>
//         </Space>
//       ),
//     },
//   ];
//   return (
//     <>
//       <div>
//         <h3>Pokemon A-Z</h3>
//         <div>
//           {pokemons.map((data) => (
//             <Pokemon key={data.name} data={data} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;
