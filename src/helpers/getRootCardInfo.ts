import { Root, RootCardInfo, RootCardInfoPair } from '../models';

export const getRootCardInfo = (root: Root): RootCardInfo => {
	let info1: string = '';

	let info2: string = '';

	let info3: RootCardInfoPair = {
		key: '',
		value: '',
	};

	let info4: RootCardInfoPair = {
		key: '',
		value: '',
	};

	let info5: RootCardInfoPair = {
		key: '',
		value: '',
	};

	let info6: RootCardInfoPair = {
		key: '',
		value: '',
	};

	let info7: RootCardInfoPair = {
		key: '',
		value: '',
	};

	let info8: RootCardInfoPair = {
		key: '',
		value: '',
	};

	if ('characters' in root) { // Implies Film
		info1 = root.title;
		info2 = `By ${root.producer}`;
		info3 = {
			key: 'Episode ID',
			value: root.episode_id,
		};
		info4 = {
			key: 'Created On',
			value: root.created.split('T')[0],
		};
		info5 = {
			key: 'Release Date',
			value: root.release_date.split('T')[0],
		};
		info6 = {
			key: 'Edited On',
			value: root.edited.split('T')[0],
		};
		info7 = {
			key: 'Director',
			value: root.director,
		};
		info8 = {
			key: '',
			value: '',
		};
	} else if ('birth_year' in root) { // Implies Person
		info1 = root.name;
		info2 = `${root.eye_color} eyes`;
		info3 = {
			key: 'Birth Year',
			value: root.birth_year,
		};
		info4 = {
			key: 'Gender',
			value: root.gender,
		};
		info5 = {
			key: 'Height',
			value: root.height,
		};
		info6 = {
			key: 'Skin Colour',
			value: root.skin_color,
		};
		info7 = {
			key: 'Hair Colour',
			value: root.hair_color,
		};
		info8 = {
			key: 'Mass',
			value: root.mass,
		};
	} else if ('climate' in root) { // Implies Planet
		info1 = root.name;
		info2 = `${root.diameter} in Diameter`;
		info3 = {
			key: 'Climate',
			value: root.climate,
		};
		info4 = {
			key: 'Terrain',
			value: root.terrain,
		};
		info5 = {
			key: 'Population',
			value: root.population,
		};
		info6 = {
			key: 'Gravity',
			value: root.gravity,
		};
		info7 = {
			key: 'Rotation Period',
			value: root.rotation_period,
		};
		info8 = {
			key: 'Orbital Period',
			value: root.orbital_period,
		};
	} else if ('average_height' in root) { // Implies Specie
		info1 = root.name;
		info2 = `${root.classification}`;
		info3 = {
			key: 'Average Height',
			value: root.average_height,
		};
		info4 = {
			key: 'Average Lifespan',
			value: root.average_lifespan,
		};
		info5 = {
			key: 'Language',
			value: root.language,
		};
		info6 = {
			key: 'Eye Colours',
			value: root.eye_colors,
		};
		info7 = {
			key: 'Hair Colours',
			value: root.hair_colors,
		};
		info8 = {
			key: 'Skin Colours',
			value: root.skin_colors,
		};
	} else if ('MGLT' in root) { // Implies Starship
		info1 = root.name;
		info2 = `Model: ${root.model}`;
		info3 = {
			key: 'Cargo Capacity',
			value: root.cargo_capacity,
		};
		info4 = {
			key: 'Crew',
			value: root.crew,
		};
		info5 = {
			key: 'Passangers',
			value: root.passengers,
		};
		info6 = {
			key: 'Class',
			value: root.starship_class,
		};
		info7 = {
			key: 'Cost In Credits',
			value: root.cost_in_credits,
		};
		info8 = {
			key: 'Hyperdrive Rating',
			value: root.hyperdrive_rating,
		};
	} else if ('vehicle_class' in root) { // Implies Vehicle
		info1 = root.name;
		info2 = `Model: ${root.model}`;
		info3 = {
			key: 'Cargo Capacity',
			value: root.cargo_capacity,
		};
		info4 = {
			key: 'Crew',
			value: root.crew,
		};
		info5 = {
			key: 'Passangers',
			value: root.passengers,
		};
		info6 = {
			key: 'Class',
			value: root.vehicle_class,
		};
		info7 = {
			key: 'Cost In Credits',
			value: root.cost_in_credits,
		};
		info8 = {
			key: 'Max Atmosphering speed',
			value: root.max_atmosphering_speed,
		};
	}

	return { info1, info2, info3, info4, info5, info6, info7, info8 };
};
