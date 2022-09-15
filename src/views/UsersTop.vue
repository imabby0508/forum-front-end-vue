<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <a href="#">
          <img :src="user.image" width="140px" height="140px" />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.followerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="unfollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="follow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";

const dummyData = {
  users: [
    {
      id: 1,
      name: "Ruby",
      email: "root@example.com",
      password: "$2a$10$muvKCpG4i2z91josrQOWueNrIhuzksCDoBy4LHR2VVj4W6qNaMeZO",
      isAdmin: true,
      image:
        "https://images.unsplash.com/photo-1641522682419-7e52d83a8ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1597&q=80",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "Cindy",
      email: "user1@example.com",
      password: "$2a$10$VO9B/sJkwru/5Rb43JxD7.bEF7hkiX2uZ5gsQjlWRWuVzFhdTTiEC",
      isAdmin: false,
      image:
        "https://images.unsplash.com/photo-1663024718079-ae3cc5d7a9f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "Alice",
      email: "user2@example.com",
      password: "$2a$10$ZE2ZhQXlqjIgIyaOm/TDtOBdWGBZtZwN/56mjwZuIcgrTgydgWNTS",
      isAdmin: false,
      image:
        "https://images.unsplash.com/photo-1642757180112-578d1658523c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsersTop();
  },
  methods: {
    fetchUsersTop() {
      this.users = dummyData.users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed,
        };
      });
    },
    unfollow(userId) {
      this.users = this.users.map((user) => {
        if (userId !== user.id) {
          return user;
        } else {
          return {
            ...user,
            followerCount: user.followerCount - 1,
            isFollowed: false,
          };
        }
      });
    },
    follow(userId) {
      this.users = this.users.map((user) => {
        if (userId !== user.id) {
          return user;
        } else {
          return {
            ...user,
            followerCount: user.followerCount + 1,
            isFollowed: true,
          };
        }
      });
    },
  },
};
</script>

<style>
img {
  object-fit: cover;
}
</style>