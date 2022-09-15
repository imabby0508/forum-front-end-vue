<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Miss Maxime Schaefer",
    tel: "(638) 158-7517 x768",
    address: "7186 Fahey Bridge",
    opening_hours: "08:00",
    description:
      "Neque eaque et non. Dolorem nulla fugit quisquam necessitatibus velit. Mollitia velit soluta ad quia vitae. Blanditiis nostrum mollitia ratione dicta.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=64.01572895402488",
    viewCounts: 1,
    createdAt: "2022-09-12T13:53:03.000Z",
    updatedAt: "2022-09-15T08:14:38.000Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
    Comments: [
      {
        id: 51,
        text: "Id voluptates non voluptas sapiente vel.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$VO9B/sJkwru/5Rb43JxD7.bEF7hkiX2uZ5gsQjlWRWuVzFhdTTiEC",
          isAdmin: false,
          image: null,
          createdAt: "2022-09-12T13:53:03.000Z",
          updatedAt: "2022-09-12T13:53:03.000Z",
        },
      },
      {
        id: 101,
        text: "Quia ut dolorum perspiciatis consectetur sapiente et atque reiciendis.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$VO9B/sJkwru/5Rb43JxD7.bEF7hkiX2uZ5gsQjlWRWuVzFhdTTiEC",
          isAdmin: false,
          image: null,
          createdAt: "2022-09-12T13:53:03.000Z",
          updatedAt: "2022-09-12T13:53:03.000Z",
        },
      },
      {
        id: 1,
        text: "Architecto officia voluptates aperiam ex voluptate rerum consectetur.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$ZE2ZhQXlqjIgIyaOm/TDtOBdWGBZtZwN/56mjwZuIcgrTgydgWNTS",
          isAdmin: false,
          image: null,
          createdAt: "2022-09-12T13:53:03.000Z",
          updatedAt: "2022-09-12T13:53:03.000Z",
        },
      },
    ],
  },
};

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant() {
      const { restaurant } = dummyData;
      const { id, name, Category, Comments, viewCounts } = restaurant;
      this.restaurant = {
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        commentsLength: Comments.length,
        viewCounts,
      };
    },
  },
};
</script>