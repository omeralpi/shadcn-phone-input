import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { StandaloneFormExample } from "./standalone-form-dialog-example";

export function FormInDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Form Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Phone Number Form</DialogTitle>
          <DialogDescription>
            Enter your phone number in the form below.
          </DialogDescription>
        </DialogHeader>
        <StandaloneFormExample />
      </DialogContent>
    </Dialog>
  );
}
