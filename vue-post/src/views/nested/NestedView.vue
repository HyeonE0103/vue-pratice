<template>
  <div class="m-2">
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link
          :to="{ name: 'NestedOne', replace: true }"
          class="nav-link"
          active-class="active"
          >Nested One</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          :to="{ name: 'NestedTwo', replace: true }"
          class="nav-link"
          active-class="active"
          >Nested Two</router-link
        >
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script setup></script>

<style lang="scss" scoped></style>
