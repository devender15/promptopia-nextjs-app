import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  const { userID, prompt, tag } = await req.json();

  console.log(userID, prompt, tag);

  try {
    await connectToDB();

    // const newPrompt = new Prompt({ creator: userID, prompt, tag });
    // await newPrompt.save();

    // saving the new prompt in the model
    const newPrompt = await Prompt.create({
      creator: userID,
      prompt,
      tag,
    });

    // returning the new prompt
    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (err) {
    return new Response("Failed to create new prompt", {
      status: 500,
    });
  }
};
