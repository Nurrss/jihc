<template>
  <div class="d-flex align-items-center py-4 container">
    <main class="form-signin w-100 m-auto">
      <form @submit.prevent="submitForm">
        <h1 class="h3 mb-3 fw-normal">Please fill all the inputs</h1>

        <div class="form-floating">
          <input
            v-model="text"
            type="text"
            class="form-control mb-1"
            id="floatingText"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Text</label>
        </div>

        <button class="btn btn-primary w-100 py-2" type="submit">
          Add Text
        </button>

        <!-- Display the ID of the new object -->
        <p class="mt-3">ID of the new object: {{ newObjectId }}</p>
      </form>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddNews",
  data() {
    return {
      text: "",
      newObjectId: null, // Initialize newObjectId
    };
  },
  methods: {
    clearText() {
      this.text = "";
    },
    async submitForm() {
      // Collecting form data
      const formData = {
        text: this.text,
      };

      try {
        // Sending POST request with Axios
        const response = await axios.post(
          "http://localhost:3000/api/admin/text/add",
          formData
        );

        this.clearText();
        // Get the ID from the response
        this.newObjectId = response.data._id;

        console.log("New object ID:", this.newObjectId);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  },
};
</script>

<style></style>
