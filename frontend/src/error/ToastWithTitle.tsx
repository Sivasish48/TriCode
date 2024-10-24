
import { useToast } from "../hooks/use-toast";
import { Button } from "../components/ui/button";

export function ToastWithTitle() {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem. Please try again.",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
