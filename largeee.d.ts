interface Product {
  _id: string;
  name: string;
  price: number;
  color: string;
  illustration: boolean;
  tissue: "cotton" | "mesh";
  src: string;
  comments: commentProduct[];
}

interface CommentProduct {
  product_id: string
  author: string
  comment: string
}

interface UserData {
  username: string
  email: string
  password: string
}

interface UserDataLogin {
  email: string
  password: string
}

interface ProductCart {
  _id: string;
  name: string;
  price: number;
  src: string;
  amount: number;
}


interface Authentication {
  auth: boolean
  token: string
}
