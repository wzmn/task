function Footer() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex py-10 text-sm flex-col md:flex-row">
            <div className="flex-1 mb-10 md:mb-0 pr-2">
              <div className="font-semibold mb-4">DEMAND CHAIN</div>
              <ul>
                <li className="mb-2">XnappSales</li>
                <li className="mb-2">SalesForce</li>
                <li className="mb-2">Demand Chain Execution</li>
                <li className="mb-2">Journey Planning</li>
                <li className="mb-2">Geo coding</li>
                <li className="mb-2">Pricing, Promotions, ROI's</li>
              </ul>
            </div>
            <div className="flex-1 mb-10 md:mb-0 pr-2">
              <div className="font-semibold mb-4">AIRLINE SOLUTIONS</div>
              <ul>
                <li className="mb-2">Airport GSE</li>
                <li className="mb-2">Ground Service Operations</li>
                <li className="mb-2">Premium Airline Passenger Experiences</li>
                <li className="mb-2">GuestConnect</li>
                <li className="mb-2">LimoConnect</li>
                <li className="mb-2">GDS Integration</li>
              </ul>
            </div>
            <div className="flex-1 md:mb-0 pr-2">
              <div className="font-semibold mb-4">MOBILITY</div>
              <ul>
                <li className="mb-2">Real-time tracking</li>
                <li className="mb-2">Comprehensive fleet management</li>
                <li className="mb-2">Mobile workforce</li>
                <li className="mb-2">Xcelsius</li>
                <li className="mb-2">XnappDragon</li>
                <li className="mb-2">Route Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-5">
        <div className="container mx-auto px-4">
          <div className="text-white">
            Copyright © 2024 Vxceed. All Right Reserved.
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
