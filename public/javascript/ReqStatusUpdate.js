// function to update request status in database

let classname = ""
let data = ""

const requestStatus = async (event) => {
    if (classname, data) {
  const id = data;


      if (classname == `approved`) {
        is_Approved = true
      }
      else{
        is_Approved = false
      }
  
      if (id) {
        console.log("posted");
        const response = await fetch(`/api/request/${id}`, {
          method: "put",
          body: JSON.stringify({is_Approved, classname, id}), 
          headers: {
            "Content-Type": "application/json",
          },
        });
      
      }
      if (response.ok) {
        document.location.reload('/approve');
      } else {
        alert('Failed to delete user');
      }
    }
  };


// used Jquery to target all buttons created by #foreach in Handlebars
  $(`button`).on(`click`, function() {
    console.log("clicked")
    classname = $(this).attr("class");
    data = $(this).attr("data-id")
console.log(data)
    console.log(classname)
    requestStatus()
  });
  


