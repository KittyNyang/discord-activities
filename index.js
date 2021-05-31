const client = new (require('discord.js')).Client();
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { Slash } = require('discord-slash-commands');
const slash = new Slash({
	client: client
});
const embed = new MessageEmbed();

slash.on('create', d => {
	console.log(`명령어 실행완료!d: ${JSON.parse(d.config.data).name}`);
});

slash.on('command', async command => {
	if (command.name === 'activities'){
		let channel = client.channels.cache.get(
			command.options.find(m => m.name === 'channel').value
		);
		if (channel.type !== 'voice')
			return command.callback('Channel must be a voice channel.');
		if (command.options.find(m => m.name === 'type').value === 'yt') {
			fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
				method: 'POST',
				body: JSON.stringify({
					max_age: 86400,
					max_uses: 0,
					target_application_id: '755600276941176913',
					target_type: 2,
					temporary: false,
					validate: null
				}),
				headers: {
					Authorization: `Bot ${client.token}`,
					'Content-Type': 'application/json'
				}
			})
				.then(res => res.json())
				.then(invite => {
					embed.setTitle('승인완료!');
					embed.setDescription(
						`성공적으로 **YouTube Together** 를 실행완료 [${
							channel.name
						}](https://discord.gg/${
							invite.code
						})\n> 하이퍼링크를 클릭하여 입장하여주세요!`
					);
					embed.setFooter(
						`인증됨✅ ${command.author.username +
							'#' +
							command.author.discriminator}`
					);
					embed.setColor('#FACC57');
					command.callback({
						embeds: embed
					});
				});
		}
		if (command.options.find(m => m.name === 'type').value === 'pn') {
			fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
				method: 'POST',
				body: JSON.stringify({
					max_age: 86400,
					max_uses: 0,
					target_application_id: '755827207812677713',
					target_type: 2,
					temporary: false,
					validate: null
				}),
				headers: {
					Authorization: `Bot ${client.token}`,
					'Content-Type': 'application/json'
				}
			})
				.then(res => res.json())
				.then(invite => {
					embed.setTitle('승인완료!');
					embed.setDescription(
						`성공적으로 **Poker Night** 를 실행완료 [${
							channel.name
						}](https://discord.gg/${
							invite.code
						})\n> 하이퍼링크를 클릭하여 입장하여주세요!`
					);
					embed.setFooter(
						`인증됨✅ ${command.author.username +
							'#' +
							command.author.discriminator}`
					);
					embed.setColor('#7289DA');
					command.callback({
						embeds: embed
					});
				});
		}
		if (command.options.find(m => m.name === 'type').value === 'bio') {
			fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
				method: 'POST',
				body: JSON.stringify({
					max_age: 86400,
					max_uses: 0,
					target_application_id: '773336526917861400',
					target_type: 2,
					temporary: false,
					validate: null
				}),
				headers: {
					Authorization: `Bot ${client.token}`,
					'Content-Type': 'application/json'
				}
			})
				.then(res => res.json())
				.then(invite => {
					embed.setTitle('승인완료!');
					embed.setDescription(
						`성공적으로 **배트로얄** 을 실행완료 [${
							channel.name
						}](https://discord.gg/${
							invite.code
						})\n> 하이퍼링크를 클릭하여 입장하여주세요!`
					);
					embed.setFooter(
						`인증됨✅ ${command.author.username +
							'#' +
							command.author.discriminator}`
					);
					embed.setColor('#7289DA');
					command.callback({
						embeds: embed
					});
				});
		}
		if (command.options.find(m => m.name === 'type').value === 'fio') {
			fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
				method: 'POST',
				body: JSON.stringify({
					max_age: 86400,
					max_uses: 0,
					target_application_id: '814288819477020702',
					target_type: 2,
					temporary: false,
					validate: null
				}),
				headers: {
					Authorization: `Bot ${client.token}`,
					'Content-Type': 'application/json'
				}
			})
				.then(res => res.json())
				.then(invite => {
					embed.setTitle('승인완료!');
					embed.setDescription(
						`성공적으로 **Fishington.io** 를 실행완료 [${
							channel.name
						}](https://discord.gg/${
							invite.code
						})\n> 하이퍼링크를 클릭하여 입장하여주세요!`
					);
					embed.setFooter(
						`인증됨✅ ${command.author.username +
							'#' +
							command.author.discriminator}`
					);
					embed.setColor('#7289DA');
					command.callback({
						embeds: embed
					});
				});
		}
	}
});

client.on('ready', () => {
	console.log('키티봇 준비완료!');
	slash.create({
		guildOnly: false,
		data: {
			name: 'activities',
			description: '유튜브 투게더 방 만들기.',
			options: [
				{
					name: 'channel',
					description: '원하는 보이스채팅방을 선택해주세요.',
					required: true,
					type: 7
				},
				{
					name: 'type',
					description: '타입을 선택해주세요.',
					required: true,
					type: 3,
					choices: [
						{
							name: 'YouTube Together',
							value: 'yt'
						},
						{
							name: '배트로얄',
							value: 'bio'
						},
						{
							name: '티',
							value: 'yt'
						},
						{
							name: '냥',
							value: 'yt'
						}
					]
				}
			]
		}
	});
});

client.login(process.env.TOKEN);
