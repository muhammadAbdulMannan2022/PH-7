// const body = document.querySelector("body");
// const button = document.createElement("button");
// button.innerText = "click";
// button.addEventListener("click", apiLodeImg);

// body.appendChild(button);
// function apiLodeImg() {
//   fetch("https://jsonplaceholder.typicode.com/photos", {
//     method: "GET",
//     //   body: JSON.stringify({
//     //     title: "foo",
//     //     body: "bar",
//     //     userId: 1,
//     //   }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => {
//       for (const data of json) {
//         let { url } = data;
//         const img = document.createElement("img");
//         img.style.width = "10px";
//         body.style.display = "flex";
//         body.style.flexWrap = "wrap";
//         img.style.gap = "0";
//         img.src = url;
//         body.appendChild(img);
//       }
//     });
// }

// fetch("https://randomuser.me/api/")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// const URL = "https://randomuser.me/api/";
// const femaile = document.getElementById("femaile");
// const maile = document.getElementById("maile");
// const catagoryMaile = document.getElementById("catagoryMaile");
// const catagoryFemaile = document.getElementById("catagoryFemaile");

// function getImage(g) {
//   fetch(`${URL}?results=5000`)
//     .then((res) => res.json())
//     .then((dataOfArr) => {
//       dataOfArr.results.map((data) => {
//         const { medium } = data.picture;
//         const newUserProfileImg = document.createElement("img");
//         const user = document.createElement("div");
//         newUserProfileImg.src = medium;
//         user.appendChild(newUserProfileImg);
//         if (data.gender == "female" && data.gender == g) {
//           femaile.appendChild(user);
//         } else if (data.gender == "male" && data.gender == g) {
//           maile.appendChild(user);
//         } else {
//           //   femaile.appendChild(user);
//           //   maile.appendChild(user);
//         }
//       });
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }
// function displayRadioValue() {
//   var ele = document.getElementsByName("gender");
//   for (i = 0; i < ele.length; i++) {
//     if (ele[i].checked) {
//       if (ele[i].value == "male") {
//         getImage(ele[i].value);
//       } else if (ele[i].value == "female") {
//         getImage(ele[i].value);
//       } else {
//         getImage(ele[i].value);
//       }
//     }
//   }
// }

const person = {
  name: "golu",
  age: 5,
};

fetch(person)
  .then((res) => res.json())
  .then((data) => console.log(data));

// let obj = JSON.stringify(person);
