interface IPagination {
  page?: number;
  perPage?: number;
}

export const Api = {
  Message: {
    create: "/message",
  },
  Booking: {
    create: "/booking",
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
};
