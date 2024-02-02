import { PhoneInput, PhoneInputSimple } from "@/components/ui/phone-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Country,
  Value,
  formatPhoneNumber,
  formatPhoneNumberIntl,
  getCountryCallingCode,
} from "react-phone-number-input";
import tr from "react-phone-number-input/locale/tr";

export default function Variants() {
  const [country, setCountry] = useState<Country>();
  const [phoneNumber, setPhoneNumber] = useState<Value>();

  return (
    <section id="variants" className="max-w-5xl w-full py-8">
      <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Variants
      </h2>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">With country</h3>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6 text-normal">
          The phone input component can be used with a country select dropdown.
        </p>
        <Tabs defaultValue="default" className="w-full mt-4">
          <TabsList className={cn("mb-4 w-full overflow-x-auto h-auto overflow-y-hidden justify-start")}>
            <TabsTrigger value="default">With country</TabsTrigger>
            <TabsTrigger value="without-country">Without country</TabsTrigger>
          </TabsList>
          <TabsContent value="default">
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">Summary</h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInput value={phoneNumber} onChange={setPhoneNumber} />
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                Setting default country
              </h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInput value={phoneNumber} onChange={setPhoneNumber} defaultCountry="TR" />
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                Internationalization
              </h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInput
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  labels={tr}
                  placeholder="Telefon numarası"
                />
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                Force international format
              </h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInput value={phoneNumber} onChange={setPhoneNumber} international defaultCountry="TR" />
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                Force national format
              </h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInput
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  international={false}
                  defaultCountry="TR"
                />
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                initialValueFormat
              </h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInput value={phoneNumber} onChange={setPhoneNumber} initialValueFormat="national" />
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                Formatting value
              </h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <div>
                  <PhoneInput value={phoneNumber} onChange={setPhoneNumber} onCountryChange={setCountry} />
                  <div className="mt-4 text-sm space-y-2">
                    <div>National: {phoneNumber && formatPhoneNumber(phoneNumber)}</div>
                    <div>International: {phoneNumber && formatPhoneNumberIntl(phoneNumber)}</div>
                    <div>Country code: {country && getCountryCallingCode(country)}</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="without-country">
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">Summary</h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInputSimple value={phoneNumber} onChange={setPhoneNumber} />
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                country="TR"
              </h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInputSimple value={phoneNumber} onChange={setPhoneNumber} country="TR" />
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                country="TR" / international
              </h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInputSimple value={phoneNumber} onChange={setPhoneNumber} international country="US" />
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                country="TR" / international / withCountryCallingCode
              </h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInputSimple
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  country="TR"
                  international
                  withCountryCallingCode
                />
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                defaultCountry="TR"
              </h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInputSimple value={phoneNumber} onChange={setPhoneNumber} defaultCountry="TR" />
              </div>
            </div>
            <div className="w-full">
              <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                No country
              </h3>
              <div className="preview flex min-h-[200px] w-full justify-center p-10 items-center mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <PhoneInputSimple value={phoneNumber} onChange={setPhoneNumber} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
