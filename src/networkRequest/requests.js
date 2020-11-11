
import AxiosBase from './AxiosBase';

export const submitForm = ( name, email, about, gender, radio ) =>
  new Promise((resolve, reject) => {
    const data = { name, email, about, gender, radio };

    AxiosBase.post("user/submitForm", data)
      .then((res) => {
        console.log(" response", res.data);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("error", err);
        reject(err);
      });
  });
