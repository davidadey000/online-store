import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <>
      {isMobile ? (
        <MobileFooter />
      ) : (
        <DesktopFooter />
      )}
    </>
  );
};

const MobileFooter = () => (
  <div className="footer--mobile p-3 bg-gray-800">
    <div className="footer__bottom--mobile gap-x-2">
      {mobileLinks.map((link, index) => (
        <FooterLink key={index} href={link.href}>
          {link.label}
        </FooterLink>
      ))}
    </div>
  </div>
);

const DesktopFooter = () => (
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
      {footerCards.map((card, index) => (
        <FooterCard key={index} title={card.title} links={card.links} />
      ))}
    </div>
    <hr className="lg-footer__hr" />
  </div>
);

const FooterCard = ({ title, links }) => (
  <div className="lg-footer__bottom__card">
    <h5 className="lg-footer__bottom__title text-sm font-semibold">
      {title}
    </h5>
    {links.map((link, index) => (
      <FooterLink key={index} href={link.href}>
        {link.label}
      </FooterLink>
    ))}
  </div>
);

const FooterLink = ({ href, children }) => (
  <Link to={`/${href}`} className="lg-footer__bottom__link">
    {children}
  </Link>
);

const formatHref = (label) => {
  return label.toLowerCase().replace(/\s+/g, '-');
};

const mobileLinks = [
  { label: 'HELP CENTER', href: 'help-center' },
  { label: 'CONTACT US', href: 'contact-us' },
  { label: 'TERMS & CONDITIONS', href: 'terms' },
  { label: 'PRIVACY NOTICE', href: 'privacy-notice' },
  { label: 'COOKIE NOTICE', href: 'cookie notice' },
  { label: 'BECOME A SELLER', href: 'become-seller' },
  { label: 'REPORT A PRODUCT', href: 'report-product' },
];

const footerCards = [
  {
    title: 'LET US HELP YOU',
    links: [
      { label: 'Help Center', href: formatHref('Help Center') },
      { label: 'Contact Us', href: formatHref('Contact Us') },
      { label: 'How to shop on Store?', href: formatHref('How to shop on Store?') },
      { label: 'Delivery options and timelines', href: formatHref('Delivery options and timelines') },
      { label: 'How to return a product on Store?', href: formatHref('How to return a product on Store?') },
      { label: 'Corporate and bulk purchases', href: formatHref('Corporate and bulk purchases') },
      { label: 'Report a Product', href: formatHref('Report a Product') },
      { label: 'Ship your package anywhere in Nigeria', href: formatHref('Ship your package anywhere in Nigeria') },
      { label: 'Dispute Resolution Policy', href: formatHref('Dispute Resolution Policy') },
      { label: 'Returns and Refunds Policy', href: formatHref('Returns and Refunds Policy') },
    ],
  },
  {
    title: 'ABOUT STORE',
    links: [
      { label: 'About us', href: formatHref('About us') },
      { label: 'Store careers', href: formatHref('Store careers') },
      { label: 'Store Express', href: formatHref('Store Express') },
      { label: 'Terms and Conditions', href: formatHref('Terms and Conditions') },
      { label: 'Privacy Notice', href: formatHref('Privacy Notice') },
      { label: 'Cookie Notice', href: formatHref('Cookie Notice') },
      { label: 'Store Global', href: formatHref('Store Global') },
      { label: 'Official Stores', href: formatHref('Official Stores') },
      { label: 'Flash Sales', href: formatHref('Flash Sales') },
    ],
  },
  {
    title: 'MAKE MONEY WITH STORE',
    links: [
      { label: 'Sell on Store', href: formatHref('Sell on Store') },
      { label: 'Become a Sales Consultant', href: formatHref('Become a Sales Consultant') },
      { label: 'Become a Logistics Service Partner', href: formatHref('Become a Logistics Service Partner') },
      { label: 'Join the Store DA Academy', href: formatHref('Join the Store DA Academy') },
      { label: 'Join the Store KOL Program', href: formatHref('Join the Store KOL Program') },
    ],
  },
  {
    title: 'STORE INTERNATIONAL',
    links: [
      { label: 'Algeria', href: 'https://www.store.dz/' },
      { label: 'Egypt', href: 'https://www.store.com.eg/' },
      { label: 'Ghana', href: 'https://www.store.com.gh/' },
      { label: 'Ivory Coast', href: 'https://www.store.ci/' },
      { label: 'Kenya', href: 'https://www.store.co.ke/' },
      { label: 'Morocco', href: 'https://www.store.ma/' },
      { label: 'Senegal', href: 'https://www.store.sn/' },
      { label: 'Tunisia', href: 'https://www.store.tn/' },
      { label: 'Uganda', href: 'https://www.store.ug/' },
      { label: 'Zando', href: 'https://www.zando.co.za/' },
    ],
  },
  {
    title: 'JOIN US ON',
    links: [
      // Add your social media links here
    ],
  },
  {
    title: 'PAYMENT METHODS & DELIVERY PARTNERS',
    links: [
      // Add payment methods and delivery partners here
    ],
  },
];


export default Footer;
