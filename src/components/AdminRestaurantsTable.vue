<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            type="button"
            class="btn btn-link"
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
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
    {
      id: 11,
      name: "Murray Runolfsson",
      tel: "949.812.8734",
      address: "163 Josiane Stream",
      opening_hours: "08:00",
      description:
        "Quos ut et a facilis cupiditate nulla. Est debitis pariatur doloremque dolor voluptatum atque. Dolorum et et est accusantium illum aperiam. Ducimus aut facilis et iusto enim et.\n \rEt dolore deserunt omnis nulla dolores. Expedita voluptates non. Harum suscipit blanditiis officia id ratione. Pariatur laboriosam vel est rerum voluptas eum. Et omnis provident aliquid laborum odio atque. Quia quaerat rerum amet.\n \rSint cupiditate consectetur est odit. Similique non repellat accusantium debitis. Repellendus eos soluta quasi voluptas non. Expedita perferendis rerum. Iste aspernatur sit reprehenderit et libero iusto qui aut voluptatem. Et accusantium eaque sed corporis eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.494280610119295",
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
      id: 12,
      name: "Valentina Stiedemann",
      tel: "722-320-1502",
      address: "1140 Langworth Isle",
      opening_hours: "08:00",
      description:
        "Impedit doloribus sapiente nihil quae harum aut voluptates veniam. Commodi soluta ullam vel enim ipsum. Ducimus voluptatum fugiat non. Iure facere eos odio soluta et. Aut rem quidem quaerat quis impedit.\n \rDeleniti veritatis expedita cumque omnis eveniet repellendus quia. Error sapiente rerum dolorem. Commodi repellendus et et expedita. Sapiente expedita cupiditate eveniet praesentium consectetur.\n \rConsequuntur sunt ipsa tenetur eligendi sequi. Deserunt vitae quos culpa nobis laboriosam error. At iure nesciunt illo autem eveniet molestiae dolorem nobis. Est doloribus voluptatem minus. Ea voluptate id aut. Nulla quos quis nobis magnam.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=69.94244834387946",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
    {
      id: 14,
      name: "Omari Hayes",
      tel: "089-008-5108",
      address: "04361 Virgie Key",
      opening_hours: "08:00",
      description:
        "Velit est earum non dolorem ut ut veniam voluptatem a. Facilis deleniti non esse voluptate beatae dolores non nostrum. Quia pariatur nobis nisi quia aut omnis officiis est eveniet. Dolorum temporibus enim aliquam in et. Quisquam nisi corrupti repellendus. Odio quia aut saepe nemo voluptate.\n \rSit laboriosam aut placeat iusto et fugiat. Laudantium similique eos voluptas culpa. Aliquid ut iste a voluptates. Quam sed sunt quia. Ut aut possimus exercitationem.\n \rNam dolore et et aut ea animi. Magnam officiis id et possimus velit qui aperiam aut dolores. Eaque et asperiores architecto minima necessitatibus quae dicta modi. Eveniet dolores porro voluptates et et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.05331597498466",
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
      id: 15,
      name: "Briana Daugherty",
      tel: "(063) 173-6565 x8535",
      address: "9617 Domenico Ports",
      opening_hours: "08:00",
      description:
        "Qui magnam dignissimos. Ipsum ut est neque. Nostrum adipisci neque. Non quae at reprehenderit molestias excepturi eos.\n \rDolorem repellendus et quaerat quis aut. Quos quis itaque. Explicabo et et doloribus reiciendis deserunt officia.\n \rMagnam eos autem optio magnam eius. Pariatur sint dolorem et voluptas molestias quidem quisquam voluptatum. Qui expedita suscipit placeat amet ad officiis. Cumque tempora odio dolorem. Rerum hic autem aliquam non soluta.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.02047206669731",
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
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
    {
      id: 17,
      name: "Ryder Trantow",
      tel: "791-931-0629",
      address: "4089 Berta Pike",
      opening_hours: "08:00",
      description:
        "Et voluptas quo quasi cumque quis autem.\nSed quisquam praesentium neque ut.\nMinima nobis architecto repellendus consequatur aut doloremque non voluptas eligendi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.32881295439611",
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
      id: 18,
      name: "Winfield Olson",
      tel: "(835) 548-0170",
      address: "10142 Kiehn Road",
      opening_hours: "08:00",
      description: "cumque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=12.464549343091335",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
    {
      id: 20,
      name: "Porter Schulist",
      tel: "(399) 508-9327 x987",
      address: "519 Christiansen Divide",
      opening_hours: "08:00",
      description:
        "Provident reprehenderit aliquam officiis non repellendus atque quia. Modi illo ut aut sunt et nisi quo. Quos dolorem enim odio eum est eos.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.532740831239559",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
    {
      id: 22,
      name: "Cale Lesch Jr.",
      tel: "474.705.2604",
      address: "4069 Clementina Ranch",
      opening_hours: "08:00",
      description:
        "Dolorum qui harum sequi sunt enim occaecati officia. Dignissimos earum consectetur soluta aut. At dolor quas earum aspernatur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=35.92570881037138",
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
      id: 23,
      name: "Rickie Ward",
      tel: "1-286-967-3341",
      address: "722 Smitham Island",
      opening_hours: "08:00",
      description:
        "Sunt debitis dolor. Quia odit autem consequatur molestias vero sunt. Facilis qui enim quod ut quidem cumque. Quia voluptates cum quo ipsa ut sint et. Labore qui quia eveniet.\n \rQuibusdam labore alias nihil blanditiis vel porro in reprehenderit. Placeat explicabo sit tenetur doloremque est incidunt voluptas fuga quis. Sit odit fugit voluptas labore.\n \rNecessitatibus nemo reprehenderit dicta libero. Eos est quis pariatur sed aliquam autem non. Quibusdam aut dolorum sunt quod necessitatibus. Sed aperiam voluptatibus nostrum expedita voluptatibus cum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.7653821492025896",
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
      id: 24,
      name: "Dr. Aubree Bosco",
      tel: "547-332-0869",
      address: "3364 Domenick Spur",
      opening_hours: "08:00",
      description:
        "Autem ratione tenetur.\nQui dolor nobis voluptas quidem neque iure tenetur fuga.\nOmnis natus sint eveniet et dolor molestiae ratione neque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=58.4906946278694",
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
    },
    {
      id: 26,
      name: "Gordon Jerde",
      tel: "1-550-873-7221 x158",
      address: "9477 Schuster Harbors",
      opening_hours: "08:00",
      description:
        "Qui similique quaerat fugit debitis. Et incidunt asperiores omnis dolorum voluptatem delectus. Consequatur consectetur non ut. Voluptas aut consequatur ut provident maiores. Sunt nisi ad sit consequuntur deleniti et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=8.246406770254723",
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
      id: 27,
      name: "Earnestine Marvin",
      tel: "(463) 725-5682",
      address: "81311 Breanna Loaf",
      opening_hours: "08:00",
      description:
        "Nihil accusantium est repudiandae ut sunt. Illum libero omnis sed similique est. Aut quo voluptatem animi omnis porro repellat deleniti. Quia aut quibusdam qui rerum dicta sit.",
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
    },
    {
      id: 28,
      name: "Thad Marquardt",
      tel: "554-050-3337",
      address: "10529 Moises Summit",
      opening_hours: "08:00",
      description: "quod soluta totam",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.075240480717577",
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
      id: 29,
      name: "Anibal Baumbach",
      tel: "447.072.7598 x1399",
      address: "1299 Dorthy Key",
      opening_hours: "08:00",
      description: "quidem accusamus eum",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=62.378478892454204",
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
      id: 30,
      name: "Nikolas Goodwin",
      tel: "(271) 911-8432 x93524",
      address: "1256 Adela Burg",
      opening_hours: "08:00",
      description: "Doloribus mollitia eum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=14.910314231118903",
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
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
    },
    {
      id: 33,
      name: "Stevie Kerluke",
      tel: "1-868-620-0530",
      address: "674 Lou Mission",
      opening_hours: "08:00",
      description:
        "Autem consequatur fugit quo inventore quis soluta pariatur voluptas occaecati.",
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
    },
    {
      id: 34,
      name: "Marianne Crist",
      tel: "685.568.9684 x26405",
      address: "2499 Celestine Dam",
      opening_hours: "08:00",
      description: "enim sit iure",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=71.8046896593824",
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
    {
      id: 36,
      name: "Timmothy Witting",
      tel: "290-826-1725 x888",
      address: "4182 Rempel Stream",
      opening_hours: "08:00",
      description: "Sit molestias placeat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.96302560523647",
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
      id: 37,
      name: "Miss Emelie Wilkinson",
      tel: "(731) 604-1811 x459",
      address: "186 Cartwright Mall",
      opening_hours: "08:00",
      description: "Aut animi vel placeat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=49.477477294705",
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
      id: 38,
      name: "Laury Nikolaus",
      tel: "525.418.9286 x3798",
      address: "5969 Sid Fall",
      opening_hours: "08:00",
      description: "vel",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=21.485410186135255",
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
      id: 39,
      name: "Jordane Brekke",
      tel: "1-330-017-0149 x316",
      address: "8960 Viola Plaza",
      opening_hours: "08:00",
      description:
        "Eum in quis doloribus autem in consequatur totam nulla nam. Rerum unde voluptas praesentium vel praesentium architecto. Iusto et et ipsa eius non adipisci cupiditate.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=52.555265856273635",
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
    {
      id: 41,
      name: "Ms. Briana Berge",
      tel: "(422) 041-6395",
      address: "745 Lucious Mountain",
      opening_hours: "08:00",
      description:
        "Perspiciatis sed pariatur commodi accusantium qui quidem et alias suscipit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=39.244837972711785",
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
      id: 42,
      name: "Madonna Daugherty",
      tel: "177-043-0179 x4861",
      address: "46854 Lee Cliff",
      opening_hours: "08:00",
      description:
        "Et at quaerat quo rerum modi sed earum. Quis fugiat a. In sapiente autem. Cumque illum dicta dolore amet eos non quos ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.88027171971127",
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
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
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
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
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
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
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-09-12T13:53:03.000Z",
        updatedAt: "2022-09-12T13:53:03.000Z",
      },
    },
    {
      id: 50,
      name: "Oma Simonis",
      tel: "670-898-3158",
      address: "0640 Zemlak Mall",
      opening_hours: "08:00",
      description:
        "Non non quis similique quisquam nemo rerum ad. Eaque voluptas voluptates explicabo quia beatae. Ducimus corporis a voluptatem fugit qui voluptatibus voluptate. Id soluta quod et incidunt.\n \rEaque illum similique tenetur voluptate nulla velit ipsum ratione suscipit. Voluptatem aliquid soluta quidem amet fugiat dolorem architecto cumque earum. Maiores voluptatem error sed deleniti tenetur commodi aperiam et.\n \rQui necessitatibus quos qui ex et voluptatem. Temporibus voluptatibus iste itaque unde facilis voluptatem. Molestiae est est nulla. Eveniet odio et voluptate explicabo ut. Maiores ut et. Dolorum adipisci repellendus quis ea quae aliquid facere.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.01890272379859",
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
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },
    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>
