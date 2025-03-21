
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useSignIn } from '@clerk/clerk-react';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

export default function Login() {
  const navigate = useNavigate();
  const { isLoaded, signIn, setActive } = useSignIn();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!isLoaded) return;
    
    try {
      const result = await signIn.create({
        identifier: values.email,
        password: values.password,
      });
      
      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        toast({
          title: "Login successful",
          description: "Welcome back to PandemicNet",
        });
        navigate('/');
      } else {
        toast({
          variant: "destructive",
          title: "Error signing in",
          description: "Please check your credentials and try again.",
        });
      }
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Authentication error",
        description: err.errors?.[0]?.message || "Failed to sign in. Please try again.",
      });
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-lg bg-blue-light flex items-center justify-center text-white font-bold text-xl">
              $P
            </div>
          </div>
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to PandemicNet
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Monitor, analyze, and predict pandemic data
          </p>
          
          <div className="mt-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <FormControl>
                          <Input 
                            className="pl-10" 
                            placeholder="you@example.com" 
                            type="email" 
                            {...field} 
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <FormControl>
                          <Input 
                            className="pl-10" 
                            placeholder="Password" 
                            type="password" 
                            {...field} 
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link to="/forgot-password" className="font-medium text-blue-light hover:text-blue-dark">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-light hover:bg-blue-dark"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Sign in 
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </Button>
                
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account?{" "}
                    <Link to="/signup" className="font-medium text-blue-light hover:text-blue-dark">
                      Sign up now
                    </Link>
                  </p>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-light to-blue-dark">
          <div className="flex flex-col justify-center items-center h-full text-white p-12">
            <h1 className="text-4xl font-bold mb-6">PandemicNet Analytics</h1>
            <p className="text-xl max-w-md text-center mb-8">
              Comprehensive pandemic monitoring and prediction platform for healthcare professionals.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-lg">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-2">Real-time Tracking</h3>
                <p className="text-white/80">Monitor pandemic spread with advanced visualization tools</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-2">Data Analysis</h3>
                <p className="text-white/80">Insight-driven analytics to understand pandemic patterns</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-2">Predictive Models</h3>
                <p className="text-white/80">AI-powered forecasting of outbreak trajectories</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold text-lg mb-2">Resource Planning</h3>
                <p className="text-white/80">Optimize healthcare resource allocation during crises</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
