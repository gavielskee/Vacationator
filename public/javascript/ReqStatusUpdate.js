const requestStatus = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');


      let is_Approved = ""
      if (document.querySelector('.approved') {
        isApproved = true
      }
      else{
        isApproved = false
      }
  
      if (id, is_Approved) {
        console.log("posted");
        const response = await fetch(`/api/request/${id}`, {
          method: "put",
          body: JSON.stringify({is_Approved}), 
          headers: {
            "Content-Type": "application/json",
          },
        });
      });
  
      if (response.ok) {
        document.location.replace('/approve');
      } else {
        alert('Failed to delete user');
      }
    }
  };

  document
  .querySelector('.statusup')
  .addEventListener('click', requestStatus);

