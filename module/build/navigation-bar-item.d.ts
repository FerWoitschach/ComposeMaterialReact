import React from 'react';
export interface NavigationBarItemProps {
    selected: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label?: React.ReactNode;
    enabled?: boolean;
    alwaysShowLabel?: boolean;
}
export declare function NavigationBarItem({ selected, onClick, icon, label, enabled, alwaysShowLabel, }: NavigationBarItemProps): React.JSX.Element;
