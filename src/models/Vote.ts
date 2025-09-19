import { model, Types, Schema } from "mongoose";

interface Vote {
  user: Types.ObjectId; //use Types.ObjectId when generating a new ObjectId
  feedback: Types.ObjectId;
  voteType: "upvote" | "downvote";
}

const voteSchema = new Schema<Vote>(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" }, //use Schema.Types.ObjectId When defining a schema to indicate a reference to another document.
    feedback: { type: Schema.Types.ObjectId, required: true, ref: "Feedback" },
    voteType: { type: String, required: true, enum: ["upvote", "downvote"] },
  },
  { timestamps: true }
);

const Vote = model<Vote>("Vote", voteSchema);
export default Vote;
