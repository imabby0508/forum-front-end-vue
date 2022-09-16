<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px; margin: auto"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="restaurant.image | emptyImage" />
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              class="btn btn-primary mr-2"
              >Show</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import { emptyImageFilter } from "./../utils/mixins";

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Oma Simonis",
      tel: "670-898-3158",
      address: "0640 Zemlak Mall",
      opening_hours: "08:00",
      description: "Non non quis similique quisquam nemo rerum ad. Eaq",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.01890272379859",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Clint Schowalter",
      tel: "1-580-146-9728 x88290",
      address: "694 Arnoldo Loaf",
      opening_hours: "08:00",
      description: "et atque quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.697784257743784",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Elbert Wolf",
      tel: "(107) 284-5926",
      address: "9821 Dewitt Island",
      opening_hours: "08:00",
      description: "ipsam officia consequuntur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.49004342915978",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Corine VonRueden V",
      tel: "775.548.4720 x25176",
      address: "135 Evalyn Cliff",
      opening_hours: "08:00",
      description: "Animi numquam ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.37879923687426",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Rossie Konopelski",
      tel: "472-706-3898",
      address: "5678 Lavon Trail",
      opening_hours: "08:00",
      description: "voluptatum enim natus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=89.6562270803931",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Lemuel Doyle",
      tel: "245-375-1323 x265",
      address: "210 Rosenbaum Plains",
      opening_hours: "08:00",
      description: "Eum culpa accusantium qui esse porro.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=80.37030632853639",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Ahmad Ruecker",
      tel: "1-727-910-0243 x436",
      address: "74000 Kub Course",
      opening_hours: "08:00",
      description: "eum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.2003354649758",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
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
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Madonna Daugherty",
      tel: "177-043-0179 x4861",
      address: "46854 Lee Cliff",
      opening_hours: "08:00",
      description: "Et at quaerat quo rerum modi sed earum. Quis fugia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.88027171971127",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Ms. Briana Berge",
      tel: "(422) 041-6395",
      address: "745 Lucious Mountain",
      opening_hours: "08:00",
      description: "Perspiciatis sed pariatur commodi accusantium qui ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.244837972711785",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurantsTop();
  },
  methods: {
    fetchRestaurantsTop() {
      this.restaurants = dummyData.restaurants;
    },
    addFavorite(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if (restaurant.id !== restaurantId) {
          return restaurant;
        }
        return {
          ...restaurant,
          FavoriteCount: restaurant.FavoriteCount + 1,
          isFavorited: true,
        };
      });
    },
    deleteFavorite(restaurantId) {
      this.restaurants = this.restaurants.map((restaurant) => {
        if (restaurant.id !== restaurantId) {
          return restaurant;
        }
        return {
          ...restaurant,
          FavoriteCount: restaurant.FavoriteCount - 1,
          isFavorited: false,
        };
      });
    },
  },
};
</script>