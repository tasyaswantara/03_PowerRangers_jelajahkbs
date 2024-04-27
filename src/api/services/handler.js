import { axiosInstance } from "../CoreApi";
const databyid = async (body) => {
    try {
      const response = await axiosInstance.post(
        "info",
        {
          "id": body.id,
        },
        {
            headers:{
                "Content-Type" : "application/json"
            }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const getAllData = async () => {
    
  
    try {
      const response = await axiosInstance.get("info", {
        headers:{
            "Content-Type" : "application/json"
        },
       
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export {databyid,getAllData}