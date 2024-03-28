const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows all commands and uses'),
	async execute(interaction) {
        const helpEmbed = new EmbedBuilder()
            .setColor(0x2e0303)
            .setTitle('Contest Commands')
            .setDescription('/addpoints [user] [points] [reason]\n- Adds points to either Jack or Jake\n- If another user is entered, will display but does not store data\n- Admin only\n\n/removepoints [user] [points] [reason]\n- Removes points from either Jack or Jake\n- If another user is entered, will display but does not store data\n- Admin only\n\n/showscore\n- Shows total score\n- Anyone can use\n\n/ping\n- Returns bot latency\n- Anyone can use\n\n/help\n- Shows this, you fucking idiot\n- Anyone can use');
		await interaction.reply({ embeds: [helpEmbed] });
	},
};