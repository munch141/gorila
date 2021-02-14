interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];

  // constructor(id: string, name: string, description: string, price: number, images: string[]) {
  //   this.id = id;
  //   this.name = name;
  //   this.description = description;
  //   this.price = price;
  //   this.images = images;
  // }
}

const productConverter = {
  toFirestore(product: IProduct): firebase.default.firestore.DocumentData {
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
  ): IProduct {
    const data = snapshot.data(options);

    return {
      id: snapshot.id,
      name: data.name,
      description: data.description,
      price: data.price,
      images: data.images ? data.images : [],
    } as IProduct;
  },
} as firebase.default.firestore.FirestoreDataConverter<IProduct>;

export { IProduct, productConverter };
