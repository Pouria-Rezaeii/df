export default function Loading() {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <div className="loader-image-box">
          <img src="/images/logo-mobile-5.png" alt="dafter-file" className="loader-image" />
        </div>
        <div className="loader-indicator" />
      </div>
    </div>
  );
}
