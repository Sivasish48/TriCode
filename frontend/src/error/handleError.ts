// handleError.ts
export const handleError = (error: any, toast: Function) => {


  // Trigger the toast notification
  toast({
    title: "Uh oh! Something went wrong.",
    description: "There was a problem. Please try again.",
  });
};
