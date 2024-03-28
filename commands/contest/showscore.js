const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('showscore')
		.setDescription('Shows total score'),
	async execute(interaction) {
            var points = require('../../points.json');
            await interaction.reply('**Team Prack:** Jack has ' + points.jackPoints + ' point(s). \n**Team Prake:** Jake has ' + points.jakePoints + ' point(s).');
	},
};