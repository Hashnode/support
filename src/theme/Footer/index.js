/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import useThemeContext from '@theme/hooks/useThemeContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function FooterLink({
  to,
  href,
  label,
  prependBaseUrlToHref,
  ...props
}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true
  });
  return <Link className={styles.footer__linkItem} {...href ? {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: prependBaseUrlToHref ? normalizedHref : href
  } : {
    to: toUrl
  }} {...props}>
      {label}
    </Link>;
}

const FooterLogo = ({
  url,
  alt
}) => <img className="footer__logo" alt={alt} src={url} />;

function Footer() {
  const {
    footer
  } = useThemeConfig();
  const {
    copyright,
    links = [],
    logo = {}
  } = footer || {};
  const logoUrl = useBaseUrl(logo.src);

  if (!footer) {
    return null;
  }
  const { isDarkTheme } = useThemeContext();

  return <footer className={clsx('footer', isDarkTheme ? styles.footerDark : styles.footerNormal)}>
      <div className="container">
        {links && links.length > 0 && <div className="row footer__links">
            {links.map((linkItem, i) => <div key={i} className="col footer__col">
                {linkItem.title != null ? <h4 className={styles.footer__title}>{linkItem.title}</h4> : null}
                {linkItem.items != null && Array.isArray(linkItem.items) && linkItem.items.length > 0 ? <div className={styles.footer__items}>
                    {linkItem.items.map((item, key) => item.html ? <li key={key} className="footer__item" // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: item.html
            }} /> : <div key={item.href || item.to} className={styles.footerLink}>
                          <FooterLink {...item} />
                        </div>)}
                  </div> : null}
              </div>)}
          </div>}
        {(logo || copyright) && <div className="footer__bottom text--center">
            {logo && logo.src && <div className="margin-bottom--sm">
                {logo.href ? <a href={logo.href} target="_blank" rel="noopener noreferrer" className={styles.footerLogoLink}>
                    <FooterLogo alt={logo.alt} url={logoUrl} />
                  </a> : <FooterLogo alt={logo.alt} url={logoUrl} />}
              </div>}
            {copyright ? <div className="footer__copyright" // Developer provided the HTML, so assume it's safe.
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: copyright
        }} /> : null}
          </div>}
      </div>
    </footer>;
}

export default Footer;