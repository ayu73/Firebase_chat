//必要なデータを取得
var database = firebase.database();
let room = "chatlog";
const send = document.getElementById("send");
const name = document.getElementById("name");
const message = document.getElementById("message");
const output = document.getElementById("output");

//送信
send.addEventListener('click', function() {
    var now = new Date();
    database.ref(room).push({
        name: name.value,
        message: message.value,
    });
    message.value="";
    name.value="";
});

//受信
database.ref(room).on("child_added", function(data) {
    const val = data.val();
    const key = data.key;
    let str = "";
    str += '<div class="msg"><div class="get_name">'+val.name+'</div>';
    str += '<div class="get_msg">'+val.message+'</div></div>';
    output.innerHTML += str;
});