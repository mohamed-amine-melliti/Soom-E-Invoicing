import { Invoice } from '@axenda/zatca';

const invoice = new Invoice({
  sellerName: 'Axenda',
  vatRegistrationNumber: '1234567891',
  invoiceTimestamp: '2021-12-04T00:00:00Z',
  invoiceTotal: '100.00',
  invoiceVatTotal: '15.00',
});
// eslint-disable-next-line no-unused-vars
const imageData1 = await invoice.render();
