import React from 'react';

export interface NavigationBarItemProps {
	selected: boolean;
	onClick: () => void;
	icon: React.ReactNode;
	label?: React.ReactNode;
	enabled?: boolean;
	alwaysShowLabel?: boolean;
}

export function NavigationBarItem({
	selected,
	onClick,
	icon,
	label,
	enabled = true,
	alwaysShowLabel = true,
}: NavigationBarItemProps) {
	return (
		<button
			onClick={onClick}
			disabled={!enabled}
			className={`
				flex flex-col items-center justify-center gap-1 flex-1 h-full relative nbt-none select-none
				${enabled ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-38'}
			`}
		>
			<div
				className={`
					flex items-center justify-center px-5 py-1 rounded-full transition-all duration-200
					${selected
						? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'
						: 'text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-on-surface-12)]'}
				`}
			>
				{icon}
			</div>

			{label && (alwaysShowLabel || selected) && (
				<span
					className={`
						text-xs font-medium tracking-wide transition-colors duration-200
						${selected
							? 'text-[var(--md-sys-color-on-surface)]'
							: 'text-[var(--md-sys-color-on-surface-variant)]'}
					`}
				>
					{label}
				</span>
			)}
		</button>
	);
}
