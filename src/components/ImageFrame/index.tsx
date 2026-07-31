import { Image } from "lucide-react";
import type React from "react";
import { twMerge } from "tailwind-merge";

type ImageFrameProps = {
	className?: string
	contentClassName?: string
	headerClassName?: string
	children?: React.ReactNode
	title: string
	dotColor?: string
}

export function ImageFrame({ 
	className, 
	contentClassName, 
	headerClassName, 
	dotColor, 
	title, 
	children 
}: ImageFrameProps) {
	return (
		<div className={twMerge("flex flex-col items-center", className)}>
			<header className={twMerge("flex flex-row items-center gap-3 w-full bg-card font-code border-b border-b-border text-secondary py-2 pl-4 rounded-t-xl", headerClassName)}>
				<div
					className={`size-3 ${dotColor ? dotColor : "bg-tertiary"} rounded-full`}
				/>
				<span className="text-xs">{title}</span>
			</header>
			<div className={twMerge("relative h-64 w-48 overflow-hidden [&>img]:block [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>img]:object-top", contentClassName)}>
				{children ? children : <div className="w-full h-full flex items-center justify-center">
					<Image size={30} />
				</div>}

				<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,22,28,0.15)_0%,rgba(20,22,28,0.45)_60%,rgba(232,163,61,0.20)_100%)]" />
			</div>
		</div>
	)
}
