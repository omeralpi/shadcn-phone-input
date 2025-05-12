import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { StandaloneFormExample } from "./standalone-form-dialog-example";

export function FormInSheetExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Form Sheet</Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-[425px]">
        <SheetHeader>
          <SheetTitle>Phone Number Form</SheetTitle>
          <SheetDescription>
            Enter your phone number in the form below.
          </SheetDescription>
        </SheetHeader>
        <StandaloneFormExample />
      </SheetContent>
    </Sheet>
  );
}
