import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Vxceed Loyalty Program</title>
        </Helmet>
        <div className="container mx-auto mb-10 px-4">
          <div className="min-h-[80vh] bg-gray-100 flex justify-center items-center flex-col px-10 text-center">
            <div className="text-3xl text-center mb-8 font-semibold">
              Join VXCEED's Exclusive Loyalty Program Today!
            </div>
            <div className="max-w-[550px] text-xl leading-relaxed">
              Embark on an exciting journey with VXCEED and unlock a world of
              rewards, perks, and exclusive benefits! Become a member of our
              loyalty program today and step into the realm of Blumetopia, where
              your loyalty is cherished and rewarded.
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="mb-10 text-3xl font-semibold text-center">
            As a valued member, you'll enjoy:
          </div>
          <div className="flex items-center mb-10 flex-col md:flex-row">
            <div className="mb-8 text-xl md:pr-32 leading-relaxed">
              <b>Reward Points:</b> Earn reward points with every purchase,
              tailored to the amount spent by the customer. The more you spend,
              the more points you accrue, bringing you closer to fantastic rewards
              and experiences!
            </div>
            <div
              className="h-96 md:min-w-96 rounded-lg w-full"
              style={{
                backgroundImage: "url(./points.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
          <hr className="mb-5 md:hidden" />
          <div className="flex items-center mb-10 flex-col-reverse md:flex-row">
            <div
              className="h-96 md:min-w-96 rounded-lg w-full"
              style={{
                backgroundImage: "url(./loyalty.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
            <div className="mb-8 text-xl md:pl-32 leading-relaxed">
              <b>Loyalty Program:</b> Engage in a series of specific tasks curated
              to enhance your loyalty journey. As you complete these tasks, your
              tier within the loyalty program increases, unlocking even more
              exciting rewards points and benefits along the way!
            </div>
          </div>
          <hr className="mb-5 md:hidden" />
          <div className="flex items-center mb-20 flex-col md:flex-row">
            <div className="mb-8 text-xl md:pr-32 leading-relaxed">
              <span className="font-bold">Coupons:</span> Enjoy exclusive coupons
              that can be redeemed towards your next purchase on our website.
              These coupons are our way of expressing gratitude for your continued
              support and dedication to VXCEED.
            </div>
            <div
              className="h-96 md:min-w-96 rounded-lg w-full"
              style={{
                backgroundImage: "url(./coupon.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            ></div>
          </div>
          <div className="mb-8 font-semibold text-xl">
            Join VXCEED's loyalty program today and indulge in a world of rewards,
            exclusive benefits, and unforgettable experiences. Your journey to
            Blumetopia awaits – sign up now and let the rewards begin!
          </div>
          <div className="mb-8 text-xl">
            Sign up now at VXCEED Loyalty Program and elevate your VXCEED
            experience to new heights!
          </div>
        </div>
      </>
    );
  }

  export default Home;