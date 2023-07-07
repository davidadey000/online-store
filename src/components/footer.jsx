import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <>
      {isMobile ? (
        <div className="footer--mobile p-3 bg-gray-800">
          <div className="footer__bottom--mobile gap-x-2">
            <a href="" className="footer__main-link text-[0.65rem] p-2 ">
              HELP CENTER
            </a>
            <a href="" className="footer__main-link text-[0.65rem] p-2 ">
              CONTACT US
            </a>
            <a href="" className="footer__main-link text-[0.65rem] p-2 ">
              TERMS & CONDITIONS
            </a>
            <a href="" className="footer__main-link text-[0.65rem] p-2 ">
              PRIVACY NOTICE
            </a>
            <a href="" className="footer__main-link text-[0.65rem] p-2 ">
              COOKIE NOTICE
            </a>
            <a href="" className="footer__main-link text-[0.65rem] p-2 ">
              BECOME A SELLER
            </a>
            <a href="" className="footer__main-link text-[0.65rem] p-2 ">
              REPORT A PRODUCT
            </a>
          </div>
        </div>
      ) : (
        <div className="lg-footer">
          <div className="lg-footer__top">
            <div className="lg-footer__top-left"></div>
            <div className="lg-footer__top-middle">
              <p className="lg-footer__top-middle-text lg-footer__top-middle-text--large">
                NEW TO STORE?
              </p>
              <p className="lg-footer__top-middle-text lg-footer__top-middle-text--small">
                Subscribe to our newsletter to get updates on our latest offers!
              </p>
              <div className="lg-footer__top-middle-form">
                <input
                  type="text"
                  className="lg-footer__input"
                  placeholder="Enter E-mail Address"
                />
                <button className="lg-footer__btn">Male</button>
                <button className="lg-footer__btn">female</button>
              </div>
            </div>

            <div className="lg-footer__top-right">
              <p className="lg-footer__top-middle-text lg-footer__top-middle-text--large">
                DOWNLOAD STORE FREE APP
              </p>
              <p className="lg-footer__top-middle-text lg-footer__top-middle-text--small">
                Get access to exclusive offers.
              </p>
              <div className="lg-footer__top-middle-form">
                <button className="lg-footer__top-right__btn text-white">
                  Male
                </button>
                <button className="lg-footer__top-right__btn text-white">
                  female
                </button>
              </div>
            </div>
          </div>
          <div className="lg-footer__bottom">
            <div className="lg-footer__bottom__card">
              <h5 className="lg-footer__bottom__title text-sm font-semibold">
                LET US HELP YOU
              </h5>
              <a href="" className="lg-footer__bottom__link">
                Help Center
              </a>
              <a href="" className="lg-footer__bottom__link">
                Contact Us
              </a>
              <a href="" className="lg-footer__bottom__link">
                How to shop on Store?
              </a>
              <a href="" className="lg-footer__bottom__link">
                Delivery options and timelines
              </a>
              <a href="" className="lg-footer__bottom__link">
                How to return a product on Store?
              </a>
              <a href="" className="lg-footer__bottom__link">
                Corporate and bulk purchases
              </a>
              <a href="" className="lg-footer__bottom__link">
                Report a Product
              </a>
              <a href="" className="lg-footer__bottom__link">
                Ship your package anywhere in Nigeria
              </a>
              <a href="" className="lg-footer__bottom__link">
                Dispute Resolution Policy
              </a>
              <a href="" className="lg-footer__bottom__link">
                Returns and Refunds Policy
              </a>
            </div>

            <div className="lg-footer__bottom__card">
              <h5 className="lg-footer__bottom__title text-sm font-semibold">
                ABOUT STORE
              </h5>
              <a href="" className="lg-footer__bottom__link">
                About us
              </a>
              <a href="" className="lg-footer__bottom__link">
                Store careers
              </a>
              <a href="" className="lg-footer__bottom__link">
                Store Express
              </a>
              <a href="" className="lg-footer__bottom__link">
                Terms and Conditions
              </a>
              <a href="" className="lg-footer__bottom__link">
                Privacy Notice
              </a>
              <a href="" className="lg-footer__bottom__link">
                Cookie Notice
              </a>
              <a href="" className="lg-footer__bottom__link">
                Store Global
              </a>
              <a href="" className="lg-footer__bottom__link">
                Official Stores
              </a>
              <a href="" className="lg-footer__bottom__link">
                Flash Sales
              </a>
            </div>

            <div className="lg-footer__bottom__card">
              <h5 className="lg-footer__bottom__title text-sm font-semibold">
                MAKE MONEY WITH STORE
              </h5>
              <a href="" className="lg-footer__bottom__link">
                Sell on Store
              </a>
              <a href="" className="lg-footer__bottom__link">
                Become a Sales Consultant
              </a>
              <a href="" className="lg-footer__bottom__link">
                Become a Logistics Service Partner
              </a>
              <a href="" className="lg-footer__bottom__link">
                Join the Store DA Academy
              </a>
              <a href="" className="lg-footer__bottom__link">
                Join the Store KOL Program
              </a>
            </div>

            <div className="lg-footer__bottom__card">
              <h5 className="lg-footer__bottom__title text-sm font-semibold">
                STORE INTERNATIONAL
              </h5>
              <a
                href="https://www.store.dz/"
                className="lg-footer__bottom__link"
              >
                Algeria
              </a>
              <a
                href="https://www.store.com.eg/"
                className="lg-footer__bottom__link"
              >
                Egypt
              </a>
              <a
                href="https://www.store.com.gh/"
                className="lg-footer__bottom__link"
              >
                Ghana
              </a>
              <a
                href="https://www.store.ci/"
                className="lg-footer__bottom__link"
              >
                Ivory Coast
              </a>
              <a
                href="https://www.store.co.ke/"
                className="lg-footer__bottom__link"
              >
                Kenya
              </a>
              <a
                href="https://www.store.ma/"
                className="lg-footer__bottom__link"
              >
                Morocco
              </a>
              <a
                href="https://www.store.sn/"
                className="lg-footer__bottom__link"
              >
                Senegal
              </a>
              <a
                href="https://www.store.tn/"
                className="lg-footer__bottom__link"
              >
                Tunisia
              </a>
              <a
                href="https://www.store.ug/"
                className="lg-footer__bottom__link"
              >
                Uganda
              </a>
              <a
                href="https://www.zando.co.za/"
                className="lg-footer__bottom__link"
              >
                Zando
              </a>
            </div>

            <div className="lg-footer__bottom__card">
              <h5 className="lg-footer__bottom__title text-sm font-semibold">
                JOIN US ON
              </h5>
              {/* <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a> */}
            </div>
            <div className="lg-footer__bottom__card">
              <h5 className="lg-footer__bottom__title text-sm font-semibold">
                PAYMENT METHODS & DELIVERY PARTNERS
              </h5>
              {/* <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a>
              <a href="" className="lg-footer__bottom__link">
                item link
              </a> */}
            </div>
          </div>

          <hr className="lg-footer__hr" />
        </div>
      )}
    </>
  );
};

export default Footer;
