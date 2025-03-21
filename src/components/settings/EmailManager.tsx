
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";

interface EmailData {
  email: string;
  isPrimary: boolean;
  addedAt: string;
}

interface EmailManagerProps {
  emails: EmailData[];
  setEmails: React.Dispatch<React.SetStateAction<EmailData[]>>;
}

const EmailManager: React.FC<EmailManagerProps> = ({ emails, setEmails }) => {
  const { toast } = useToast();
  const [newEmail, setNewEmail] = useState('');
  const [showAddEmailForm, setShowAddEmailForm] = useState(false);
  
  const handleAddEmail = () => {
    if (!newEmail) {
      toast({
        title: "Error",
        description: "Please enter an email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Check for duplicate
    if (emails.some(e => e.email === newEmail)) {
      toast({
        title: "Duplicate email",
        description: "This email is already in your list.",
        variant: "destructive",
      });
      return;
    }
    
    setEmails([...emails, { 
      email: newEmail, 
      isPrimary: false, 
      addedAt: 'just now' 
    }]);
    
    setNewEmail('');
    setShowAddEmailForm(false);
    
    toast({
      title: "Email added",
      description: "Your new email has been added successfully.",
    });
  };
  
  const handleSetPrimaryEmail = (index: number) => {
    const updatedEmails = emails.map((email, i) => ({
      ...email,
      isPrimary: i === index
    }));
    setEmails(updatedEmails);
    
    toast({
      title: "Primary email updated",
      description: `${emails[index].email} is now your primary email.`,
    });
  };
  
  const handleRemoveEmail = (index: number) => {
    // Prevent removing the primary email
    if (emails[index].isPrimary) {
      toast({
        title: "Cannot remove primary email",
        description: "Please set another email as primary first.",
        variant: "destructive",
      });
      return;
    }
    
    // Prevent removing the last email
    if (emails.length <= 1) {
      toast({
        title: "Cannot remove email",
        description: "You must have at least one email address.",
        variant: "destructive",
      });
      return;
    }
    
    const updatedEmails = emails.filter((_, i) => i !== index);
    setEmails(updatedEmails);
    
    toast({
      title: "Email removed",
      description: "The email has been removed from your account.",
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-medium dark:text-white">My email Address</h2>
      
      <div className="space-y-2">
        {emails.map((email, index) => (
          <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md dark:bg-gray-700">
            <Mail size={16} className="text-blue-500 mr-2" />
            <div>
              <p className="text-sm font-medium dark:text-white">{email.email}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{email.addedAt}</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              {email.isPrimary ? (
                <span className="text-xs bg-blue-light/10 text-blue-light px-2 py-1 rounded-full">
                  Primary
                </span>
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleSetPrimaryEmail(index)}
                    className="text-sm text-blue-light hover:text-blue-dark"
                  >
                    Set as Primary
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRemoveEmail(index)}
                    className="text-sm text-red-500 hover:text-red-600"
                  >
                    Remove
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {showAddEmailForm ? (
        <div className="p-4 border rounded-md dark:border-gray-700 dark:bg-gray-800">
          <Label htmlFor="new-email" className="dark:text-gray-300">New Email Address</Label>
          <div className="flex gap-2 mt-2">
            <Input 
              id="new-email" 
              type="email" 
              placeholder="Enter new email address" 
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <Button onClick={handleAddEmail} className="bg-blue-light hover:bg-blue">
              Add
            </Button>
            <Button variant="outline" onClick={() => setShowAddEmailForm(false)} className="dark:border-gray-600 dark:text-gray-300">
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setShowAddEmailForm(true)} 
          className="text-blue-light dark:border-gray-600 dark:text-blue-light"
        >
          + Add Email Address
        </Button>
      )}
    </div>
  );
};

export default EmailManager;
