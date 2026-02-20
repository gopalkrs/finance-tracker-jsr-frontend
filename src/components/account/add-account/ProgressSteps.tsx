import { Check } from 'lucide-react';

type ProgressStepsProps = {
  currentStep: number;
};

const ProgressSteps = ({currentStep} : ProgressStepsProps) => {


    const steps = [
    { number: 1, title: 'Account Type', description: 'Select account type' },
    { number: 2, title: 'Account Info', description: 'Enter account details' },
    { number: 3, title: 'Verify', description: 'Review and confirm' }
  ];

    

  return (
    <div className="bg-gray-800/30 border-b border-gray-700">
          <div className="max-w-4xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      currentStep > step.number 
                        ? 'bg-emerald-500 text-white' 
                        : currentStep === step.number 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {currentStep > step.number ? <Check className="w-5 h-5" /> : step.number}
                    </div>
                    <div>
                      <p className={`font-semibold ${currentStep >= step.number ? 'text-white' : 'text-gray-500'}`}>
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-500">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-300 ${
                      currentStep > step.number ? 'bg-emerald-500' : 'bg-gray-700'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
  )
}

export default ProgressSteps;