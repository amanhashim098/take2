import { AlertTriangle } from "lucide-react";
import SecurityField from "./SecurityField";
import { account } from "../../appwrite-config";
import { useState } from "react";
import { useEffect } from "react";



const Security = () => {
  const [ userdata,setUserdata] = useState({});


  useEffect (()=>{
    fetchUserData()
  },[])

  const fetchUserData = async ()=>{
    try{
    const response = await account.get();
    setUserdata(response)
    console.log(userdata)
    }catch(err){
      console.log(err)
    }
  }



  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-[800px] mx-auto">
        <div className="bg-white shadow-[-12px_14px_6px_3px_rgba(0,0,0,0.25)] border-[3px] border-black p-8">
          <h1 className="text-2xl font-semibold text-[#141414] mb-8">Login and Security</h1>

          <SecurityField label="Name" value={userdata.name} action="Edit" />

          <SecurityField label="Email" value={userdata.email} action="Edit" />

          <SecurityField
            label="Primary mobile number"
            value="+919037770106"
            description="Quickly sign in, easily recover passwords and receive security notifications with this mobile number."
            action="Edit"
          />

          <SecurityField label="Passkey" action="Set up">
            <div className="flex items-center gap-2 mt-1">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <p className="text-sm text-gray-600">
                Sign in the same way you unlock your device by using your face, fingerprint, or PIN.
              </p>
            </div>
          </SecurityField>

          <SecurityField label="Password" value="********" action="Edit" />

          <SecurityField label="2-step verification" value="+919037770106" action="Manage">
            <div className="mt-1">
              <p className="text-sm text-gray-600">Authenticator App - 2 apps enrolled</p>
              <p className="text-sm text-gray-600">
                Enter a code sent to your verification method, in addition to your password.
              </p>
            </div>
          </SecurityField>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
              }}
              className="bg-[#141414] rounded-sm text-white hover:shadow-[-2px_4px_4px_2px_rgba(0,0,0,0.25)] transition-all duration-300 ease-in py-2 px-12"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security

