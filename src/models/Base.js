import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

class Base {
  initSchema() {
    const schema = new Schema({
      author: {
        id:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
        }
      },
      mediaUrl: {
        type: String,
        required: false,
      },
      content: {
        type: String,
        required: true,
      }
    }, { timestamps: true });
    schema.pre(
      "save",
      function(next) {
        let post = this;
        if (!post.isModified("content")) {
          return next();
        }
        return next();
      },
      // function(err) {
      //   next(err);
      // }
    );
    schema.plugin(uniqueValidator);
    // const baseOptions = {
    //   discriminatorKey: 'itemtype',
    //   collection: "items",
    // };
    mongoose.model("base", schema);
  }
  getInstance() {
    this.initSchema();
    return mongoose.model("base");
  }
}


export default new Base().getInstance();
