import { apiHelper } from "./../utils/helpers";

export default {
  restaurants: {
    create({ formData }) {
      return apiHelper.post("/admin/restaurants", formData);
    },
    get() {
      return apiHelper.get("/admin/restaurants");
    },
    getDetails({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`);
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData);
    },
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`);
    },
  },
  categories: {
    create({ name }) {
      return apiHelper.post(
        "/admin/categories",
        { name });
    },
    get() {
      return apiHelper.get("/admin/categories");
    },
    update({ categoryId, name }) {
      return apiHelper.put(
        `/admin/categories/${categoryId}`,
        { name });
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`);
    },
  },
  users: {
    get() {
      return apiHelper.get("/admin/users");
    },
    update({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, {isAdmin});
    },
  },
};
