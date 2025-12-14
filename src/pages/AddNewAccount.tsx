import AddAccountForm from "@/components/loggedin/add-account/AddAccountForm";
import AddAccountHeader from "@/components/loggedin/add-account/AddAccountHeader";
import ProgressSteps from "@/components/loggedin/add-account/ProgressSteps";
import Footer from "@/components/shared/Footer";
import { useState } from "react";

const AddNewAccount = () => {
  const [currentStep, setCurrentStep] = useState(1);
 

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <AddAccountHeader />
      <ProgressSteps  currentStep={currentStep}  />
      <AddAccountForm setCurrentStep={setCurrentStep} currentStep={currentStep} />
      <Footer />
    </div>
  );
};

export default AddNewAccount;
