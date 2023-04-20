<template>
  <ul class="catalog__list">
    <ProductItem
      v-for="(product, index) in products"
      :key="index"
      :title="product.title"
      :image="product.image"
      :price="product.price"
    />
  </ul>
</template>

<script>

import ProductItem from '@/components/ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
};
</script>

<style lang="scss">
.catalog__pic {
  img {
    object-fit: contain;
  }
}
</style>
