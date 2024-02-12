import { retrieveData, retrieveDataById } from "@/app/lib/firebase/service";
import {NextResponse} from "next/server";
import { title } from "process";

const data = [
  {
    id: 1,
    title: "Air Jordan 1",
    price: "1000000",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_467,c_limit/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-shoes-r8QXCd.png"
  },
  {
    id: 2,
    title: "Air Jordan Dunk",
    price: "10000000",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_467,c_limit/922139e1-3221-4e96-a9f9-3fbb67926e17/nikecourt-legacy-shoes-PKg8wX.png"
  },
  {
    id: 3,
    title: "Air Panda",
    price: "1500000",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_467,c_limit/922139e1-3221-4e96-a9f9-3fbb67926e17/nikecourt-legacy-shoes-PKg8wX.png"
  },
  {
    id: 4,
    title: "Air Panda",
    price: "1500000",
    image: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/h_467,c_limit/922139e1-3221-4e96-a9f9-3fbb67926e17/nikecourt-legacy-shoes-PKg8wX.png"
  },
 
];

export async function GET(request: NextResponse) {
  const {searchParams} = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({status: 200, message: "Success", data: detailProduct});
    }
    return NextResponse.json({status: 404, message: "Not Found", data : {}});
  }

  const products = await retrieveData("products");
  return NextResponse.json({status: 200, message: "Success", data : products});
}
