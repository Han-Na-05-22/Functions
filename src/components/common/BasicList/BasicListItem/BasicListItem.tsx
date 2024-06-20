import { BasicListItemProps } from './interface';
import * as S from './style';
import SVG from 'react-inlinesvg';

const BasicListItem = ({
	className,
	id,
	title,
	content,
	iconSrc,
	imgSrc,
}: BasicListItemProps) => {
	return (
		<S.BasicListItemContainer className={className}>
			{(iconSrc || imgSrc) && (
				<div className="left-content">
					{iconSrc ? (
						<SVG src={`svg/${iconSrc}.svg`} className="left-content-icon" />
					) : (
						<img src={`image/${imgSrc}.png`} className="left-content-img"></img>
					)}
				</div>
			)}
			<div className="list-text-container">
				<strong className="list-text-title">{title}</strong>
				<p className="list-text-content">{content}</p>
			</div>
		</S.BasicListItemContainer>
	);
};

export default BasicListItem;
