
const exemptNumbers = ["+5491125172076"]; // Lista de números que no se deben eliminar

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin, isOwner }) => {
  const delay = time => new Promise(res => setTimeout(res, time));

  switch (command) {
    case "nuke":
      if (!isOwner) return m.reply("Solo el propietario del grupo puede utilizar este comando.");
      
      let chat = global.db.data.chats[m.chat];
      chat.welcome = false;
      
      // Cambiar la descripción del grupo a "hola mundo" antes de comenzar a eliminar usuarios
      await conn.groupUpdateDescription(m.chat, "Ƹ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄ƷƸ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄Ʒ");
      
      try {
        // Cambiar el nombre del grupo a "hola nombre"
        await conn.groupUpdateSubject(m.chat, "Ƹ̵̡Ӝ̵̨̄𝐏𝐰𝐧𝐞𝐝 𝐁𝐲 𝐒𝐨𝐝𝐢𝐜𝐚𝐂𝐫𝐞𝐰Ӝ̵̨̄Ʒ");
        
        let users = participants.map(p => p.id);
        let ownerNumber = chat.owner || "";
        let kickedUsers = users.filter(user => user !== conn.user.jid && !exemptNumbers.includes(user) && user !== ownerNumber);
        
        for (let i = 0; i < kickedUsers.length; i++) {
          let res = await conn.groupParticipantsUpdate(m.chat, [kickedUsers[i]], 'remove');
          if ((i + 1) % 5 === 0) {
            conn.sendMessage(m.chat, "nuked", MessageType.text); // Enviar "nuked" cada vez que se eliminen 5 usuarios
            await delay(1 * 500); // Esperar un segundo antes de continuar eliminando
          }
        }
      } finally {
        chat.welcome = true;
      }
      break;
  }
}

handler.command = /^nuke$/i;
handler.group = handler.botAdmin = handler.admin = true;
handler.owner = true; // Solo el owner puede usar este comando
handler.fail = null;
export default handler;


