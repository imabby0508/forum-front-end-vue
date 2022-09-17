<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              v-if="currentUser.id !== user.id"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
            >
              {{ user.isAdmin ? "set as user" : "set as admin" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$muvKCpG4i2z91josrQOWueNrIhuzksCDoBy4LHR2VVj4W6qNaMeZO",
      isAdmin: true,
      image: null,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$VO9B/sJkwru/5Rb43JxD7.bEF7hkiX2uZ5gsQjlWRWuVzFhdTTiEC",
      isAdmin: false,
      image: null,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$ZE2ZhQXlqjIgIyaOm/TDtOBdWGBZtZwN/56mjwZuIcgrTgydgWNTS",
      isAdmin: false,
      image: null,
      createdAt: "2022-09-12T13:53:03.000Z",
      updatedAt: "2022-09-12T13:53:03.000Z",
    },
  ],
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
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: dummyUser.currentUser,
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.users = dummyData.users;
    },
    toggleUserRole({ userId, isAdmin }) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !isAdmin,
          };
        }
        return user;
      });
    },
  },
};
</script>
