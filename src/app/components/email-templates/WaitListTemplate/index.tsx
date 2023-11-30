import * as React from "react";

interface WaitListEmailTemplateProps {
  firstName: string;
}

export const WaitListEmailTemplate: React.FC<
  Readonly<WaitListEmailTemplateProps>
> = ({ firstName }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>You have been added to the Waitlist for Gleephoria</p>
  </div>
);
