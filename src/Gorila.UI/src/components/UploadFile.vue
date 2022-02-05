<template>
  <div class="container">
    <div>
      <hr />
      <label
        >File
        <input type="file" @change="handleFileUpload($event)" />
      </label>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        v-on:click="copyToClipboard">copiar 📋</button>
    </div>
    <div>
      <p><pre v-if="categories">{{ templateText }}</pre></p>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx';

const NAME_COLUMN = 'C';
const CATEGORY_COLUMN = 'D';
const DESCRIPTION_COLUMN = 'E';
const QUANTITY_COLUMN = 'F';
const PRICE_COLUMN = 'H';
const START_ROW = 9;

const months = {
  0: 'Ene',
  1: 'Feb',
  2: 'Mar',
  3: 'Abr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Ago',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dic',
};

// const daysOfWeek = {
//   0: 'Domingo',
//   1: 'Lunes',
//   2: 'Martes',
//   3: 'Miércoles',
//   4: 'Jueves',
//   5: 'Viernes',
//   6: 'Sábado',
// };

const cellAddress = (column, row) => `${column}${row}`;

function templateHeader() {
  const today = new Date();

  return `*LISTA ${today.getDate()} ${months[today.getMonth()]}* 🦍`;
}

// function templateSpecials() {
//   const today = new Date();
//   const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

//   return `Especial bajo pedido para el ${daysOfWeek[today.getDay()]} ${date}.
// Recibimos pedidos hasta el sábado 27, 1:00 pm

// Ensalada César $6

// Quiche camarones y ajoporros 20 cm $11

// Entrecott con salsa champiñones, arroz salteado pasas y soya, espárragos asados.
// Porción individual $9`;
// }

const templateFooter = `_____________
💲Aceptamos efectivo, transferencias Mercantil y Venezolano de Crédito, pago móvil, Zelle, PayPal y Pipol Pay.

*Pick-up: Las Marías, El Hatillo*

🛵 *DELIVERY:*
Municipio El Hatillo: $3
Baruta: $3
Sucre y Chacao: $3
Pedidos mayores a $40: delivery gratis.
Favor consultar para otras zonas.

*LA TIENDA DEL GORILA* 🦍
*Eugenio Münch*
WhatsApp: +584120260422
IG: @latiendadelgorila`;

function getProduct(row, sheet) {
  const nameCell = sheet[cellAddress(NAME_COLUMN, row)];
  const descriptionCell = sheet[cellAddress(DESCRIPTION_COLUMN, row)];
  const quantityCell = sheet[cellAddress(QUANTITY_COLUMN, row)];
  const priceCell = sheet[cellAddress(PRICE_COLUMN, row)];
  const categoryCell = sheet[cellAddress(CATEGORY_COLUMN, row)];

  return [
    categoryCell.v,
    {
      name: nameCell.v,
      description: descriptionCell.v,
      quantity: quantityCell.v,
      price: priceCell.v,
    },
  ];
}

export default {
  data() {
    return {
      categories: {},
      templateText: '',
    };
  },
  methods: {
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText(this.templateText);
        alert('Copiado!');
      } catch ($e) {
        alert('Cannot copy');
      }
    },
    async handleFileUpload(event) {
      this.categories = {};
      this.templatetext = '';
      const file = event.target.files[0];
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      let row = START_ROW;

      while (sheet[cellAddress(NAME_COLUMN, row)]) {
        const [category, product] = getProduct(row, sheet);

        if (product.quantity > 0) {
          if (!this.categories[category]) {
            this.categories[category] = [product];
          } else {
            this.categories[category].push(product);
          }
        }

        row += 1;
      }

      this.templateText = `${templateHeader()}
${this.categoriesTemplate()}
${templateFooter}
`;
    },
    categoriesTemplate() {
      const entries = Object.entries(this.categories);
      return entries.reduce(
        (acc, [category, products]) => `${acc}
${this.categoryTemplate(category, products)}`,
        '',
      );
    },
    categoryTemplate(category, products) {
      let text = `*${category}*`;

      text += products.reduce(
        (acc, product) => `${acc}
${this.productTemplate(product)}`,
        '',
      );

      return `${text}
`;
    },
    productTemplate(product) {
      return `~ ${product.name} ${product.price} - disponibles: ${product.quantity}`;
    },
  },
};
</script>
