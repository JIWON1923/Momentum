const player = {
    name: "jiwon",
    sayHello: function(otherPersonsName){
        console.log("Hello", otherPersonsName)
    },
};
console.log(player.name)
player.sayHello(player.name)