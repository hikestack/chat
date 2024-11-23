import { AnnotationHandler } from "codehike/code";
import {
	TooltipProvider,
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from "@/components/ui/tooltip";

const tooltipHandler: AnnotationHandler = {
	name: "tooltip",
	Inline: ({ children, annotation }) => {
		const { query, data } = annotation;
		return (
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger className="underline decoration-dashed">
						{children}
					</TooltipTrigger>
					<TooltipContent align="start">
						{data?.children || query}
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		);
	},
};

export { tooltipHandler };