interface IPagination {
  page?: number;
  perPage?: number;
}

export const Api = {
  Auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
  Message: {
    create: "/message",
  },
  Booking: {
    create: "/booking",
  },
  Availability: {
    get: "/availability",
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
    getList: "/category",
  },
};
