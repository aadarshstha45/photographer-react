interface IPagination {
  page?: number;
  perPage?: number;
}

export const Api = {
  Auth: {
    login: "/login",
    me: "/user",
    forgot: "/forgot-password",
    reset: "/reset-password",
  },
  User: {
    create: "/register",
    getList: "/users-list",
  },
  Category: {
    create: "/category",
    get: ({ page, perPage }: IPagination) => {
      return `/category?page=${page}&per_page=${perPage}`;
    },
    getTrashed: "/category/trash",
    restore: "/category/:id/restore",
    getOne: `/category/:id`,
    update: "/category/:id",
    delete: "/category/:id",
    getList: "/category/get-list",
  },
  Photographer: {
    get: "/photographer/1",
    update: "/photographer/1",
  },
  Message: {
    get: ({ page, perPage }: IPagination) => {
      return `/message?page=${page}&per_page=${perPage}`;
    },
    getOne: "/message/:id",
    delete: "/message/:id",
  },
  Booking: {
    get: ({ page, perPage }: IPagination) => {
      return `/booking?page=${page}&per_page=${perPage}`;
    },
    getOne: "/booking/:id",
    update: "/booking/:id",
    delete: "/booking/:id",
  },
};
