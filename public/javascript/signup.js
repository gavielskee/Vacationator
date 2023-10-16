const signupFormHandler = async (event) => {
  event.preventDefault();

  const user = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  //kevin gets a cookie
  let isAdmin = document.querySelector("#is-admin");
  if (document.querySelector("#is-admin").checked == true) {
    isAdmin = true;
  } else {
    isAdmin = false;
  }

console.log(document.querySelector("#is-admin").value)
console.log(isAdmin)

}
//   if (user && email && password) {
//     const response = await fetch("/api/user", {
//       method: "POST",
//       body: JSON.stringify({ user, email, password, isAdmin }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/admin");
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

document
  .querySelector(".signupbutton")
  .addEventListener("click", signupFormHandler);
