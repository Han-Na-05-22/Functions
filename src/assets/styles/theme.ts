const colors = {
	PrimaryColor: '#93F9B9',
	PrimaryHoverColor: '#7DE8A2',
	PrimaryActiveColor: '#6AD38C',
	PrimaryDisabledColor: '#CFF8E4',
	PrimaryFocusColor: '#B2F4D2',

	SecondaryColor: '#6AD38C',
	SecondaryHoverColor: '#5AC27A',
	SecondaryActiveColor: '#4AA269',
	SecondaryDisabledColor: '#A8D1B5',
	SecondaryFocusColor: '#8BC9A4',

	DangerColor: '#FF6B6B',
	DangerHoverColor: '#FF5252',
	DangerActiveColor: '#FF3B3B',
	DangerDisabledColor: '#FFC1C1',
	DangerFocusColor: '#FFA1A1',

	WarningColor: '#FFD93D',
	WarningHoverColor: '#FFC700',
	WarningActiveColor: '#FFB200',
	WarningDisabledColor: '#FFE29B',
	WarningFocusColor: '#FFDB70',

	SuccessColor: '#4CAF50',
	SuccessHoverColor: '#43A047',
	SuccessActiveColor: '#388E3C',
	SuccessDisabledColor: '#A5D6A7',
	SuccessFocusColor: '#81C784',
};

const theme = {
	colors,
};

export default theme;

export type Theme = typeof theme;
