import { logger, task  } from "@trigger.dev/sdk/v3";
import {supabase} from "@/service/supabase";

export const helloWorldTask = task({
  id: "hello-world",
  maxDuration: 300, // Stop executing after 300 seconds
  run: async (payload: string, { ctx }) => {
    logger.log("Task started", { payload, ctx });

    const result = {
      message: "Hello, world!",
    };

    // Save to Supabase
    const { data, error } = await supabase
        .from("tasks")
        .insert([{ ...result, created_at: new Date() }]);

    if (error) {
      logger.error("Error saving to Supabase", { error });
    } else {
      logger.log("Saved to Supabase", { data });
    }

    return result;
  },
});
