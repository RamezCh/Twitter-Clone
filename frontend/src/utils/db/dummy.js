export const POSTS = [
  {
    _id: "1",
    text: "Let's build a fullstack WhatsApp clone with NEXT.JS 14 😍",
    img: "/posts/post1.jpg",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy1.jpg",
      fullName: "John Doe",
    },
    comments: [
      {
        _id: "1",
        text: "Nice Tutorial",
        user: {
          username: "janedoe",
          profileImg: "/avatars/fire.jpg",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
  },
  {
    _id: "2",
    text: "How you guys doing? 😊",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy2.jpg",
      fullName: "John Doe",
    },
    comments: [
      {
        _id: "1",
        text: "Nice Tutorial",
        user: {
          username: "janedoe",
          profileImg: "/avatars/mountain.jpg",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
  },
  {
    _id: "3",
    text: "What are you waiting for? 🚀",
    img: "/posts/post2.jpg",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy3.jpg",
      fullName: "John Doe",
    },
    comments: [],
    likes: [
      "6658s891",
      "6658s892",
      "6658s893",
      "6658s894",
      "6658s895",
      "6658s896",
    ],
  },
  {
    _id: "4",
    text: "Difficult 🛣️ lead to 🌹 destinations",
    img: "/posts/post3.jpg",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy3.jpg",
      fullName: "John Doe",
    },
    comments: [
      {
        _id: "1",
        text: "Nice Tutorial",
        user: {
          username: "janedoe",
          profileImg: "/avatars/starwars.jpg",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: [
      "6658s891",
      "6658s892",
      "6658s893",
      "6658s894",
      "6658s895",
      "6658s896",
      "6658s897",
      "6658s898",
      "6658s899",
    ],
  },
];

export const USERS_FOR_RIGHT_PANEL = [
  {
    _id: "1",
    fullName: "John Doe",
    username: "johndoe",
    profileImg: "/avatars/boy2.jpg",
  },
  {
    _id: "2",
    fullName: "Jane Doe",
    username: "janedoe",
    profileImg: "/avatars/fire.jpg",
  },
  {
    _id: "3",
    fullName: "Bob Doe",
    username: "bobdoe",
    profileImg: "/avatars/boy3.jpg",
  },
  {
    _id: "4",
    fullName: "Daisy Doe",
    username: "daisydoe",
    profileImg: "/avatars/mountain.jpg",
  },
];