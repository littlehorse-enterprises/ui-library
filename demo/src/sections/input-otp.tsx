import { InputOTP, InputOTPGroup, InputOTPSlot } from "@littlehorse-enterprises/ui";
import { Section } from "../App";

export default function InputOTPSection() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Input OTP</h2>
      <div className="space-y-2">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <p className="text-sm text-gray-500">Enter your 6-digit code</p>
      </div>
    </Section>
  );
} 