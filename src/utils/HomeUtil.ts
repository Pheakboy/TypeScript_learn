// export const fetchProduts = async (
//     api: string,
//     limit?: number,
//     search?: string,
//     size?:number
//   ) => {
//     const response = await fetch(`${api}?limit=25&name=rotha`);
//     return response.json();
//   };

export const fetchProduts = async (api:string, qty?:number) => {
  const response = await fetch( `${api}?limit=25${qty}`);
  return response.json();
};
