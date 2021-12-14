const api = process.env.REACT_APP_API;

export const getStories = async () => {
  const response = await fetch(`${api}`);

  const data = await response.json();

  return data.reverse();
};
