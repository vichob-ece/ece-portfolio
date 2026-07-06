export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} Jaden Vichob</p>
        <div className="flex items-center gap-5">
          <a href="https://github.com/jvichob" target="_blank" rel="noopener noreferrer" className="footer-link text-sm">GitHub</a>
          <a href="https://linkedin.com/in/jaden-vichob" target="_blank" rel="noopener noreferrer" className="footer-link text-sm">LinkedIn</a>
          <a href="mailto:jvichob@ucsd.edu" className="footer-link text-sm">Email</a>
        </div>
      </div>
    </footer>
  );
}
