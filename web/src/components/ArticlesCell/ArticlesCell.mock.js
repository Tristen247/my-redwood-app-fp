// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  articles: [
    {
      __typename: 'articles',
      id: 42,
    },
    {
      __typename: 'articles',
      id: 43,
    },
    {
      __typename: 'articles',
      id: 44,
    },
  ],
})
