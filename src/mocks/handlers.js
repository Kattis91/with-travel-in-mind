import { rest } from 'msw';

const baseURL = 'https://with-travel-in-mind-api-a2180400f610.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 1,
        "username": "Kattis",
        "email": "",
        "first_name": "",
        "last_name": "",
        "explorer_id": 1,
        "explorer_image": 
          "https://res.cloudinary.com/dx0imlozl/image/upload/v1/media/images/image-04-11-23-06-31_llck2q"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];