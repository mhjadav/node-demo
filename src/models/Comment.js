import mongoose, { Schema } from "mongoose";
import Base from './Base';

class Comment {
  initSchema() {
    Base.discriminator('comments', new Schema({
      replyTo: {
        type: String,
        required: false,
      },
      postId: {
        type: String,
        required: true,
      },
    }),
    );
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("comments");
  }
}

export default Comment;
