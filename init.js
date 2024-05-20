
const mongoose = require("mongoose");

const Chat = require("./models/chats.js");




 main()
.then (()=>{
    console.log("connection done");
})
.catch((err)=>{
    console.log(err);
})

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}



let allchats = [
    {
        from: "neha",
        to: "priya",
        msg: "send me your exam sheets",
        created_At: new Date()
    },
    {
        from: "alex",
        to: "michael",
        msg: "What time is the meeting tomorrow?",
        created_At: new Date()
    },
    {
        from: "priya",
        to: "neha",
        msg: "Sure, I'll send them to you.",
        created_At: new Date()
    },
    {
        from: "michael",
        to: "alex",
        msg: "It's at 10 AM. Don't forget!",
        created_At: new Date()
    },
    {
        from: "sara",
        to: "john",
        msg: "Did you finish the project proposal?",
        created_At: new Date()
    },
    {
        from: "john",
        to: "sara",
        msg: "Not yet. I'll have it ready by tomorrow.",
        created_At: new Date()
    }
];


 Chat.insertMany(allchats);

