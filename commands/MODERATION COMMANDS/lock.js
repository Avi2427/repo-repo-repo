const Discord = module.require("discord.js");

module.exports = {
    name: "lock",
    category: "MODERATION COMMANDS",
    description: "Locks a Channel"
}
run: async(client, message, args) => {
    if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
        return message.channel.send("You don't have enough Permissions")
    }
    message.channel.overwritePermissions([{
        id: message.guild.id,
        deny: ['SEND_MESSAGES'],
    }, ], );
    const embed = new Discord.MessageEmbed()
        .setTitle("Channel Updates")
        .setDescription(`ðŸ”’ ${message.channel} has been Locked`)
        .setColor(config.color);
    await message.channel.send(embed);
    message.delete();
}