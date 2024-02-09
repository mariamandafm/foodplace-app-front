import { ProgressBar, Step } from "react-step-progress-bar";
import "../assets/css/CartProgressBar.css";

export function CartProgressBar({page}) {
    var stepPercentage = 0
    if (page === "cartPage") {
        stepPercentage = 0;
    } else if (page === "addressPage"){
        stepPercentage = 50;
    } else if (page === "confirmationPage"){
        stepPercentage = 100;
    } else {
        stepPercentage = 0;
    }

    return (
        <ProgressBar percent={stepPercentage}>
            <Step>
                {({ accomplished }) => (
                    <div
                        className={`indexedStep ${accomplished? "accomplished" : null}`}
                    >
                        <i class="icon bi bi-basket2-fill"></i>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                    <div
                        className={`indexedStep ${accomplished? "accomplished" : null}`}
                    >
                        <i class="icon bi bi-house-fill"></i>
                    </div>
                )}
            </Step>
            <Step>
                {({ accomplished }) => (
                    <div
                        className={`indexedStep ${accomplished? "accomplished" : null}`}
                    >
                        <i class="icon bi bi-check-lg"></i>
                    </div>
                )}
            </Step>

        </ProgressBar>
    )
}