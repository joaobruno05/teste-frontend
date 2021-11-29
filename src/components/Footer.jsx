import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="container footer-container">
      <div className="footer">
        <div>
          <p className="copyrights">© Copyrights 2019 Stack. All Rights Reserved.</p>
        </div>
        <div className="links-footer">
          <p className="privacy-policy">Privacy Policy</p>
          <p className="terms-conditions">Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
}
