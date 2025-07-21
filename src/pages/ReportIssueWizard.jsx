
import React, { useState } from 'react';
import Step1Upload from '../components/steps/Step1Upload';
import Step2Description from '../components/steps/Step2Description';
import Step3Location from '../components/steps/Step3Location';
import Step4Preview from '../components/steps/Step4Preview';
import Step5Submit from '../components/steps/Step5Submit';

const ReportIssueWizard = () => {
    const[step,setStep]=useState(0);
    const [formData,setFormData]=useState({  // stores all the data collected across steps:
        images:[],
        title:'',
        description:'',
        coords:{ lat: null, lon: null },
        address:'',
    });
   

    const steps = [
     Step1Upload,
     Step2Description,
     Step3Location,
     Step4Preview,
     Step5Submit,
    ];
     const StepComponent = steps[step];
       console.log("🧭 Current step:", step);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-100 p-4">
      <div className="w-full max-w-xl bg-red-300 p-6 rounded-lg shadow">
        <StepComponent
          data={formData}
          setData={setFormData}
          next={() => setStep((prev) => Math.min(prev + 1, steps.length - 1))}
          back={() => setStep((prev) => Math.max(prev - 1, 0))}
          isLast={step === steps.length - 1}
        />
      </div>
    </div>
  )
}

export default ReportIssueWizard
