// import React, { useEffect,useState } from 'react';

// export default function Api() {
//   let[post,updatepost] = useState([])
//   useEffect(()=>{
//     const url = 'https://reqres.in/api/users';
//     fetch(url).then(resp=>resp.json())
//     .then(resp=>updatepost(resp))
//   },[])
//   return <div>
//       <div className="card" >
//                     <img src="/aajtak.png" className="card-img-top" alt="NEWS"/>
//                         <div className="card-body">
                          
//                             <h5 className="card-title" >
//                             {post.map(post =>(<div>{`${post.first_name}`}</div>))}
//                             </h5>
//                             <p className="card-text" >Welcome to the Page .</p>
//                             <a href="/" className="btn btn-primary">Read Full Article</a>
//                         </div>
//                         </div>
//   </div>;
// }
