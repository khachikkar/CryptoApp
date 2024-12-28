import { TriggerClient } from "@trigger.dev/sdk/v3";
import { helloWorldTask } from "./src/trigger/example";


export const client = new TriggerClient({
    id: "proj_nraptfdoiyqxrpvkamsi", // Your Trigger.dev project ID
    apiKey: "tr_dev_r2NWP363hKbcsIh7JPdg", // Your Trigger.dev API key
    apiUrl: "https://api.trigger.dev", // Default API URL
    runTasksLocally: true,
});

// Register the task
client.task(helloWorldTask); // `registerTask` is now simply `task()`