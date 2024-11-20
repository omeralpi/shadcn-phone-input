import { PhoneInput } from "@/components/ui/phone-input";
import { useState } from "react";
import {
  Country,
  formatPhoneNumber,
  formatPhoneNumberIntl,
  getCountryCallingCode,
} from "react-phone-number-input";
import tr from "react-phone-number-input/locale/tr";

export default function Variants() {
  const [country, setCountry] = useState<Country>();
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <section id="variants" className="w-full max-w-5xl py-8">
      <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        Variants
      </h2>
      <div className="w-full">
        <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
          With country
        </h3>
        <p className="text-normal leading-7 [&:not(:first-child)]:mt-6">
          The phone input component can be used with a country select dropdown.
        </p>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            Summary
          </h3>
          <div className="preview ring-offset-background focus-visible:ring-ring relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <PhoneInput
              value={phoneNumber}
              onChange={setPhoneNumber}
              placeholder="Enter a phone number"
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            Setting default country
          </h3>
          <div className="preview ring-offset-background focus-visible:ring-ring relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <PhoneInput
              value={phoneNumber}
              onChange={setPhoneNumber}
              defaultCountry="TR"
              placeholder="Enter a phone number"
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            Internationalization
          </h3>
          <div className="preview ring-offset-background focus-visible:ring-ring relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
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
          <div className="preview ring-offset-background focus-visible:ring-ring relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <PhoneInput
              value={phoneNumber}
              onChange={setPhoneNumber}
              international
              defaultCountry="TR"
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            Force national format
          </h3>
          <div className="preview ring-offset-background focus-visible:ring-ring relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <PhoneInput
              value={phoneNumber}
              onChange={setPhoneNumber}
              international={false}
              defaultCountry="TR"
              placeholder="Enter a phone number"
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            initialValueFormat
          </h3>
          <div className="preview ring-offset-background focus-visible:ring-ring relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <PhoneInput
              value={phoneNumber}
              onChange={setPhoneNumber}
              initialValueFormat="national"
              placeholder="Enter a phone number"
            />
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
            Formatting value
          </h3>
          <div className="preview ring-offset-background focus-visible:ring-ring relative mt-2 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
            <div>
              <PhoneInput
                value={phoneNumber}
                onChange={setPhoneNumber}
                onCountryChange={setCountry}
                placeholder="Enter a phone number"
              />
              <div className="mt-4 space-y-2 text-sm">
                <div>
                  National: {phoneNumber && formatPhoneNumber(phoneNumber)}
                </div>
                <div>
                  International:{" "}
                  {phoneNumber && formatPhoneNumberIntl(phoneNumber)}
                </div>
                <div>
                  Country code: {country && getCountryCallingCode(country)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
