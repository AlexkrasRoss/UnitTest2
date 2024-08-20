import { logo,levelHealth } from '../test_02';

		logo.forEach(item => {
			it(
				`Имя: ${item.name} Уровень жизни: ${item.health}`,
				() => {
					expect(levelHealth(logo[0])).toEqual('healthy');
					expect(levelHealth(logo[1])).toEqual('wounded');
					expect(levelHealth(logo[2])).toEqual('critical');
				},
			);
		});

