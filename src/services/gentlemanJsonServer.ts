import { iGentleman } from "../interfaces/iGentleman";

const url = "http://localhost:3356/gentleman";

export const getAllGentleman = (): Promise<Array<iGentleman>> => {
  return fetch(url).then((res) => res.json());
};

export const deleteGentleman = (id: number): Promise<iGentleman> => {
  return fetch(url + `/${id}`, { method: "DELETE" }).then((res) => res.json());
};

export const updateGentleman = (
  id: number,
  update: Partial<iGentleman>
): Promise<iGentleman> => {
  return fetch(url + `/${id}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(update),
  }).then((res) => res.json());
};

export const updateAllGentleman = (
  update: Partial<iGentleman>
): Promise<iGentleman> => {
  return fetch(url, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(update),
  }).then((res) => res.json());
};
