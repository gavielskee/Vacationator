const RequestHandler = async (event) => {
    event.preventDefault();
  
    const startDate = document.querySelector("#from").value.trim();
    const endDate = document.querySelector("#to").value.trim();
    const reason = document.querySelector("#reason").value.trim();
 
    
    
    if (startDate, endDate, reason) {
      console.log("posted");
      const response = await fetch(`/api/request`, {
        method: "POST",
        body: JSON.stringify({ startDate, endDate, reason}), 
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response)
  
      // if (response.ok) {
      //   document.location.replace("/dashboard");
      // } else {
      //   alert("Failed to create awesome vacation request");
      // }
    }
  };
  
  document.querySelector('#submitRq').addEventListener("click", RequestHandler);


