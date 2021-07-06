import { Linking, ScrollView, StyleSheet } from "react-native";
import { Text, useTheme } from "react-native-elements";

import React from "react";
import { SpotliteContainer } from "components/containers";

const PrivacyPolicyScreen = (): JSX.Element => {
  const { theme } = useTheme();
  return (
    <SpotliteContainer>
      <ScrollView>
        <Text />
        <Text>
          At Spotlite, one of our main priorities is the privacy of our
          visitors. This Privacy Policy document contains types of information
          that is collected and recorded by Spotlite and how we use it.
        </Text>
        <Text />
        <Text>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </Text>
        <Text />
        <Text>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our app witicy was created with h regards to the
          information that they shared and/or collect in Spotlite. This policy
          is not applicable to any information collected offline or via channels
          other than this app.
        </Text>
        <Text />
        <Text h4>Consent</Text>
        <Text />
        <Text>
          By using our app, you hereby consent to our Privacy Policy and agree
          to its terms.
        </Text>
        <Text />
        <Text h4>Information we collect</Text>
        <Text />
        <Text>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
        </Text>
        <Text>
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide.
        </Text>
        <Text>
          When you register for an Account, we may ask for your contact
          information, including items such as name, company name, address,
          email address, and telephone number.
        </Text>
        <Text />
        <Text h4>How we use your information</Text>
        <Text />
        <Text>
          We use the information we collect in various ways, including to:
        </Text>
        <Text />
        <Text> - Provide, operate, and maintain our app</Text>
        <Text> - Improve, personalize, and expand our app</Text>
        <Text> - Understand and analyze how you use our app</Text>
        <Text>
          - Develop new products, services, features, and functionality
        </Text>
        <Text>
          - Communicate with you, either directly or through one of our
          partners, including for customer service, to provide you with updates
          and other information relating to the app, and for marketing and
          promotional purposes
        </Text>
        <Text> - Send you emails</Text>
        <Text> - Find and prevent fraud</Text>
        <Text />
        <Text h4>Log Files</Text>
        <Text />
        <Text>
          Spotlite follows a standard procedure of using log files. These files
          log visitors when they visit websites. All hosting companies do this
          and a part of hosting services' analytics. The information collected
          by log files include internet protocol (IP) addresses, browser type,
          Internet Service Provider (ISP), date and time stamp, referring/exit
          pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the
          information is for analyzing trends, administering the site, tracking
          users' movement on the app, and gathering demographic information.
        </Text>
        <Text />
        <Text h4>Google DoubleClick DART Cookie</Text>
        <Text />
        <Text>
          Google is one of a third-party vendor on our site. It also uses
          cookies, known as DART cookies, to serve ads to our site visitors
          based upon their visit to www.app.com and other sites on the internet.
          However, visitors may choose to decline the use of DART cookies by
          visiting the Google ad and content network Privacy Policy at the
          following URL –
          <Text
            style={styles(theme).link}
            onPress={() =>
              Linking.openURL("https://policies.google.com/technologies/ads")
            }
          >
            https://policies.google.com/technologies/ads
          </Text>
        </Text>
        <Text />
        <Text h4>Our Advertising Partners</Text>
        <Text />
        <Text>
          Some of advertisers on our site may use cookies and web beacons. Our
          advertising partners are listed below. Each of our advertising
          partners has their own Privacy Policy for their policies on user data.
          For easier access, we hyperlinked to their Privacy Policies below.
        </Text>
        <Text>
          {" - "}
          <Text
            style={styles(theme).link}
            onPress={() =>
              Linking.openURL("https://policies.google.com/technologies/ads")
            }
          >
            Google
          </Text>
        </Text>
        <Text />
        <Text h4>Advertising Partners Privacy Policies</Text>
        <Text />
        <Text>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of Spotlite.
        </Text>
        <Text />
        <Text>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on Spotlite, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </Text>
        <Text />
        <Text>
          Note that Spotlite has no access to or control over these cookies that
          are used by third-party advertisers.
        </Text>
        <Text />
        <Text h4>Third Party Privacy Policies</Text>
        <Text />
        <Text>
          Spotlite's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.{" "}
        </Text>
        <Text />
        <Text>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites.
        </Text>
        <Text />
        <Text h4>
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </Text>
        <Text />
        <Text>
          Under the CCPA, among other rights, California consumers have the
          right to:
        </Text>
        <Text>
          Request that a business that collects a consumer's personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers.
        </Text>
        <Text>
          Request that a business delete any personal data about the consumer
          that a business has collected.
        </Text>
        <Text>
          Request that a business that sells a consumer's personal data, not
          sell the consumer's personal data.
        </Text>
        <Text>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </Text>
        <Text />
        <Text h4>GDPR Data Protection Rights</Text>
        <Text />
        <Text>
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
        </Text>
        <Text>
          The right to access – You have the right to request copies of your
          personal data. We may charge you a small fee for this service.
        </Text>
        <Text>
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request that we complete the information you believe is
          incomplete.
        </Text>
        <Text>
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
        </Text>
        <Text>
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </Text>
        <Text>
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
        </Text>
        <Text>
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
        </Text>
        <Text>
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </Text>
        <Text />
        <Text h4>Children's Information</Text>
        <Text />
        <Text>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </Text>
        <Text />
        <Text>
          Spotlite does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our app, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </Text>
        <Text />
      </ScrollView>
    </SpotliteContainer>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    link: {
      color: theme.colors.hyperlink,
    },
  });

export default PrivacyPolicyScreen;
