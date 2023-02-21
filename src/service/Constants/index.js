export const MONTHS = [
	{ id: 1, month: "Январь" },
	{ id: 2, month: "Февраль" },
	{ id: 3, month: "Март" },
	{ id: 4, month: "Апрель" },
	{ id: 5, month: "Май" },
	{ id: 6, month: "Июнь" },
	{ id: 7, month: "Июль" },
	{ id: 8, month: "Август" },
	{ id: 9, month: "Сентябрь" },
	{ id: 10, month: "Октябрь" },
	{ id: 11, month: "Ноябрь" },
	{ id: 12, month: "Декабрь" },
];

export const MONTHS_OPTIONS = [
	{ id: 1, value: "1", label: "Январь" },
	{ id: 2, value: "2", label: "Февраль" },
	{ id: 3, value: "3", label: "Март" },
	{ id: 4, value: "4", label: "Апрель" },
	{ id: 5, value: "5", label: "Май" },
	{ id: 6, value: "6", label: "Июнь" },
	{ id: 7, value: "7", label: "Июль" },
	{ id: 8, value: "8", label: "Август" },
	{ id: 9, value: "9", label: "Сентябрь" },
	{ id: 10, value: "10", label: "Октябрь" },
	{ id: 11, value: "11", label: "Ноябрь" },
	{ id: 12, value: "12", label: "Декабрь" },
];

export const CITYES__OPTIONS = [
	{ id: 1, value: "0", label: "Международный" },
	{ id: 2, value: "3", label: "Андижанская область" },
	{ id: 3, value: "6", label: "Бухарская область" },
	{ id: 4, value: "8", label: "Джизакская область" },
	{ id: 5, value: "10", label: "Кашкадарьинская область" },
	{ id: 6, value: "12", label: "Навоийская область" },
	{ id: 7, value: "14", label: "Наманганская область" },
	{ id: 8, value: "18", label: "Самаркандская область" },
	{ id: 9, value: "22", label: "Сурхандарьинская область" },
	{ id: 10, value: "24", label: "Сырдарьинская область" },
	{ id: 11, value: "26", label: "Тошкент шахри" },
	{ id: 12, value: "30", label: "Ферганская область" },
	{ id: 13, value: "33", label: "Хорезмская область" },
	{ id: 13, value: "33", label: "Хорезмская область" },
	{ id: 13, value: "35", label: "Каракалпакская Республика" },
];


// export const YEARS_OPTIONS = (beginYear = 2022) => {
// 	const currentYear = new Date().getFullYear();
// 	return Array(currentYear - beginYear + 1)
// 		.fill({})
// 		.reduce(
// 			(arr, item, i) => [
// 				...arr,
// 				{
// 					id: beginYear + i,
// 					value: (beginYear + i)?.toString(),
// 					label: `${beginYear + i}-${("йил")}`,
// 				},
// 			],
// 			[],
// 		);
// };