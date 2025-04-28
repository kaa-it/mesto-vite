import React from "react";
import Popup from "./Popup.jsx";
import SuccessIcon from "../assets/success-icon.svg";
import ErrorIcon from "../assets/error-icon.svg";

const ICONS = {
	success: SuccessIcon,
	error: ErrorIcon,
};

export type MessageData = {
	text: string;
	iconType: keyof typeof ICONS;
}

type InfoTooltipProps = {
	onClose: () => void;
	status: MessageData;
}

function InfoTooltip({ onClose, status: { iconType, text } = { iconType: "success", text: "" } }: InfoTooltipProps): React.JSX.Element {
	return (
		<Popup onClose={onClose}>
			<img className='popup__icon' src={ICONS[iconType]} alt={text} />
			<p className='popup__status-message'>{text}</p>
		</Popup>
	);
}

export default InfoTooltip;
