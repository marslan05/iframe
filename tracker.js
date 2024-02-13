import Tracker from "@openreplay/tracker/cjs";
import trackerAssist from "@openreplay/tracker-assist/cjs";
import { v4 } from "uuid";

export const userId = v4();

const tracker = new Tracker({
    projectKey: "vviY3O1KsvNT5ICowvav",
    ingestPoint: "https://openreplay.gecora.com/ingest",
});

tracker.use(trackerAssist({ confirmText: "Do you like to accept the call from service center?" }));

tracker.start();