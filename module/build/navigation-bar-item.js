import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function NavigationBarItem({ selected, onClick, icon, label, enabled = true, alwaysShowLabel = true, }) {
    return (_jsxs("button", { onClick: onClick, disabled: !enabled, className: `
				flex flex-col items-center justify-center gap-1 flex-1 h-full relative nbt-none select-none
				${enabled ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-38'}
			`, children: [_jsx("div", { className: `
					flex items-center justify-center px-5 py-1 rounded-full transition-all duration-200
					${selected
                    ? 'bg-[var(--md-sys-color-secondary-container)] text-[var(--md-sys-color-on-secondary-container)]'
                    : 'text-[var(--md-sys-color-on-surface-variant)] hover:bg-[var(--md-sys-color-on-surface-12)]'}
				`, children: icon }), label && (alwaysShowLabel || selected) && (_jsx("span", { className: `
						text-xs font-medium tracking-wide transition-colors duration-200
						${selected
                    ? 'text-[var(--md-sys-color-on-surface)]'
                    : 'text-[var(--md-sys-color-on-surface-variant)]'}
					`, children: label }))] }));
}
