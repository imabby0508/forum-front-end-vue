<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantsPagination from "./../components/RestaurantsPagination";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Miss Maxime Schaefer",
      tel: "(638) 158-7517 x768",
      address: "7186 Fahey Bridge",
      opening_hours: "08:00",
      description: "Neque eaque et non. Dolorem nulla fugit quisquam n",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.01572895402488",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 43,
      name: "Heaven Ryan",
      tel: "(079) 332-0007 x2977",
      address: "6921 Dibbert Knolls",
      opening_hours: "08:00",
      description: "amet",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.72233270303454",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Margarete Grimes",
      tel: "(536) 925-3322",
      address: "34185 Marquardt Hill",
      opening_hours: "08:00",
      description: "quibusdam voluptates sint",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=85.84261176590556",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Sophie Upton",
      tel: "1-188-919-8153 x360",
      address: "91518 Miller Burg",
      opening_hours: "08:00",
      description: "vero",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.596144864836795",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 13,
      name: "Charlie O'Kon",
      tel: "864-611-4051",
      address: "9051 Towne Roads",
      opening_hours: "08:00",
      description: "Repellat qui saepe. In voluptatem inventore quae s",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.60245489414788",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 21,
      name: "Emie Oberbrunner",
      tel: "977.740.7929",
      address: "566 Hellen Mountain",
      opening_hours: "08:00",
      description: "Et reprehenderit maxime et.\nCum culpa illum impedi",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.7567860466102",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 25,
      name: "Elinor Schmeler PhD",
      tel: "980-664-2807",
      address: "0589 Jon Parks",
      opening_hours: "08:00",
      description: "Quia delectus sit aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.1737148023198",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 27,
      name: "Earnestine Marvin",
      tel: "(463) 725-5682",
      address: "81311 Breanna Loaf",
      opening_hours: "08:00",
      description: "Nihil accusantium est repudiandae ut sunt. Illum l",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.44485652412985",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 32,
      name: "Ms. Oliver Steuber",
      tel: "(840) 095-2774 x46585",
      address: "78314 Skiles Grove",
      opening_hours: "08:00",
      description: "Accusantium voluptas est voluptates laborum ut et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.38792820371479",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 33,
      name: "Stevie Kerluke",
      tel: "1-868-620-0530",
      address: "674 Lou Mission",
      opening_hours: "08:00",
      description: "Autem consequatur fugit quo inventore quis soluta ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.648002371111275",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>
