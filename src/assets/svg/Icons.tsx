import React from 'react';
import { TIcon, TIconNames, TRenderSvg } from './IconNames';

const icons: Record<TIconNames, TRenderSvg> = {
    arBox: ({ width = 40, height = 40, fill = "" }) => (
        <svg
            width={width}
            height={height}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="40" height="40" rx="20" fill="#2A2725" fillOpacity="0.5" />
            <path
                d="M27.0833 16.0648L20 20M20 20L12.9166 16.0648M20 20L20 27.9167M21.6667 27.4074L20.6475 27.9736C20.4112 28.1049 20.293 28.1705 20.1679 28.1963C20.0571 28.2191 19.9429 28.2191 19.8321 28.1963C19.707 28.1705 19.5888 28.1049 19.3525 27.9736L13.1858 24.5477C12.9362 24.409 12.8114 24.3397 12.7205 24.241C12.6401 24.1538 12.5793 24.0504 12.5421 23.9378C12.5 23.8104 12.5 23.6677 12.5 23.3821V16.6179C12.5 16.3323 12.5 16.1896 12.5421 16.0622C12.5793 15.9496 12.6401 15.8462 12.7205 15.7589C12.8114 15.6603 12.9362 15.591 13.1858 15.4523L19.3525 12.0264C19.5888 11.8951 19.707 11.8294 19.8321 11.8037C19.9429 11.7809 20.0571 11.7809 20.1679 11.8037C20.293 11.8294 20.4112 11.8951 20.6475 12.0264L26.8142 15.4523C27.0638 15.591 27.1886 15.6603 27.2795 15.7589C27.3599 15.8462 27.4207 15.9496 27.4579 16.0622C27.5 16.1896 27.5 16.3323 27.5 16.6179L27.5 20.4167M16.25 13.75L23.75 17.9167M25.8333 27.5V22.5M23.3333 25H28.3333"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round" />
        </svg>
    ),
    '': function (args: TIcon): JSX.Element {
        throw new Error('Function not implemented.');
    }
};

const Icon = (props: TIcon & { name: TIconNames }) =>
  icons[props.name]?.(props) ?? null;
export default Icon;