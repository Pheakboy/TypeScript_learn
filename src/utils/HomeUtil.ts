// export const fetchProduts = async (
//     api: string,
//     limit?: number,
//     search?: string,
//     size?:number
//   ) => {
//     const response = await fetch(`${api}?limit=25&name=rotha`);
//     return response.json();
//   };

export const fetchProduts = async (api:string) => {
  const response = await fetch( `${api}?limit=25`);
  return response.json();
};
