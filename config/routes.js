//config/routes.js
import PostController from './../src/controllers/PostController';
import CommentController from './../src/controllers/CommentController';
import upload from './../src/helpers/uploadFiles';

export default (server) => {

  // POST ROUTES
  server.get(`/api/post`, PostController.getAll);
  //server.get(`/api/post/:params`, PostController.get);
  server.post(`/api/post`, upload, PostController.insert)
  server.put(`/api/post/:id`, upload, PostController.update);
  server.delete(`/api/post/:id`, PostController.delete);

  // COMMENT ROUTES
  server.get(`/api/comment`, CommentController.getAll);
  server.post(`/api/comment`, upload, CommentController.insert)
  server.put(`/api/comment/:id`, upload, CommentController.update);
  server.delete(`/api/comment/:id`, CommentController.delete);

}