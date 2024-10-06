import { initializeTranslationService } from "~/utilities/react-i18next";
import { SampleModuleProps } from "~/modules/SampleModule/types";
import { SamplePage } from "~/pages/SamplePage/SamplePage";

import "~/css/index.scss";

initializeTranslationService();

const SampleModule = ({ sampleString, onButtonClick }: SampleModuleProps) => {
	return (
		<div className="alpha-flex alpha-flex-col alpha-gap-4 alpha-p-4 alpha-text-lg">
			<div>{sampleString}</div>
			<SamplePage />
			<button onClick={onButtonClick}>Go to Beta page</button>
		</div>
	);
};

export default SampleModule;
