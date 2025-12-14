import { Check, ChevronRight } from "lucide-react";

type NavigationButtonsProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  //formSubmitHandler: () => void;
};

const NavigationButtons = ({ currentStep, setCurrentStep } : NavigationButtonsProps) => {
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-700">
      <button
        type="button"
        onClick={handleBack}
        disabled={currentStep === 1}
        className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Back
      </button>

      {currentStep < 3 ? (
        <button
          type="button"
          onClick={handleNext}
          className="flex items-center space-x-2 px-6 py-3 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-medium"
        >
          <span>Continue</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      ) : (
        <button
        type="submit"
          className="flex items-center space-x-2 px-8 py-3 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-medium shadow-lg"
        >
          <Check className="w-5 h-5" />
          <span>Add Account</span>
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
