import OwanbeWebLayout from "@/app/components/WebLayout/OwanbeWebLayout";
import soon from "@/public/faqs.svg";
import Image from "next/image";

function Faqs(): JSX.Element {
  return (
    <OwanbeWebLayout>
      <section className="overflow-hidden">
        <Image
          src={soon}
          alt="Faqs"
          style={{ width: "100%", height: "auto", marginTop: "60px" }}
        />
        <div className="md:container md:mx-auto lg:container lg:mx-auto xl:container xl:mx-auto xxl:container xxl:mx-auto px-5 relative pt-6">
          <div
            style={{
              marginTop: "40px",
              fontFamily: "BricolageGrotesqueMedium",
              lineHeight: "1.8",
              color: "#000",
            }}
          >
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            Welcome to Ostivities Frequently Asked Questions (FAQs) section. 
            Here, you&apos;ll find answers to common questions about our services, policies, and 
            how to make the most of your experience with us. If you have a question that isn&apos;t answered here, 
            please feel free to contact us at <a href="mailto:support@ostivities.com">support@ostivities.com</a>.
            </p>

            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            -------
            </p>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              1. What is Ostivities?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            Ostivities is a platform designed to help users discover, 
            organize, and participate in events and activities. 
            Whether you&apos;re hosting an event, attending one, or just exploring options, 
            Ostivities makes it easy to connect and engage with others.
              
            </p>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              2. How do I create an account?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            To create an account on Ostivities, follow these steps:
              <br />
            </p>
            <ul
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "24px",
                paddingLeft: "20px",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                1. Click on the &quot;Sign Up&quot; button.
              </li>
              <li style={{ marginBottom: "10px" }}>
                2. Fill in the required information, such as your name, email address, and password.
              </li>
              <li style={{ marginBottom: "10px" }}>
                3. Click &quot;Submit&quot; to create your account.
              </li>
              <li style={{ marginBottom: "10px" }}>
                4. You will receive a confirmation email. Follow the instructions to verify your account.
              </li>
            </ul>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              3. What should I do if I forget my password?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            If you forget your password, you can reset it by following these steps:
              <br />
            </p>
            <ul
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "24px",
                paddingLeft: "20px",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                1. Click on the &quot;Sign In&quot; button.
              </li>
              <li style={{ marginBottom: "10px" }}>
                2. Click on the &quot;Forgot Password?&quot; link.
              </li>
              <li style={{ marginBottom: "10px" }}>
                3. Enter the email address associated with your account.
              </li>
              <li style={{ marginBottom: "10px" }}>
                4. Check your email for an OTP number and follow the instructions to reset your password.
              </li>
            </ul>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              4. How do I find events near me?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            To find events near you:
              <br />
            </p>
            <ul
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "24px",
                paddingLeft: "20px",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                1. Sign in to your Ostivities account.
              </li>
              <li style={{ marginBottom: "10px" }}>
                2. Use the search bar on the homepage to enter your location, 
                event category and event name to find events close to your current location.
              </li>
              <li style={{ marginBottom: "10px" }}>
                3. Browse through the list of events, and click on any event to see more details and register.
              </li>
            </ul>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              5. How do I create an event?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            To create an event on Ostivities:
            <br />
            </p>
            <ul
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "24px",
                paddingLeft: "20px",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                1. Sign in to your Ostivities account.
              </li>
              <li style={{ marginBottom: "10px" }}>
                2. Click on the &quot;Create Event&quot; button.
              </li>
              <li style={{ marginBottom: "10px" }}>
                3. Fill in the event details, including the name, date, time, location, and description.
              </li>
              <li style={{ marginBottom: "10px" }}>
                4. Upload any relevant images or promotional materials.
              </li>
              <li style={{ marginBottom: "10px" }}>
                5. Create and set ticket prices, if applicable.
              </li>
              <li style={{ marginBottom: "10px" }}>
                6. Click the &quot;Publish Event&quot; button to make your event live.
              </li>
            </ul>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              6. How can I manage my event registrations?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            To manage your event registrations:
            <br />
            </p>
            <ul
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "24px",
                paddingLeft: "20px",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                1. Sign in to your Ostivities account and navigate to your event dashboard.
              </li>
              <li style={{ marginBottom: "10px" }}>
                2. Click on the &quot;Create Event&quot; button followed by the events created tab.
              </li>
              <li style={{ marginBottom: "10px" }}>
                3. Click on the event you want to manage.
              </li>
              <li style={{ marginBottom: "10px" }}>
                4. View the list of registrants, and use the available tools to send updates, check attendance, and communicate with attendees.
              </li>
            </ul>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              7. Can I get a refund if I can&apos;t attend an event?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            Refunds are handled according to our <a href="/refund-policy">Refund Policy</a>. 
            If you are unable to attend an event and need a refund, please contact us as soon as 
            possible. Refund eligibility depends on factors such as the event&apos;s refund policy, 
            the time of your request, and whether the event has been canceled or rescheduled.
            </p>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              8. How do I contact Ostivities for support?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            If you need help or have questions, you can contact Ostivities support in the following ways:
            <br />
            </p>
            <ul
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "24px",
                paddingLeft: "20px",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                1. Email: <a href="mailto:support@ostivities.com">support@ostivities.com</a>.
              </li>
              <li style={{ marginBottom: "10px" }}>
                2. Chat with us via our social platforms.
              </li>
              <li style={{ marginBottom: "10px" }}>
                3. Click the &quot;Contact us&quot; link on our website and chat with us.
              </li>
            </ul>
            
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              9. How do I update my account information?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            To update your account information:
            <br />
            </p>
            <ul
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "24px",
                paddingLeft: "20px",
              }}
            >
              <li style={{ marginBottom: "10px" }}>
                1. Log in to your Ostivities account.
              </li>
              <li style={{ marginBottom: "10px" }}>
                2. Go to your account settings by clicking on your Settings Tab.
              </li>
              <li style={{ marginBottom: "10px" }}>
                3. Update your personal information, including your name, email, password, and any other details.
              </li>
              <li style={{ marginBottom: "10px" }}>
                4. Save your changes.
              </li>
            </ul>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              10. How do I unsubscribe from newsletters and promotional emails?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            If you wish to stop receiving newsletters and promotional emails,
            Click the &quot;Unsubscribe&quot; link at the bottom of any email you receive from Ostivities.
            </p>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              11. Is my personal information safe with Ostivities?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            Yes, protecting your personal information is a priority for us. 
            Please refer to our <a href="/privacy-policy">Privacy Policy</a>. to learn more about how we collect, use, and safeguard your data.
            </p>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              12. Can I transfer my ticket to someone else?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            Ticket transferability depends on the event organizer&apos;s policies. 
            If ticket transfers are allowed, you can usually transfer your ticket 
            by following the instructions provided in your confirmation email or by 
            contacting the event organizer directly.
            </p>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              13. What payment methods are accepted on Ostivities?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            We accept a variety of payment methods, including major credit cards 
            (Visa, MasterCard), PayPal, Pooler and other digital payment options. 
            The available payment methods will be displayed during the checkout process.
            </p>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#e20000",
                marginBottom: "16px",
              }}
            >
              14. How do I report a problem with an event or another user?
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            If you encounter a problem with an event or another user, 
            please report it to us immediately by contacting <a href="mailto:support@ostivities.com">support@ostivities.com</a>. and 
            provide as much detail as possible so we can investigate and take appropriate action.
            </p>
            
    
            <p style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "4px" }}>
              Ostivities
            </p>
            <p style={{ fontSize: "16px", marginBottom: "4px" }}>
            www.ostivities.com
            </p>
            <p style={{ fontSize: "16px", marginBottom: "4px" }}>
            Lagos, Nigeria  
            </p>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            +234 810 1218 257
            </p>
            
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            -------
            </p>
            <p style={{ fontSize: "16px", marginBottom: "24px" }}>
            We hope these FAQs help you get the most out of your experience with Ostivities. 
            If you have any additional questions or need further assistance, don&apos;t hesitate 
            to reach out to our support team.
            </p>
            <br />
            <br />

          </div>
        </div>
      </section>
    </OwanbeWebLayout>
  );
}

export default Faqs;
