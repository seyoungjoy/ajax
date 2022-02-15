// const tags = `<div><em>title : flkndflnlsdfnlkdsnflsdnflkn</em></div>`

// for(let i = 0; i < length ; i++){
//     insertAdja
// }


import axios from 'https://cdn.skypack.dev/axios';

let list = document.querySelector(".list");
let listObject = [];

axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response => {
        // response.data.forEach((item,idx) => {
        //     listObject.push({title:item.title, id:item.id})
        //     list.insertAdjacentHTML('beforebegin', `<li>${listObject[idx].title}<button data-id="">delete</button></li>`)
        // })
        list.insertAdjacentHTML('beforeend',response.data.map(data => `<li><a href="/todo/${data.id}">${data.title}</a></li>`).join(''));
    // console.log(listObject)
})

// document.querySelector('button').addEventListener('click',(e)=>{
//     const {id} = e.target.dataset;
//     axios.delete(`https://jsonplacehodler.typic.come/todos/${id}`).then(data=>{
//         console.log(data);
//         console.log(data.status);
//         // 성공 200
//         // 실패 404
//
//     })
// })
