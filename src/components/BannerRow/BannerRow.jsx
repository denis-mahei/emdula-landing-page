import css from "./BannerRow.module.css";

const BannerRow = () => {
  return (
    <section className={css.bannerWrapper}>
      <div className="container">
        <div className={css.banners}>
          <div className={css.bannerItem} />
          <div className={css.bannerItem} />
          <div className={css.bannerItem} />
          <div className={css.bannerItem} />
          <div className={css.bannerItem} />
          <div className={css.bannerItem} />
        </div>
      </div>
    </section>
  );
};
export default BannerRow;
