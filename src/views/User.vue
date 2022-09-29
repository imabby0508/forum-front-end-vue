<template>
  <main role="main">
    <div class="album py-5 bg-light">
      <div class="container">
        <!--  UserProfileCard  -->
        <UserProfileCard
          :user="user"
          :initial-is-followed="isFollowed"
          :isCurrentUser="currentUser.id === user.id"
        />
        <div class="row">
          <div class="col-md-4">
            <!-- UserFollowingsCard 追蹤中-->
            <UserFollowingsCard :followings="followings" />
            <br />
            <!-- UserFollowersCard 追蹤者-->
            <UserFollowersCard :followers="followers" />
          </div>
          <div class="col-md-8">
            <!-- UserCommentsCard 已評論餐廳-->
            <UserCommentsCard :comments="comments" />
            <br />
            <!-- UserFavoritedRestaurantsCard 收藏餐廳 -->
            <UserFavoritedRestaurantsCard
              :favorited-restaurants="favoritedRestaurants"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard";
import usersAPI from "./../apis/users"
import { Toast } from "./../utils/helpers"
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        email: "",
        image: "",
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followersLength: 0,
        followingsLength: 0,
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: false,
    };
  },
  created() {
    // 從路由取得使用者 id，並呼叫方法
    const { id } = this.$route.params
    this.fetchUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data, statusText } = await usersAPI.get({ userId })
        
        if (statusText === 'error') {
          throw new Error(statusText)
        }

        const { profile, isFollowed } = data;
        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = profile;

        this.user = {
          ...this.user,
          id,
          name,
          email,
          image,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
          followersLength: Followers.length,
          followingsLength: Followings.length,
        };
        //處理 comment.Restaurant 可能有空值的情況
        this.comments = Comments.filter(comment => comment.Restaurant);
        this.favoritedRestaurants = FavoritedRestaurants;
        this.followers = Followers;
        this.followings = Followings;
        this.isFollowed = isFollowed;
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: "無法取得使用者資料，請稍後再試"
        })
      }
      
    },
  },
};
</script>