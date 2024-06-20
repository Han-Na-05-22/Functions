import { useState } from 'react';
import { AccordionProps } from './interface';
import * as S from './style';
import SVG from 'react-inlinesvg';

const Accordion = ({
	className,
	accordionList,
	isMultiple = true,
}: AccordionProps) => {
	const [accordions, setAccordions] = useState(accordionList || []);

	const setActiveAccordion = (id: number) => {
		const result = accordions.map((accordion, idx) => {
			if (accordion.id === id) {
				return {
					...accordion,
					isActive: !accordion.isActive,
				};
			}

			return {
				...accordion,
				isActive: isMultiple ? accordion.isActive : false,
			};
		});

		setAccordions(result);
	};

	return (
		<S.AccordionContainer className={className}>
			{accordions.length !== 0 && (
				<ul className="accordion-lists">
					{accordions.map((accordion, idx) => (
						<li
							key={accordion.id}
							className={`accordion-list ${accordion.isActive ? 'active' : ''}`}
						>
							<div
								className="accordion-title-content"
								onClick={() => setActiveAccordion(accordion.id)}
							>
								<strong className="accordion-title">{accordion.title}</strong>
								<SVG src="svg/arrow.svg" className="accordion-icon" />
							</div>
							<p className="accordion-content">{accordion.content}</p>
						</li>
					))}
				</ul>
			)}
		</S.AccordionContainer>
	);
};

export default Accordion;
