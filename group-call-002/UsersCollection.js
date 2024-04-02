const users = [
  {
    userId: 1,
    isVIP: true,
  },
  {
    userId: 2,
    isVIP: false,
  },
  {
    userId: 3,
    isVIP: true,
  },
  {
    userId: 4,
    isVIP: false,
  },
];

export const UsersCollection = {
  find() {
    return users;
  },
};
