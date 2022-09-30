<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ isProcessing ? "資料更新中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      user: {
        id: -1,
        name: "",
        image: "",
        email: "",
      },
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser(user) {
      this.setUser();
    },
  },
  created() {
    const { id } = this.$route.params;
    // 若使用者嘗試直接從路由進入其他使用者的 edit 頁
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: "not-found" });
      return;
    }
    this.setUser(id);
  },
  // 路由改變時重新抓取資料
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: "not-found" });
      return;
    }
    this.setUser(id);
    next();
  },
  methods: {
    setUser() {
      const { id, name, image, email } = this.currentUser;
      this.user = {
        ...this.user,
        id,
        name,
        image,
        email,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (!files.length) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    async handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      try {
        if (!this.user.name) {
          Toast.fire({
            icon: "warning",
            title: "請填寫姓名",
          });
          return;
        }
        this.isProcessing = true;
        
        const { data } = await usersAPI.update({
          userId: this.user.id,
          formData,
        });
       
        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.$router.push({ name: "user", params: { id: this.user.id } });
      } catch (error) {
        this.isProcessing = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>
