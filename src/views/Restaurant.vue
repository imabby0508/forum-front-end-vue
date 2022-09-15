<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />

    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";

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
    updatedAt: "2022-09-15T08:14:38.989Z",
    CategoryId: 1,
    Category: {
      id: 1,
      name: "中式料理",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
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
  isFavorited: false,
  isLiked: false,
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: [],
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      };
      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
};
</script>
