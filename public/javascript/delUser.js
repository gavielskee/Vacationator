let id = ""


const delButtonHandler = async (event) => {
    if (id) {
      const response = await fetch(`/api/user/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/admin');
      } else {
        alert('Failed to delete user');
      }
    }
  };


  $(`button`).on(`click`, function() {
    console.log("clicked")
    id = $(this).attr("data-id")
    delButtonHandler()
  });

  
  // document
  // .querySelector('.delete_user')
  // .addEventListener('click', delButtonHandler);