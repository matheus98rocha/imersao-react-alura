import React from 'react';
import NextLink from 'next/link';

export default function link({ Children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props}>
        {Children}
      </a>
    </NextLink>
  );
}
