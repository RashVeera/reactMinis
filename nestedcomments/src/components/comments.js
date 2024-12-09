export const initialComments = [
    {
      id: 1,
      content: "This is the first comment",
      replies: [
        {
          id: 2,
          content: "This is a reply to the first comment",
          replies: [],
        },
      ],
    },
    {
      id: 3,
      content: "This is the third comment",
      replies: [
        {
          id: 4,
          content: "This is a reply to the third first comment",
          replies: [ {
            id: 5,
            content: "This is a reply to the third second comment",
            replies: [],
          }],
        },
      ],
    },
  ];
  