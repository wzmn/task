import { Helmet } from "react-helmet-async";
import { FiArrowUpRight } from "react-icons/fi";
import { TbPigMoney } from "react-icons/tb";

function MyAccount() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vxceed - Your Account</title>
      </Helmet>
      <div className="container mx-auto mb-10 px-4">
        <div
          className="min-h-[60vh] flex justify-center items-start flex-col px-10"
          style={{
            backgroundImage: "url(./account.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="text-3xl sm:text-6xl mb-8 font-semibold">
            Your <br />
            Account
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="font-semibold text-2xl mb-4">Points</div>
            <hr className="mb-3" />
            <div className="mb-2 text-xl">Points Available: 12490</div>
            <a href="#" className="underline underline-offset-8 flex items-center">Earn more Points <TbPigMoney className="ml-2" /></a>
          </div>
          <div>
            <div className="font-semibold text-2xl mb-4">Progress</div>
            <hr className="mb-3" />
            <div className="mb-5">Complete tasks to earn points</div>
            <div>
              <ul class="list-disc list-inside">
                <li class="mb-4">
                  Make a Purchase: Earn points for every purchase made on your
                  website or in-store.
                </li>
                <li class="mb-4">
                  Refer a Friend: Receive bonus points for referring friends or
                  family members who make a purchase.
                </li>
                <li class="mb-4">
                  Follow on Social Media: Gain points for following us on social media platforms like Instagram, Facebook, and
                  Twitter.
                </li>
                <li class="mb-4">
                  Share on Social Media: Share posts about your experience on social media to earn extra points.
                </li>
                <li class="mb-4">
                  Write Product Reviews: Earn points for writing reviews of
                  products purchased from your store.
                </li>
                <li class="mb-4">
                  Birthday Bonus: Receive bonus points or a special discount on
                  your birthday.
                </li>
                <li class="mb-4">
                  Engage with Emails: Open and engage with promotional emails to
                  earn points.
                </li>
                <li class="mb-4">
                  Update Profile: Earn points for completing your profile
                  information within the loyalty program.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="font-semibold text-2xl mb-4">Coupons</div>
            <hr className="mb-3" />
            <div>
              <div className="shadow-md rounded-md p-4 mb-5">
                <div className="mb-4">
                  <div className="text-xl font-bold">WELCOME15</div>Offers
                  15% off for new customers.
                </div>
                <div className="text-grey-800 font-semibold flex items-center cursor-pointer">
                  Get Deal <FiArrowUpRight className="ml-2" />
                </div>
              </div>
              <div className="shadow-md rounded-md p-4 mb-5">
                <div className="mb-4">
                  <div className="text-xl font-bold">SAVE10NOW</div>Gives 10%
                  off on all purchases.
                </div>
                <div className="text-grey-800 font-semibold flex items-center cursor-pointer">
                  Get Deal <FiArrowUpRight className="ml-2" />
                </div>
              </div>
              <div className="shadow-md rounded-md p-4 mb-5">
                <div className="mb-4">
                  <div className="text-xl font-bold">15OFFSALE</div>Grants a
                  15% discount on sale items.
                </div>
                <div className="text-grey-800 font-semibold flex items-center cursor-pointer">
                  Get Deal <FiArrowUpRight className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyAccount;
