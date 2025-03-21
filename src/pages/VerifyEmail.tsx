
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSignUp } from '@clerk/clerk-react';
import { useToast } from '@/components/ui/use-toast';
import { Mail, ArrowRight } from 'lucide-react';

export default function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [verificationCode, setVerificationCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Get email from location state or use an empty string
  const email = location.state?.email || '';
  
  if (!email) {
    // If no email was provided, redirect to signup
    React.useEffect(() => {
      navigate('/signup');
    }, [navigate]);
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoaded || !verificationCode) return;
    
    setIsSubmitting(true);
    
    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });
      
      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        toast({
          title: "Email verified successfully",
          description: "Your account is now active.",
        });
        navigate('/');
      } else {
        toast({
          variant: "destructive",
          title: "Verification incomplete",
          description: "Please try again or contact support.",
        });
      }
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Verification failed",
        description: err.errors?.[0]?.message || "Invalid verification code. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendCode = async () => {
    if (!isLoaded) return;
    
    try {
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      toast({
        title: "Verification code resent",
        description: "Please check your email for the new code.",
      });
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Error resending code",
        description: err.errors?.[0]?.message || "Failed to resend verification code.",
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-lg bg-blue-light flex items-center justify-center text-white font-bold text-xl">
                $P
              </div>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Verify your email
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              We've sent a verification code to <br />
              <span className="font-medium text-blue-light">{email}</span>
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="verification-code" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Verification Code
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="verification-code"
                  name="verification-code"
                  type="text"
                  required
                  className="pl-10"
                  placeholder="Enter verification code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                className="w-full bg-blue-light hover:bg-blue-dark"
                disabled={isSubmitting || !verificationCode}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Verify Email
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                )}
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Didn't receive a code?{" "}
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="font-medium text-blue-light hover:text-blue-dark"
                >
                  Resend code
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
      
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-light to-blue-dark">
          <div className="flex flex-col justify-center items-center h-full text-white">
            <svg className="w-32 h-32 mb-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className="text-3xl font-bold mb-4">Almost there!</h1>
            <p className="text-xl text-center max-w-md px-6">
              Verify your email to complete your registration and start using PandemicNet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
