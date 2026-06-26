import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import {
  COMPANY_NAME,
  LEGAL_CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — TeeUp",
  description:
    "Learn how TeeUp collects, uses, and protects your information when you use our social golf competition app.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated={LEGAL_LAST_UPDATED}>
      <LegalSection title="Introduction">
        <p>
          {COMPANY_NAME} (&quot;TeeUp,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;) operates a mobile application and related services that help golfers
          play rounds with friends, track scores, complete challenges, and compete on
          leaderboards. This Privacy Policy explains how we collect, use, disclose, and safeguard
          information when you use our app, website, and related services (collectively, the
          &quot;Services&quot;).
        </p>
        <p>
          By using the Services, you agree to the collection and use of information in accordance
          with this Privacy Policy. If you do not agree, please do not use the Services.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong className="text-foreground">Account information:</strong> name, username, email
            address, profile photo, and other details you provide when creating or updating your
            account.
          </li>
          <li>
            <strong className="text-foreground">Golf activity data:</strong> scores, rounds, course
            names, group memberships, challenges, achievements, rankings, and other competition
            data you create or participate in through the app.
          </li>
          <li>
            <strong className="text-foreground">Social and group data:</strong> friend connections,
            group memberships, invitations, messages or activity you share within the app, and
            interactions with other users.
          </li>
          <li>
            <strong className="text-foreground">Device and usage information:</strong> device type,
            operating system, app version, IP address, general location derived from IP, crash
            logs, and how you interact with features of the Services.
          </li>
          <li>
            <strong className="text-foreground">Communications:</strong> information you send when
            you contact support or communicate with us.
          </li>
        </ul>
        <p>
          We may also receive information from third-party sign-in providers if you choose to
          authenticate using those services, subject to their own privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, maintain, and improve the Services;</li>
          <li>Create and manage your account and profile;</li>
          <li>Enable rounds, scoring, challenges, leaderboards, and group competition features;</li>
          <li>Display activity to you and to other users according to your settings and app design;</li>
          <li>Send service-related notices, security alerts, and support messages;</li>
          <li>Monitor usage, troubleshoot issues, and protect against fraud or abuse;</li>
          <li>Comply with legal obligations and enforce our Terms of Service.</li>
        </ul>
      </LegalSection>

      <LegalSection title="How We Share Information">
        <p>We may share information in the following circumstances:</p>
        <ul>
          <li>
            <strong className="text-foreground">With other users:</strong> depending on your
            settings and how you use the app, information such as your name, profile, scores,
            rankings, and group activity may be visible to friends, group members, or other
            participants.
          </li>
          <li>
            <strong className="text-foreground">With service providers:</strong> we work with
            vendors who help us host infrastructure, analytics, customer support, and other
            business operations, subject to contractual confidentiality obligations.
          </li>
          <li>
            <strong className="text-foreground">For legal reasons:</strong> we may disclose
            information if required by law, regulation, legal process, or governmental request, or
            to protect the rights, property, or safety of TeeUp, our users, or others.
          </li>
          <li>
            <strong className="text-foreground">Business transfers:</strong> if we are involved in
            a merger, acquisition, financing, or sale of assets, information may be transferred
            as part of that transaction.
          </li>
        </ul>
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection title="Data Retention">
        <p>
          We retain information for as long as necessary to provide the Services, comply with
          legal obligations, resolve disputes, and enforce our agreements. When information is no
          longer needed, we take reasonable steps to delete or anonymize it.
        </p>
      </LegalSection>

      <LegalSection title="Your Choices and Rights">
        <p>Depending on where you live, you may have rights to:</p>
        <ul>
          <li>Access, correct, or delete certain personal information;</li>
          <li>Object to or restrict certain processing;</li>
          <li>Withdraw consent where processing is based on consent;</li>
          <li>Request a copy of your information in a portable format.</li>
        </ul>
        <p>
          You can update much of your profile information directly in the app. To make other
          requests, contact us at{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>. We may need to
          verify your identity before responding.
        </p>
      </LegalSection>

      <LegalSection title="Children&apos;s Privacy">
        <p>
          The Services are not directed to children under 13, and we do not knowingly collect
          personal information from children under 13. If you believe a child has provided us
          personal information, please contact us and we will take appropriate steps to delete it.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          We use administrative, technical, and organizational measures designed to protect your
          information. However, no method of transmission or storage is completely secure, and we
          cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="International Users">
        <p>
          If you access the Services from outside the United States, your information may be
          processed and stored in the United States or other countries where we or our service
          providers operate. Those countries may have different data protection laws than your
          jurisdiction.
        </p>
      </LegalSection>

      <LegalSection title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the
          &quot;Last updated&quot; date above and, where appropriate, provide additional notice in
          the app or by other means. Your continued use of the Services after changes become
          effective constitutes acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          If you have questions about this Privacy Policy or our privacy practices, contact us at{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
