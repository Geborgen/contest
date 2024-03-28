const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('addpoints')
		.setDescription('Adds points to a user')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('User to add points to')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('points')
                .setDescription('Points to add')
                .setRequired(true))
	    .addStringOption(option =>
	        option.setName('reason')
		        .setDescription('Reason for adding points')
                .setRequired(true))
        .setDefaultMemberPermissions(0),
	async execute(interaction) {
        const points = interaction.options.getInteger('points');
        const user = interaction.options.getUser('user');
        const reason = interaction.options.getString('reason');
        const fs = require('node:fs');
        var totalPoints = require('../../points.json');
        if (user == 358998624295714816) {
            totalPoints.jackPoints += points;
            fs.writeFileSync('points.json', JSON.stringify(totalPoints));
            await interaction.reply('+' + points + ' point(s) for Jack - ' + reason + '\nJack now has a total of ' + totalPoints.jackPoints + ' point(s).');
        } else if (user == 823610583584735262) {
            totalPoints.jakePoints += points;
            fs.writeFileSync('points.json', JSON.stringify(totalPoints));
            await interaction.reply('+' + points + ' point(s) for Jake - ' + reason + '\nJake now has a total of ' + totalPoints.jakePoints + ' point(s).');
        } else
        await interaction.reply('+' + points + ' point(s) for ' + user.username + ' - ' + reason);
	},
};