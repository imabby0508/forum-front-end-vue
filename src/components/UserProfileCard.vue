<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          src="https://i.imgur.com/iO9H3N1.png"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.commentsLength }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favoritedRestaurantsLength }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followingsLength }}</strong>
              followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.followersLength }}</strong>
              followers (追隨者)
            </li>
          </ul>
          <p>
            <template v-if="isCurrentUser">
              <router-link :to="{ name: 'user-edit', params: { id: user.id } }"
                ><button type="submit" class="btn btn-primary">
                  edit
                </button></router-link
              >
            </template>
            <template v-else>
              <button
                v-if="isFollowed"
                type="submit"
                class="btn btn-danger"
                @click.prevent.stop="deleteFollowing(user.id)"
              >
                取消追蹤
              </button>
              <button
                v-else
                type="submit"
                class="btn btn-primary"
                @click.prevent.stop="addFollowing(user.id)"
              >
                追蹤
              </button>
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isFollowed: this.initialIsFollowed,
    };
  },
  methods: {
    addFollowing(userId) {
      this.isFollowed = true;
    },
    deleteFollowing(userId) {
      this.isFollowed = false;
    },
  },
};
</script>
