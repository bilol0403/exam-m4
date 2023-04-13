const elLogOut = document.querySelector('#logout')
const token = localStorage.getItem('token') || false
if(!token){
    window.location.replace('login.html')
}
elLogOut.addEventListener('click', ()=>{
    localStorage.removeItem('token')
    window.location.replace('login.html')
})



const elName = document.querySelector('#name')
async function nameRendorFunc(element){
    let name = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
    console.log(name)

    if(name){
                name.forEach(user =>{
                   const newLi = document.createElement('li') 
                   const p = document.createElement('p')
                   p.textContent = user.name
                   newLi.append(p)
                   element.append(newLi)
                })
            }
}
nameRendorFunc(elName)

const elId = document.querySelector('#id')
async function idRendorFunc(element){
    let id = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
 

    if(id){
                id.forEach(user =>{
                   const newLi = document.createElement('li') 
                   const p = document.createElement('p')
                   p.textContent = user.id
                   newLi.append(p)
                   element.append(newLi)
                })
            }
}
idRendorFunc(elId)

const elDate = document.querySelector('#date')
async function dateRendorFunc(element){
    let date = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))

    if(date){
                date.forEach(user =>{
                   const newLi = document.createElement('li') 
                   const p = document.createElement('p')
                   p.textContent = user.address.zipcode
                   newLi.append(p)
                   element.append(newLi)
                })
            }
}
dateRendorFunc(elDate)

const elUsername = document.querySelector('#parent')
async function usernameRendorFunc(element){
    let username = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))

    if(username){
                username.forEach(user =>{
                   const newLi = document.createElement('li') 
                   const p = document.createElement('p')
                   p.textContent = user.username
                   newLi.append(p)
                   element.append(newLi)
                })
            }
}
usernameRendorFunc(elUsername)

const elCity = document.querySelector('#city')
async function cityRendorFunc(element){
    let city = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))

    if(city){
                city.forEach(user =>{
                   const newLi = document.createElement('li') 
                   const p = document.createElement('p')
                   p.textContent = user.address.city
                   newLi.append(p)
                   element.append(newLi)
                })
            }
}
cityRendorFunc(elCity)


const eldelete = document.querySelector('#action')
async function deleteRendorFunc(element){
    let action = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))

    if(action){
                action.forEach(user =>{
                   const newLi = document.createElement('li') 
                   const btnDelete = document.createElement('button')
                   btnDelete.textContent = 'delete'
                    btnDelete.dataset.id = user.id
                    btnDelete.className = 'btn bg-danger btn-delete'
                    btnDelete.setAttribute('style', 'margin-bottom:17px')
                    newLi.append(btnDelete)
                    element.append(newLi)
                  btnDelete.addEventListener('click', function(evt){
                    const id = evt.target.dataset.id
                    console.log(id)
                    const foundIndex = action.findIndex(item => item.id !== id)
                    console.log(foundIndex)
                    action.splice(foundIndex,1)
                    console.log(action)

                  })
                    
                   
                })
            
            }
         
}
deleteRendorFunc(eldelete)

const elForm = document.querySelector('.form')



// btn delete
// elForm.addEventListener('submit', evt=>{
//     evt.preventDefault()
//     let {search } = evt.target.elements
//     
//     let regex = new RegExp(search.value.trim(), 'gi');
//     let searchedName = .filter((user) => user.title.match(regex))
//     console.log(searchedName)
//  
//     search.value = null
// nameRendorFunc(elname)
// })
