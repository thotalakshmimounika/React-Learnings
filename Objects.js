const user={
    name:"jhon",
    age:40,
    loc:"india"
}

console.log(user.name)
console.log(user["age"])
console.log(user.values())

const user2={
    firstname:"sachin",
    lastname:"tendulkar",
    age:50,
    loc:"mumbai",
    fullname:function(){
        return this.firstname+"--"+this.lastname
    }
}

console.log(user2.fullname())