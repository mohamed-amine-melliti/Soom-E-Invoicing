<template>
  <q-table
    :columns="columns"
    :rows="rows"
    class="items"
    row-key="id"
    hide-pagination
    flat
  >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="items" :props="props">
          {{ props.row.items }}
          <q-popup-edit v-model="props.row.items">
            <q-input v-model="props.row.items" dense autofocus counter />
          </q-popup-edit>
        </q-td>
        <q-td key="description" :props="props">
          {{ props.row.description }}
          <q-popup-edit v-model="props.row.description">
            <q-input v-model="props.row.description" dense autofocus counter />
          </q-popup-edit>
        </q-td>
        <q-td key="quantity" :props="props">
          {{ props.row.quantity }}
          <q-popup-edit v-model="props.row.quantity">
            <q-input v-model="props.row.quantity" dense autofocus counter />
          </q-popup-edit>
        </q-td>
        <q-td key="price" :props="props">
          {{ props.row.price }}
          <q-popup-edit v-model="props.row.price">
            <q-input v-model="props.row.price" dense autofocus counter />
          </q-popup-edit>
        </q-td>
        <q-td key="description" :props="props">
           {{ currency }} {{ (props.row.quantity * props.row.price) || 0.00 }}
        </q-td>
      </q-tr>
    </template>
    <template v-slot:bottom>
      <div class="row card_button">
        <q-btn color="primary" size="sm" icon="add" label="Add Item" @click="addRow" />
        <q-btn class="q-ml-md" color="primary" size="sm" icon="download" label="Download" @click="download" />
      </div>
    </template>
  </q-table>
</template>

<style lang="scss" scoped>
  .items {
    .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
      background-color: $primary;
    }
  }
</style>

<script>
import { defineComponent } from 'vue';

const Items = defineComponent({
  name: 'Items',
  props: {
    currency: {
      type: String,
    },
  },
  data() {
    return {
      columns: [
        {
          name: 'items', align: 'left', label: 'ITEMS', field: 'items', sortable: true,
        },
        {
          name: 'description', align: 'left', label: 'DESCRIPTION', field: 'description',
        },
        {
          name: 'quantity', label: 'Quantity', align: 'left', field: 'quantity', sortable: true,
        },
        {
          name: 'price', label: 'Price', align: 'left', field: 'price', sortable: true,
        },
        {
          name: 'amount', label: 'Amount', align: 'left', field: 'amount', sortable: true,
        },
      ],
      rows: [
        {
          id: 1, items: 'Item Name', description: 'Describe the product here', quantity: 0, price: 0.00, amount: 0.00,
        },
      ],
      sumTotal: 0,
    };
  },
  methods: {
    addRow() {
      this.rows.push({
        id: 2, items: 'Item Name', description: 'Describe the product here', quantity: 0, price: 0.00, amount: 0.00,
      });
    },
    download() {
      this.$emit('download');
    },
  },
});

export default Items;
</script>
