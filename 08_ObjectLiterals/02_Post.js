let Post={
    userName:"@DurgeshwariSahu",
    content:"#MY_FIRST_POST_ON_TWITTER",
    Likes:100,
    repost:2,
    tags:8,
};
console.log(Post);

// to access any particular key

console.log(Post["userName"]);
// OR
console.log(Post.Likes);

//change of value
Post.userName="@sheryasahu505";
console.log(Post.userName);

// Adding New Value
Post.gender="Female";
console.log(Post.gender);
console.log(Post);
