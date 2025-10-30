import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-primary/10 to-background py-12 md:py-16">
          <div className="container max-w-4xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="container max-w-4xl px-4">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              
              {/* Overview */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Overview</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. The operator of this website is Mini Bharat Courier & Logistics Service. "We", "us", and "our" are consistent references to Mini Bharat Courier & Logistics Service throughout the site. The Corporate Identification Number (CIN) is <span className="font-semibold text-foreground">U53200TZ2024PTC030847</span>, PAN is <span className="font-semibold text-foreground">AARCM8668E</span>, TAN is <span className="font-semibold text-foreground">CHEM29196G</span>, and GST is <span className="font-semibold text-foreground">33AARCM8668E1ZY</span>. Users are granted access to this website, which comprises all tools, information, and services, by Mini Bharat Courier & Logistics Service. However, their use is contingent on the user accepting all terms, conditions, policies, and notices that are explicitly stated on this page.
                  </p>

                  <p>
                    2. Through your use of our "Service" or by visiting our website and/or making a purchase, you consent to be legally bound by the subsequent terms and conditions ("Terms of Service," "Terms"), which also apply to any additional policies and terms and conditions that are hyperlinked to or referenced herein. These Terms of Service are universally applicable to all individuals utilizing the website, encompassing browser users, vendors, customers, merchants, and content contributors, among others.
                  </p>

                  <p>
                    3. Kindly review the following Terms of Service prior to utilizing or accessing our website. Your use or access to any portion of the site constitutes your agreement to be bound by these Terms of Service. Users who fail to comply with all provisions of this agreement are prohibited from accessing the website or utilizing its services. Upon regard as an offer, acceptance is strictly restricted to the provisions of these Terms of Service.
                  </p>

                  <p>
                    4. Additionally, any newly added tools or features to the existing store shall be governed by the Terms of Service. At any time, the most recent version of the Terms of Service is available for review on this page. We retain the prerogative to modify, alter, or substitute any component of these Terms of Service through the publication of updates and/or alterations on our website. It is your duty to periodically inspect this page for modifications. Your continued access to or use of the website subsequent to the publication of any modifications signifies your acceptance of said changes.
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 1: Terms of the Online Store</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. You affirm that you are the age of majority in your state or province of residence or that you are the age of majority in your state or province of residence and have authorized us to permit any of your minor dependents to use this site by agreeing to these Terms of Service.
                  </p>

                  <p>
                    2. You are prohibited from using our products for any unlawful or unauthorized purpose, and from violating any local laws (including copyright laws) through your use of the Service.
                  </p>

                  <p>
                    3. It is strictly prohibited to transmit any form of malicious code, including worms, viruses, or anything else deleterious.
                  </p>

                  <p>
                    4. Any violation or transgression of these terms will lead to the immediate cessation of the services provided to you.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 2: General Conditions</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. We reserve the right, at any time and for any reason, to deny service to any individual.
                  </p>

                  <p>
                    2. You acknowledge that the transfer of your content (excluding credit card information) may occur in an unencrypted state and involve (a) transmissions across multiple networks and (b) modifications to accommodate and conform to the technical specifications of the devices or networks connecting you. Credit card data is consistently encrypted when being transmitted across networks.
                  </p>

                  <p>
                    3. Without our express written consent, you agree not to reproduce, duplicate, replicate, sell, resell, or exploit any portion of the Service, use of the Service, access to the Service, or any contact on the website through which the service is provided.
                  </p>

                  <p>
                    4. The inclusion of headings in this agreement is merely for convenience and shall not restrict, otherwise affect, or otherwise affect these terms.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 3: Information Accuracy, Completeness, and Timeliness</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. In the event that information provided on this website is inaccurate, incomplete, or out of date, we shall not be liable. The content presented on this website is intended for general information purposes only. It is not recommended to utilize or rely on this material as the exclusive foundation for decision-making, without first consulting primary sources of information that are more precisely, comprehensively, or timely. Utilizing this website's content is entirely at your own peril.
                  </p>

                  <p>
                    2. There may be historical information on this site. Historical information is inherently obsolete and is presented solely for your reference. We retain the prerogative to make alterations to the information presented on this website without being obligated to update any content. You agree that monitoring modifications to our website is your responsibility.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 4: Service and Prices Among Changes</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. Without prior notice, prices for our products are subject to change.
                  </p>

                  <p>
                    2. We reserve the right to modify or discontinue the Service (or any portion or content thereof) at any time and without prior notice.
                  </p>

                  <p>
                    3. We shall not be liable to you or any third party in the event that the Service is modified, discontinued, suspended, or its price changes.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 5: Services or Products</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. There may be instances where specific products or services are accessible solely via the website. There may be limited quantities of these products and services; returns and exchanges are restricted to the terms of our return policy.
                  </p>

                  <p>
                    2. We have made every effort to present the colors and images of our products that appear in the store as precisely as feasible. We cannot guarantee the accuracy of the color display on your computer monitor.
                  </p>

                  <p>
                    3. We reserve the right to restrict the sale of our products or services to any individual, geographic region, or jurisdiction, but we are not required to do so. This privilege may be invoked on an individual case-by-case basis. We retain the prerogative to impose restrictions on the quantities of any goods or services we provide. Product pricing and descriptions are subject to change without prior notice at any time and at our sole discretion. At any time, we reserve the prerogative to discontinue any product. Wherever prohibited, any offer for a product or service on this site is void.
                  </p>

                  <p>
                    4. We do not guarantee that any defects in the Service will be rectified or that the quality of any products, services, information, or other material you purchase or obtain will meet your expectations.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 6: Trueness Regarding Account and Billing Information</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. We reserve the prerogative to decline any order that you proceed with. We reserve the right to restrict or cancel quantities purchased per person, per household, or per order at our sole discretion. Orders placed by or under the same customer account, with the same credit card, and/or at the same billing and shipping address may be subject to these restrictions. We may make an effort to notify you via the e-mail and/or billing address/phone number you provided at the time the order was placed, should we need to modify or cancel the order. We reserve the right to restrict or prohibit orders that appear to have been placed by dealers, resellers, or distributors, in our sole discretion.
                  </p>

                  <p>
                    2. You hereby commit to furnishing up-to-date, comprehensive, and precise purchase and account particulars for every item acquired from our establishment. You agree to ensure that your account and other information, such as credit card numbers, expiration dates, and email addresses, are updated in a timely manner to enable us to complete your transactions and communicate with you as necessary.
                  </p>

                  <p>
                    3. For further information, kindly consult our Returns Policy.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 7: Elective Tools</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. You may be granted access to third-party tools that are not under our supervision, nor do we have any authority or input regarding them.
                  </p>

                  <p>
                    2. You agree and acknowledge that we grant you access to these tools "as is" and "as available," in no way accompanied by any representations, warranties, or conditions, and without endorsing them. We shall not be liable in any way for any consequence or connection with your utilization of third-party tools that are optional.
                  </p>

                  <p>
                    3. Utilization of any optional tools accessible via the website is completely voluntary and at your own risk. Prior to doing so, you should ensure that you have read and agreed to the terms governing the provision of those tools by the appropriate third-party provider.
                  </p>

                  <p>
                    4. Furthermore, it is possible that we will introduce additional services and features via the website in the future, such as the launch of fresh tools and resources. These Terms of Service shall also govern any additional features and/or services that are introduced.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 8: Links to Third Parties</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. Content, products, and services accessible through our platform might incorporate resources provided by external entities.
                  </p>

                  <p>
                    2. These websites may redirect you to third-party, unaffiliated websites via links provided by third parties. Our responsibilities do not include the examination or evaluation of the content or veracity of third-party websites or materials. Furthermore, we do not provide any liability or responsibility for such materials, products, or services provided by third parties.
                  </p>

                  <p>
                    3. Any harm or damages resulting from the purchase or use of products, services, resources, content, or other transactions conducted on third-party websites are beyond our control. It is imperative that you thoroughly examine and comprehend the policies and procedures of the third party prior to proceeding with any transaction. Concerns, complaints, claims, or inquiries concerning products manufactured by a third party should be directed to that entity.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 9: User Comments, Feedback, and Other Submissions</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. You agree that if you send us specific submissions (e.g., contest entries) or creative ideas, suggestions, proposals, plans, or other materials (collectively, "comments"), whether online, via email, postal mail, or otherwise (without our request), we may, at any time, without restriction, edit, copy, publish, distribute, translate, and otherwise use any comments that you forward to us. We have no obligation, neither now nor in the future, to (1) maintain the confidentiality of any comments; (2) compensate for any comments; or (3) provide a response to any comments.
                  </p>

                  <p>
                    2. We reserve the right to monitor, modify, or remove content that violates these Terms of Service or the intellectual property of any third party, is unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene, or otherwise objectionable. However, we are under no obligation to do so.
                  </p>

                  <p>
                    3. You acknowledge and consent that your remarks shall not infringe upon any intellectual property or proprietary right of a third party, such as a trademark, privacy, personality, or copyright. You additionally consent that your remarks shall not comprise any libelous, unlawful, abusive, or obscene material, nor shall they harbor any computer virus or other malicious software that may compromise the functionality of the Service or any affiliated website. It is strictly prohibited to impersonate another user, provide an alias, or engage in any other conduct that could mislead us or third parties regarding the source of your comments. You bear exclusive responsibility for the accuracy of any remarks you provide. We assume no liability and accept no responsibility for any remarks that you or a third party may post.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 10: Personally Identifiable Information</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. The Privacy Statement governs the personal information that you provide when submitting it through the store.
                  </p>
                </div>
              </div>

              {/* Section 11 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 11: Errors, Inaccuracies, and Omissions</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. At times, typographical errors, inaccuracies, or omissions pertaining to product descriptions, pricing, promotions, offers, shipping costs, transit times, and availability may be present on our website or in the Service. Without prior notice (including after you have submitted your order), we reserve the right to rectify any errors, inaccuracies, or omissions, as well as modify or update information or cancel orders if any information in the Service or on any affiliated website is inaccurate at any time.
                  </p>

                  <p>
                    2. Unless required by law, we have no obligation to update, modify, or clarify information in the Service or on any affiliated website, including pricing information. The absence of a specified refresh or update date on the Service or any associated website should not be construed as confirmation that all information has been updated or modified.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 12: Prohibited Applications</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. You may be subject to termination of your access to the Service or any affiliated website if you violate any of the prohibited uses.
                  </p>
                </div>
              </div>

              {/* Section 13 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 13: Limitation of Liability; Disclaimer of Warranties</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. We do not represent, warrant, or guarantee that our service will be utilized without interruption, in a timely manner, securely, or without errors.
                  </p>

                  <p>
                    2. We provide no assurance regarding the accuracy or dependability of the results that may be obtained through the use of the service.
                  </p>

                  <p>
                    3. You consent to our periodic removal of the service for indefinite durations or cancellation of the service at any time, without prior notice.
                  </p>

                  <p>
                    4. You acknowledge that the utilization or incapability to utilize the service is entirely at your own peril. Unless otherwise explicitly stated by us, the service and all products and services delivered to you via the service are provided "as is" and "as available" for your use, without any express or implied representation, warranty, or condition, including all implied warranties or conditions of merchantability, merchantable quality, durability, and non-infringement.
                  </p>

                  <p>
                    5. Mini Bharat Courier & Logistics Service, its directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers, or licensors shall not be held liable in any circumstance for any injury, loss, claim, or direct, indirect, incidental, punitive, special, or consequential damages. This includes, but is not limited to, lost profits, lost revenue, replacement costs, lost data, or any other similar damages. Such damages shall not be based on contract, tort, or any of the above. Because certain states or jurisdictions prohibit the exclusion or limitation of liability for consequential or incidental damages, our liability shall be limited to the greatest extent permitted by law in such states or jurisdictions.
                  </p>
                </div>
              </div>

              {/* Section 14 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 14: Indemnification</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. By doing so, you consent to indemnify, defend, and hold Mini Bharat Courier & Logistics Service harmless. and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns, and employees harmless from any claim or demand made by a third party as a result of or arising from your violation of these Terms of Service or the documents they reference, or your breach of any law or the rights of a third party. Such liability shall extend to reasonable attorneys' fees.
                  </p>
                </div>
              </div>

              {/* Section 15 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 15: Severability</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. Should it be determined that a provision of these Terms of Service is unlawful, void, or unenforceable, that provision shall remain enforceable to the maximum extent permitted by applicable law. The unenforceable portion shall be considered severed from these Terms of Service. However, this determination shall have no bearing on the enforceability and validity of the remaining provisions.
                  </p>
                </div>
              </div>

              {/* Section 16 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 16: Termination</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. For all intents and purposes, the obligations and liabilities of the parties incurred prior to the date of termination shall survive the termination of this agreement.
                  </p>

                  <p>
                    2. These Terms of Service shall remain in force until either you or we terminate them. By ceasing use of our website or notifying us that you no longer wish to use our services, you may at any time terminate these Terms of Service.
                  </p>

                  <p>
                    3. We may terminate this agreement at any time and without notice if, in our sole discretion, you fail to comply with any term or provision of these Terms of Service, or we have reason to suspect that you have done so. You will remain liable for all amounts owed until the date of termination, and we reserve the right to deny you access to our Services (or any portion thereof).
                  </p>
                </div>
              </div>

              {/* Section 17 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 17: The Complete Accord</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. Any right or provision of these Terms of Service that we fail to exercise or enforce shall not be considered a waiver of that right or provision.
                  </p>

                  <p>
                    2. You are hereby informed that these Terms of Service, along with any policies or operating rules we may publish on this site or in relation to The Service, constitute the complete agreement and comprehension between us and you. They take precedence over any previous or current verbal or written agreements, communications, or proposals between us (including, but not limited to, any prior versions of the Terms of Service).
                  </p>

                  <p>
                    3. The party that prepared these Terms of Service shall not be held liable for any ambiguities that may arise from their interpretation.
                  </p>
                </div>
              </div>

              {/* Section 18 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 18: Legal Counsel</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. The provisions of this agreement, as well as any additional contracts through which we furnish you with services, shall be subject to the legal system of India and the jurisdiction of Mumbai, Maharashtra.
                  </p>
                </div>
              </div>

              {/* Section 19 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 19: Alterations to Service Terms</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. At any time, the most recent version of the Terms of Service is available for review on this page.
                  </p>

                  <p>
                    2. We reserve the right to modify, replace, or update any portion of these Terms of Service at our sole discretion by publishing notice of the modifications and updates on our website. It is your duty to periodically inspect our website for modifications. Your continued access to or use of our website or the Service subsequent to the publication of any modifications to these Terms of Service will be considered as your acceptance of those updates.
                  </p>
                </div>
              </div>

              {/* Section 20 */}
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Section 20: Contact Particulars</h2>
                <Separator className="mb-6" />
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    1. For inquiries pertaining to the Terms of Service, kindly contact us at{" "}
                    <a 
                      href="mailto:info@minibharatlogistics.com" 
                      className="text-primary hover:underline font-semibold"
                    >
                      info@minibharatlogistics.com
                    </a>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
