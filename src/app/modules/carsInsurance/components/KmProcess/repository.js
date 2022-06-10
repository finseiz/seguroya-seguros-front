import { makeSbsRequest } from "app/const";

const baseURL = "multiquote/";

const getPlansPath = baseURL + "create_quotation";

export const getPlansRequest = async (data) => {
  const response = await makeSbsRequest({
    path: getPlansPath,
    method: "POST",
    body: JSON.stringify(data),
    headers: { "X-Api-Key": "asdf1234qwerty987654" },
  });
  if (response.status === 200) return response.json();
  else throw new Error("Request failed: " + response.status);
};
