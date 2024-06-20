import React from 'react';

export interface SelectBoxProps {
	className?: string;
	OptionArray: any[];
	label?: string;
	name: string;
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
