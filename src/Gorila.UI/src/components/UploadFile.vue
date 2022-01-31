<template>
  <div class="container">
    <div>
      <hr />
      <label
        >File
        <input type="file" @change="handleFileUpload($event)" />
      </label>
    </div>
    <div>
      <p v-for="product in products" :key="product.name">
        {{ `${product.name} | ${product.description} | ${product.price}` }}
      </p>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx';

const NAME_COLUMN = 'C';
const DESCRIPTION_COLUMN = 'E';
const QUANTITY_COLUMN = 'F';
const PRICE_COLUMN = 'H';
const START_ROW = 9;

const cellAddress = (column, row) => `${column}${row}`;

const getProduct = (row, sheet) => {
  const nameCell = sheet[cellAddress(NAME_COLUMN, row)];
  const descriptionCell = sheet[cellAddress(DESCRIPTION_COLUMN, row)];
  const quantityCell = sheet[cellAddress(QUANTITY_COLUMN, row)];
  const priceCell = sheet[cellAddress(PRICE_COLUMN, row)];

  return {
    name: nameCell.v,
    description: descriptionCell.v,
    quantity: quantityCell.v,
    price: priceCell.v,
  };
};

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async handleFileUpload(event) {
      this.products = [];
      const file = event.target.files[0];
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      let row = START_ROW;

      while (sheet[cellAddress(NAME_COLUMN, row)]) {
        const product = getProduct(row, sheet);

        if (product.quantity > 0) this.products.push(product);

        row += 1;
      }
    },
  },
};
</script>
