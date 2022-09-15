<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <!-- 最新餐廳 NewestRestaurants -->
        <h3>最新餐廳</h3>
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Miss Maxime Schaefer",
      tel: "(638) 158-7517 x768",
      address: "7186 Fahey Bridge",
      opening_hours: "08:00",
      description:
        "Neque eaque et non. Dolorem nulla fugit quisquam necessitatibus velit. Mollitia velit soluta ad quia vitae. Blanditiis nostrum mollitia ratione dicta.",
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
    },
    {
      id: 2,
      name: "Hassie Olson",
      tel: "137-225-6830 x34798",
      address: "880 Willy Passage",
      opening_hours: "08:00",
      description: "quis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.33013169337826",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
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
    },
    {
      id: 4,
      name: "Gaylord Schneider",
      tel: "253.862.0002 x42662",
      address: "079 Joanne Rue",
      opening_hours: "08:00",
      description:
        "Ullam cupiditate et dolor dolore iusto quo asperiores et enim.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=53.098909760457346",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
    {
      id: 5,
      name: "Laverne Labadie",
      tel: "(927) 936-6971 x25694",
      address: "349 Fritsch Rue",
      opening_hours: "08:00",
      description:
        "Architecto veritatis vel.\nAccusamus aut consequatur omnis necessitatibus hic sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=44.148782768610076",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
    {
      id: 6,
      name: "Troy Monahan",
      tel: "(088) 923-9935 x84833",
      address: "268 Eloisa Centers",
      opening_hours: "08:00",
      description:
        "Dolor quod perspiciatis est est hic voluptatem vero sunt quo. Repellat nihil occaecati aspernatur tempora repudiandae. Neque perferendis repellendus nemo. Eos cum quae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.83078635252053",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
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
    },
    {
      id: 8,
      name: "Dale Schumm",
      tel: "817-462-0294",
      address: "6810 Cayla Road",
      opening_hours: "08:00",
      description: "Similique in veritatis earum reprehenderit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=36.01617422078394",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
    {
      id: 9,
      name: "Dock Schmitt",
      tel: "1-381-295-3303 x13907",
      address: "10330 Boyle Freeway",
      opening_hours: "08:00",
      description:
        "Commodi enim expedita. Et recusandae quisquam aut voluptas. Ullam blanditiis laboriosam exercitationem eum. Odio est quae. Rerum earum accusamus laudantium esse. Dolorem neque excepturi eligendi occaecati sequi alias sapiente.\n \rDolorum placeat laudantium molestiae nisi dolores animi. Dignissimos eligendi sit nemo. Velit maxime blanditiis voluptatum eum nihil fugit autem eos. Vero vitae assumenda sed et vero.\n \rOdio nisi ea aliquid et distinctio autem officia. Reiciendis sint asperiores. Omnis ad eveniet consequatur. Blanditiis assumenda delectus quaerat nemo temporibus et ut fugit. Pariatur quaerat vitae quia excepturi omnis. Temporibus occaecati nulla nisi velit rem nam molestiae voluptas.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.798591169549994",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
    {
      id: 10,
      name: "Fleta Rau",
      tel: "872.769.7104 x06483",
      address: "5143 Maximillia Lodge",
      opening_hours: "08:00",
      description:
        "Nobis voluptas accusantium recusandae velit. Saepe possimus laboriosam. Molestias qui maxime nesciunt esse deleniti at. Et et ducimus consequatur in sit consequatur dolore. Ipsa eveniet laudantium fuga a. Non dicta nulla rerum excepturi doloremque ipsum assumenda fugit.\n \rQuod praesentium error quas nostrum ex dolorem. Facilis nihil sed cumque ea. Sit sunt earum quis quasi mollitia eligendi consequatur. Facilis molestias vero nesciunt. Quis quae consectetur consequatur fuga autem molestiae eos quae.\n \rProvident sint nesciunt. Possimus iure adipisci placeat repellendus et nemo voluptas est. Illum et consequatur ducimus est accusamus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.204816812560765",
      viewCounts: 0,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
  ],
  comments: [
    {
      id: 16,
      text: "Sed explicabo voluptatibus et doloribus.",
      UserId: 1,
      RestaurantId: 16,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$muvKCpG4i2z91josrQOWueNrIhuzksCDoBy4LHR2VVj4W6qNaMeZO",
        isAdmin: true,
        image: null,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      Restaurant: {
        id: 16,
        name: "Amani Carter",
        tel: "041-845-0629",
        address: "63769 Alexzander Curve",
        opening_hours: "08:00",
        description:
          "Iusto ad consequuntur nam aut. Consequuntur maiores itaque sunt. Ea ipsum quia itaque inventore officiis enim.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=21.043660519293116",
        viewCounts: 0,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        CategoryId: 3,
      },
    },
    {
      id: 40,
      text: "Placeat eius quasi nobis repellat consequatur sint sapiente et.",
      UserId: 1,
      RestaurantId: 40,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$muvKCpG4i2z91josrQOWueNrIhuzksCDoBy4LHR2VVj4W6qNaMeZO",
        isAdmin: true,
        image: null,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      Restaurant: {
        id: 40,
        name: "Belle Cartwright",
        tel: "1-900-457-9510",
        address: "8591 Tina Island",
        opening_hours: "08:00",
        description:
          "Nam a voluptatem repellat quaerat optio suscipit enim quae.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=13.634893974266781",
        viewCounts: 0,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 63,
      text: "Necessitatibus iste accusantium.",
      UserId: 1,
      RestaurantId: 13,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$muvKCpG4i2z91josrQOWueNrIhuzksCDoBy4LHR2VVj4W6qNaMeZO",
        isAdmin: true,
        image: null,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      Restaurant: {
        id: 13,
        name: "Charlie O'Kon",
        tel: "864-611-4051",
        address: "9051 Towne Roads",
        opening_hours: "08:00",
        description:
          "Repellat qui saepe. In voluptatem inventore quae sunt. Enim vitae deleniti et. Qui eaque distinctio voluptatem. Velit optio tenetur debitis deleniti voluptates.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=81.60245489414788",
        viewCounts: 0,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 81,
      text: "Velit nobis nihil cumque voluptatem officia.",
      UserId: 1,
      RestaurantId: 31,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$muvKCpG4i2z91josrQOWueNrIhuzksCDoBy4LHR2VVj4W6qNaMeZO",
        isAdmin: true,
        image: null,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      Restaurant: {
        id: 31,
        name: "Tristian Osinski",
        tel: "1-163-042-4519",
        address: "1474 Viviane Manor",
        opening_hours: "08:00",
        description:
          "Vel accusantium velit sunt veniam est nam quidem quia. Quis reprehenderit omnis exercitationem ab reprehenderit et aut. Qui quas voluptatem dolorum facere nihil. Sint quaerat et voluptas ut nisi culpa assumenda qui et. Eum ea consequatur. Cumque voluptas enim qui numquam et ut voluptate.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=32.40293201201305",
        viewCounts: 0,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 108,
      text: "Optio et et odit eos error soluta nihil.",
      UserId: 1,
      RestaurantId: 8,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$muvKCpG4i2z91josrQOWueNrIhuzksCDoBy4LHR2VVj4W6qNaMeZO",
        isAdmin: true,
        image: null,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      Restaurant: {
        id: 8,
        name: "Dale Schumm",
        tel: "817-462-0294",
        address: "6810 Cayla Road",
        opening_hours: "08:00",
        description: "Similique in veritatis earum reprehenderit.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=36.01617422078394",
        viewCounts: 0,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        CategoryId: 5,
      },
    },
    {
      id: 135,
      text: "Dolor rerum quod quaerat saepe.",
      UserId: 1,
      RestaurantId: 35,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      User: {
        id: 1,
        name: "root",
        email: "root@example.com",
        password:
          "$2a$10$muvKCpG4i2z91josrQOWueNrIhuzksCDoBy4LHR2VVj4W6qNaMeZO",
        isAdmin: true,
        image: null,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
      Restaurant: {
        id: 35,
        name: "Duane McClure",
        tel: "(474) 000-1003 x633",
        address: "9102 Rafaela Mountain",
        opening_hours: "08:00",
        description:
          "Omnis id molestiae praesentium in. Non sunt et deserunt eum hic ad qui ratione. Temporibus nihil cum veritatis exercitationem.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=85.49003358129158",
        viewCounts: 0,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        CategoryId: 2,
      },
    },
    {
      id: 4,
      text: "Ratione nihil enim veniam aut dolores est dignissimos quasi ut.",
      UserId: 2,
      RestaurantId: 4,
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
      Restaurant: {
        id: 4,
        name: "Gaylord Schneider",
        tel: "253.862.0002 x42662",
        address: "079 Joanne Rue",
        opening_hours: "08:00",
        description:
          "Ullam cupiditate et dolor dolore iusto quo asperiores et enim.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=53.098909760457346",
        viewCounts: 0,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        CategoryId: 4,
      },
    },
    {
      id: 21,
      text: "Vel voluptatum eius quis deleniti sunt.",
      UserId: 2,
      RestaurantId: 21,
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
      Restaurant: {
        id: 21,
        name: "Emie Oberbrunner",
        tel: "977.740.7929",
        address: "566 Hellen Mountain",
        opening_hours: "08:00",
        description:
          "Et reprehenderit maxime et.\nCum culpa illum impedit accusamus.\nNihil eum autem enim atque.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=51.7567860466102",
        viewCounts: 0,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        CategoryId: 2,
      },
    },
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
      Restaurant: {
        id: 1,
        name: "Miss Maxime Schaefer",
        tel: "(638) 158-7517 x768",
        address: "7186 Fahey Bridge",
        opening_hours: "08:00",
        description:
          "Neque eaque et non. Dolorem nulla fugit quisquam necessitatibus velit. Mollitia velit soluta ad quia vitae. Blanditiis nostrum mollitia ratione dicta.",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=64.01572895402488",
        viewCounts: 0,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        CategoryId: 1,
      },
    },
    {
      id: 69,
      text: "Qui quisquam soluta ut.",
      UserId: 2,
      RestaurantId: 19,
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
      Restaurant: {
        id: 19,
        name: "Craig Hauck",
        tel: "167.813.1493 x5658",
        address: "00379 Koch Brook",
        opening_hours: "08:00",
        description: "exercitationem voluptatem laboriosam",
        image:
          "https://loremflickr.com/320/240/restaurant,food/?random=79.0713484234159",
        viewCounts: 0,
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
        CategoryId: 4,
      },
    },
  ],
};

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    this.fetchFeeds();
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants;
      this.comments = dummyData.comments.filter(comment => comment.Restaurant && comment.text);
    },
  },
};
</script>