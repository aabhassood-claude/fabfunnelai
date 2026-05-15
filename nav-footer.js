// Shared nav + footer injector. Each subpage drops two empty divs
// (id="nav-slot", id="footer-slot") and loads this script at the end.
// Keeps all sub-pages in sync without duplicating 200 lines of markup.

(function () {
  const LOGO_SVG = `
    <svg width="34" height="28" viewBox="0 0 128 102" fill="none">
      <path d="M127.882 4.85C127.882 6.02 127.464 7.09 126.768 7.93L104.23 34.95C104.151 35.05 104.121 35.07 104.111 35.09C103.225 36.13 101.902 36.80 100.419 36.80H44.857L20.618 8.54L23.762 4.86L24.131 4.44C26.509 1.62 30.001 0 33.683 0H123.026C125.713 0 127.882 2.17 127.882 4.86Z" fill="#171717"/>
      <path d="M49.494 98.62L47.683 100.75C47.006 101.54 46.001 102 44.957 102H8.668C5.991 102 3.812 99.83 3.812 97.15C3.812 95.98 4.230 94.91 4.917 94.07L25.235 70.39L49.484 98.61Z" fill="#C3EB42"/>
      <path d="M83.663 58.86L49.494 98.62L3.494 45.06C2.688 44.11 2.598 43.99 2.519 43.87C0.429 40.96 2.489 36.79 6.230 36.80H44.867L63.733 58.73C68.996 64.85 78.379 64.88 83.663 58.86Z" fill="#A8D632"/>
      <path d="M44.857 36.79H6.220C2.489 36.79 0.429 40.97 2.509 43.87C-0.914 39.61 -0.834 33.50 2.748 29.33L8.887 22.17L20.618 8.53L44.857 36.79Z" fill="#C3EB42"/>
      <path d="M87.902 52.15C87.902 53.32 87.484 54.40 86.787 55.23L83.782 58.74C78.350 64.89 68.967 64.86 63.713 58.74L53.882 47.30H83.036C85.723 47.30 87.892 49.47 87.892 52.16Z" fill="#C3EB42"/>
    </svg>`;

  // Detect path depth so subpage links work whether the file is in
  // brand/, brand/solutions/, or brand/use-cases/.
  const path = window.location.pathname;
  const depth = path.includes('/solutions/') || path.includes('/use-cases/') ? '../' : '';
  const HOME = depth || './';
  const SOL = (id) => depth + 'solutions/' + id + '.html';
  const UC  = (id) => depth + 'use-cases/' + id + '.html';

  const NAV = `
    <nav class="ff-nav">
      <div class="ff-nav-inner">
        <a href="${HOME}" class="ff-wordmark">
          ${LOGO_SVG}
          <span>FAB<span class="funnel">FUNNEL</span></span>
        </a>

        <div class="ff-nav-links">
          <div class="ff-nav-item">
            <span class="ff-nav-trigger">
              Solutions
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <div class="ff-mega">
              <div class="ff-mega-grid">
                <a href="${SOL('creative-generation')}" class="ff-mega-item">
                  <div class="ff-mega-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 4l14 4-14 4v8M5 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                  <h5>Creative Generation</h5>
                  <p>Static + motion ad variants from a single brief.</p>
                </a>
                <a href="${SOL('video-sage')}" class="ff-mega-item">
                  <div class="ff-mega-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M10 9l5 3-5 3V9z" fill="currentColor"/></svg></div>
                  <h5>Video Sage</h5>
                  <p>Decode winning videos. Remix them for your brand.</p>
                </a>
                <a href="${SOL('industry-insights')}" class="ff-mega-item">
                  <div class="ff-mega-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2"/><rect x="14" y="4" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2"/><rect x="3" y="15" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2"/><rect x="14" y="15" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="2"/></svg></div>
                  <h5>Industry Insights</h5>
                  <p>Save, organize, and reference winning ads.</p>
                </a>
              </div>
              <div class="ff-mega-cta-row">
                <a href="${HOME}" class="ff-mega-cta ff-mega-cta-soft">
                  <h6>Explore all<br/>solutions</h6>
                  <div class="arr"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                </a>
                <a href="#" class="ff-mega-cta ff-mega-cta-ink">
                  <div>
                    <h6>Start generating in 60 seconds</h6>
                    <div class="ff-mega-cta-sub">No credit card · plans from $29/mo</div>
                  </div>
                  <span class="pill-btn">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    Get FabFunnel
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="ff-nav-item">
            <span class="ff-nav-trigger">
              Use Cases
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
            <div class="ff-mega" style="min-width:520px;">
              <div class="ff-mega-grid">
                <a href="${UC('ecom-brands')}" class="ff-mega-item">
                  <div class="ff-mega-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-6 9 6v11a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2V9z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg></div>
                  <h5>Ecom Brands</h5>
                  <p>D2C founders and in-house teams shipping every week.</p>
                </a>
                <a href="${UC('affiliates')}" class="ff-mega-item">
                  <div class="ff-mega-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M13 3l-2 9h6l-7 9 2-9H6l7-9z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg></div>
                  <h5>Affiliates</h5>
                  <p>Pick a niche, save winners, brief in 90 seconds.</p>
                </a>
                <a href="${UC('media-buyers')}" class="ff-mega-item">
                  <div class="ff-mega-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 18V6m0 12l5-4 4 2 7-6m0 0h-4m4 0v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                  <h5>Media Buyers</h5>
                  <p>Scale spend without the creative bottleneck.</p>
                </a>
              </div>
            </div>
          </div>
          <a href="#">Login</a>
        </div>

        <div class="ff-nav-actions">
          <button class="ff-btn ff-btn-sm">Buy Now</button>
        </div>
      </div>
    </nav>`;

  const FOOTER = `
    <footer class="ff-footer">
      <div class="ff-container">
        <div class="footer-grid">
          <div>
            <div class="ff-wordmark" style="color:var(--paper);">
              ${LOGO_SVG.replace('fill="#171717"', 'fill="#FAF9F4"')}
              <span style="color:var(--paper);">FAB<span style="color:var(--lime);font-weight:500;">FUNNEL</span></span>
            </div>
            <p style="margin-top:20px;font-size:14px;color:rgba(250,249,244,0.6);max-width:280px;line-height:1.5;">The AI co-pilot for performance marketers running D2C and ecommerce.</p>
            <div class="footer-socials" style="margin-top:24px;">
              <a href="#" class="footer-social">𝕏</a>
              <a href="#" class="footer-social">in</a>
              <a href="#" class="footer-social">▶</a>
              <a href="#" class="footer-social">◐</a>
            </div>
          </div>
          <div>
            <h6>Solutions</h6>
            <ul>
              <li><a href="${SOL('creative-generation')}">Creative Generation</a></li>
              <li><a href="${SOL('video-sage')}">Video Sage</a></li>
              <li><a href="${SOL('industry-insights')}">Industry Insights</a></li>
            </ul>
          </div>
          <div>
            <h6>Use Cases</h6>
            <ul>
              <li><a href="${UC('ecom-brands')}">Ecom Brands</a></li>
              <li><a href="${UC('affiliates')}">Affiliates</a></li>
              <li><a href="${UC('media-buyers')}">Media Buyers</a></li>
              <li><a href="#">FabAgent</a></li>
            </ul>
          </div>
          <div>
            <h6>Company</h6>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h6>Legal</h6>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 FabFunnel, Inc.</span>
          <span>fabfunnel.ai → upsell to fabfunnel.com post-purchase</span>
        </div>
      </div>
    </footer>`;

  const navSlot = document.getElementById('nav-slot');
  if (navSlot) navSlot.innerHTML = NAV;
  const footerSlot = document.getElementById('footer-slot');
  if (footerSlot) footerSlot.innerHTML = FOOTER;
})();
