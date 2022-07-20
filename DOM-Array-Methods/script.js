const main = document.getElementById('main');
const addUser = document.getElementById('add_user');
const doubleMoney = document.getElementById('double');
const sort = document.getElementById('sort');
const show_millonaries = document.getElementById('show_millonaries');
const calculate = document.getElementById('calculate');

async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const user = data.result[1];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money : Math.floor(Math.random() * 1000000)
    }

    console.log(newUser)
    addData(newUser)
    console.log(newUser)
}

function addData(obj){
    data.push(obj)
    console.log(obj);
}

getRandomUser()
