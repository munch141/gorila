class Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: any[] | undefined;

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    images: any | undefined,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.images = images;
  }
}

const productConverter = {
  toFirestore(product: Product): firebase.default.firestore.DocumentData {
    return {
      name: product.name,
      description: product.description,
      price: product.price,
      images: product.images ? product.images : [],
    };
  },
  fromFirestore(
    snapshot: firebase.default.firestore.QueryDocumentSnapshot,
    options: firebase.default.firestore.SnapshotOptions,
  ): Product {
    const data = snapshot.data(options);

    return new Product(snapshot.id, data.name, data.description, data.price, data.images);
  },
} as firebase.default.firestore.FirestoreDataConverter<Product>;

export { Product, productConverter };
