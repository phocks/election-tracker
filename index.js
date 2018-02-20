const axios = require("axios");

const url =
  "https://maker.ifttt.com/trigger/trigger/with/key/c_p7feEXVl6AVO6YDdyY9f";

const triggerEvent = async url => {
  const response = await axios({
    method: "post",
    url: url,
    data: { value1: "1", value2: "2", value3: "3" }
  }).catch(error => console.log(error));
  const data = response.data;
  console.log(data);
};

triggerEvent(url);
