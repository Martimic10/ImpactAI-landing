import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import {
  COMPANY_NAME,
  LEGAL_CONTACT_EMAIL,
  LEGAL_LAST_UPDATED,
} from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service — TeeUp",
  description:
    "Read the Terms of Service for TeeUp, the social golf competition app for friends, groups, and leaderboards.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated={LEGAL_LAST_UPDATED}>
      <LegalSection title="Agreement to Terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the {COMPANY_NAME}{" "}
          mobile application, website, and related services (collectively, the &quot;Services&quot;)
          operated by {COMPANY_NAME} (&quot;TeeUp,&quot; &quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;).
        </p>
        <p>
          By creating an account, downloading the app, or otherwise using the Services, you agree to
          these Terms and our <Link href="/privacy">Privacy Policy</Link>. If you do not agree, do not use the Services.
        </p>
      </LegalSection>

      <LegalSection title="Eligibility">
        <p>
          You must be at least 13 years old to use the Services. If you are under the age of
          majority in your jurisdiction, you may use the Services only with the consent of a parent
          or legal guardian who agrees to these Terms on your behalf.
        </p>
        <p>
          You represent that the information you provide is accurate and that you have the right to
          use the Services in compliance with applicable laws.
        </p>
      </LegalSection>

      <LegalSection title="Account Registration and Security">
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and
          for all activity that occurs under your account. Notify us promptly at{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a> if you believe your
          account has been compromised.
        </p>
        <p>
          We may suspend or terminate accounts that violate these Terms or that we reasonably
          believe pose a risk to the Services or other users.
        </p>
      </LegalSection>

      <LegalSection title="Use of the Services">
        <p>
          TeeUp is a social golf competition platform. You may use the Services to create or
          join groups, track rounds and scores, participate in challenges, view leaderboards, and
          interact with other golfers as intended by the app.
        </p>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Services for any unlawful, harmful, or fraudulent purpose;</li>
          <li>Harass, abuse, threaten, or impersonate others;</li>
          <li>Submit false scores, manipulate rankings, or otherwise cheat in competitions;</li>
          <li>Attempt to access accounts, data, or systems without authorization;</li>
          <li>Interfere with or disrupt the Services, including by scraping or automated access;</li>
          <li>Upload malware or content that infringes intellectual property or privacy rights;</li>
          <li>Reverse engineer or copy the Services except as permitted by law.</li>
        </ul>
      </LegalSection>

      <LegalSection title="User Content and Competition Data">
        <p>
          You may submit content through the Services, including profile information, scores, group
          activity, and other competition-related data (&quot;User Content&quot;). You retain
          ownership of your User Content, but you grant TeeUp a worldwide, non-exclusive,
          royalty-free license to host, store, reproduce, display, and distribute your User Content
          solely as needed to operate, improve, and promote the Services.
        </p>
        <p>
          You are solely responsible for your User Content and represent that you have the rights
          necessary to share it. Leaderboards, group feeds, and social features may make certain
          information visible to other users according to the app&apos;s design and your settings.
        </p>
      </LegalSection>

      <LegalSection title="Groups, Friends, and Social Features">
        <p>
          The Services may allow you to invite friends, join groups, and participate in shared
          competitions. You are responsible for your interactions with other users. TeeUp does
          not control user conduct and is not responsible for disputes between users, though we
          may remove content or restrict access when we believe it violates these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Beta and Changing Features">
        <p>
          Some features may be offered in beta or may change over time. We may add, modify, or
          remove features at any time. We do not guarantee uninterrupted availability of the
          Services or any particular feature.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual Property">
        <p>
          The Services, including software, design, branding, logos, and content provided by Impact
          Golf, are owned by us or our licensors and are protected by intellectual property laws.
          Except for the limited rights expressly granted in these Terms, no rights are transferred
          to you.
        </p>
      </LegalSection>

      <LegalSection title="Third-Party Services">
        <p>
          The Services may integrate with or link to third-party services, including app stores and
          authentication providers. Your use of third-party services is governed by their terms and
          policies. We are not responsible for third-party services.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimer of Warranties">
        <p>
          THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES
          OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. IMPACT GOLF DOES NOT WARRANT THAT
          THE SERVICES WILL BE ERROR-FREE, SECURE, OR UNINTERRUPTED.
        </p>
        <p>
          Golf involves physical activity and personal judgment. TeeUp does not provide
          professional instruction, medical advice, or course safety guidance. You are responsible
          for your own conduct on and off the course.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, IMPACT GOLF AND ITS OFFICERS, DIRECTORS,
          EMPLOYEES, AND AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING
          FROM YOUR USE OF THE SERVICES.
        </p>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF
          OR RELATING TO THE SERVICES OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT
          YOU PAID US FOR THE SERVICES IN THE TWELVE MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED
          U.S. DOLLARS (US $100).
        </p>
      </LegalSection>

      <LegalSection title="Indemnification">
        <p>
          You agree to indemnify and hold harmless TeeUp from any claims, damages, losses,
          and expenses (including reasonable attorneys&apos; fees) arising from your use of the
          Services, your User Content, or your violation of these Terms or applicable law.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          You may stop using the Services at any time. We may suspend or terminate your access if
          you violate these Terms or if we discontinue the Services. Sections that by their nature
          should survive termination will survive, including intellectual property, disclaimers,
          limitations of liability, and indemnification.
        </p>
      </LegalSection>

      <LegalSection title="Governing Law">
        <p>
          These Terms are governed by the laws of the State of Delaware, United States, without
          regard to conflict-of-law principles, except where mandatory local law requires otherwise.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. When we do, we will revise the &quot;Last
          updated&quot; date above and, where appropriate, provide additional notice in the app or
          by other means. Your continued use of the Services after changes become effective
          constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact Us">
        <p>
          Questions about these Terms? Contact us at{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`}>{LEGAL_CONTACT_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
