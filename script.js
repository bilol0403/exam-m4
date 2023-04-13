const elLogOut = document.querySelector("#logout");
const token = localStorage.getItem("token") || false;
if (!token) {
  window.location.replace("login.html");
}
elLogOut.addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.replace("login.html");
});

const elWrapper = document.querySelector("#wrapper");

async function nameRendorFunc() {
  let arrayList = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => (mainList = data))
    .catch((err) => console.log(err));
  if (mainList) {
    console.log(mainList);
    mainList.forEach((user, index) => {
      const newLi = document.createElement("li");
      newLi.setAttribute(
        "style",
        "display:flex ; justify-content:space-between"
      );
      const p = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const p4 = document.createElement("p");
      const p5 = document.createElement("p");
      const href = document.createElement('a')
      const hrefTwo = document.createElement('a')
      const p6 = document.createElement("button");
      hrefTwo.href = `messages: ${user.email}`
      hrefTwo.innerHTML = `<img class="two" src="./images/message.png" alt="">`
      href.setAttribute('style', 'padding-bottom:30px')
      
      href.innerHTML = `<img style="padding-bottom:10px"  src="./images/Call.png" alt="">`
      p6.setAttribute("id", "delete");
      p6.setAttribute("style",  "height:4%");
      p6.textContent = "delete";
      p6.dataset.id = user.id;
      p6.className = "btn bg-danger btn-delete";
      p.textContent = user.name;
      p2.textContent = user.id;
      p3.textContent = user.address.zipcode;
      p4.textContent = user.username;
      p5.textContent = user.address.city;
      href.href = `tell:${user.phone}`
      newLi.append(p);
      newLi.append(p2);
      newLi.append(p3);
      newLi.append(p4);
      newLi.append(p5);
      newLi.append(href,hrefTwo)
      newLi.append(p6);
      elWrapper.append(newLi);
      p6.addEventListener("click", function (evt) {
        mainList.splice(index, 1);
        elWrapper.removeChild(newLi);
      });
    });
  }
}

nameRendorFunc();
const formPost = document.querySelector('.form__post')
const btnPost = document.querySelector('.btn__post')
const divMain = document.querySelector('.div__main')
const btnSubmit = document.querySelector('.btn__submit')
btnPost.addEventListener('click', function(evt){
    evt.preventDefault()
    console.log('clicked')
    formPost.className = 'd-flex'
    divMain.className = 'd-none'
})
btnSubmit.addEventListener('click', function(evt){
    evt.preventDefault()
    console.log('clicked')
    formPost.className = 'd-none'
    divMain.className = 'd-flex'
})
 const API = {
  POST: async(value,data )=>{
    try{
      let response = await fetch(`https://jsonplaceholder.typicode.com/${value}`,{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res =>res.json())
      .then(json=> json)
      return response
    
    }catch{
      return alert('mistake')
    }
  }
 }
 const postName = document.querySelector('.post__name')
 const postData ={
  name:`${postName.value}`
 }
 API.POST('posts', postData)
