import { GET } from "../../functionHelper/APIFunction";
import { BASE_URL } from "../../global/globalVar";
export const getNodeByScriptID = (scriptId) => {
    
  return new Promise((resolve, reject) => {
    GET(BASE_URL + "api/script/get/6391a1e6cba00c311a723a54")
      .then((res) => {
        if (res.https_status === "OK") resolve(res);
        else reject(res);
      })
      .catch((err) => reject(err));
  });
};
