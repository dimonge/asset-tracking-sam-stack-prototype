
export const handler = async (event: any, context: any) => {
  console.log(event, context)
  return {
    "statusCode": 201,
    "message": "done"
  };
};