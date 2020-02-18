import mongoose, { Schema } from "mongoose";
import Base from './Base';

class Post {
  initSchema() {
    Base.discriminator('posts', new Schema());
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("posts");
  }
}

export default Post;
