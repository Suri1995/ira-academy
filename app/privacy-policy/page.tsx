// app/policy/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | IRA Beauty Academy",
  description:
    "Privacy Policy for IRA Beauty Academy describing data collection, cookies, usage, retention, and contact information.",
}

type TocItem = { id: string; label: string }

const toc: TocItem[] = [
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "interpretation-and-definitions", label: "Interpretation and Definitions" },
  { id: "collecting-and-using-your-personal-data", label: "Collecting and Using Your Personal Data" },
  { id: "childrens-privacy", label: "Children's Privacy" },
  { id: "links-to-other-websites", label: "Links to Other Websites" },
  { id: "changes-to-this-privacy-policy", label: "Changes to this Privacy Policy" },
  { id: "contact-us", label: "Contact Us" },
]

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-xl font-semibold tracking-tight">
      {children}
    </h2>
  )
}

function H3({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="scroll-mt-28 text-base font-semibold tracking-tight">
      {children}
    </h3>
  )
}

export default function PolicyPage() {
  return (
    <main className="min-h-screen">
      {/* Page header */}
      <section className="border-b bg-gradient-to-b from-black/[0.03] to-transparent dark:from-white/[0.03]">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <p className="text-sm text-muted-foreground">Legal</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
            Last updated: February 25, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          {/* TOC (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border bg-background p-4">
              <p className="text-sm font-semibold">On this page</p>
              <nav className="mt-3 space-y-1">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy body */}
          <article className="space-y-8">
            <div className="rounded-2xl border bg-background p-6">
              <H2 id="privacy-policy">Privacy Policy</H2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                This Privacy Policy describes Our policies and procedures on the
                collection, use and disclosure of Your information when You use
                the Service and tells You about Your privacy rights and how the
                law protects You.
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                We use Your Personal Data to provide and improve the Service. By
                using the Service, You agree to the collection and use of
                information in accordance with this Privacy Policy.
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-6 space-y-5">
              <H2 id="interpretation-and-definitions">Interpretation and Definitions</H2>

              <div className="space-y-2">
                <H3>Interpretation</H3>
                <p className="text-sm leading-6 text-muted-foreground">
                  The words whose initial letters are capitalized have meanings
                  defined under the following conditions. The following
                  definitions shall have the same meaning regardless of whether
                  they appear in singular or in plural.
                </p>
              </div>

              <div className="space-y-3">
                <H3>Definitions</H3>
                <p className="text-sm leading-6 text-muted-foreground">
                  For the purposes of this Privacy Policy:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Account</span>{" "}
                    means a unique account created for You to access our Service
                    or parts of our Service.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Affiliate</span>{" "}
                    means an entity that controls, is controlled by, or is under
                    common control with a party, where &quot;control&quot; means
                    ownership of 50% or more of the shares, equity interest or
                    other securities entitled to vote for election of directors
                    or other managing authority.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Company</span>{" "}
                    (referred to as either &quot;the Company&quot;, &quot;We&quot;,
                    &quot;Us&quot; or &quot;Our&quot; in this Privacy Policy)
                    refers to IRA Academy, 2nd floor, Rajnigandha complex, 18-97,
                    211, opposite Dadu&apos;s sweets A1563, Chaitanyapuri,
                    Hyderabad, Telangana 500060.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Cookies</span>{" "}
                    are small files that are placed on Your computer, mobile
                    device or any other device by a website, containing the
                    details of Your browsing history on that website among its
                    many uses.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Country</span>{" "}
                    refers to: Telangana, India
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Device</span>{" "}
                    means any device that can access the Service such as a
                    computer, a cell phone or a digital tablet.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Personal Data</span>{" "}
                    (or &quot;Personal Information&quot;) is any information that
                    relates to an identified or identifiable individual.
                  </li>
                  <li>
                    We use &quot;Personal Data&quot; and &quot;Personal Information&quot;
                    interchangeably unless a law uses a specific term.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Service</span>{" "}
                    refers to the Website.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Service Provider</span>{" "}
                    means any natural or legal person who processes the data on
                    behalf of the Company. It refers to third-party companies or
                    individuals employed by the Company to facilitate the
                    Service, to provide the Service on behalf of the Company, to
                    perform services related to the Service or to assist the
                    Company in analyzing how the Service is used.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Usage Data</span>{" "}
                    refers to data collected automatically, either generated by
                    the use of the Service or from the Service infrastructure
                    itself (for example, the duration of a page visit).
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Website</span>{" "}
                    refers to IRA Beauty Academy, accessible from{" "}
                    <a
                      className="underline underline-offset-4 hover:opacity-80"
                      href="https://irabeautyacademy.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      irabeautyacademy.com
                    </a>
                    .
                  </li>
                  <li>
                    <span className="font-medium text-foreground">You</span>{" "}
                    means the individual accessing or using the Service, or the
                    company, or other legal entity on behalf of which such
                    individual is accessing or using the Service, as applicable.
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border bg-background p-6 space-y-6">
              <H2 id="collecting-and-using-your-personal-data">
                Collecting and Using Your Personal Data
              </H2>

              <div className="space-y-2">
                <H3>Types of Data Collected</H3>
              </div>

              <div className="space-y-3">
                <H3>Personal Data</H3>
                <p className="text-sm leading-6 text-muted-foreground">
                  While using Our Service, We may ask You to provide Us with
                  certain personally identifiable information that can be used
                  to contact or identify You. Personally identifiable
                  information may include, but is not limited to:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                </ul>
              </div>

              <div className="space-y-3">
                <H3>Usage Data</H3>
                <p className="text-sm leading-6 text-muted-foreground">
                  Usage Data is collected automatically when using the Service.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Usage Data may include information such as Your Device&apos;s
                  Internet Protocol address (e.g. IP address), browser type,
                  browser version, the pages of our Service that You visit, the
                  time and date of Your visit, the time spent on those pages,
                  unique device identifiers and other diagnostic data.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  When You access the Service by or through a mobile device, We
                  may collect certain information automatically, including, but
                  not limited to, the type of mobile device You use, Your mobile
                  device&apos;s unique ID, the IP address of Your mobile device,
                  Your mobile operating system, the type of mobile Internet
                  browser You use, unique device identifiers and other
                  diagnostic data.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  We may also collect information that Your browser sends
                  whenever You visit Our Service or when You access the Service
                  by or through a mobile device.
                </p>
              </div>

              <div className="space-y-3">
                <H3>Tracking Technologies and Cookies</H3>
                <p className="text-sm leading-6 text-muted-foreground">
                  We use Cookies and similar tracking technologies to track the
                  activity on Our Service and store certain information.
                  Tracking technologies We use include beacons, tags, and
                  scripts to collect and track information and to improve and
                  analyze Our Service. The technologies We use may include:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">
                      Cookies or Browser Cookies.
                    </span>{" "}
                    A cookie is a small file placed on Your Device. You can
                    instruct Your browser to refuse all Cookies or to indicate
                    when a Cookie is being sent. However, if You do not accept
                    Cookies, You may not be able to use some parts of our
                    Service.
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Web Beacons.</span>{" "}
                    Certain sections of our Service and our emails may contain
                    small electronic files known as web beacons (also referred
                    to as clear gifs, pixel tags, and single-pixel gifs) that
                    permit the Company, for example, to count users who have
                    visited those pages or opened an email and for other related
                    website statistics (for example, recording the popularity of
                    a certain section and verifying system and server
                    integrity).
                  </li>
                </ul>

                <p className="text-sm leading-6 text-muted-foreground">
                  Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies.
                  Persistent Cookies remain on Your personal computer or mobile
                  device when You go offline, while Session Cookies are deleted
                  as soon as You close Your web browser.
                </p>

                <p className="text-sm leading-6 text-muted-foreground">
                  Where required by law, we use non-essential cookies (such as
                  analytics, advertising, and remarketing cookies) only with
                  Your consent. You can withdraw or change Your consent at any
                  time using Our cookie preferences tool (if available) or
                  through Your browser/device settings. Withdrawing consent does
                  not affect the lawfulness of processing based on consent
                  before its withdrawal.
                </p>

                <p className="text-sm leading-6 text-muted-foreground">
                  We use both Session and Persistent Cookies for the purposes
                  set out below:
                </p>

                <div className="space-y-4">
                  <div className="rounded-xl border p-4">
                    <p className="text-sm font-semibold">Necessary / Essential Cookies</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Type: Session Cookies
                      <br />
                      Administered by: Us
                      <br />
                      Purpose: These Cookies are essential to provide You with
                      services available through the Website and to enable You
                      to use some of its features. They help to authenticate
                      users and prevent fraudulent use of user accounts. Without
                      these Cookies, the services that You have asked for cannot
                      be provided, and We only use these Cookies to provide You
                      with those services.
                    </p>
                  </div>

                  <div className="rounded-xl border p-4">
                    <p className="text-sm font-semibold">
                      Cookies Policy / Notice Acceptance Cookies
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Type: Persistent Cookies
                      <br />
                      Administered by: Us
                      <br />
                      Purpose: These Cookies identify if users have accepted the
                      use of cookies on the Website.
                    </p>
                  </div>

                  <div className="rounded-xl border p-4">
                    <p className="text-sm font-semibold">Functionality Cookies</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Type: Persistent Cookies
                      <br />
                      Administered by: Us
                      <br />
                      Purpose: These Cookies allow Us to remember choices You
                      make when You use the Website, such as remembering your
                      login details or language preference. The purpose of these
                      Cookies is to provide You with a more personal experience
                      and to avoid You having to re-enter your preferences every
                      time You use the Website.
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-6 text-muted-foreground">
                  For more information about the cookies we use and your choices
                  regarding cookies, please visit our Cookies Policy or the
                  Cookies section of Our Privacy Policy.
                </p>
              </div>

              <div className="space-y-3">
                <H3>Use of Your Personal Data</H3>
                <p className="text-sm leading-6 text-muted-foreground">
                  The Company may use Personal Data for the following purposes:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>
                    To provide and maintain our Service, including to monitor
                    the usage of our Service.
                  </li>
                  <li>
                    To manage Your Account: to manage Your registration as a
                    user of the Service. The Personal Data You provide can give
                    You access to different functionalities of the Service that
                    are available to You as a registered user.
                  </li>
                  <li>
                    For the performance of a contract: the development,
                    compliance and undertaking of the purchase contract for the
                    products, items or services You have purchased or of any
                    other contract with Us through the Service.
                  </li>
                  <li>
                    To contact You: To contact You by email, telephone calls,
                    SMS, or other equivalent forms of electronic communication,
                    such as a mobile application&apos;s push notifications
                    regarding updates or informative communications related to
                    the functionalities, products or contracted services,
                    including the security updates, when necessary or reasonable
                    for their implementation.
                  </li>
                  <li>
                    To provide You with news, special offers, and general
                    information about other goods, services and events which We
                    offer that are similar to those that you have already
                    purchased or inquired about unless You have opted not to
                    receive such information.
                  </li>
                  <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                  <li>
                    For business transfers: We may use Your Personal Data to
                    evaluate or conduct a merger, divestiture, restructuring,
                    reorganization, dissolution, or other sale or transfer of
                    some or all of Our assets, whether as a going concern or as
                    part of bankruptcy, liquidation, or similar proceeding, in
                    which Personal Data held by Us about our Service users is
                    among the assets transferred.
                  </li>
                  <li>
                    For other purposes: We may use Your information for other
                    purposes, such as data analysis, identifying usage trends,
                    determining the effectiveness of our promotional campaigns
                    and to evaluate and improve our Service, products, services,
                    marketing and your experience.
                  </li>
                </ul>

                <p className="text-sm leading-6 text-muted-foreground">
                  We may share Your Personal Data in the following situations:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>
                    With Service Providers: We may share Your Personal Data with
                    Service Providers to monitor and analyze the use of our
                    Service, to contact You.
                  </li>
                  <li>
                    For business transfers: We may share or transfer Your
                    Personal Data in connection with, or during negotiations of,
                    any merger, sale of Company assets, financing, or
                    acquisition of all or a portion of Our business to another
                    company.
                  </li>
                  <li>
                    With Affiliates: We may share Your Personal Data with Our
                    affiliates, in which case we will require those affiliates
                    to honor this Privacy Policy. Affiliates include Our parent
                    company and any other subsidiaries, joint venture partners
                    or other companies that We control or that are under common
                    control with Us.
                  </li>
                  <li>
                    With business partners: We may share Your Personal Data with
                    Our business partners to offer You certain products,
                    services or promotions.
                  </li>
                  <li>
                    With other users: If Our Service offers public areas, when
                    You share Personal Data or otherwise interact in the public
                    areas with other users, such information may be viewed by
                    all users and may be publicly distributed outside.
                  </li>
                  <li>
                    With Your consent: We may disclose Your Personal Data for
                    any other purpose with Your consent.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <H3>Retention of Your Personal Data</H3>
                <p className="text-sm leading-6 text-muted-foreground">
                  The Company will retain Your Personal Data only for as long as
                  is necessary for the purposes set out in this Privacy Policy.
                  We will retain and use Your Personal Data to the extent
                  necessary to comply with our legal obligations (for example,
                  if We are required to retain Your data to comply with
                  applicable laws), resolve disputes, and enforce our legal
                  agreements and policies.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Where possible, We apply shorter retention periods and/or
                  reduce identifiability by deleting, aggregating, or anonymizing
                  data. Unless otherwise stated, the retention periods below are
                  maximum periods (&quot;up to&quot;) and We may delete or anonymize
                  data sooner when it is no longer needed for the relevant
                  purpose. We apply different retention periods to different
                  categories of Personal Data based on the purpose of processing
                  and legal obligations:
                </p>

                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Account Information</span>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>
                        User Accounts: retained for the duration of your account
                        relationship plus up to 24 months after account closure
                        to handle any post-termination issues or resolve disputes.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Customer Support Data</span>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>
                        Support tickets and correspondence: up to 24 months from
                        the date of ticket closure to resolve follow-up inquiries,
                        track service quality, and defend against potential legal claims
                      </li>
                      <li>
                        Chat transcripts: up to 24 months for quality assurance
                        and staff training purposes.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Usage Data</span>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>
                        Website analytics data (cookies, IP addresses, device
                        identifiers): up to 24 months from the date of collection,
                        which allows us to analyze trends while respecting privacy principles.
                      </li>
                      <li>
                        Server logs (IP addresses, access times): up to 24 months
                        for security monitoring and troubleshooting purposes.
                      </li>
                    </ul>
                  </li>
                </ul>

                <p className="text-sm leading-6 text-muted-foreground">
                  Usage Data is retained in accordance with the retention periods
                  described above, and may be retained longer only where necessary
                  for security, fraud prevention, or legal compliance.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  We may retain Personal Data beyond the periods stated above for
                  different reasons:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>Legal obligation: We are required by law to retain specific data (e.g., financial records for tax authorities).</li>
                  <li>Legal claims: Data is necessary to establish, exercise, or defend legal claims.</li>
                  <li>Your explicit request: You ask Us to retain specific information.</li>
                  <li>Technical limitations: Data exists in backup systems that are scheduled for routine deletion.</li>
                </ul>
                <p className="text-sm leading-6 text-muted-foreground">
                  You may request information about how long We will retain Your
                  Personal Data by contacting Us.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  When retention periods expire, We securely delete or anonymize
                  Personal Data according to the following procedures:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>Deletion: Personal Data is removed from Our systems and no longer actively processed.</li>
                  <li>Backup retention: Residual copies may remain in encrypted backups for a limited period consistent with our backup retention schedule and are not restored except where necessary for security, disaster recovery, or legal compliance.</li>
                  <li>Anonymization: In some cases, We convert Personal Data into anonymous statistical data that cannot be linked back to You. This anonymized data may be retained indefinitely for research and analytics.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <H3>Transfer of Your Personal Data</H3>
                <p className="text-sm leading-6 text-muted-foreground">
                  Your information, including Personal Data, is processed at the
                  Company&apos;s operating offices and in any other places where the
                  parties involved in the processing are located. It means that
                  this information may be transferred to — and maintained on —
                  computers located outside of Your state, province, country or
                  other governmental jurisdiction where the data protection laws
                  may differ from those from Your jurisdiction.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Where required by applicable law, We will ensure that international
                  transfers of Your Personal Data are subject to appropriate safeguards
                  and supplementary measures where appropriate.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  The Company will take all steps reasonably necessary to ensure
                  that Your data is treated securely and in accordance with this
                  Privacy Policy and no transfer of Your Personal Data will take
                  place to an organization or a country unless there are adequate
                  controls in place including the security of Your data and other
                  personal information.
                </p>
              </div>

              <div className="space-y-3">
                <H3>Delete Your Personal Data</H3>
                <p className="text-sm leading-6 text-muted-foreground">
                  You have the right to delete or request that We assist in deleting
                  the Personal Data that We have collected about You.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Our Service may give You the ability to delete certain information
                  about You from within the Service.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  You may update, amend, or delete Your information at any time by
                  signing in to Your Account, if you have one, and visiting the
                  account settings section that allows you to manage Your personal
                  information. You may also contact Us to request access to, correct,
                  or delete any Personal Data that You have provided to Us.
                </p>
                <p className="text-sm leading-6 text-muted-foreground">
                  Please note, however, that We may need to retain certain information
                  when we have a legal obligation or lawful basis to do so.
                </p>
              </div>

              <div className="space-y-3">
                <H3>Disclosure of Your Personal Data</H3>

                <div className="space-y-2">
                  <p className="text-sm font-semibold">Business Transactions</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    If the Company is involved in a merger, acquisition or asset sale,
                    Your Personal Data may be transferred. We will provide notice
                    before Your Personal Data is transferred and becomes subject to
                    a different Privacy Policy.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold">Law enforcement</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Under certain circumstances, the Company may be required to
                    disclose Your Personal Data if required to do so by law or in
                    response to valid requests by public authorities (e.g. a court
                    or a government agency).
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold">Other legal requirements</p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    The Company may disclose Your Personal Data in the good faith
                    belief that such action is necessary to:
                  </p>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground">
                    <li>Comply with a legal obligation</li>
                    <li>Protect and defend the rights or property of the Company</li>
                    <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>Protect the personal safety of Users of the Service or the public</li>
                    <li>Protect against legal liability</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <H3>Security of Your Personal Data</H3>
                <p className="text-sm leading-6 text-muted-foreground">
                  The security of Your Personal Data is important to Us, but remember
                  that no method of transmission over the Internet, or method of
                  electronic storage is 100% secure. While We strive to use commercially
                  reasonable means to protect Your Personal Data, We cannot guarantee
                  its absolute security.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border bg-background p-6 space-y-3">
              <H2 id="childrens-privacy">Children&apos;s Privacy</H2>
              <p className="text-sm leading-6 text-muted-foreground">
                Our Service does not address anyone under the age of 16. We do not
                knowingly collect personally identifiable information from anyone
                under the age of 16. If You are a parent or guardian and You are
                aware that Your child has provided Us with Personal Data, please
                contact Us. If We become aware that We have collected Personal Data
                from anyone under the age of 16 without verification of parental
                consent, We take steps to remove that information from Our servers.
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                If We need to rely on consent as a legal basis for processing Your
                information and Your country requires consent from a parent, We may
                require Your parent&apos;s consent before We collect and use that information.
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-6 space-y-3">
              <H2 id="links-to-other-websites">Links to Other Websites</H2>
              <p className="text-sm leading-6 text-muted-foreground">
                Our Service may contain links to other websites that are not operated
                by Us. If You click on a third party link, You will be directed to
                that third party&apos;s site. We strongly advise You to review the
                Privacy Policy of every site You visit.
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                We have no control over and assume no responsibility for the content,
                privacy policies or practices of any third party sites or services.
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-6 space-y-3">
              <H2 id="changes-to-this-privacy-policy">Changes to this Privacy Policy</H2>
              <p className="text-sm leading-6 text-muted-foreground">
                We may update Our Privacy Policy from time to time. We will notify You
                of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                We will let You know via email and/or a prominent notice on Our Service,
                prior to the change becoming effective and update the &quot;Last updated&quot;
                date at the top of this Privacy Policy.
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                You are advised to review this Privacy Policy periodically for any changes.
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-6 space-y-3">
              <H2 id="contact-us">Contact Us</H2>
              <p className="text-sm leading-6 text-muted-foreground">
                If you have any questions about this Privacy Policy, You can contact us:
              </p>
              <ul className="list-disc pl-5 text-sm leading-6 text-muted-foreground">
                <li>
                  By visiting this page on our website:{" "}
                  <Link
                    href="/contact"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    https://irabeautyacademy.com/contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile TOC (bottom) */}
            <div className="lg:hidden rounded-2xl border bg-background p-6">
              <p className="text-sm font-semibold">On this page</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-full border px-3 py-1 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}