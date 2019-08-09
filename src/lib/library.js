export const dateFormat = date => {
  const newDate = new Date(date);
  return newDate
    .toUTCString()
    .split(" ")
    .splice(0, 4)
    .join(" ");
};

export const truncate = (elem, limit, after) => {
  if (!elem || !limit) return;

  let content = elem.trim();
  content = content.split(" ").slice(0, limit);
  content = content.join(" ") + (after ? after : "");
  content = linkify(content);
  return (elem = createMarkup(content));
};

export const descriptionMarkup = text => {
  // let content = text.trim();
  let content = linkify(text);
  return (text = createMarkup(content));
};

const linkify = text => {
  const exp = /(\b(https?|ftp|file):\/\/([-A-Z0-9+&@#/%?=~_|!:,.;]*)[-A-Z0-9+&@#/%=~_|])/gi;
  return text.replace(exp, "<a href='$1' target='_blank'>$3</a>");
};

const createMarkup = content => {
  return { __html: content };
};
