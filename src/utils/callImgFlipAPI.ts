import { Dispatch, SetStateAction } from "react";
import axios from "axios";

export async function callImgFlipAPI(
  responseData: string,
  setMemeImage: Dispatch<SetStateAction<string>>,
) {
  // See https://imgflip.com/api
  const username = import.meta.env.VITE_IMGFLIP_API_USERNAME;
  const password = import.meta.env.VITE_IMGFLIP_API_PASSWORD;
  const apiBody = new FormData();
  apiBody.append("template_id", "27813981"); // TODO: replace with random meme from array
  apiBody.append("username", username);
  apiBody.append("password", password);
  apiBody.append("font", "impact");
  apiBody.append("text0", responseData); // TODO: multiple lines

  try {
    console.log(apiBody);
    const response = await axios.post(
      "https://api.imgflip.com/caption_image",
      apiBody,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    console.log(response);
    setMemeImage(response.data.data.url);
    return;
  } catch (error: unknown) {
    console.log(error);
  }
}
