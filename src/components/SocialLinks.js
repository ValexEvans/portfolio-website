import React from 'react';
import { Container } from 'react-bootstrap';

const links = [
  { href: "https://www.linkedin.com/in/valexjpevans/", imgSrc: `${process.env.PUBLIC_URL}/assets/linkedin.png`, alt: "LinkedIn" },
  { href: "https://github.com/ValexEvans", imgSrc: `${process.env.PUBLIC_URL}/assets/github.png`, alt: "GitHub" },
  { href: "mailto:valexevans0@gmail.com", imgSrc: `${process.env.PUBLIC_URL}/assets/email.png`, alt: "Email" },
  { href: "tel:+14072807573", imgSrc: `${process.env.PUBLIC_URL}/assets/phone.png`, alt: "Phone" }
];

function SocialLinks() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <table className="table-borderless">
        <tbody>
          <tr>
            {links.map((link, index) => (
              <td key={index} className="px-3">
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <img src={link.imgSrc} alt={link.alt} width="50" height="50" className="rounded-circle shadow-sm" />
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default SocialLinks;