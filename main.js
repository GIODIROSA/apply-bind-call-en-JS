const user = {
  name: "Marcos",
};

const business = {
  name: "Sebastian",
};

function showInfo(likes, friends) {
  return `${this.name} tiene ${likes} likes y ${friends} amigos`;
}

console.log(showInfo.call(business, 4, 6));
console.log(showInfo.apply(user, [6, 2]));

const newFunction = showInfo.bind(user);

console.log(newFunction(30, 15));
