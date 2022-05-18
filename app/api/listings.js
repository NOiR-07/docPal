import client from "./client";

const endPoint = "/listings";

const getListings = () => client.get(endPoint);

const addListing = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.Price);
  data.append("categoryId", listing.category);
  data.append("description", listing.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      // uri: image,
      uri: "https://images.pexels.com/photos/8175058/pexels-photo-8175058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    })
  );

  return client.post(endPoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  addListing,
  getListings,
};
