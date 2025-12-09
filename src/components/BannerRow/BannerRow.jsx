import css from "./BannerRow.module.css";

const BannerRow = () => {
  return (
    <div className={css.bannerWrapper}>
      <div className="container p-16">
      <h2 className="mb-6 text-center text-2xl text-secondary-1000 leading-[1.4]">Built together with our partners</h2>
        <div className={css.banners}>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
          <div className={css.bannerItem}>
            <img src="/icons/logo-emdula.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  
  );
};
export default BannerRow;
