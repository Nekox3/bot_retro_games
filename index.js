const TG = require('telegram-bot-api')
const db = require("./db");
const api = new TG({
    //Token API
    token: "TOKEN"
})

const mp = new TG.GetUpdateMessageProvider()
    api.setMessageProvider(mp)
    var x = 0;
    api.start()
    .then(() => {
        console.log('API is started')
    })
    .catch(console.err)

api.on('update', update => {
    const chat_id = update.message.chat.id
    const user = update.message.from.username;

console.log(update);

//----------------------------------------



//-----------------------------------------
switch(update.message.text){
    
    case "NES":(async()=>{
        let table = update.message.text.toLowerCase();
        let roms = await data_db_games(table);
        //console.log(roms);
        api.sendMessage({
                chat_id: chat_id,
                text: 'Elije tu juego de NES favorito!',
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard:roms
                }
            });
    
    })();
    break;

    case "SNES":(async()=>{
        let table = update.message.text.toLowerCase();
        let roms = await data_db_games(table);
        //console.log(JSON.stringify(roms));
        api.sendMessage({
                chat_id: chat_id,
                text: 'Elije tu juego de SNES favorito!',
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard:roms
                }
            });
    
    })();
    break;

    case "N64":(async()=>{
        let table = update.message.text.toLowerCase();
        let roms = await data_db_games(table);
        //console.log(roms);
        api.sendMessage({
                chat_id: chat_id,
                text: 'Elije tu juego de N64 favorito!',
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard:roms
                }
            });
    
    })();
    break;


    case "GameBoy":(async()=>{
        let table = update.message.text.toLowerCase();
        let roms = await data_db_games(table);
        //console.log(roms);
        api.sendMessage({
                chat_id: chat_id,
                text: 'Elije tu juego de SNES favorito!',
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard:roms
                }
            });
    
    })();
    break;

    case "DS":(async()=>{
        let table = update.message.text.toLowerCase();
        let roms = await data_db_games(table);
        //console.log(roms);
        api.sendMessage({
                chat_id: chat_id,
                text: 'Elije tu juego de SNES favorito!',
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard:roms
                }
            });
    
    })();
    break;

    case "PC":(async()=>{
        let table = update.message.text.toLowerCase();
        let roms = await data_db_games(table);
        //console.log(roms);
        api.sendMessage({
                chat_id: chat_id,
                text: 'Elije tu juego de PC favorito!',
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard:roms
                }
            });
    
    })();
    break;

    default:
    api.sendMessage({
        chat_id: chat_id,
        text: 'Bienvenido '+user+' 🎮!! \n puedes seleccionar entre la categoría de Roms 🕹️👾 \n estan las listas de roms \n solo parar el acortador adfly y listo, tienes tu rom!!',
        parse_mode: 'HTML',
        reply_markup: {
            resize_keyboard:true,
            keyboard: [
                ["SNES","NES","N64","GameBoy","DS"],
                ['EMULADORES'],["PC"]
            ]
        }
    })

    break;
}


})



let data_db_games = async(table)=>{

  
let [rows,fields] = await db.query(`SELECT text, url FROM ${table}`);
let ret=[];

for(var i in rows){
    let data = [];
    data.push({"text":rows[i].text, "url":rows[i].url})
    ret.push(data);
}
//ret.push([{"text":"Más", "callback_data":c}])
//console.log(JSON.stringify(ret));
 

return ret;
}
